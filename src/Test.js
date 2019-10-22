import React, {Component} from 'react'; // we want to import the base version of React, plus the Component stuff
import './test.css';


// 'Test' is a component.
// It's going to be imported by app.js
class Test extends Component {
    // this constructor handles everything that happens to the component before being rendered
    // this is the first thing we need to write
    constructor(props){
        super(props);

        // setting a state
        this.state = {
            color: 'coral'
            // state2: true,
            // state3: ['item 1', 'item 2', 'item 3']
        }

        // this lets the constructor function be effected by other functions
        // we're binding the clicked event to the constructor, because we need to change something
        // if we weren't changing the component, we wouldn't need to bind() it.
        this.clicked = this.clicked.bind(this);
    }

    // ES5
    clicked(){
        // console.log('got a click!');
        console.log(this.state.color);    // current state of the component
    }


    // ES6 - doesn't need to be bound
    clicked = () => {
        console.log(this.state.color);
        if (this.state.color === 'coral') {
            this.setState({
                color: 'grey'
            });
        } else {
            this.setState({
                color: 'coral'
            });
        }
    }

    // this function renders the component in the DOM
    // this is the very last thing we want to write
    render(){
        return (
            // renders as class="link coral"
            // all React events need to be defined inline
            <div className={`link ${this.state.color}`} onClick={this.clicked}>
                { this.state.color }
                <p>{this.props.message}</p>
            </div>
        )
    }
}

export default Test;
