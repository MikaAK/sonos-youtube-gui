import './styles/global.scss'
import 'react-autosuggest/dist/theme'

import React, {Fragment} from 'react'
import {render} from 'react-dom'
import {identity} from 'ramda'
import {setObservableConfig} from 'recompose'
import {from as rxFrom} from 'rxjs/observable/from'

import {Home} from './pages'

setObservableConfig({
  fromESObservable: rxFrom,
  toESObservable: identity
})

const AppComponent = () => (<Fragment>
  <Home/>
</Fragment>)

render(<AppComponent/>, document.getElementById('app'))
