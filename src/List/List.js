import React, {Component} from 'react';

import './List.css';

import Form from '../Form/Form';
import Item from '../Item/Item';



class List extends Component {
    // Components consist of a constructor() ...
    constructor(props){
        super(props);   // try not to think about this too much. We just need one.

        this.state = {
            allItems: [{
                id: 1,
                text: 'item one'
            },
            {
                id: 2,
                text: 'item two'
            },
            {
                id: 3,
                text: 'item three'
            }
        ], currentItem: {
            id: null,
            value: ''
        }

    }
}

handleChangeInputValue = (text) => {
    // console.log('this input value will come from Form.js');
    let {currentItem} = this.state;
    // remember 'let {km} = car;', which outputs // km = 178000
    // ... or 'let {manufacturer} = car;', which outputs // manufacturer = 'honda'
    // basically this creates a let called currentItem, whose value is init as ''

    currentItem.value = text;
    this.setState({
        currentItem: currentItem
    })
}

handleSubmitForm = (text) => {
    console.log('form submitted!');

    let {allItems, currentItem} = this.state;

    if (currentItem.id === null) {
        // we're creating a new item
        const newItem = {
            id: allItems.length + 1,
            text: currentItem.value
        }

        allItems.push(newItem);
    } else {
        // we're editing an item
        for (let i = 0; i < allItems.length; i++) {         // which item are we working with?
            if (allItems[i].id === currentItem.id) {        // do the IDs match?
                allItems[i].text = currentItem.value;       // set the item's text state to the currentItem's value state.
                break;
            }
        }
    }

    this.setState({
            currentItem: {
                id: null,
                value: ''
            },
            allItems: allItems
    });
}

handleDelete = (idOfItem) => {
    // console.log('need to deleted item ' + idOfItem);
    const {allItems} = this.state;
    for (let i = 0; i < allItems.length; i++) {
        if(allItems[i].id === idOfItem) {
            allItems.splice(i, 1);
            // splice (index number, number of items including the index number to remove sequentially)
            break;
        }
    }

    for (let i = 0; i < allItems.length; i++) {
        allItems[i].id = i + 1;
        // we're resetting the ids of everything in the allItems list, with a new count.
    }
    console.log(allItems);

    this.setState({
        allItems : allItems
    });
}

handleEdit = (idOfItem) => {
    const { allItems } = this.state;
    for (let i = 0; i < allItems.length; i++) {
        if (allItems[i].id === idOfItem) {
            this.setState({
                currentItem: {
                    id: idOfItem,
                    value: allItems[i].text
                }
            });
        }
    }
}


// ... and a render()
render(){
    // if we ever need to do any vanilla JS stuff, like a console.log(),
    // we need to do it before the return()
    console.log(this.state.allItems);   // this fires every time there's a state change - which is pretty frequently!
                                        // state changes cause components to update; try putting a console.log() in the     constructor

    return(
        <div className="ListContainer">
        <h1>shopping list</h1>
        <Form
        item = {this.state.currentItem}
        changeInputValue = {this.handleChangeInputValue}
        // so the form has a property, which is a function, which is ...
        // ... handleChangeInputValue()
        submit = {this.handleSubmitForm}
        // so the form has yet another property, which is a function, which is ...
        // ... handleSubmitForm()
        />
        <div className="List">
        {   // curly brackets indicate to react that we're going to be writing logic
            // each iteration of the loop will be known as singleItem
            this.state.allItems.map(singleItem => {
                // return <Item/> - this gets us 3 x Item One
                return <Item
                key = {singleItem.id}
                itemInfo = {singleItem}
                deleteItem = {this.handleDelete}
                editItem = {this.handleEdit}
                // so: each object in the array allItems (singleItem) has a props object.
                // each props object has an itemInfo property/value pair.
                // each itemInfo object has a text property/value pair.
                />
            })         // react maps require every item to have a key, so it knows which iteration of the loop it's on
        }
        </div>
        </div>
    )
}
}

export default List;
