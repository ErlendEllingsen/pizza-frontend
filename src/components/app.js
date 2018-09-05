import React, { Component } from 'react';

import OrderList from '../containers/pizza-list';
import AddOrder from '../containers/AddOrder';

export default class App extends Component {
  render() {
    return (
      <div>
        <AddOrder />
        <OrderList />
      </div>
    );
  }
}
