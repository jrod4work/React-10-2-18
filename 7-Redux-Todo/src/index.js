import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import reducer from './reducers/todo';

const store = createStore(
  reducer,
  undefined,
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

export const todoEditTextChanged = (text) => (
    {
        type: 'TODO_EDIT_TEXT_CHANGED',
        text
    }
)

//delete a todo item
export const removeTodo = (id) => (
    {
        type: 'REMOVE_TODO',
        id
    }
)