/**
 * All rights reserved.
 * @file: index
 * @version: 1.0.0
 * @author: Najeeb Ullah Shah
 * @date: 11/17/19
 */
import { filter } from 'lodash';

const toDos = [{title: "Do serverless", completed: false}, {title: "Do GraphQL", completed: true}];

function getTodo() {
    return toDos;
}

function getTodoByArgs(args) {
    console.log(toDos);
    return filter(toDos, args);
}

function addTodo(todo) {
    toDos.push(todo);
    return todo;
}

export {
    getTodo,
    getTodoByArgs,
    addTodo
};
