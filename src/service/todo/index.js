/**
 * All rights reserved.
 * @file: index
 * @version: 1.0.0
 * @author: Najeeb Ullah Shah
 * @date: 11/17/19
 */
import { filter } from 'lodash';

let toDos = [{title: "Do serverless", completed: false}, {title: "Do serverless 2", completed: true}];

function getTodo() {
    return toDos;
}

function getTodoByArgs(args) {
    return filter(toDos, args);
}

function addTodo(args) {
    console.log(args);
    let todo = 1;
    console.log('New todo: ', todo);
    console.log('Todo(s): ', toDos);
    toDos.push(todo);
    console.log('after: ', toDos);
    return todo;
}

export {
    getTodo,
    getTodoByArgs,
    addTodo
};
