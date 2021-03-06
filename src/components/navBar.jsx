import React, { Component } from 'react';
import { Link } from "react-router-dom";

class NavBar extends Component {
    state = {}
    render() { 
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark nav-style">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link to="/onlineStore" className="nav-link">Items</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/onlineStore/shoopingCart" className="nav-link nav-link-style">Shooping cart</Link>
                        <span className="total-selected-items" >{this.props.totalSelectedItems}</span>
                    </li>
                </ul>
            </nav>
        );
    }

    componentWillReceiveProps(props){
        if(this.props.totalSelectedItems !== props.totalSelectedItems){
            this.setState({totalSelectedItems: props.totalSelectedItems})
        }
    }
}
 
export default NavBar;