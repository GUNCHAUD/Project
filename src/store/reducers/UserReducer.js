import { USER_FETCHBYID, USER_FETCH_ALL, USER_SAVE, USER_UPDATE } from "../actions/ActionConstants";

const initialState = {
    users: [],
    user: null,
    newUser: null,
    updateUser: null,
}

export default function userReducer(state = initialState, action) {
    if (action.type === USER_FETCH_ALL) {
        return ({
            ...state,
            users: action.payload
        })
    }
    if (action.type === USER_FETCHBYID) {
        return (
            {
                ...state,
                user: action.payload
            }
        )
    }
    if (action.type === USER_SAVE) {
        return (
            {
                ...state,
                newUser: action.payload
            }
        )
    }
    if (action.type === USER_UPDATE) {
       
        return ({
            ...state,
            updateUser: action.payload
        })
    }
    else {
        return state;
    }
}