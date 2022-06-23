import axios  from "axios";
import {BASE_URL} from '../store/actions/ActionConstants'

export function fetchAllEnquiry(){
    return axios.get(BASE_URL+"/enquiry/all");
}

export function getEnquiryByMail(email){
    return axios.get(BASE_URL+"/enquiry/bymail/"+email);
}

export function saveEnquiry(enquiry){
    return axios.post(BASE_URL+"/enquiry/save",enquiry);
}


