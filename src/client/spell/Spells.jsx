import React from 'react'

import Spell from './Spell'

export default React.createClass({
  props: {
    spells: React.PropTypes.array.isRequired
  },
  render () {
    console.log("props", this.props)
    const spellComponents = this.props.spells.map((elem) => <Spell key={elem.id} {...elem} />)
    return (
      <div className="spell-list">
        {spellComponents}
      </div>
    )
  }
})
