  import axios from "axios";
  import FormData from "form-data";
  import { toast } from "react-toastify";

  
  export const contactUs = (e) => async (dispatch, getState) => {
   
    try {
      var data = new FormData();
      data.append("name", e.name);
      data.append("email_address", e.email_address);
      data.append("subject", e.subject);
      data.append("message", e.message);

      var config = {
        method: "post",
        url: `http://nodeserver.mydevfactory.com:5589/user/contactus`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };
      const res = await axios(config);
      console.log(res)
      if(res.data.success==true)
      {
        toast.success(`Success`);
      }
  
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
  