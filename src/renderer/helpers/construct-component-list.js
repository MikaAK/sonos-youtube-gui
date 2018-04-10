import {curry} from 'ramda'

export const constructComponentList = curry((component, updateProps) => updateProps.reduce((acc, updates) => {
  const newComponent = new component()

  Object.assign(newComponent, updates)

  acc.appendChild(newComponent)

  return acc
}, document.createDocumentFragment()))
