import React from "react";
import styled from "styled-components";

export default function MainContainer({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  width: 480px;
  max-width:100%;
  height: 100%;
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.04);
  position: relative;
  border-radius: 16px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 48px;
  margin-bottom: 32px;
`;
