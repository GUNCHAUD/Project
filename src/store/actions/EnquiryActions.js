import axios from "axios";
import { fetchAllEnquiry, getEnquiryByMail, saveEnquiry } from "../../services/EnquiryServices";
import { ENQUIRY_FETCHBYEMAIL, ENQUIRY_FETCH_ALL, ENQUIRY_SAVE } from "./ActionConstants";

export function getTotalEnquiry() {
    return (dispatch) => {
        return fetchAllEnquiry().then(
            resp => {
                dispatch({
                    type: ENQUIRY_FETCH_ALL,
                    payload: resp.data
                })
            }
        )
    }
}

export function CreateEnquiry(enquiry) {
    return (dispatch) =>{
        return saveEnquiry(enquiry).then(
            resp =>{
                dispatch({
                    type:ENQUIRY_SAVE,
                    payload:resp.data
                })
            }
        )
    }

}

export function fetchEnquiryByEmail(email) {
    return (dispatch) => {
        return getEnquiryByMail(email).then(
            resp => {
                dispatch({
                    type: ENQUIRY_FETCHBYEMAIL,
                    payload: resp.data
                })
            }
        )
    }
}