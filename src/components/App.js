import React, {Component} from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import { fetchUserData, fetchAllUsers } from '../actions';

import Registration from './login/Registration';
import Header from './Header';
import Main from './Main';
import Profile from './profile/Profile';
import PrivateRoute from './generic/PrivateRoute';
import Login from './login/Login';

class App extends Component {
    static propTypes = {
        fetchUserData: PropTypes.func.isRequired,
        fetchAllUsers: PropTypes.func.isRequired
    };

    componentWillMount() {
        this.props.fetchUserData();
        this.props.fetchAllUsers();
    }

    render() {
        return (
            <div className='container'>
                <BrowserRouter>
                    <div>
                        <Route path='/' component={Header}/>
                        <Route path='/register' component={Registration}/>
                        <Route path='/login' component={Login}/>
                        <PrivateRoute exact path='/profile' component={Profile} />
                        <PrivateRoute exact path='/' component={Main} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect(null, { fetchUserData, fetchAllUsers })(App);