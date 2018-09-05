// const ADD_ORDER = 'ADD_ORDER';

export function addOrder(order) {
  // return action (must have type)
  return {
    type: ADD_ORDER,
    order
  }
}