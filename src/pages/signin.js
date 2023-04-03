import { useEffect, useState } from "react";
import { emailCheck, passwordCheck } from "../utils/validate";
import { signIn } from "../apis/userApi";
import { useNavigate } from "react-router-dom";
import LoginContainer from "../components/LoginContainer";
import InputContainer from "../components/InputContainer";

export default function SignIn() {
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

  /**로그인 */
  const onSubmitSignIn = async (event) => {
    event.preventDefault();
    if (emailCheck(email) && passwordCheck(password)) {
      const response = await signIn(email, password);

      if (response.status === 200) {
        localStorage.setItem("token", response.data.access_token);
        navigate("/todo");
      }
    } else {
      setEmail("");
      setPassword("");
    }
  };

  return (
    <LoginContainer>
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
          disabled={!(emailCheck(email) && passwordCheck(password))}
         >
          로그인
        </button>
      </form>
    </LoginContainer>
  );
}
