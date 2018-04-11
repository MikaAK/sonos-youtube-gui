import {is, complement, isNil} from 'ramda'

export const isDate = is(Date)
export const isString = is(String)
export const isNotNil = complement(isNil)
