import {ipcRenderer} from 'electron'
import {curry} from 'ramda'

export const ipcSend = curry(ipcRenderer.send.bind(ipcRenderer))
