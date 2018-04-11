import {createIpcArgOn} from 'common/helpers/ipc'

import {ipcOn$} from './ipc-on'

export const ipcArgOn$ = createIpcArgOn(ipcOn$)
