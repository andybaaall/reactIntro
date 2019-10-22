import React, {Component} from 'react';
import './Item.css';

import Button from '../Button/Button';
import '../Button/Button.css';

class Item extends Component {
    render(){
        return(
            <div className="ListItem">
                <div className="ListText">
                    Item One
                </div>
                <Button btnText="Buy me!" btnType="greyBtn"/>
                <Button btnText="Edit" btnType="darkGreyBtn"/>
            </div>
        )
    }
}

export default Item;
