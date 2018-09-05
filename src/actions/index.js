const ADD_ORDER = 'ADD_ORDER';

export function addOrder(order) {
  // return action (must have type)
  console.log('addOrder', order);
  return {
    type: ADD_ORDER,
    payload: order
  }
}