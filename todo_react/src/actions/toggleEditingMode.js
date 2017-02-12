export default function toggleEditingMode(id) {
  return {
    type: 'TOGGLE_EDITING_MODE',
    payload: id
  }
}
