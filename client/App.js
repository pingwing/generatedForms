import React from 'react';
import {BrowserRouter, Route, Match} from 'react-router-dom';
import FormContainer from './FormContainer';

class App extends React.Component {
    render = () => {
        return (
            <BrowserRouter>
                    <div className="container">

                        <Route exact path="/" component={FormContainer}/>

                        {this.props.children}
                    </div>
            </BrowserRouter>
        );
    };
}

export default App;
