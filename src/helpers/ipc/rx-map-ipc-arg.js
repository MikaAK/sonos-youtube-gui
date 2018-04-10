import {prop} from 'ramda'
import {map as rxMap} from 'rxjs/operators'

export const rxMapIpcArg = rxMap(prop('arg'))
