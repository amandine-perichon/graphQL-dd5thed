import React from 'react'

export default React.createClass({
  props: {
    edge: React.PropTypes.object.isRequired
  },
  render () {
    const spell = this.props.edge.node
    console.log(spell.components)
    return (
      <div className="spell">
        <div className="spell-name">{spell.name}</div>
        <div className="spell-type">level {spell.level} - {spell.school}</div>
        <div>Casting time: {spell.casting_time}</div>
        <div>Range: {spell.range}</div>
        <div>Duration: {spell.duration}</div>
        <div>Ritual: {spell.ritual}</div>
        <div>Classes: {spell.classes.map((elem) => <div>{elem}</div>)}</div>
        <div>Components:
          <div>V: {spell.components.verbal? "Yes": "No"}</div>
          <div>S: {spell.components.somatic? "Yes": "No"}</div>
          <div>M: {spell.components.material? "Yes": "No"}</div>
          {spell.components.material?
            <div>{`materials: ${spell.components.materials_needed}`}</div>: null}
        </div>
        <div>Description: {spell.description}</div>
        <div>Higher Levels: {spell.higher_levels}</div>
      </div>
    )
  }
})
