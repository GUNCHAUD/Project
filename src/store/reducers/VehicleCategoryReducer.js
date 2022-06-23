import { VehicleCategory_FETCHBYID, VehicleCategory_FETCH_ALL, VehicleCategory_SAVE, VehicleCategory_UPDATE } from "../actions/ActionConstants";

const initialState = {
    vehicleCategories: [],
    vehicleCategory:null,
    newVehicleCategory:null,
    updateVehicleCategory:null

}

export default function vehicleCategoryReducer(state = initialState, action) {
    if (action.type === VehicleCategory_FETCH_ALL) {
        return ({
            ...state,
            vehicleCategories: action.payload
        })
    }
    if (action.type === VehicleCategory_FETCHBYID) {
        return (
            {
                ...state,
                vehicleCategory: action.payload
            }
        )
    }
    if (action.type === VehicleCategory_SAVE) {
        return (
            {
                ...state,
                newVehicleCategory: action.payload
            }
        )
    }
    if (action.type === VehicleCategory_UPDATE) {
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