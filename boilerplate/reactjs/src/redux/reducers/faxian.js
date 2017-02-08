import {
    RECEIVE_ITEMS
} from '../constants/FaXianActionTypes';

const getItems = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_ITEMS:
            return [
                ...state,
                ...action.items
            ];
        default:
            return state;
    }
}

export default getItems;