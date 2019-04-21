import React, { Component } from 'react';
import NavBar from './navBar'
import Counters from './counters';
import Items from './items';
//import Home from './home';
import { BrowserRouter as Router, Route} from "react-router-dom";

class App extends Component {
    CounterId = 0;
    key = "32bc3f508cccff3481d3178079742f6c";
    secret = "2eeb437f8c0457e3";
    state = {         
        counters: [], 
        items: [],
        totalSelectedItems: 0
    }

    render() { 
        return ( 
            <div className="app-container-style">
                <Router>
                    <NavBar totalSelectedItems={this.state.totalSelectedItems}/>
                    <Route exact path="/" active render={props => 
                        <Items 
                            items={this.state.items}
                            onSelectItem={this.handleSelectItem}/>}/>
                    <Route path="/shoopingCart" render={props => 
                        <Counters 
                            counters={this.state.counters}
                            onIncrement={this.handleIncrement}
                            onDecrement={this.handleDecrement}
                            onDelete={this.handleDelete}
                            onReset={this.handleReset} />}/>
                    <main className="container">
                    </main>
                </Router>
            </div>
        );
    }

    componentDidMount(){
        let items = require('../items.json');
        this.setState(items);
    }
    

    handleSelectItem = (item) => {
        let updatedItem = this.updateItemSelectedProp(item, "selected");
        this.addToCart(updatedItem);
    }

    addToCart = (item) => {
        const counters = [...this.state.counters];
        let newCounter = {id: this.CounterId, value: 1, item: item}
        this.CounterId++;
        this.changeTotalSelectedItems("increment");
        counters.push(newCounter);
        this.setState({counters});
    }

    updateItemSelectedProp = (item, action) => {
        const items = [...this.state.items];
        let index = items.indexOf(item);
        items[index] = {...items[index]};
        items[index].selected = (action === "selected") ? true : false;
        this.setState({items});
        return items[index];
    }

    handleDecrement = (counter) => {
        if(counter.value > 1){
            this.changeValue("decrement", counter);
        }
    }

    handleIncrement = (counter) => {
        this.changeValue("increment", counter);
    }

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 1;
            return c;
        });
        this.setState({counters});
    }

    handleDelete = counter => {
        this.updateItemSelectedProp(counter.item, "delete");
        const counters = this.state.counters.filter(c => c.id !== counter.id);
        this.changeTotalSelectedItems("decrement");
        this.setState({counters});
    }

    changeValue = (action, counter) => {
        const counters = [...this.state.counters];
        let index = counters.indexOf(counter);
        counters[index] = {...counters[index]};
        (action === "increment")? counters[index].value++ : counters[index].value--;
        this.setState({ counters }); 
    }

    changeTotalSelectedItems(action){
        let total = this.state.totalSelectedItems;
        let newTotal = (action === "increment")? total+1 : total-1;
        this.setState({totalSelectedItems: newTotal});
    }
}
 
export default App;