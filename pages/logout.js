import React, { useEffect } from "react";
import { useRouter } from "next/router";

const logout = () => {
  const Router = useRouter();
  useEffect(() => {
    localStorage.clear();
    Router.push("/login");
  }, []);
  return <></>;
};

export default logout;
