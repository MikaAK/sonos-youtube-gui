import {identity, compose} from 'ramda'

export const constructTemplateList = (template, transfomer = identity) => (locals) => {
  return locals ? locals.map(compose(template, transfomer)).join('\n') : ''
}
