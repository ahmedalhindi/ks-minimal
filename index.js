const { Keystone } = require('@keystonejs/keystone');
const { MongooseAdapter } = require('@keystonejs/adapter-mongoose');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');

// keystone instance
const keystone = new Keystone({
  adapter: new MongooseAdapter({ mongoUri: 'mongodb://localhost:27018/ks-minimal' }),
});

const PROJECT_NAME = 'ks-ticket';

// schema and model
// Ticket
const ticketSchema = require('./lists/Ticket')
keystone.createList('Ticket',ticketSchema)
// Admin
const adminSchema = require('./lists/Admin')
keystone.createList('Admin',adminSchema)
// Line
const lineSchema = require('./lists/Line')
keystone.createList('Line',lineSchema)



// export ks and gql
module.exports = {
    keystone,
    apps: [
      new GraphQLApp(),
      new AdminUIApp({ name: PROJECT_NAME, enableDefaultRoute: true }),]
  };