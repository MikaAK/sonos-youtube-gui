import React from 'react'
import Select from 'react-select'
import {pure, setPropTypes, setDisplayName} from 'recompose'
import PropTypes from 'prop-types'
import {head, map, applySpec, prop, identity, compose} from 'ramda'

import {whenNotNil} from 'common/helpers/fp'

export const SpeakerProp = PropTypes.shape({
  name: PropTypes.string
})

const enhance = compose(
  pure,
  setDisplayName('SonosSpeakerSelect'),
  setPropTypes({
    name: PropTypes.string,
    value: SpeakerProp,
    onChange: PropTypes.func,
    sonosSpeakers: PropTypes.arrayOf(SpeakerProp).isRequired
  })
)

export const createSelectOption = applySpec({
  label: prop('name'),
  value: identity
})

const createOptions = map(createSelectOption)
export const createFirstOption = compose(whenNotNil(createSelectOption), head)

export const SonosSpeakerSelect = enhance(({
  name = 'sonos-speaker-select',
  sonosSpeakers = [],
  value,
  onChange
}) => (
  <Select
    name={name}
    value={value}
    onChange={onChange}
    options={createOptions(sonosSpeakers)}
  />
))
