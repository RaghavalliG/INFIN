import { combineReducers } from "redux";
import professionalAdminReducer from "./professionalAdminReducer";


//combined reducer
export default combineReducers({
    professionalAdminReducer: professionalAdminReducer,
    professionalAdminData: professionalAdminReducer,
    adminClientData: professionalAdminReducer,
    dashboardClientlist: professionalAdminReducer,
    professionalManagerList: professionalAdminReducer,
    professionalManagerData: professionalAdminReducer,
    userMailData: professionalAdminReducer,
    professionalUserList: professionalAdminReducer,
    professionalUserData: professionalAdminReducer,


});