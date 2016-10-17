import Relay from 'react-relay'

import SpellSearch from './SpellSearch'

export default Relay.createContainer(SpellSearch, {
  fragments: {
    spell: () => Relay.QL`
      fragment on Spell {
        name
        level
        school
        casting_time
        range
        duration
        description
        ritual
        higher_levels
        classes
        components
    `
  }
})
