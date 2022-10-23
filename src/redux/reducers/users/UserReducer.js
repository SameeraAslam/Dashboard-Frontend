const { USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_LOGOUT_SUCCESS } = require("../../actions/users/ActionTypes")

const initialState = {
    users: [],
    loading: false,
    error: "",
}
const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return {
              
                loading: true,
            }
        case USER_REGISTER_SUCCESS:
            return{
               
                users: action.payload,
                
            }
        case USER_REGISTER_FAIL:
            return{
               
              
                error: action.payload,
            }
        case USER_LOGIN_REQUEST:
            return{
           
               loading:true,
            }
        case USER_LOGIN_SUCCESS:
            return{
          
                
                users: action.payload,
            }
        case USER_LOGIN_FAIL:
            return{

               
                error:action.payload,
            }
        case USER_LOGOUT_SUCCESS:
            return{ users: null}
        default:
            return state;           
    }
}
export {UserReducer};