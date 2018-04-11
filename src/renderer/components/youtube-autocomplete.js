import React from 'react'
import Autosuggest from 'react-autosuggest'
import AutosuggestTheme from 'react-autosuggest/dist/theme'
import {setPropTypes, setDisplayName} from 'recompose'
import PropTypes from 'prop-types'
import {compose, prop} from 'ramda'

export const SpeakerProp = PropTypes.shape({
  name: PropTypes.string
})

const enhance = compose(
  setDisplayName('YoutubeAutocomplete'),
  setPropTypes({
    name: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    onSearch: PropTypes.func.isRequired,
    onClear: PropTypes.func,
    youtubeItems: PropTypes.arrayOf(PropTypes.object).isRequired
  })
)

const renderSuggestion = (config) => {
  const {thumbnails, title, description} = config

  return (<div>
    <img src={thumbnails.default.url} height={thumbnails.default.height} width={thumbnails.default.width}/>

    <div>
      <span>{title}</span>
      <span>{description}</span>
    </div>
  </div>)
}

export const YoutubeAutocomplete = enhance(({
  name = 'youtube-search',
  placeholder = 'Search for a video...',
  value = '',
  youtubeItems,
  onSearch,
  onChange,
  onClear = () => youtubeItems = []
}) => {
  const inputProps = {
    value,
    name,
    onChange,
    placeholder
  }

  return (<Autosuggest
    suggestions={youtubeItems}
    getSuggestionValue={prop('videoId')}
    onSuggestionsFetchRequested={onSearch}
    onSuggestionsClearRequested={onClear}
    renderSuggestion={renderSuggestion}
    inputProps={inputProps}
    theme={AutosuggestTheme}
  />)
})
