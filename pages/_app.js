import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { wrapper } from "../store/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
      />
    </>
  );
}

export default wrapper.withRedux(MyApp);
