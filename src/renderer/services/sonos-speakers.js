import {shareReplay} from 'rxjs/operators'

import {ipcArgOn$, ipcSend} from '../helpers'
import {RECEIVE_SPEAKERS, REQUEST_SPEAKERS, PLAY_ON_SPEAKER, ADD_TO_SPEAKER_QUEUE} from 'common/actions'

export const requestDeviceList = () => ipcSend(REQUEST_SPEAKERS, null)
export const deviceList$ = ipcArgOn$(RECEIVE_SPEAKERS)
  .pipe(shareReplay())

export const addToDeviceQueue = (device, youtubeVideo) => ipcSend(ADD_TO_SPEAKER_QUEUE, {device, youtubeVideo})
export const playOnDevice = (device, youtubeVideo) => ipcSend(PLAY_ON_SPEAKER, {device, youtubeVideo})

