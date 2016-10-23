import React from 'react'

import Spell from './Spell'

export default React.createClass({
  props: {
    spells: React.PropTypes.object.isRequired
  },
  render () {
    console.log("spells component", "props", this.props)
    const spellComponents = this.props.spells.edges.map((edge, i) => <Spell key={edge.node.id} edge={edge} />)
    return (
      <div className="spell-list">
        {spellComponents}
      </div>
    )
  }
})
