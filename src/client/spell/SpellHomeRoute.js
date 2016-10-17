import Relay from 'react-relay'

class SpellHomeRoute extends Relay.Route {
  static routeName = 'Home';
  static queries = {
    query: (Component) => Relay.QL`
      query Query {
        query { ${Component.getFragment('query')} },
      }
    `
  }
}

export default SpellHomeRoute
