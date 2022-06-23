import axios from "axios";
import { editVehicleCategory, fetchAllVehicleCategory, fetchVehicleById, saveVehicleCategory } from "../../services/VehicleCategoryService";
import { VehicleCategory_FETCHBYID, VehicleCategory_FETCH_ALL, VehicleCategory_SAVE, VehicleCategory_UPDATE } from "./ActionConstants";

export function getAllVehicleCategory() {
    return (dispatch) => {
        return fetchAllVehicleCategory().then(

            resp => {
                dispatch({
                    type: VehicleCategory_FETCH_ALL,
                    payload: resp.data
                })
            }
        )
    }
}
export function getVehicleCategoryById(id) {
    return (dispatch) => {
        return fetchVehicleById(id).then(
            resp => {
                dispatch({
                    type: VehicleCategory_FETCHBYID,
                    payload: resp.data
                })
            }
        )
    }
}
export function CreateVehicleCategory(vehicleCategory) {
    return (dispatch) =>{
        return saveVehicleCategory(vehicleCategory).then(
            resp =>{
                dispatch({
                    type:VehicleCategory_SAVE,
                    payload:resp.data
                })
            }
        )
    }

}

export function updateVehicleCategory(vehicleCategory) {
    return (dispatch) =>{
        return editVehicleCategory(vehicleCategory).then(
            resp =>{
                dispatch({
                    type:VehicleCategory_UPDATE,
                    payload:resp.data
                })
            }
        )
    }

}