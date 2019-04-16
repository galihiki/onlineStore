import React, { Component } from 'react';
import Item from './item';

class Items extends Component {
    state = {  }
    render() { 
        return (
            <div>
                {this.props.items.map(i => 
                    <Item 
                        item={i} 
                        key={i.id}
                        onSelectItem={this.props.onSelectItem}/>)}
            </div>
        );
    }
}
 
export default Items;