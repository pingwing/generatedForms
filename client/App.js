import React from 'react';
import {BrowserRouter, Route, Match} from 'react-router-dom';
import Form from './Form';

class App extends React.Component {
    render = () => {
        return (
            <BrowserRouter>
                    <div className="container">

                        <Route exact path="/" component={Form}/>

                        {this.props.children}
                    </div>
            </BrowserRouter>
        );
    };
}

export default App;
