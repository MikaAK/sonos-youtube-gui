import {curry} from 'ramda'

export const setItemProp = curry((item, prop, value) => {
  item[prop] = value

  return item
})
