import {tap, toString} from 'ramda'
import {tap as rxTap} from 'rxjs/operators'

const debugMessage = (msg) => (item) => {
  const log = msg ? [msg] : []

  if (item && typeof item.inspect === 'function')
    log.push(item.inspect())
  else if (typeof item === 'object')
    log.push(item)
  else
    log.push(toString(item))

  console.log(...log) // eslint-disable-line no-console
}

export const debug = tap(debugMessage())
export const debugMsg = (msg) => tap((item) => debugMessage(msg)(item))
export const rxDebugMsg = (msg) => rxTap(debugMsg(msg))
