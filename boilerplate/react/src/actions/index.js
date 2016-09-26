import {
    ADD_PROBLEM,
    RESOLVED_PROBLEM,
    REQUEST_PROBLEM,
    RECEIVE_PROBLEM
} from '../constants/ActionTypes';

let nextTodoId = 0;
export const addProblem = (problem) => {
    return {
        type: ADD_PROBLEM,
        id: nextTodoId++,
        problem
    };
}

export const resolvedProblem = (id) => {
    return {
        type: RESOLVED_PROBLEM,
        id
    };
}

function requestProblem() {
    return {
        type: REQUEST_PROBLEM
    }
}

function receiveProblem(json) {
    return {
        type: RECEIVE_PROBLEM,
        problems: json,
        receivedAt: Date.now()
    }
}

export const fetchProblem = ()=> {
    return dispatch => {
        dispatch(requestProblem());

        return fetch("http://192.168.100.40:3000/story/zhanglei/02/api", {
                header: {
                        'Accept' : 'application/json',
                        'Content-Type': 'application/json',
                        'Origin': '*'
                    }
                })
                .then((res) => res.json())
                // 此处必须使用dispatch
                .then((resjson)=> dispatch(receiveProblem(resjson.data))
            );
    }
}
