import {shareReplay} from 'rxjs/operators'

import {ipcArgOn$, ipcSend} from '../helpers'
import {RECEIVE_SPEAKERS, REQUEST_SPEAKERS} from '../../actions'

export const requestDeviceList = () => ipcSend(REQUEST_SPEAKERS, null)
export const deviceList$ = ipcArgOn$(RECEIVE_SPEAKERS)
  .pipe(shareReplay())
