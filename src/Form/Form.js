import React, {Component} from 'react';
import './Form.css';
import Button from '../Button/Button';
import '../Button/Button.css';

class Form extends Component {
    // bound functions go inside the constructor (89d41650190401821b780f1991274143af4dbfd3, es5/6)
    constructor(props){
        super(props);

        this.changeInput = this.changeInput.bind(this);
    }

    // check out commit 89d41650190401821b780f1991274143af4dbfd3 for notes on binding ...
    // ... es5, es6, and not binding.
    submitForm = (e) => {
        e.preventDefault();
        // console.log('submit form event triggered');
        this.props.submit(e.target.value)
    }

    changeInput(e){
        // console.log(e.target.value);
        // now that we've got the event target's value, we need to set the value property
        // of our Form Component to that value

        this.props.changeInputValue(e.target.value);
        // this is the handleChangeInputValue function List.js
        // we're calling this component's property 'changeInputValue'


    }

    render(){
        // because we can't access the DOM in React, we need to define our functions inline.

            // <Button btnText="" btnType="redundant button should probably throw an err, eh?"/>
            // <Button btnText="Find an Item" btnType="greyBtn"/>
            console.log(this.props.item);
        return(
            <form className="searchForm" onSubmit={this.submitForm}>
                <input className="searchBar" value={this.props.item.value} onChange={this.changeInput}/>
                <Button btnText="Add new Item"/>
            </form>
        )
    }
}

export default Form;
