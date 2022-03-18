import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from '../App';
import SearchPage from './SearchPage';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={App} exact />
            <Route path="/search/:keyword" component={SearchPage} />
        </Switch>
    </BrowserRouter>
);

export default Router;