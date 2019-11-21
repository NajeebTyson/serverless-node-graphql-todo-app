const { ApolloServer } = require('apollo-server-lambda');
import lambdaPlayground from 'graphql-playground-middleware-lambda';

import { typeDefs } from './src/graphql/schema';
import { resolvers } from './src/graphql/resolver';

const server = new ApolloServer({
    typeDefs,
    resolvers,

    // By default, the GraphQL Playground interface and GraphQL introspection
    // is disabled in "production" (i.e. when `process.env.NODE_ENV` is `production`).
    //
    // If you'd like to have GraphQL Playground and introspection enabled in production,
    // the `playground` and `introspection` options must be set explicitly to `true`.
    playground: true,
    introspection: true
});

exports.handler = server.createHandler({
    cors: {
        origin: true,
        credentials: true,
    },
});

exports.playgroundHandler = lambdaPlayground({
    endpoint: '/graphql',
});
