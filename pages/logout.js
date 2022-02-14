import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { handleLogout } from "../store/actions/authAction";
import { useDispatch } from "react-redux";

const logout = () => {
  const dispatch = useDispatch();
  const Router = useRouter();
  useEffect(() => {
    dispatch(handleLogout());
    Router.push("/login");
  }, []);
  return <></>;
};

export default logout;
