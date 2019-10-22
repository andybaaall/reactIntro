import React, {Component} from 'react';
import './Form.css';
import Button from '../Button/Button';
import '../Button/Button.css';

class Form extends Component {
    render(){
        return(
            <form className="searchForm">
                <input className="searchBar"/>
                <Button btnText="Add new Item"/>
                <Button btnText="" btnType="redundant button should definitely throw an err"/> 
                <Button btnText="Find an Item" btnType="greyBtn"/>
            </form>
        )
    }
}

export default Form;
