import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {

    render() { 
        return ( 
            <div>
                <div className="headers">
                    <div className="selected-item-div width-20">Item</div>
                    <div className="selected-item-div width-15">price</div>
                    <div className="selected-item-div width-20">Quantity</div>
                    <div className="selected-item-div width-15">Total</div>
                </div>
                {this.props.counters.map(counter => 
                <Counter 
                    counter={counter} 
                    key={counter.id}
                    onDelete={this.props.onDelete}
                    onIncrement={this.props.onIncrement}
                    onDecrement={this.props.onDecrement}>
                </Counter>)}
                {this.props.counters.length > 0 && 
                <button 
                    onClick={this.props.onReset} 
                    className="btn btn-primary btn-sm m-2">
                    Reset
                </button>}
                {this.props.counters.length > 0  && <div>Total: {this.total()}</div>}
            </div>
        );
    }

    total = () => {
        let total = 0;
        this.props.counters.forEach(counter => {
            total += counter.item.price * counter.value;
        });
        return total;
    }
}
 
export default Counters;