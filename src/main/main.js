import {mergeMap, map as rxMap, tap as rxTap} from 'rxjs/operators'
import {prop, compose, uniqBy} from 'ramda'
import {deviceList$, playYoutubeMediaOnSonosSpeaker$, addYoutubeMediaToSonosQueue$} from 'sonos-youtube/lib/sonos'

import {
  RECEIVE_SPEAKERS, REQUEST_SPEAKERS,
  SEARCH_YOUTUBE, SEARCH_YOUTUBE_RETURNED,
  PLAY_ON_SPEAKER, ADD_TO_SPEAKER_QUEUE
} from 'common/actions'

import {ipcOn$, sendMessage} from './helpers'
import {searchYoutube$} from './youtube'

const propArg = prop('arg')
const uniqByName = uniqBy(prop('name'))

const getSpeakers$ = () => deviceList$
  .pipe(rxMap(uniqByName))

/* eslint-disable no-console */
const rxLog = (msg) => rxTap(() => console.log(msg))
// const rxLogItem = (msg) => rxTap((item) => console.log(msg, item))
/* eslint-enable no-console */

const callOnArg = (func$) => compose(func$, propArg)

const playSongOnSpeaker$ = ({device, youtubeVideo}) => playYoutubeMediaOnSonosSpeaker$(device.name, youtubeVideo)
const addSongToQueue$ = ({device, youtubeVideo}) => addYoutubeMediaToSonosQueue$(device.name, youtubeVideo)

export const main = (window) => {
  const sendWindowMessage = sendMessage(window)

  ipcOn$(REQUEST_SPEAKERS)
    .pipe(
      rxLog('Requesting Speakers'),
      mergeMap(callOnArg(getSpeakers$))
    )
    .subscribe(sendWindowMessage(RECEIVE_SPEAKERS))

  ipcOn$(SEARCH_YOUTUBE)
    .pipe(
      rxLog('Searching Youtube'),
      mergeMap(callOnArg(searchYoutube$))
    )
    .subscribe(sendWindowMessage(SEARCH_YOUTUBE_RETURNED))

  ipcOn$(ADD_TO_SPEAKER_QUEUE)
    .pipe(
      rxLog('Adding to Speaker Queue'),
      mergeMap(callOnArg(addSongToQueue$))
    )
    .subscribe(() => console.log('Added to speaker queue!')) // eslint-disable-line no-console

  ipcOn$(PLAY_ON_SPEAKER)
    .pipe(
      rxLog('Getting media to play on Speakers'),
      mergeMap(callOnArg(playSongOnSpeaker$))
    )
    .subscribe(() => console.log('Playing on speakers!')) // eslint-disable-line no-console
}
