import {curry} from 'ramda'

export const callProp = curry((prop, item) => item[prop] ? item[prop]() : null)
