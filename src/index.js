import React from 'react'
import ReactDOM from 'react-dom'
import Relay from 'react-relay'

import SpellsContainer from './client/spell/SpellsContainer'

const queries = {
  name: 'SpellsQueries',
  params: {},
  queries: {
    spells: () => Relay.QL`query { spells }`
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Relay.RootContainer
    Component={SpellsContainer}
    route={queries}
    onReadyStateChange={({error}) => { if (error) console.error(error) }}
  />
    , document.getElementById('app'))
})
