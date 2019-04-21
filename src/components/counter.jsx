import React, { Component } from 'react';

class Counter extends Component {

    render() { 
        return (
        <div className="counter">
            <div className="selected-item-div width-30">
                <img 
                    className="counter-img" 
                    src={process.env.PUBLIC_URL + this.props.counter.item.imgUrl} 
                    alt="">
                </img>
            </div>
            <div className="selected-item-div width-20">
                {this.props.counter.item.price}
            </div>
            <div className="selected-item-div width-30">
                <button 
                    onClick={() => this.props.onDecrement(this.props.counter)}
                    className="btn btn-secondary btn-sm m-2"
                    disabled={this.props.counter.value === 1}>
                    -
                </button>
                <span className="badge m-2">{this.formatValue()}</span>
                <button 
                    onClick={() => this.props.onIncrement(this.props.counter)} 
                    className="btn btn-secondary btn-sm m-2">
                    +
                </button>
                <button 
                    onClick={() => this.props.onDelete(this.props.counter)} 
                    className="btn btn-danger btn-sm m-2">
                    delete
                </button>
            </div>
            <div className="selected-item-div width-20">
                {this.props.counter.value * this.props.counter.item.price}
            </div>
        </div>
        )
    };

    formatValue(){
        const {value} = this.props.counter;
        return value === 0? 'Zero' : value;
    }
}
 
export default Counter;