import { ENQUIRY_FETCHBYEMAIL, ENQUIRY_FETCH_ALL, ENQUIRY_SAVE } from "../actions/ActionConstants";

const initialState = {
    enquiries: [],
    enquiryList:[],
    newEnquiry:null,

}

export default function enquiryReducer(state = initialState, action) {
    if (action.type === ENQUIRY_FETCH_ALL) {
        return ({
            ...state,
            enquiries: action.payload
        })
    }
    if (action.type === ENQUIRY_FETCHBYEMAIL) {
        return (
            {
                ...state,
                enquiryList: action.payload
            }
        )
    }
    if (action.type === ENQUIRY_SAVE) {
        return (
            {
                ...state,
                newEnquiry: action.payload
            }
        )
    }
    
    else {
        return state;
    }
}
