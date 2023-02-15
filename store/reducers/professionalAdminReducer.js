import {
    PROFESSIONAL_ADMIN_SIGNUP,
    PROFESSIONAL_ADMIN_SIGNUP_ERROR,
    
} from "../types";

const ISSERVER = typeof window === "undefined";

if (!ISSERVER) {
  var localValue = !!localStorage.getItem("token_key");
}

const initialState = {
    isLoggedIn: localValue,
    success: false,
    loading: false,
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case PROFESSIONAL_ADMIN_SIGNUP:
        return {
          ...state,
          loading: false,
          success: true,
          isLoggedIn: true
        };
      case PROFESSIONAL_ADMIN_SIGNUP_ERROR:
        return {
          ...state,
          isLoggedIn: false,
          token: "",
        };
      default:
        return state;
    }
  }
  