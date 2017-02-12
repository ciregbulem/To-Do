export default function initTodos(todos) {
  return {
    type: 'INIT_TODOS',
    payload: todos
  };
}
