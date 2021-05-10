const {Text,Integer, Relationship} = require('@keystonejs/fields')
module.exports = {
  fields: {
    name: { type: Text },
    admin: { type:Relationship, ref: 'Admin.line' },
  },
}
