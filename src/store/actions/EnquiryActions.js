import axios from "axios";

export function getTotalEnquiry() {
    return (dispatch) => {
        return axios.get("http://localhost:8080/enquiry/all").then(
            resp => {
                dispatch({
                    type: "/enquiry/all",
                    payload: resp.data
                })
            }
        )
    }
}

export function CreateEnquiry(payload) {
    return (dispatch) =>{
        return axios.post("http://localhost:8080/enquiry/save",payload).then(
            resp =>{
                dispatch({
                    type:"/enquiry/save",
                    payload:resp.data
                })
            }
        )
    }

}

export function fetchEnquiryByEmail(email) {
    return (dispatch) => {
        return axios.get("http://localhost:8080/enquiry/bymail/" + email).then(
            resp => {
                dispatch({
                    type: "/enquiry/get",
                    payload: resp.data
                })
            }
        )
    }
}