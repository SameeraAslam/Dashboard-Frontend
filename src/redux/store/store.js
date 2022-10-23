import { createStore } from 'redux';
import { combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { ProjectReducer } from "../reducers/project/ProjectReducer";
import { UserReducer } from '../reducers/users/UserReducer';

const middlewares = [thunk];

const reducers = combineReducers({

    ProjectReducer: ProjectReducer,
    userLogin: UserReducer,

})

const userAuthFromStorage = localStorage.getItem("userAuth") ? JSON.parse(localStorage.getItem("userAuth")) : null;

const initialState = {
    userLogin: {
        users: userAuthFromStorage,
    },
}



const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
)

export { store };