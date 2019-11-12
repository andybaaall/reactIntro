import React, {Component} from 'react';
import './Item.css';

import Button from '../Button/Button';
import '../Button/Button.css';

class Item extends Component {
    handleDelete = () => {
        console.log('got a click on delete btn for item no. ' + this.props.itemInfo.id);
        this.props.deleteItem(this.props.itemInfo.id);
    }

    handleEdit = () => {
        console.log('got a click on edit btn for item no. ' + this.props.itemInfo.id);
        this.props.editItem(this.props.itemInfo.id);
    }

    render(){
        console.log(this.props.itemInfo);
        return(
            <div className="ListItem">
                <div className="ListText">
                    {this.props.itemInfo.text}
                </div>
                <Button btnText="Edit" btnType="greyBtn" btnClicked={this.handleEdit}/>
                <Button btnText="Delete" btnType="darkGreyBtn" btnClicked={this.handleDelete}/>
            </div>
        )
    }
}

export default Item;
