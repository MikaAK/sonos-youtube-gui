import {ipcRenderer} from 'electron'
import {createIpcOn} from '../../helpers/ipc'

export const ipcOn$ = createIpcOn(ipcRenderer)
