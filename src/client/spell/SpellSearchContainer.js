import Relay from 'react-relay'

import SpellSearch from './SpellSearch'

export default Relay.createContainer(TeaStore, {
  fragments: {
    query: () => Relay.QL`
      fragment on Query {
        spells { ${Spell.getFragment('spell')} },
      }
    `,
  },
})
