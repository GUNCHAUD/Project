import axios  from "axios";
import {BASE_URL} from '../store/actions/ActionConstants'

export function fetchAllUsers(){
    return axios.get(BASE_URL+"/user/all");
}

export function getUserById(userId){
    return axios.get(BASE_URL+"/user/"+userId);
}

export function saveUser(user){
    return axios.post(BASE_URL+"/user/save",user);
}

export function editUser(user){
    return axios.put(BASE_URL+"/user/update",user);
}




