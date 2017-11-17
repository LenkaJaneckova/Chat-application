import {SET_ACTIVE_CHANNEL, CREATE_MESSAGE, FETCH_CHANNELS} from '../constants/actionTypes';

export const fetchChannel = (state = [], action) => {
    switch (action.type) {
        case FETCH_CHANNELS:
            return action.payload || [];
        default:
            return state;
    }
};

export const activeChannel = (state = {channelId: null, messages: []}, action) => {

    switch (action.type) {
        case SET_ACTIVE_CHANNEL:
            const {channelId, messages} = action.payload;
            return {channelId, messages};
        case CREATE_MESSAGE:
            return {channelId: action.payload.channelId, messages: [...state.messages, action.payload.message]};
        default:
            return state;
    }
};