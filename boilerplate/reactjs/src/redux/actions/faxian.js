import {
    RECEIVE_ITEMS
} from '../constants/FaXianActionTypes';

function receiveItems(items) {
    return {
        type: RECEIVE_ITEMS,
        items: items
    };
}

export const fetchItems = () => {
    return dispatch => {
        return fetch("http://192.168.100.40:3000/story/zhanglei/03/api", {
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Origin': '*'
                }
            })
            .then(res => res.json())
            .then(resjson => dispatch(receiveItems(resjson.data.items)));
    }
};