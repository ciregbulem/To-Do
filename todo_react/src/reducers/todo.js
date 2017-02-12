import { fetchAllTasks } from '../api/todo';

 // default to empty array if no array is passed in
let init = [];
let tasksPromise = fetchAllTasks().then( tasks => {
  init = tasks;
});

export default function(todos = init, action) {
  switch (action.type) {
    case 'ADD_TODO':
        todos.push(action.payload);
        return [...todos];
    case 'TOGGLE_TODO':
      var newTodos = todos.map(item => {
        if(item.id === action.payload) {
          item.completed = !item.completed;
          return item;
        } else {
          return item;
        }
      });

      return newTodos;
    case 'REMOVE_TODO':
      var newTodos = todos;
      todos.some((item,index) => {
        if(item.id === action.payload) {
          todos.splice(index, 1);
          newTodos = [...todos];
          return true;
        }
      });
      return newTodos;
    case 'TOGGLE_EDITING_MODE':
      return todos.map( item => {
        if(item.id === action.payload) {
          item.editingMode = !item.editingMode;
        } else {
          item.editingMode = false;
        }
        return item;
      });

    case 'UPDATE_TODO':
      todos.some((item, index) => {
        if(item.id === action.payload.id) {
          todos[index] = Object.assign({}, item, action.payload);
          return true;
        }
      });
      return [...todos];

    case 'INIT_TODOS':
      return [...action.payload];
    default:
      return todos;
  }
}
