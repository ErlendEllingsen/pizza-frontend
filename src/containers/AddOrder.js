import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addOrder } from '../actions/index';
import { bindActionCreators } from 'redux';

class AddOrder extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: ''
        }

        this.setName = this.setName.bind(this);
        this.addNewOrder = this.addNewOrder.bind(this);
    }

    setName(event) {
        this.setState({
            name: event.target.value
        })
    }

    addNewOrder() {
        const name = this.state.name;
        
        this.setState({
            name: ''
        })

        this.props.addOrder({name: name});

        console.log('adding new order', this.state.name);
        
    }

    render() {
        return <div>
            <form>
                <input type="text" onChange={this.setName} value={this.state.name}></input>
                <button type="button" onClick={this.addNewOrder}>Add Order</button>
            </form>
        </div>
    }
}


function mapStateToProps(state) {
    return {
        orders: state.orders
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addOrder: addOrder }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddOrder);