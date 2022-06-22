const initialState = {
    services:[],
    service:null,
    updateService:null,
}
export default function servicesReducer(state = initialState, action) {
    if (action.type === '/services/all') {
        return ({
            ...state,
            services: action.payload
        })
    }
    if (action.type === '/services/get') {
        return (
            {
                ...state,
                service: action.payload
            }
        )
    }
    if (action.type === '/services/update') {
        return ({
            ...state,
            updateService: action.payload
        })
    }
      
        else {
            return state;
        }
    }