import Relay from 'react-relay'

import Spells from './Spells'

export default Relay.createContainer(Spells, {
  fragments: {
    spells: () => Relay.QL`
      fragment on Spell @relay(plural: true) {
        id
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
        components {
            verbal
            somatic
            material
            materials_needed
        }
      }
    `
  },
});
