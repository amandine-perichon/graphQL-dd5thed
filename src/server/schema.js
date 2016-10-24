import {
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLEnumType,
  GraphQLNonNull
} from 'graphql';

var GraphQLRelay = require('graphql-relay')

var db = require('./db')

const nodeDefinitions = GraphQLRelay.nodeDefinitions(
  (globalId) => {
    const idInfo = GraphQLRelay.fromGlobalId(globalId)
    if (idInfo.type == 'User') {
      console.log('using nodeDefinitions with user')
      return db.getUser(idInfo.id)
    } else if(idInfo == 'Spell') {
      console.log('using nodeDefinitions with spell')
      return db.findSpellById(IdInfo.id)
    }
    console.log('using nodeDefinitions other')
    return null
  },
  (obj) => {
    return obj.school ? SpellType : UserType
  }
)

const School = new GraphQLEnumType({
  name: "school",
  values: {
    abjuration: {value: "abjuration"},
    conjuration: {value: "conjuration"},
    divination: {value: "divination"},
    enchantment: {value: "enchantment"},
    evocation: {value: "evocation"},
    illusion: {value: "illusion"},
    necromancy: {value: "necromancy"},
    transmutation: {value: "transmutation"},
  }
})

const Component = new GraphQLEnumType({
  name: "component",
  values: {
    verbal: {value: "verbal"},
    somatic: {value: "somatic"},
    material: {value: "material"},
  }
})

const Class = new GraphQLEnumType({
  name: "class",
  values: {
    bard: {value: "bard"},
    cleric: {value: "cleric"},
    druid: {value: "druid"},
    paladin: {value: "paladin"},
    ranger: {value: "ranger"},
    sorcerer: {value: "sorcerer"},
    warlock: {value: "warlock"},
    wizard: {value: "wizard"}
  }
})

const Components = new GraphQLObjectType({
  name: 'Components',
  description: 'Represent the component types and materials in a spell',
  fields: () => ({
    material: {type: GraphQLBoolean},
    somatic: {type: GraphQLBoolean},
    verbal: {type: GraphQLBoolean},
    materials_needed: {type: new GraphQLList(GraphQLString)}
  })
})

// const Spell = new GraphQLObjectType({
//   name: 'Spell',
//   description: 'Represent a spell',
//   isTypeOf: function(obj) { return true}, /// ???
//   fields: () => ({
//     id: GraphQLRelay.globalIdField('Spell'),
//     name: {type: new GraphQLNonNull(GraphQLString)},
//     level: {type: new GraphQLNonNull(GraphQLString)},
//     school: {type: new GraphQLNonNull(School)},
//     casting_time: {type: new GraphQLNonNull(GraphQLString)},
//     range: {type: new GraphQLNonNull(GraphQLString)},
//     components: {type: new GraphQLNonNull(Components)},
//     duration: {type: new GraphQLNonNull(GraphQLString)},
//     description: {type: new GraphQLNonNull(GraphQLString)},
//     ritual: {type: GraphQLBoolean},
//     higher_levels: {type: GraphQLString},
//     classes: {type: new GraphQLNonNull(new GraphQLList(Class))}
//   }),
//   interfaces: [nodeDefinitions.nodeInterface]
// })

const SpellType = new GraphQLObjectType({
  name: 'Spell',
  description: 'Represent a spell',
  isTypeOf: function(obj) { return true },
  fields: () => ({
    id: GraphQLRelay.globalIdField('Spell'),
    name: {type: GraphQLString},
    level: {type: GraphQLString},
    school: {type: School},
    casting_time: {type: GraphQLString},
    range: {type: GraphQLString},
    components: {type: Components},
    duration: {type: GraphQLString},
    description: {type: GraphQLString},
    ritual: {type: GraphQLBoolean},
    higher_levels: {type: GraphQLString},
    classes: {type: new GraphQLList(Class)}
  }),
  interfaces: [nodeDefinitions.nodeInterface]
})

const UserType = new GraphQLObjectType({
  name: 'User',
  description: 'For later use, will include the user',
  isTypeOf: function(obj) { return obj.id === "fixed_viewer"},
  fields: () => ({
    id:  GraphQLRelay.globalIdField('User'),
    spells: {
      description: 'List of spells',
      type: GraphQLRelay.connectionDefinitions({
          name: 'Spell',
          nodeType: SpellType}).connectionType,
      resolve: (user, args) => {
        // db.listAllSpells().toArray().then(data => console.log(data.map(elem => elem._id)))
        return GraphQLRelay.connectionFromPromisedArray(db.listAllSpells().toArray(), args)
      }
    }
  }),
  interfaces: [nodeDefinitions.nodeInterface]
})

const Query = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    node: nodeDefinitions.nodeField,
    user: {
      type: UserType,
      resolve: () => db.getUser("fixed_viewer")
    }
  }
})

const Schema = new GraphQLSchema({
  query: Query
})

module.exports = Schema


// args: {
//   name: {
//     description: 'Name of the spell',
//     type: GraphQLString
//   },
//   class: {
//     description: 'Class that can cast the spell',
//     type: Class
//   },
//   school: {
//     description: 'School of magic',
//     type: School
//   },
//   level: {
//     description: 'Level of the spell',
//     type: GraphQLString
//   },
//   higher_levels: {
//     description: 'Indicates whether a description of the spells at higher levels is available',
//     type: GraphQLBoolean
//   },
//   duration: {
//     description: 'Text search on duration field',
//     type: GraphQLString
//   },
//   range: {
//     description: 'Text search on the range field',
//     type: GraphQLString
//   },
//   ritual: {
//     description: 'Spell can be cast as ritual',
//     type: GraphQLBoolean
//   },
//   concentration: {
//     description: 'Spell requires concentration',
//     type: GraphQLBoolean
//   },
//   casting_time: {
//     description: 'Text search on casting_time field',
//     type: GraphQLString
//   },
//   description: {
//     description: 'Text search on description field',
//     type: GraphQLString
//   },
//   component_type: {
//     description: "Type of component: verbal, somatic or material",
//     type: Component
//   }
// },
// resolve: function(root, params) {
//   if (Object.keys(params).length) {
//     return db.findSpells(params).toArray()
//   }
//   return db.listAllSpells().toArray()
//   }
// }
