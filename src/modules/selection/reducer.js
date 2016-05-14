export default function selection(state = {}, action) {
  switch (action.type) {
  case 'CHANGE_SELECT':
    return action.location;
  case 'DE_SELECT':
    return {}
  default:
    return state
  }
}
