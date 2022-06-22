import { combineReducers } from "redux";
import counterReducer from "./CounterReducer";
import userReducer from "./UserReducer";
import enquiryReducer from "./EnquiryReducer";
import vehicleCategoryReducer from "./VehicleCategoryReducer"
import servicesReducer from "./ServicesReducer";
import authenticationReducer from "./AuthenticationReducer";



const rootReducer= combineReducers({
    counterReducer,
    userReducer,
    enquiryReducer,
    vehicleCategoryReducer,
    servicesReducer,
    authenticationReducer
   
    
})
export default rootReducer;