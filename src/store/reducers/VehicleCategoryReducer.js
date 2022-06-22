const initialState = {
    vehicleCategories: [],
    vehicleCategory:null,
    newVehicleCategory:null,
    updateVehicleCategory:null

}

export default function vehicleCategoryReducer(state = initialState, action) {
    if (action.type === '/vehicleCategory/all') {
        return ({
            ...state,
            vehicleCategories: action.payload
        })
    }
    if (action.type === '/vehicleCategory/get') {
        return (
            {
                ...state,
                vehicleCategory: action.payload
            }
        )
    }
    if (action.type === '/vehicleCategory/save') {
        return (
            {
                ...state,
                newVehicleCategory: action.payload
            }
        )
    }
    if (action.type === '/vehicleCategory/update') {
        console.log(action.payload);
        return ({
            ...state,
            updateVehicleCategory: action.payload
        })
    }
    else {
        return state;
    }
}