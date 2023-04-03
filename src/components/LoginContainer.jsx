import styled from "styled-components";

export default function LoginContainer({ children }) {
  return (
    <main>
      <LoginWrapper>{children}</LoginWrapper>
    </main>
  );
}

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-itmes: center;
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: 0px 0px 10px;
  margin: 0 auto;
  padding: 20px;
  width: 480px;
  height: 100%;
`;
