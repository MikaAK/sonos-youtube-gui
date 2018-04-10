import {when} from 'ramda'

import {isNotNil} from '../util'

export const whenNotNil = when(isNotNil)
