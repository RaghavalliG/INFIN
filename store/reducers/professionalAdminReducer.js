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
  PROFESSIONAL_ADMIN_EDIT_ERRORS
} from "../types";

const ISSERVER = typeof window === "undefined";

if (!ISSERVER) {
  var localValue = !!localStorage.getItem("token_key");
}

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
    case AUTH_LOGIN:
      return {
        ...state,
        isLoggedIn: !!localStorage.getItem("token_key"),
        token: action.payload,
        success: true,
        loading: false,
      };
    case AUTH_ERROR:
      return {
        ...state,
        isLoggedIn: false,
        token: "",
        authError: true,
        authErrorMsg: action.payload,
      };
    case PROFESSIONAL_ADMIN_SIGNUP:
      return {
        ...state,
        loading: false,
        success: true,
        isLoggedIn: true,
      };
    case PROFESSIONAL_ADMIN_SIGNUP_ERROR:
      return {
        ...state,
        isLoggedIn: false,
        token: "",
      };
    case PROFESSIONAL_ADMIN_DETAILS:
      return {
        ...state,
        professionalAdminData: action.payload,
        loading: false,
      };
    case PROFESSIONAL_ADMIN_DETAILS_ERROR:
      return {
        ...state,
        loading: true,
      };
    case PROFESSIONAL_ADMIN_EDIT:
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
    case ADMIN_CLIENT_DETAILS_ERRORS:
      return {
        ...state,
        loading: true,
      };
    case DASHBOARD_CLIENT_LIST:
      return {
        ...state,
        dashboardClientlist: action.payload,
        loading: false,
      };
    case DASHBOARD_CLIENT_LIST_ERRORS:
      return {
        ...state,
        loading: true,
      };
    case FORGET_PASSWORD:
      return {
        ...state,
        loading: true,
      };
    case FORGET_PASSWORD_ERROR:
      return {
        ...state,
        authError: true,
        authErrorMsg: action.payload,
      }
    default:
      return state;
  }
}
