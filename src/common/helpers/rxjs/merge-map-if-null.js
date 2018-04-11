import {mergeMap} from 'rxjs/operators'
import {of as rxOf} from 'rxjs/observable/of'
import {isNil, ifElse} from 'ramda'

export const mergeMapIfNull = (fnc) => mergeMap(ifElse(isNil, rxOf, fnc))
