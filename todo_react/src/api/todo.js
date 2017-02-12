import fetch from 'isomorphic-fetch';

let defaults = {
  title: 'Default Title',
  description: 'Default Description',
  listId: 3
}
export const createTask = todo => {
  return new Promise( (resolve, reject) => {
    todo = JSON.stringify(todo);
    fetch('http://localhost:3000/tasks', {
      method: 'POST',
      body: todo,
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then( json => json.json() )
    .then( json => resolve(json) );
  });
}

export const updateTask = (id, todo) => {
  return new Promise( (resolve, reject) => {
    todo = JSON.stringify(todo);
    fetch('http://localhost:3000/tasks/' + id, {
      method: 'PUT',
      body: todo,
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then( json => json.json() )
    .then( json => resolve(json) );
  });
}

export const deleteTask = id => {
  fetch('http://localhost:3000/tasks/' + id, {
    method: 'DELETE'
  });
}

export const fetchAllTasks = () => {
  return new Promise( (resolve, reject) => {
    fetch('http://localhost:3000/tasks')
    .then( json => json.json() )
    .then( json => resolve(json) );
  });
}
