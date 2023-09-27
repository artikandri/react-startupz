import Routes from "./Routes";
import Header from "./Header";
import Footer from "./Footer";
import ChatButton from "./ChatButton";
import ChatBot from "./ChatBot/ChatBot";

export default function App() {
  return (
    <>
      <Header />
      <Routes />
      <Footer />
      <ChatButton />
    </>
  );
}
