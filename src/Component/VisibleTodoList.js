import React from 'react';
import {connect} from 'react-redux';

import {toggleTodo} from '../actions';
import {TodoList} from './TodoList';

const getVisibileTodos = (todos, filter) => {
    switch (filter) {
        case "SHOW_ALL":
            return todos;
        case "SHOW_ACTIVE":
            return todos.filter(todo => !todo.completed);
        case "SHOW_COMPLETED":
            return todos.filter(todo => todo.completed);
    }
};

export const VisibleTodoList = connect(
    (state) => {
        return {
            todos: getVisibileTodos(state.todos, state.visibilityFilter)
        }
    },
    (dispatch) => {
        return {
            onTodoClick: (id) => {
                dispatch(toggleTodo(id));
            }
        }
    }
)(TodoList);
