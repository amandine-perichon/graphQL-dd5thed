import React from 'react'
import Relay from 'react-relay'

import Spells from './Spells'


const App = React.createClass({
  props: {
    user: React.PropTypes.object.isRequired
  },
  render () {
    console.log("App component props", this.props)
    return <Spells spells={this.props.user.spells} />
  }
})

export default Relay.createContainer(App, {
  fragments: {
    user: () => Relay.QL`
      fragment on User {
        spells {
          edges {
            node {
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
          }
        }
      }
    `
  },
})
