import styled from "styled-components";

export const InputField = styled.input`
  font-family: "Inter";
  background: inherit;
  outline: none;
  border: none;
  color: #fff;
  font-size: 18px;
  width: 100%;
  box-sizing: border-box;
  margin: 4px 0;
`;

export const InputContainer = styled.div`
  background-color: #131313;
  padding: 12px 16px;
  border-radius: 10px;
  width: 100%;
`;

export const InputLabel = styled.label`
  display: block;
  color: #8f8f8f;
  font-size: 14px;
  margin: 4px 0;
`;

export const Button = styled.button`
  width: 100%;
  outline: none;
  border: none;
  font-family: "Inter";
  font-size: 16px;
  background-color: #2b09ff;
  color: #fff;
  border-radius: 10px;
  padding: 25px 0;
`;

export const Page = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
