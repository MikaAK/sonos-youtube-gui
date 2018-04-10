import {ipcMain} from 'electron'

import {createIpcOn} from '../../helpers/ipc'

export const ipcOn$ = createIpcOn(ipcMain)
