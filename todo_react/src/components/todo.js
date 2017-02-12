import React from 'react';
import { updateTask } from '../api/todo';

export default function Todo(props) {
  const { todo, itemId, toggleClick, toggleEditingMode, removeClick, updateTodo} = props;
  const itemText = todo.completed ? <strike>{todo.title}</strike> : <span>{todo.title}</span>
  const editingMode = todo.editingMode;

  if(editingMode) {
    return (
      <li className="list-group-item"
          onBlur={toggleClick(itemId)}>
        <input type="text" className="form-control"
          onChange={
            e => {
              let updatedTodo = Object.assign({}, todo, {
                task: {
                  title: e.target.value,
                  description: e.target.value
                }
              })
              updateTask(itemId, updatedTodo).then( updatedTodo => updateTodo(itemId, updatedTodo) );
            }}
          onKeyDown={ e => {
            var text = e.target.value,
                enterKey = 13,
                isEnterKey = (e.which === enterKey),
                isLongEnough = text.length > 0;
            if(isEnterKey && isLongEnough) {
              updateTodo(itemId,text);
              toggleEditingMode(itemId);
            }
          }}
          defaultValue={todo.title}
          autoFocus
        />
      </li>
    );
  } else {
    return (
      <li className="list-group-item"
          onDoubleClick={toggleClick(itemId)}>
        {itemText}
        <span className="close" onClick={removeClick(itemId)}>&times;</span>
      </li>
    );
  }
}
