import React, { Component } from React;

export default class OrderList extends Component { 

    renderList() {
        return this.props.orders.map((order) => {
            return <li key={order.id}>{order.name}</li>;
        })
    }

    render() {
        return <ul>
            {this.renderList()}
        </ul>;
    }

}