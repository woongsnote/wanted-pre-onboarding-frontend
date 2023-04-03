import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { emailCheck, passwordCheck } from "../utils/validate";
import { signUp } from "../apis/userApi";
import LoginContainer from "../components/LoginContainer";
import InputContainer from "../components/InputContainer";

export default function SignUp() {
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/todo");
    }
  });

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  /**회원가입  */
  const onSubmitSignUp = async (event) => {
    event.preventDefault();
    if (emailCheck(email) && passwordCheck(password)) {
      const response = await signUp(email, password);
      if (response.status === 201) {
        navigate("/signin");
      }
    } else {
      setEmail("");
      setPassword("");
    }
  };
  return (
    <LoginContainer>
      <h2>회원가입</h2>
      <form onSubmit={onSubmitSignUp}>
        <InputContainer>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            data-testid="email-input"
            required
            value={email}
            onChange={onChangeEmail}
            type="email"
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            data-testid="password-input"
            required
            value={password}
            onChange={onChangePassword}
            type="password"
          />
        </InputContainer>
        <button
          data-testid="signup-button"
          disabled={!(emailCheck(email) && passwordCheck(password))}>
          회원가입
        </button>
      </form>
    </LoginContainer>
  );
}
