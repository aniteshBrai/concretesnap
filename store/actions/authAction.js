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
      toast.success(`Logged in successfully`);
      Router.push("/");
      dispatch({
        type: AUTH_LOGIN,
        payload: token,
      });
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
  localStorage.clear();
  dispatch({
    type: AUTH_LOGOUT,
    payload: "",
  });
};

export const handleSignup = (e) => async (dispatch) => {
  try {
    if (e.homeOwner) {
      const {
        first_name,
        last_name,
        email_address,
        password,
        confirm_password,
        phone_number,
      } = e;
      var data = JSON.stringify({
        firstname: first_name,
        lastname: last_name,
        phone: phone_number,
        email: email_address,
        password: password,
        confirmpassword: confirm_password,
        type: "home_owner",
      });
    } else {
      const {
        business_name,
        business_address,
        email_address,
        password,
        confirm_password,
        state,
        city,
        zip_code,
        phone_number,
      } = e;
      var data = JSON.stringify({
        businessname: business_name,
        email: email_address,
        phone: phone_number,
        businessaddress: business_address,
        city: city,
        state: state,
        zip: zip_code,
        password: password,
        confirmpassword: confirm_password,
        type: "contractor",
      });
    }

    var config = {
      method: "post",
      url: `http://nodeserver.mydevfactory.com:5589/user/register`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    const res = await axios(config);

    if (res.data.success) {
      toast.success(`Thank you for Registration `, {
        toastId: "register",
      });
      dispatch({
        type: AUTH_SIGNUP,
        payload: res.data,
      });
      Router.push("/");
    }
  } catch (error) {
    console.log(error);
    // toast.error(error.response.data.error.common, {
    //   onClose: () => location.reload(),
    // });
    // dispatch({
    //   type: AUTH_SIGNUP_ERROR,
    //   payload: error,
    // });
  }
};
