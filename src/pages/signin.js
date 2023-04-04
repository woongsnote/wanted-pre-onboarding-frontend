import { useEffect, useState } from "react";
import { emailCheck, passwordCheck } from "../utils/validate";
import { signIn } from "../apis/userApi";
import { useNavigate } from "react-router-dom";
import InputContainer from "../components/InputContainer";
import MainContainer from "../components/MainContainer";
import BottomContainer from "../components/BottomContainer";

export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      navigate("/todo");
    }
  }, [navigate]);

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  /**로그인 */
  const onSubmitSignIn = async (event) => {
    event.preventDefault();
    if (emailCheck(email) && passwordCheck(password)) {
      await signIn(email, password)
        .then((response) => {
          localStorage.setItem("access_token", response.data.access_token);
        })
        .then(() => navigate("/todo"));
    } else {
      setEmail("");
      setPassword("");
    }
  };

  return (
    <MainContainer>
      <h2>로그인</h2>
      <form onSubmit={onSubmitSignIn}>
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
          data-testid="signin-button"
          disabled={!(emailCheck(email) && passwordCheck(password))}>
          로그인
        </button>
      </form>
      <BottomContainer>
        <p>아직 계정이 없으신가요?</p>
        <button onClick={() => navigate("/signup")}>회원가입</button>
      </BottomContainer>
    </MainContainer>
  );
}
