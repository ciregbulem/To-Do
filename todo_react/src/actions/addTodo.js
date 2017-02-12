const uid = () => Math.random().toString(34).slice(2);

export default function addTodo(todo) {
  return {
    type: 'ADD_TODO',
    payload: todo
  };
}
