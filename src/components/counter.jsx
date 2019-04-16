import React, { Component } from 'react';

class Counter extends Component {

    render() { 
        return (
        <div>
            <div className="selected-item-div width-20">
                <img className="counter-img" src={this.props.counter.item.imgUrl} alt=""></img>
            </div>
            <div className="selected-item-div width-15">
                {this.props.counter.item.price}
            </div>
            <div className="selected-item-div width-20">
                <button 
                    onClick={() => this.props.onDecrement(this.props.counter)}
                    className="btn btn-secondary btn-sm m-2"
                    disabled={this.props.counter.value === 1}>
                    -
                </button>
                <span className={this.getBadgeClasses() }>{this.formatValue()}</span>
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
            <div className="selected-item-div width-15">
                {this.props.counter.value * this.props.counter.item.price}
            </div>
        </div>
        )
    };

    formatValue(){
        const {value} = this.props.counter;
        return value === 0? 'Zero' : value;
    }

    getBadgeClasses(){
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary"; 
        return classes;
    }
}
 
export default Counter;