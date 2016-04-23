import React from 'react';

import {AddTodoForm} from './AddTodoForm'
import {VisibleTodoList} from './VisibleTodoList'
import {Footer} from './Footer'

export const TodoApp = () => (
    <div>
        <AddTodoForm />
        <VisibleTodoList />
        <Footer />
    </div>
);
