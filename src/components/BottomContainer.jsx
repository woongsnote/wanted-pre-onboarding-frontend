import styled from "styled-components";

export default function BottomContainer({ children }) {
  return <Conatiner>{children}</Conatiner>;
}

const Conatiner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-itmes: center;
  padding-top: 16px;
`;
