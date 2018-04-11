import {curry} from 'ramda'

export const eitherProp = curry((prop1, prop2, object) => object[prop1] || object[prop2])
