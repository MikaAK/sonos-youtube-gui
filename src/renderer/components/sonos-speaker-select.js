import React from 'react'
import Select from 'react-select'
import {pure, setPropTypes} from 'recompose'
import PropTypes from 'prop-types'
import {head, map, applySpec, prop, identity, compose} from 'ramda'

import {whenNotNil} from '../../helpers/fp'

export const SpeakerProp = PropTypes.shape({
  name: PropTypes.string
})

const enhance = compose(
  pure,
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
const createFirstOption = compose(whenNotNil(createSelectOption), head)

export const SonosSpeakerSelect = enhance(({
  name = 'sonos-speaker-select',
  sonosSpeakers = [],
  value = createFirstOption(sonosSpeakers),
  onChange
}) => (
  <Select name={name}
          value={value}
          onChange={onChange}
          options={createOptions(sonosSpeakers)}
  />
))
