import React, {Component} from 'react';

import './List.css';

import Form from '../Form/Form';
import Item from '../Item/Item';

class List extends Component {
    render(){
        return(
            <div className="ListContainer">
                <h1>shopping list</h1>
                <Form />
                <div className="List">
                    <Item />
                </div>
            </div>
        )
    }
}

export default List;
