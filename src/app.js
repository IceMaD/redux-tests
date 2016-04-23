// import {createStore, combineReducers, compose} from 'redux';
// import ReactDom from 'react-dom';
// import React from 'react';
// import {Provider} from 'react-redux';
// import devTools from 'remote-redux-devtools';
//
// import {todos, visibilityFilter} from './reducers';
// import {TodoApp} from './Component/TodoApp';
//
// const store = createStore(
//     combineReducers({
//         todos,
//         visibilityFilter
//     }),
//     undefined,
//     compose(
//         devTools()
//     )
// );
//
// ReactDom.render(
//     <Provider store={store}>
//         <TodoApp />
//     </Provider>,
//     document.getElementById('root')
// );

var functionOfTheDeath = (param1, param2) => {
    console.log(param1, param2);
};

var functionOfLife = ({param1 = "budbudu", param2}, param3 = "defaultquej'aiapprisaujourd'hui") => {
    console.log(param1, param2)
};

var objectThing = {
    param2: 'BOUDOUUUUUUUUUuuUUUuuUUuuuUUuuUUuuh'
}

functionOfTheDeath('kikou', 'budu');

functionOfLife(objectThing);
