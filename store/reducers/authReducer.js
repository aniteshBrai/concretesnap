import {
  AUTH_LOGIN,
  AUTH_LOGIN_START,
  AUTH_ERROR,
  AUTH_LOGOUT,
  AUTH_SIGNUP_ERROR,
  AUTH_SIGNUP,
} from "../types";

const ISSERVER = typeof window === "undefined";

if (!ISSERVER) {
  var localValue = !!localStorage.getItem("token_key");
}

const initialState = {
  isLoggedIn: localValue,
  token: "",
  authError: false,
  authErrorMsg: "",
  success: false,
  loading: false,
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
    case AUTH_SIGNUP:
      return {
        ...state,
        isLoggedIn: !!localStorage.getItem("token_key"),
        token: action.payload.token,
      };
    case AUTH_ERROR:
      return {
        ...state,
        isLoggedIn: false,
        token: "",
        authError: true,
        authErrorMsg: action.payload,
      };
    case AUTH_SIGNUP_ERROR:
      return {
        ...state,
        isLoggedIn: false,
        token: "",
      };
    case AUTH_LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        token: "",
      };

    default:
      return state;
  }
}
