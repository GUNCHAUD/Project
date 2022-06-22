import axios from "axios";

export function getAllVehicleCategory() {
    return (dispatch) => {
        return axios.get("http://localhost:8080/vehicleCategory/all").then(

            resp => {
                dispatch({
                    type: "/vehicleCategory/all",
                    payload: resp.data
                })
            }
        )
    }
}
export function getVehicleCategoryById(id) {
    return (dispatch) => {
        return axios.get("http://localhost:8080/vehicleCategory/" + id).then(
            resp => {
                dispatch({
                    type: "/vehicleCategory/get",
                    payload: resp.data
                })
            }
        )
    }
}
export function CreateVehicleCategory(payload) {
    return (dispatch) =>{
        return axios.post("http://localhost:8080/vehicleCategory/save",payload).then(
            resp =>{
                dispatch({
                    type:"/vehicleCategory/save",
                    payload:resp.data
                })
            }
        )
    }

}

export function updateVehicleCategory(payload) {
    return (dispatch) =>{
        return axios.put("http://localhost:8080/vehicleCategory/update",payload).then(
            resp =>{
                dispatch({
                    type:"/vehicleCategory/update",
                    payload:resp.data
                })
            }
        )
    }

}