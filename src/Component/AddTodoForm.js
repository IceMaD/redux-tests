import React from 'react';
import {connect} from 'react-redux';

import {addTodo} from '../actions';

let AddTodoFormToConnect = ({dispatch}) => {
    let input;

    return (
        <form onSubmit={(event) => {
            event.preventDefault();

            if (!input.value) {
                return;
            }

            dispatch(addTodo(input.value));

            input.value = '';
        }}>
            <input type="text" ref={node => { input = node }}/>
            <button type="submit"> Add Todo </button>
        </form>
    )
};

export const AddTodoForm = connect()(AddTodoFormToConnect);
