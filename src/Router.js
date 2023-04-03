import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import Todo from "./pages/todo";

const Router = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/signin" />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
