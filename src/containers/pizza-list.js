import React, { Component } from 'react';
import { connect } from 'react-redux';

class OrderList extends Component { 

    renderList() {
        return this.props.orders.map((order) => {
            return <li key={order.name}>{order.name}</li>;
        })
    }

    render() {
        return <ul>
            {this.renderList()}
        </ul>;
    }

}

function mapStateToProps(state) {
    return {
        orders: state.orders
    }
}

export default connect(mapStateToProps)(OrderList);