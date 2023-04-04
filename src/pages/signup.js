import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { emailCheck, passwordCheck } from "../utils/validate";
import { signUp } from "../apis/userApi";
import InputContainer from "../components/InputContainer";
import MainContainer from "../components/MainContainer";
import BottomContainer from "../components/BottomContainer";

export default function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      navigate("/todo");
    }
  });

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
    <MainContainer>
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
      <BottomContainer>
        <p>이미 계정이 있으신가요?</p>
        <button onClick={() => navigate("/signin")}>로그인</button>
      </BottomContainer>
    </MainContainer>
  );
}
