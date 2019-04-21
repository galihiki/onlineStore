import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {

    render() { 
        return ( 
            <React.Fragment>
                <div className="counters">
                    <div className="headers">
                        <div className="selected-item-div width-30">Item</div>
                        <div className="selected-item-div width-20">price</div>
                        <div className="selected-item-div width-30">Quantity</div>
                        <div className="selected-item-div width-20">Total</div>
                    </div>
                    {this.props.counters.length === 0 && 
                        <div className="no-items-selected">No items selected</div>}
                    {this.props.counters.map(counter => 
                    <Counter 
                        counter={counter} 
                        key={counter.id}
                        onDelete={this.props.onDelete}
                        onIncrement={this.props.onIncrement}
                        onDecrement={this.props.onDecrement}>
                    </Counter>)}
                </div>
                { this.props.counters.length > 0 &&
                    <div className="reset shooping-cart">
                        <button 
                            onClick={this.props.onReset} 
                            className="btn btn-primary btn-sm m-2">
                            Reset
                        </button>
                    </div>}
                { this.props.counters.length > 0 &&
                    <div className="total shooping-cart">Total: {this.total()}</div>
                }
            </React.Fragment>    
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