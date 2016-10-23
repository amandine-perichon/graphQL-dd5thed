import React from 'react'

export default React.createClass({
  props: {
    edge: React.PropTypes.object.isRequired
  },
  render () {
    const spell = this.props.edge.node
    return (
      <div className="spell">
        <div className="spell-name">{spell.name}</div>
        <div className="spell-type">level {spell.level} - {spell.school}</div>
        <div>Casting time: {spell.casting_time}</div>
        <div>Range: {spell.range}</div>
        <div>Duration: {spell.duration}</div>
        <div>Description: {spell.description}</div>
        <div>Ritual: {spell.ritual}</div>
        <div>Higher Levels: {spell.higher_levels}</div>
        <div>Classes: {spell.classes}</div>
        <div>Components: V: {spell.components.verbal}
                         V: {spell.components.somatic}
                         V: {spell.components.material}
                         materials: {spell.components.materials_needed}
        </div>
      </div>
    )
  }
})
