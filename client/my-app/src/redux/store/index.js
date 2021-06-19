import {combineReducers ,applyMiddleware , createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import userReducer from "../reducers/userReducer";
import fileReducer from "../reducers/fileReducer";
import appReducer from "../reducers/appReducer";

const rootReducer = combineReducers({
    user: userReducer,
    files: fileReducer,
    appGlobal: appReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
