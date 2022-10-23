import axios from "axios";
import {PROJECT_CREATE_REQUEST, PROJECT_CREATE_SUCCESS, PROJECT_CREATE_FAILURE, PROJECT_DATA_REQUEST, PROJECT_DATA_SUCCESS, PROJECT_DATA_FAILURE, PROJECT_DELETE_REQUEST, PROJECT_DELETE_SUCCESS, PROJECT_DELETE_FAILURE, PROJECT_UPDATE_REQUEST, PROJECT_UPDATE_SUCCESS, PROJECT_UPDATE_FAILURE} from "./ActionTypes";


const CreateProject = projectData => {

    return async (dispatch) => {

        try {
            dispatch({
                type: PROJECT_CREATE_REQUEST,
            })

            const config = {
                "Content-Type": "application/json",
            }

            const  res  = await axios.post("http://localhost:1337/api/projects", projectData, config);
            if(res.status === 200){
                dispatch({
                    type: PROJECT_CREATE_SUCCESS,
                    payload: res.data,
                })
            }


        }
        catch (error) {
            dispatch({
                type: PROJECT_CREATE_FAILURE,
                payload: error.response && error.response.data.message,

            })

        }
    }
}


const  UpdateProject = (id,updatedData) => {
    return async (dispatch) => {

        try {
            dispatch({
                type: PROJECT_UPDATE_REQUEST,
            })
            

            const res = await axios.put(`http://localhost:1337/api/projects/${id}`, updatedData);

            if(res.status === 200){
            dispatch({
                type: PROJECT_UPDATE_SUCCESS,
                payload: res.data,
            })
        }

        }
        catch (error) {
            dispatch({
                type: PROJECT_UPDATE_FAILURE,
                payload: error.response && error.response.data.message,

            })

        }
    }
}

const FetchProject = () => {
    return async (dispatch) => {

        try {
            dispatch({
                type: PROJECT_DATA_REQUEST,
            })

            const config = {
                headers: {
                    "Content-Type": "application/json",

                }

            }
            const  res  = await axios.get("http://localhost:1337/api/projects", config);
            if(res.status === 200){
                dispatch({
                    type: PROJECT_DATA_SUCCESS,
                    payload: res.data,
                })
            }

        }
        catch (error) {
            dispatch({
                type: PROJECT_DATA_FAILURE,
                payload: error.response && error.response.data.message,

            })

        }
    }
}

const DeleteProject = id =>{
    return async(dispatch) => {

       try{
        dispatch({
        type:PROJECT_DELETE_REQUEST,
    })

    const config ={
        "Content-Type":"application/json",
    }

    const res = await axios.delete(`http://localhost:1337/api/projects/${id}`, config);

    if(res.status === 200){
        // dispatch(FetchProject());
        dispatch({
            type:PROJECT_DELETE_SUCCESS,
            payload: res.data,
        })
    
    }

       }
       catch(error){
        dispatch({
            type:PROJECT_DELETE_FAILURE,
            payload:error.response && error.response.data.message,


        })
       }
    }
} 



export { CreateProject , FetchProject, UpdateProject,  DeleteProject};