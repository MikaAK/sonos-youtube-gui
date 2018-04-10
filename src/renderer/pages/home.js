import React, {Fragment} from 'react'
import {createEventHandler, componentFromStream} from 'recompose'
import {map as rxMap, startWith} from 'rxjs/operators'
import {combineLatest} from 'rxjs/observable/combineLatest'
import {compose, head, curry} from 'ramda'

import {mergeMapIfNull} from '../../helpers/rxjs'

import {SonosSpeakerSelect, createSelectOption} from '../components'
import {deviceList$, requestDeviceList} from '../services'

const createFirstSpeakerOption = compose(createSelectOption, head)

const createHomeFragment = curry((onSpeakerChange, [speakers, currentSpeaker]) => {
  const speakerValue = currentSpeaker ? currentSpeaker : (speakers.length && createFirstSpeakerOption(speakers))

  return (<Fragment>
    <SonosSpeakerSelect onChange={onSpeakerChange} sonosSpeakers={speakers} value={speakerValue || undefined}/>
  </Fragment>)
})

export const Home = componentFromStream(() => {
  const {handler: onSpeakerChange, stream: speakerChange$} = createEventHandler()

  requestDeviceList()

  const speakers$ = deviceList$
    .pipe(startWith([]))

  const getFirstSpeaker$ = () => speakers$
    .pipe(rxMap(head))

  const speakerValue$ = speakerChange$
    .pipe(
      startWith(null),
      mergeMapIfNull(getFirstSpeaker$)
    )

  return combineLatest(speakers$, speakerValue$)
    .pipe(
      rxMap(createHomeFragment(onSpeakerChange))
    )
})
