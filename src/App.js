import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AuthContext from "./context/AuthContext";
import "./style.scss";
import {
  Route,
  BrowserRouter,
  Routes,
  Navigate,
} from "react-router-dom";
import { useContext } from "react";

function App() {
  const { currentUser } = useContext(AuthContext);
  const ProtectedRoute = ({children}) =>{
    if(!currentUser){
      return <Navigate to="/login/"/>
    }
    return children
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
