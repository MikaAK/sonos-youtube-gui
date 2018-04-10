import {mergeMap, map as rxMap, tap as rxTap} from 'rxjs/operators'
import {prop, compose, uniqBy} from 'ramda'
import {deviceList$} from 'sonos-youtube/helpers/sonos'

import {RECEIVE_SPEAKERS, REQUEST_SPEAKERS} from '../actions'

import {ipcOn$, sendMessage} from './helpers'

const propArg = prop('arg')
const uniqByName = uniqBy(prop('name'))

const getSpeakers$ = () => deviceList$
  .pipe(rxMap(uniqByName))

export const main = (window) => {
  const sendWindowMessage = sendMessage(window)

  ipcOn$(REQUEST_SPEAKERS)
    .pipe(
      rxTap(() => console.debug('Requesting Speakers')),
      mergeMap(compose(getSpeakers$, propArg))
    )
    .subscribe(sendWindowMessage(RECEIVE_SPEAKERS))
}
