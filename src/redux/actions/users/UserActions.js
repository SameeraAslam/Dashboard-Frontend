import axios from "axios";
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST,USER_LOGIN_SUCCESS, USER_LOGOUT_SUCCESS, USER_REGISTER_FAIL,
     USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "./ActionTypes";

const registerUserAction = userData =>{
    return async (dispatch) => {
    try {
        dispatch({
            type: USER_REGISTER_REQUEST,
        })

        const config = {
            "Content-Type": "application/json",
        }

        const { data } = await axios.post("http://localhost:1337/api/users/register", userData, config);
        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data,
        })

localStorage.setItem("userAuth", JSON.stringify(data))
    }
    catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.response && error.response.data.message,

        })

    }
}

}

const loginUserAction = userData =>{
    return async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST,
        })

        const config = {
            headers:{
            "Content-Type": "application/json",
            }
        }

        const { data } = await axios.post("http://localhost:1337/api/users/login", userData, config);
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data,
        })

        localStorage.setItem("userAuth", JSON.stringify(data))
    }
    catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.message,

        })

    }
}

}

const logoutUserAction = () => async dispatch =>{
    try{
localStorage.removeItem("userAuth");

   dispatch({
    type: USER_LOGOUT_SUCCESS,
   })
    }
    catch(error){

    }
}
export {registerUserAction, loginUserAction, logoutUserAction};