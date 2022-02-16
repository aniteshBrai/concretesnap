import {
  GET_USER_INFO,
  USER_INFO_ERROR,
  USER_UPDATE_INFO_ERROR,
  UPDATE_USER_INFO,
} from "../types";
var FormData = require("form-data");
import { toast } from "react-toastify";
import axios from "axios";

export const handleUserInfo = (e) => async (dispatch) => {
  try {
    var token = localStorage.getItem("token_key");
    var config = {
      method: "get",
      url: `${process.env.NEXT_PUBLIC_API_URL}/user/get-user`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const res = await axios(config);

    dispatch({
      type: GET_USER_INFO,
      payload: res.data.res,
    });
  } catch (error) {
    dispatch({
      type: USER_INFO_ERROR,
      payload: error,
    });
  }
};
export const updateUserInfo = (e, type) => async (dispatch) => {
  try {
    var token = localStorage.getItem("token_key");
    var data = new FormData();
    if (type == "home_owner") {
      data.append("firstname", e.first_name);
      data.append("phone", e.phone_number);
      data.append("email", e.email_address);
      data.append("lastname", e.last_name);
    } else {
      data.append("businessaddress", e.business_address);
      data.append("phone", e.phone_number);
      data.append("email", e.email);
      data.append("state", e.state);
      data.append("city", e.city);
      data.append("zip", e.zip_code);
      data.append("businessname", e.business_name);
    }

    var config = {
      method: "post",
      url: `${process.env.NEXT_PUBLIC_API_URL}/user/update-user`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };
    const res = await axios(config);

    dispatch({
      type: UPDATE_USER_INFO,
      payload: res.data.res,
    });

    console.log(res);

    if (res.data.success) {
      toast.success(`Profile updated successfully`, {
        onClose: () => dispatch(handleUserInfo()),
      });
    }
  } catch (error) {
    dispatch({
      type: USER_UPDATE_INFO_ERROR,
      payload: error,
    });
  }
};
