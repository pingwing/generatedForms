import React from 'react';
import {BrowserRouter, Route, Match} from 'react-router-dom';
import FormWithSteps from './FormWithSteps'


class App extends React.Component {
    render = () => {
        return (
            <BrowserRouter>
                    <div className="container">

                        <Route exact path="/" component={FormWithSteps}/>

                        {this.props.children}
                    </div>
            </BrowserRouter>
        );
    };
}

export default App;
