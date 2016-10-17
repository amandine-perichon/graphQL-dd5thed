import React from 'react'

export default React.createClass({
  props: {
    _id: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    level: React.PropTypes.string.isRequired,
    school: React.PropTypes.string.isRequired,
    casting_time: React.PropTypes.string.isRequired,
    range: React.PropTypes.string.isRequired,
    duration: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
    ritual: React.PropTypes.boolean.isRequired
    higher_levels: React.PropTypes.string.isRequired,
    classes: React.PropTypes.array.isRequired,
    components: React.PropTypes.object.isRequired
  },
  render: {
    return (
      <div className="spell">
        <div className="spell-name">{this.props.name}</div>
        <div className="spell-type">level {this.props.level} - {this.props.school}</div>
        <div>Casting time: {this.props.casting_time}</div>
        <div>Range: {this.props.range}</div>
        <div>Duration: {this.props.duration}</div>
        <div>Description: {this.props.description}</div>
        <div>Ritual: {this.props.ritual}</div>
        <div>Higher Levels: {this.props.higher_levels}</div>
        <div>Classes: {this.props.classes}</div>
        <div>Components: V: {this.props.components.verbal}
                         V: {this.props.components.somatic}
                         V: {this.props.components.material}
                         materials: {this.props.components.materials_needed}
        </div>
      </div>
    )
  }
})
