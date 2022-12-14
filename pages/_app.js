import Layout from "../Components/Layout/Layout";
import "../styles/globals.css";
import  {Toaster}  from "react-hot-toast";
import  {StateContext}  from "../context/StateContext";

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}

export default MyApp;
