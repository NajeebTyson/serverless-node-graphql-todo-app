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
        getTodoByStatus(_, args) {
            return todo.getTodoByArgs(args);
        }
    },
    Mutation: {
        createTodo(_, args) {
            const todoObject = {
                title: args.todoInput.title,
                completed: args.toString().completed
            };
            return todo.addTodo(todoObject);
        }
    }
};
