import axios from "axios"

export function doUserLogin(payload) {
    return (dispatch) => {
        return axios.post("http://localhost:8080/user/login",payload).then(
            resp => {
                console.log(resp);
                localStorage.setItem("myUser",JSON.stringify(resp.data));
                dispatch(doLoginSuccess(resp.data));
            }
        )  
        .catch(error=> {
            console.log(error.response.data);  
            alert(error.response.data);

        })     
    }
}

export function doLoginSuccess(data) {

    return {
        type : "LOGIN_SUCCESS",
        payload: data
    }
}

