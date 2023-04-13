import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../../Navbar';
import Profile from './Profile';
import Record from './Record';
import Save from './Save';

const MyPage = ({match}) => {
    return (
        <Router>
            <Navbar />
            <Switch>
            <Route path={`${match.path}/profile`} exact component={Profile} />
            <Route path={`${match.path}/record`} component={Record} />
            <Route path={`${match.path}/save`} component={Save} />
            </Switch>
        </Router>
    );
};

export default MyPage;