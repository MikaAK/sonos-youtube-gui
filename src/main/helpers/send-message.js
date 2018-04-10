import {curry} from 'ramda'

export const sendMessage = curry((window, action, data) => window.webContents.send(action, data))
