  import axios from "axios";
  import FormData from "form-data";
  import { toast } from "react-toastify";

  
  export const changePassword = (e) => async (dispatch, getState) => {   
    try {
      var data = new FormData();
      data.append("old_password", e.old_password);
      data.append("new_password", e.new_password);
      data.append("confirm_password", e.confirm_password);
      
      let token = localStorage.getItem('token_key')

      console.log(token);
      console.log(data);

      var config = {
        method: "post",
        url: `http://nodeserver.mydevfactory.com:5589/user/change-password?token=${token}`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };
      const res = await axios(config);
      console.log(res.data);
  
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
  