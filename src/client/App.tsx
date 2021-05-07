import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import { NotFound, Public, Private } from './Pages/';
import { Header } from './Components';

const App : React.FunctionComponent = () : React.ReactElement =>
{
    return (
        <div>
            <Header/>
            
            <Router>
                <Switch>
                    <Route exact path={`/${ process.env.SERVICE_NAME }/`} component={ Public } />
                    <Route exact path={`/${ process.env.SERVICE_NAME }/private`} component={ Private } />
                    <Route path={`/${ process.env.SERVICE_NAME }/`} component={ NotFound } />
                </Switch>
            </Router>
        </div>
    );
};

export default App;
