export default function updateTodo(id, todo) {
  return {
    type: 'UPDATE_TODO',
    payload: todo
  }
}
