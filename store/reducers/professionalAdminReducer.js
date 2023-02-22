import {
  AUTH_LOGIN_START,
  AUTH_LOGIN,
  AUTH_ERROR,
  PROFESSIONAL_ADMIN_SIGNUP,
  PROFESSIONAL_ADMIN_SIGNUP_ERROR,
  PROFESSIONAL_ADMIN_DETAILS,
  PROFESSIONAL_ADMIN_DETAILS_ERROR,
  ADMIN_CLIENT_DETAILS,
  ADMIN_CLIENT_DETAILS_ERRORS,
  DASHBOARD_CLIENT_LIST,
  DASHBOARD_CLIENT_LIST_ERRORS,
  FORGET_PASSWORD,
  FORGET_PASSWORD_ERROR,
  VERIFY_TOKEN,
  VERIFY_TOKEN_ERROR,
  PROFESSIONAL_ADMIN_EDIT,
  PROFESSIONAL_ADMIN_EDIT_ERRORS,
  CHANGE_PASSWORD,
  CHANGE_PASSWORD_ERROR,
} from "../types";

//define window
const ISSERVER = typeof window === "undefined";

//after checking window store the token to the locaStorage
if (!ISSERVER) {
  var localValue = !!localStorage.getItem("token_key");
}

//define initial states
const initialState = {
  isLoggedIn: localValue,
  success: false,
  authError: false,
  authErrorMsg: "",
  loading: false,
  professionalAdminData: {},
  adminClientData: {},
  dashboardClientlist: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case AUTH_LOGIN_START:
      return {
        ...state,
        loading: true,
      };

    //reducer for login
    case AUTH_LOGIN:
      return {
        ...state,
        isLoggedIn: !!localStorage.getItem("token_key"), //after login token store the localstorage
        token: action.payload,
        success: true,
        loading: false,
      };

    // reducer for login error
    case AUTH_ERROR:
      return {
        ...state,
        isLoggedIn: false,
        token: "",
        authError: true,
        authErrorMsg: action.payload,
      };

    // reducer for professional admin sign up
    case PROFESSIONAL_ADMIN_SIGNUP:
      return {
        ...state,
        loading: false,
        success: true,
        isLoggedIn: true,
      };
    // reducer for professional admin sign up error
    case PROFESSIONAL_ADMIN_SIGNUP_ERROR:
      return {
        ...state,
        isLoggedIn: false,
        token: "",
      };
    // reducer for professional admin details

    case PROFESSIONAL_ADMIN_DETAILS:
      return {
        ...state,
        professionalAdminData: action.payload,
        loading: false,
      };

    // reducer for professional admin details error
    case PROFESSIONAL_ADMIN_DETAILS_ERROR:
      return {
        ...state,
        loading: true,
      };
    case PROFESSIONAL_ADMIN_EDIT:
      return {
        ...state,

      }
      case CHANGE_PASSWORD:
      return {
        ...state,

      }
      case CHANGE_PASSWORD_ERROR:
        return {
          ...state,
  
        }
      case PROFESSIONAL_ADMIN_EDIT_ERRORS:
      return {
        ...state,
        loading: true,
      }
    
    case ADMIN_CLIENT_DETAILS:
      return {
        ...state,
        adminClientData: action.payload,
        loading: false,
      };

    // reducer for professional admin details error occur
    case ADMIN_CLIENT_DETAILS_ERRORS:
      return {
        ...state,
        loading: true,
      };
    // reducer for dashboard client list
    case DASHBOARD_CLIENT_LIST:
      return {
        ...state,
        dashboardClientlist: action.payload,
        loading: false,
      };

    // reducer for professional admin errrors
    case DASHBOARD_CLIENT_LIST_ERRORS:
      return {
        ...state,
        loading: true,
      };
    // reducer for forget password
    case FORGET_PASSWORD:
      return {
        ...state,
        loading: true,
      };
    // reducer for forget password error
    case FORGET_PASSWORD_ERROR:
      return {
        ...state,
        authError: true,
        authErrorMsg: action.payload,
      };
    default:
      return state;
  }
}
