const { Text, Password, Relationship } = require('@keystonejs/fields');

module.exports = {
  fields: {
    username: {
      type: Text,
      isRequired: true,
    },
    password: {
      type: Password,
      isRequired: true,
    },
    line:{
        type: Relationship,
        ref: 'Line.admin'
    }
  },
};