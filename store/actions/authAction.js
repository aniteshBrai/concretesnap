import {
  AUTH_LOGIN,
  AUTH_LOGIN_START,
  AUTH_ERROR,
  AUTH_LOGOUT,
  AUTH_SIGNUP,
  AUTH_SIGNUP_ERROR,
} from "../types";
import axios from "axios";
import FormData from "form-data";
import { toast } from "react-toastify";
import Router from "next/router";

export const handleLogin = (e) => async (dispatch, getState) => {
  dispatch({
    type: AUTH_LOGIN_START,
  });
  try {
    var data = new FormData();
    data.append("email", e.email);
    data.append("password", e.password);

    var config = {
      method: "post",
      url: `http://nodeserver.mydevfactory.com:5589/user/login`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    const res = await axios(config);
    const { token } = res.data;

    if (token) {
      localStorage.setItem("token_key", token);
      console.log(toast);
      toast.success(`Welcome user`);
      location.reload();
    }
  } catch (error) {
    console.log(error);
    // dispatch({
    //   type: AUTH_ERROR,
    //   payload: error.response.data.error.common,
    // });
    // toast.error(error.response.data.error.common, {
    //   onClose: () => location.reload(),
    // });
  }
};
export const handleLogout = (e) => async (dispatch) => {
  alert("logout");
  localStorage.clear();
  location.reload();
  dispatch({
    type: AUTH_LOGOUT,
    payload: "",
  });
};

export const handleSignup = (e) => async (dispatch) => {
  try {
    var data = new FormData();
    data.append("email", e.email);
    data.append("password", e.password);
    data.append("password_confirmation", e.confirmPassword);
    data.append("first_name", e.firstName);
    data.append("last_name", e.lastName);
    data.append("mobile", e.mobileNumber);
    data.append("captcha_token", e.captchatoken);

    var config = {
      method: "post",
      url: `${process.env.REACT_APP_API_URL}/customer/register`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    const res = await axios(config);
    toast.success(`Thank you for Registration `, {
      toastId: "register",
    });
    const { token } = res.data.data;
    localStorage.setItem("token_key", token);
    dispatch({
      type: AUTH_SIGNUP,
      payload: res.data,
    });
  } catch (error) {
    toast.error(error.response.data.error.common, {
      onClose: () => location.reload(),
    });
    dispatch({
      type: AUTH_SIGNUP_ERROR,
      payload: error,
    });
  }
};
