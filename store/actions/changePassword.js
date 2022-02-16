import axios from "axios";
import FormData from "form-data";
import { toast } from "react-toastify";
import Router from "next/router";

export const changePassword = (e) => async (dispatch, getState) => {
  try {
    var data = new FormData();
    data.append("currentpassword", e.old_password);
    data.append("newpassword", e.new_password);
    data.append("confirmnewpassword", e.confirm_password);

    let token = localStorage.getItem("token_key");

    var config = {
      method: "post",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      url: `${process.env.NEXT_PUBLIC_API_URL}/user/change-password?token=${token}`,
      data: data,
    };
    const res = await axios(config);

    // if (token) {
    //   localStorage.setItem("token_key", token);
    //   console.log(toast);
    //   toast.success(`Welcome user`);
    //   location.reload();
    // }
  } catch (error) {
    console.log(error);
  }
};
