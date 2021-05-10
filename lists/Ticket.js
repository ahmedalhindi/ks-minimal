const {Text,Integer, Relationship} = require('@keystonejs/fields')
module.exports = {
  fields: {
    number: { type: Integer },
    time: { 
        type: Text,
        defaultValue: new Date().toISOString('YYYY-MM-DD').substring(0, 10)
     },
     line:{
         type: Relationship,
         ref: 'Line'
     }
  },
}
