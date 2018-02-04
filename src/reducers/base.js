// Constants
const GET_INFO = 'GET_INFO';

// Action Builders
export function getInfo(name, age) {
    return {
        type: GET_INFO,
        name,
        age
    }
}

// Initial State
let initialState = {
    name: 'Placeholder Name',
    age: 99
}

// Reducer
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_INFO:
            return Object.assign({}, state, {name: action.name, age: action.age})
        default:
            return state
    }
}