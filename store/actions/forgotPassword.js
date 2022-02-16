import axios from "axios";
import FormData from "form-data";
import { toast } from "react-toastify";
import Router from "next/router";

export const forgotPassword = (e) => async (dispatch, getState) => {
  try {
    var data = new FormData();
    data.append("forgotemail", e.email);
    var config = {
      method: "post",
      url: `${process.env.NEXT_PUBLIC_API_URL}/user/sendPasswordLink`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    const res = await axios(config);
    console.log(res);
    const { token } = res.data;

    if (res.data.success) {
      toast.success(`Success, Please check your email and reset your password`);
    }
  } catch (error) {
    toast.error(error.response.data, {
      onClose: () => Router.push("/forgot-password"),
    });
  }
};
