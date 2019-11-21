/**
 * All rights reserved.
 * @file: schema
 * @version: 1.0.0
 * @author: Najeeb Ullah Shah
 * @date: 11/17/19
 */
const { gql } = require('apollo-server-lambda');

// Construct a schema, using GraphQL schema language
export const typeDefs = gql`
    type Todo {
        title: String!
        completed: Boolean!
    }
    
    type Query {
        getTodo: [Todo!]!
    }
    
    input TodoInput {
        title: String!
        completed: Boolean
    }
    
    type Mutation {
        createTodo(todoInput: TodoInput): Todo
    }
    
    schema {
        query: Query
        mutation: Mutation
    }
`;
