import axios from "axios";

export function getAllServices() {
    return (dispatch) => {
        return axios.get("http://localhost:8080/services/all").then(
            resp => {
                dispatch({
                    type: "/services/all",
                    payload: resp.data
                })
            }
        )
    }
}

export function getServicesDetails(id) {
    return (dispatch) => {
        return axios.get("http://localhost:8080/services/find/"+id).then(
            resp => {
                dispatch({
                    type: "/services/get",
                    payload: resp.data
                })
            }
        )
    }
}
export function updateServices(payload) {
    return (dispatch) => {
        return axios.put("http://localhost:8080/services/update",payload).then(
            resp => {
                dispatch({
                    type: "/services/update",
                    payload: resp.data
                })
            }
        )
    }
}