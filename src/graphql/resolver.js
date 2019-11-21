/**
 * All rights reserved.
 * @file: resolver
 * @version: 1.0.0
 * @author: Najeeb Ullah Shah
 * @date: 11/17/19
 */
const todo = require('../service/todo/index');

export const resolvers = {
    Query: {
        getTodo: todo.getTodo,
    },
    Mutation: {
        createTodo: todo.addTodo
    }
};
