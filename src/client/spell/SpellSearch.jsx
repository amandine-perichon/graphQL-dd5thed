import React from 'react'

export default React.createClass({
  props: {
    spells: React.PropTypes.array.isRequired
  },
  render () {
    <div>
      <div>
        Search Form here
      </div>
      <Spells spells={this.props.spells} />
    </div>
  }
})
