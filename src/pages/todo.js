import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Todo() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/signin");
    }
  }, [navigate]);
  return (
    <div>
      Todo
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
}
