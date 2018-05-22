import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Nav from '../Layouts/Nav';
import Review from '../Pages/Review';
import Task from '../Pages/Task';

const Routes = () => (
    <BrowserRouter>
        <Nav>
            <Switch>
                <Route exact path="/review" component={Review} />
                <Route exact path="/task" component={Task} />
            </Switch>
        </Nav>
    </BrowserRouter>
);

export default Routes;
