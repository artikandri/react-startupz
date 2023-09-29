import Routes from "./Routes";
import Header from "./Header";
import Footer from "./Footer";
import ChatButton from "./ChatButton/";
import { ToastContainer } from "react-toastify";
import { useMediaQuery } from "react-responsive";

export default function App() {
  const isMedium = useMediaQuery({
    query: "(min-width: 720px)",
  });

  return (
    <>
      <Header />
      <Routes />
      <Footer />
      {isMedium && <ChatButton />}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}
