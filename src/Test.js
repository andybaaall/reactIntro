import React, {Component} from 'react'; // we want to import the base version of React, plus the Component stuff
import './test.css';

class Test extends Component {
    render(){
        return (
            <div>
                <p>{this.props.message}</p>
            </div>
        )
    }
}

export default Test;
