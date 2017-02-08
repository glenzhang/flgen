import {
    GET_HOME_TEXT
} from '../constants/HomeActionTypes';

export const getHomeText = (text) => {
    return {
        type: GET_HOME_TEXT,
        text
    }
}