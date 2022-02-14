import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function ProtectedAuth({ children }) {
  const route = useRouter();
  const path = route.asPath;
  const [verified, setVerified] = useState(false);
  const auth = useSelector((state) => state.auth);
  const { isLoggedIn } = auth;

  useEffect(async () => {
    // if no accessToken was found,then we redirect to "/" page.
    if (isLoggedIn) {
      route.replace("/");
    } else {
      route.replace("/login");
    }
  }, []);

  return <>{children}</>;
}

export default ProtectedAuth;
