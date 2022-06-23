import axios  from "axios";
import {BASE_URL} from '../store/actions/ActionConstants'

export function fetchAllVehicleCategory(){
    return axios.get(BASE_URL+"/vehicleCategory/all");
}

export function fetchVehicleById(vehicleTypeId){
    return axios.get(BASE_URL+"/vehicleCategory/"+vehicleTypeId);
}

export function saveVehicleCategory(vehicleCategory){
    return axios.post(BASE_URL+"/vehicleCategory/save",vehicleCategory);
}

export function editVehicleCategory(vehicleCategory){
    return axios.put(BASE_URL+"/vehicleCategory/update",vehicleCategory);
}
