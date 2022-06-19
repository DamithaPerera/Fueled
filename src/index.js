const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const cors = require('cors');
const dbConnection = require('../config/db');

const port = 3000;


// The GraphQL schema
const typeDefs = gql`
    type Query {
        "A simple type for getting started!"
        hello: String
    }
`;

// A map of functions which return data for the schema.
const resolvers = {
    Query: {
        hello: () => 'world',
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const app = express();
app.use(cors());

dbConnection.connect()


server.applyMiddleware({ app });


app.listen(port, () => {
    console.log(`🚀 Server ready at http://localhost:3000${server.graphqlPath}`);
});

module.exports = app;

