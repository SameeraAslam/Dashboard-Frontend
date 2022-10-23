import { PROJECT_CREATE_FAILURE, PROJECT_CREATE_REQUEST, PROJECT_CREATE_SUCCESS, PROJECT_DATA_FAILURE, PROJECT_DATA_REQUEST, PROJECT_DATA_SUCCESS, PROJECT_DELETE_FAILURE, PROJECT_DELETE_REQUEST, PROJECT_DELETE_SUCCESS, PROJECT_UPDATE_FAILURE, PROJECT_UPDATE_REQUEST, PROJECT_UPDATE_SUCCESS } from "../../actions/project/ActionTypes"

const initialState = {
    projects: [],
    loading: false,
    error: "",
}
const ProjectReducer = (state = initialState, action) => {
    switch (action.type) {
        case PROJECT_CREATE_REQUEST:
            return {
                loading: true,
            }
        case PROJECT_CREATE_SUCCESS:
            return {
             projects: action.payload,
                loading: false,
            }
        case PROJECT_CREATE_FAILURE:
            return {
                loading: false,
                error: action.payload,

            }
    
        case PROJECT_DATA_REQUEST:
                return {
                  
                    loading: true,
                }
        case PROJECT_DATA_SUCCESS:
                return {
                 projects: action.payload,
                    loading: false,
                }
        case PROJECT_DATA_FAILURE:
                return {
                   
                    loading: false,
                    error: action.payload,
                }
        case PROJECT_UPDATE_REQUEST:
                    return {
                        loading: true,
                    }
        case PROJECT_UPDATE_SUCCESS:
                    return {
                        loading: false,
                    }
        case PROJECT_UPDATE_FAILURE:
                    return {
                        loading: false,
                        error: action.payload
        
                    }
        case PROJECT_DELETE_REQUEST:
                    return {
                        loading: true,
                    }
        case PROJECT_DELETE_SUCCESS:
                    return {
                        loading: false
                    }
        case PROJECT_DELETE_FAILURE:
                    return {
                        loading: false,
                        error: action.payload
                    }

        default:
            return state;



    }

}

export {  ProjectReducer };