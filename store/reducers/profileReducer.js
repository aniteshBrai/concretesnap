import { GET_USER_INFO, USER_INFO_ERROR } from "../types";

const initialState = {
  userInfo: {},
  loading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_USER_INFO:
      return {
        ...state,
        userInfo: action.payload,
        loading: false,
      };
    case USER_INFO_ERROR:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
}
