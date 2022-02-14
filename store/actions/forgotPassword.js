import axios from "axios";
import FormData from "form-data";
import { toast } from "react-toastify";


export const forgotPassword = (e) => async (dispatch, getState) => {  
  try {
    var data = new FormData();
    data.append("forgotemail", e.email);
    var config = {
      method: "post",
      url: `http://nodeserver.mydevfactory.com:5589/user/sendPasswordLink`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    const res = await axios(config);
    const { token } = res.data;

    if(res.data.success)
      {
        toast.success(`Success, Please check your email and reset your password`);
      }
  
  } catch (error) {
    console.log(error);      
  }
};
