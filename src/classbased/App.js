import React, {Component} from 'react';
import Greeting from './Greeting';
import Header from './Header';
class App1 extends Component {
    render() {
        return (
            <div>
                <Header username="Maccpr7"/>
                <Greeting/>
            </div>

        );
    }
}
export default App1;