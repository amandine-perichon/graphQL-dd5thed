var fs = require('fs')
var path = require('path')
var graphql = require('graphql').graphql
var introspectionQuery = require('graphql/utilities').introspectionQuery
var schema = require('../server/schema')

graphql(schema, introspectionQuery).then(function(result) {
  if (result.errors) return console.error(result.errors)
  fs.writeFileSync(path.join(__dirname, '../client/schema.json'), JSON.stringify(result, null, 2))
})
