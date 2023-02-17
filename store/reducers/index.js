import { combineReducers } from "redux";
import professionalAdminReducer from "./professionalAdminReducer";



export default combineReducers({
    professionalAdminReducer: professionalAdminReducer,
    professionalAdminData: professionalAdminReducer,
    adminClientData: professionalAdminReducer,
    dashboardClientlist: professionalAdminReducer,

});