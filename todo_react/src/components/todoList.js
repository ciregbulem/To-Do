import React from 'react';
import Todo from './todo';
import { createTask, deleteTask, fetchAllTasks } from '../api/todo';

export function TodoList(props) {
  const { todos, addTodo, toggleTodo, removeTodo, updateTodo, toggleEditingMode, initTodos } = props;

  fetchAllTasks().then( todos => initTodos(todos));

  const onSubmit = (event) => {
    const input = event.target,
          text = input.value,
          enterKey = 13,
          isEnterKey = (event.which === enterKey),
          isLongEnough = text.length > 0;
    if(isEnterKey && isLongEnough) {
      input.value = '';

      var todo = {
        task: {
          title: text,
          description: text,
          completed: false,
          list_id: 3
        }
      }

      let promise = createTask(todo);
      promise.then( todo => {
        todo = Object.assign({}, todo, { editingMode: false });
        addTodo(todo);
      });
    }
  };

  const toggleClick = id => event => toggleEditingMode(id);
  const removeClick = id => event => {
    deleteTask(id);
    removeTodo(id);
  };
  const todoItems = todos.map(t => {
    return <Todo key={t.id} todo={t} removeClick={removeClick} toggleClick={toggleClick} toggleEditingMode={toggleEditingMode} updateTodo={updateTodo} itemId={t.id} />
  });
  return (
    <div className="panel panel-default">
      <div className="panel-body">
        <input className="form-control"
               type="text"
               placeholder="Watcha wanna do?"
               onKeyDown={onSubmit} />
      </div>
      <ul className="list-group">
        { todoItems }
      </ul>
    </div>
  );
}
