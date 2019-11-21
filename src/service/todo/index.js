/**
 * All rights reserved.
 * @file: index
 * @version: 1.0.0
 * @author: Najeeb Ullah Shah
 * @date: 11/17/19
 */
let toDos = [{title: "Do serverless", completed: false}];

function getTodo() {
    return toDos;
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
    addTodo
};
