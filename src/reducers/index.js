import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import {fetchedAuthToken, loggedUser} from './authReducer';
import {createChannel} from './channelReducer';

export default combineReducers({
    form: formReducer,
    user: loggedUser,
    authToken: fetchedAuthToken,
    channels: createChannel
});