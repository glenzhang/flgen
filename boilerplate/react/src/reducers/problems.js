import {
    ADD_PROBLEM,
    RESOLVED_PROBLEM,
    REQUEST_PROBLEM,
    RECEIVE_PROBLEM
} from '../constants/ActionTypes';

const problem = (state, action) => {
    switch (action.type) {
        case ADD_PROBLEM:
            return {
                id: action.id,
                problem: action.problem,
                resolved: false
            }
        case TOGGLE_PROBLEM:
            if (state.id !== action.id) {
                return state
            }
            return Object.assign({}, state, {
                resolved: !state.resolved
            })
        default:
            return state
    }
}

const problems = (state = [], action) => {
    switch (action.type) {
        case ADD_PROBLEM:
            return [
                ...state,
                problem(undefined, action)
            ]
        case RESOLVED_PROBLEM:
            return state.map(problem =>
                problem.id === action.id ?
                Object.assign({}, problem, { resolved: !problem.resolved }) :
                problem
            )
        case REQUEST_PROBLEM:
            return state;
        case RECEIVE_PROBLEM:
            return [
                ...state,
                ...action.problems
            ]
        default:
            return state
    }
}

export default problems;
