import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import reducer from './reducers/todo'
import { TodoList } from './containers/todoListContainer'

const store = createStore(reducer)

render(
  <Provider store={store}>
    <TodoList />
  </Provider>,
  document.getElementById('app')
);
