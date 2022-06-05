import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./privateRoute";
import Dashboard from "./screens/Dashboard";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Todos from "./screens/Todos";
import UpdateTodo from "./screens/UpdateTodo";

function App() {
  return (
    <Routes>
      <Route exact path={"/"} element={<Home />} />
      <Route exact path={"/login"} element={<Login />} />
      <Route exact path={"/signup"} element={<Register />} />
      <Route
        exact
        path={"/dashboard"}
        element={<PrivateRoute component={<Dashboard />} />}
      />
      <Route
        exact
        path={"/todos"}
        element={<PrivateRoute component={<Todos />} />}
      />
      <Route
        exact
        path={"/todos/edit"}
        element={<PrivateRoute component={<UpdateTodo />} />}
      />
    </Routes>
  );
}

export default App;
