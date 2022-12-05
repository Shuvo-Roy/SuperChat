import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AuthContext from "./context/AuthContext";
import "./style.scss";
import {
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import { useContext } from "react";

function App() {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
