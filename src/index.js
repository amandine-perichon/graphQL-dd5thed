import React from 'react'
import ReactDOM from 'react-dom'
import Relay from 'react-relay'

import App from './client/spell/App'

const queries = {
  name: 'SpellsQueries',
  params: {},
  queries: {
    user: () => Relay.QL`query { user }`
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Relay.RootContainer
    Component={App}
    route={queries}
    onReadyStateChange={({error}) => { if (error) console.error(error) }}
  />
    , document.getElementById('app'))
})
