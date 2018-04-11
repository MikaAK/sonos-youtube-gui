import React from 'react'
import Autosuggest from 'react-autosuggest'
import {setPropTypes, setDisplayName} from 'recompose'
import PropTypes from 'prop-types'
import {compose, head, map, applySpec, prop, identity, compose} from 'ramda'

export const SpeakerProp = PropTypes.shape({
  name: PropTypes.string
})

const enhance = compose(
  setDisplayName('SonosSpeakerQueue'),
  setPropTypes({
    name: PropTypes.string,
    value: SpeakerProp,
    onChange: PropTypes.func,
    sonosSpeakers: PropTypes.arrayOf(SpeakerProp).isRequired
  })
)

export const SonosSpeakerQueue = enhance(({
  name = 'sonos-speaker-queue',
  speakers = [],
  value,
  onChange
}) => (
  <Autosuggest
    name={name}
    value={value}
    onChange={onChange}
    options={createOptions(sonosSpeakers)}
  />
))
