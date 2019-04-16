import React, { Component } from 'react';
import '../components.css'

class Item extends Component {
    addToCartBtnText = "Add to cart"

    render() { 
        return (  
            <div className="item-container">
                <img className="item-img" src={this.props.item.imgUrl} alt=""></img>
                <div>Name: {this.props.item.name}</div>
                <div>Price: {this.props.item.price}</div>
                <button 
                    className="btn btn-primary btn-sm"
                    onClick={() => this.props.onSelectItem(this.props.item)}
                    disabled={this.props.item.selected}>
                    {this.props.item.selected == true ? "Selected" : "Add to cart"}
                </button>
            </div>
        );
    }
}
 
export default Item;