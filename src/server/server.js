require('babel-register')({
  presets: [ 'es2015' ]
})

var express = require('express')
var graphql = require('graphql')
var expressGraphql = require('express-graphql')

var Schema = require('./schema.js').default
var db = require('./db')

var PORT = 3000

var app = express()

app.use(express.static(__dirname + './../public'))

app.use('/graphql', expressGraphql({
  schema: Schema,
  graphiql: true
}))

db.connect()
  .then(() => {
    app.listen(PORT, function () {
      console.log('Listening on port', PORT)
    })
  })
  .catch(() => console.log('Could not connect to DB'))
