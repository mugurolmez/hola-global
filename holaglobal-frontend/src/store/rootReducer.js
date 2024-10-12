import { combineReducers } from "redux";

import authReducer from "./reducers/authReducer";
import customerReducer from "./reducers/customerReducer";
import snackbarReducer from "./reducers/snackbarReducer";
import locationReducer from "./reducers/locationReducer";
import userReducer from "./reducers/userReducer";




const rootReducer = combineReducers({
    snackbar:snackbarReducer,
    auth: authReducer,  
    customer:customerReducer,
    user:userReducer,
  
    location: locationReducer,

})

export default rootReducer;