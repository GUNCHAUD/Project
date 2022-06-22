const initialState = {
    enquiries: [],
    enquiryList:[],
    newEnquiry:null,

}

export default function enquiryReducer(state = initialState, action) {
    if (action.type === '/enquiry/all') {
        return ({
            ...state,
            enquiries: action.payload
        })
    }
    if (action.type === '/enquiry/get') {
        return (
            {
                ...state,
                enquiryList: action.payload
            }
        )
    }
    if (action.type === '/enquiry/save') {
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
