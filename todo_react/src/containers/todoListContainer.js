import { connect } from 'react-redux';
import * as components from '../components/todoList';
import addTodo from '../actions/addTodo';
import toggleTodo from '../actions/toggleTodo';
import removeTodo from '../actions/removeTodo';
import toggleEditingMode from '../actions/toggleEditingMode';
import updateTodo from '../actions/updateTodo';
import initTodos from '../actions/initTodos';

export const TodoList = connect(
  function mapStateToProps(state) {
    return { todos: state };
  },
  function mapDispatchToProps(dispatch) {
    return {
      addTodo: text => dispatch(addTodo(text)),
      toggleTodo: id => dispatch(toggleTodo(id)),
      removeTodo: id => dispatch(removeTodo(id)),
      updateTodo: (id, text) => dispatch(updateTodo(id,text)),
      toggleEditingMode: id => dispatch(toggleEditingMode(id)),
      initTodos: todos => dispatch(initTodos(todos))
    };
  }
)(components.TodoList);
