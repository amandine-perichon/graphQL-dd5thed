import React from 'react'
import ReactDOM from 'react-dom'
import Relay from 'react-relay'

import SpellSearchContainer from './client/spell/SpellSearchContainer'
import SpellHomeRoute from './client/spell/SpellHomeRoute'


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Relay.RootContainer
    Component={SpellSearchContainer}
    route={new SpellHomeRoute()}
  />
    , document.getElementById('app'))
})
