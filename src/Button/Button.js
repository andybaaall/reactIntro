import React, {Component} from 'react';
import './Button.css';

class Button extends Component {
    clickButton = (e) => {
        // console.log('got a click on a btn');
        if(this.props.btnClicked){
            // if this button has a property of 'btnClicked', do some stuff.
            // not every button will have this property.
            // if the button has that property, it'll be called by this function
            this.props.btnClicked();
        }
    }

    render(){
        return(
            <button className={this.props.btnType} onClick={this.clickButton}>
            {
            // the same onClick is being called every time we click edit or delete}
            // i.e. every time we click a button which has a property 'btnClicked'}
            }
                {this.props.btnText}
            </button>
        )
    }
}

export default Button;
