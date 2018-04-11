import React, {Fragment} from 'react'
import {createEventHandler, componentFromStream} from 'recompose'
import {Subject} from 'rxjs/Subject'
import {tap as rxTap, map as rxMap, startWith, debounceTime} from 'rxjs/operators'
import {merge as rxMerge} from 'rxjs/observable/merge'
import {combineLatest} from 'rxjs/observable/combineLatest'
import {prop, curry, pipe, nthArg} from 'ramda'

import {YoutubeAutocomplete, SonosSpeakerSelect, createFirstOption} from '../components'

import {
  deviceList$, requestDeviceList, youtubeResults$,
  searchYoutube, addToDeviceQueue, playOnDevice
} from '../services'

const createHomeFragment = curry((
  onSpeakerChange, onYoutubeChange, onYoutubeSearch,
  [speakers, currentSpeaker, youtubeSearchResults, youtubeValue]
) => {
  const onYoutubeChanged = pipe(
    nthArg(1),
    prop('newValue'),
    onYoutubeChange
  )

  const onAddToQueue = () => addToDeviceQueue(currentSpeaker.value, youtubeValue)
  const onPlay = () => playOnDevice(currentSpeaker.value, youtubeValue)

  return (<Fragment>
    <SonosSpeakerSelect
      onChange={onSpeakerChange}
      sonosSpeakers={speakers}
      value={currentSpeaker || undefined}
    />

    <YoutubeAutocomplete
      onSearch={onYoutubeSearch}
      onChange={onYoutubeChanged}
      youtubeItems={youtubeSearchResults}
      value={youtubeValue}
    />

    <button type='button' onClick={onAddToQueue}>
      Add to queue
    </button>

    <button type='button' onClick={onPlay}>
      Play
    </button>
  </Fragment>)
})

export const Home = componentFromStream(() => {
  const {handler: onSpeakerChange, stream: speakerChange$} = createEventHandler()
  const {handler: onYoutubeChange, stream: youtubeValueChange$} = createEventHandler()

  requestDeviceList()

  const speakers$ = deviceList$.pipe(startWith([]))

  const getFirstSpeaker$ = () => speakers$
    .pipe(rxMap(createFirstOption))

  const speakerValue$ = rxMerge(speakerChange$, getFirstSpeaker$)
    .pipe(startWith(null))

  const youtubeSearchResults$ = youtubeResults$.pipe(startWith([]))
  const youtubeValue$ = youtubeValueChange$.pipe(startWith(''))

  const searchValue$ = new Subject()

  const onYoutubeSearch = (value) => searchValue$.next(value)

  const searchYoutube$ = searchValue$
    .asObservable()
    .pipe(
      debounceTime(375),
      rxMap(prop('value')),
      rxTap(searchYoutube),
      startWith('')
    )

  return combineLatest(
    speakers$,
    speakerValue$,
    youtubeSearchResults$,
    youtubeValue$,
    searchYoutube$
  )
    .pipe(rxMap(
      createHomeFragment(onSpeakerChange, onYoutubeChange, onYoutubeSearch)
    ))
})
