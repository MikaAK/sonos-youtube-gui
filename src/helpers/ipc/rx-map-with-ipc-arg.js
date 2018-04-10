import {prop, compose} from 'ramda'
import {map as rxMap} from 'rxjs/operators'

export const rxMapWithIpcArg = (fn) => rxMap(compose(fn, prop('arg')))
