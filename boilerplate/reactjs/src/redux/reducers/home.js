import { GET_HOME_TEXT } from '../constants/HomeActionTypes';

const home = (state = { text: "init from reducer" }, action) => {
    switch (action.type) {
        case GET_HOME_TEXT:
            return Object.assign({}, state, {
                text: action.text
            });
        default:
            return state
    }
}

export default home;