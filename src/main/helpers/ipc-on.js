import {ipcMain} from 'electron'

import {createIpcOn} from 'common/helpers/ipc'

export const ipcOn$ = createIpcOn(ipcMain)
