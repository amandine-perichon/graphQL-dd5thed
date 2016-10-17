import React from 'react'

import Spell from './Spell'

export default React.createClass({
  props: {
    spells: React.PropTypes.array.isRequired
  },
  render () {
    const spellComponents = this.props.spells.map((elem) => return <Spell key={elem._id} {...elem} />)
    return (
      <div className="spell-list">
        {spellComponents}
      </div>
    )
  }
})
