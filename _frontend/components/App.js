import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";

export default function App() {
  return (
    <>
      <Router>
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-center">Hello, world!</h1>
        </div>
      </Router>
      <Routes />
    </>
  );
}
