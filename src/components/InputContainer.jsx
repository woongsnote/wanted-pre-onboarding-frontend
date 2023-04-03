import styled from "styled-components"

export default function InputContainer({children}) {
  return (
    <InputWrapper>{children}</InputWrapper>
  )
}

const InputWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items:center;
    justify-content: space-between;
`

