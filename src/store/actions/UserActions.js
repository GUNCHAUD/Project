
import { editUser, fetchAllUsers, getUserById, saveUser } from "../../services/UserServices";
import {USER_FETCH_ALL, USER_FETCHBYID, USER_SAVE, USER_UPDATE} from "./ActionConstants";

export function getAllUsers() {
    return (dispatch) => {
        return fetchAllUsers().then(
            resp => {
                dispatch({
                    type: USER_FETCH_ALL,
                    payload: resp.data
                })
            }
        )
    }
}
export function FetchUserById(id) {
    return (dispatch) => {
        return getUserById(id).then(
            resp => {
                dispatch({
                    type: USER_FETCHBYID,
                    payload: resp.data
                })
            }
        )
    }
}
export function CreateUser(user) {
    return (dispatch) =>{
        return saveUser(user).then(
            resp =>{
                dispatch({
                    type:USER_SAVE,
                    payload:resp.data
                })
            }
        )
    }

}

export function updateUser(user) {
    return (dispatch) =>{
        return editUser(user).then(
            resp =>{
                dispatch({
                    type:USER_UPDATE,
                    payload:resp.data
                })
            }
        )
    }

}