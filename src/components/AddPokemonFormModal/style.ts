import styled from "styled-components";
import { ModalWrapperProps } from "./definitions";

export const ModalWrapper = styled.div<ModalWrapperProps>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.7);
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

export const ModalBody = styled.div`
  background-color: rgb(18, 29, 51);
  color: white;
  border-radius: 1rem;
  overflow: hidden;
  max-width: 450px;
  width: 100%;
  padding: 1.5rem;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;
  position: relative;
`;

export const SubmitBtn = styled.input`
  background-color: #30a7bd;
  color: white;
  border: 1px solid transparent;
  font-weight: bold;
  font-size: 0.875rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  border-radius: 0.5rem;
  cursor: pointer;
  height: 37px;
  display: flex;
  align-items: center;
  min-width: 100px;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  margin: 0;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  img {
    width: 33px;
    position: relative;
  }
`;

export const Fieldset = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    font-size: 0.875rem;
    font-weight: bold;
  }

  input[type="text"],
  input[type="number"] {
    background-color: transparent;
    border: 1px solid white;
    padding: 0.625rem 0.75rem;
    border-radius: 0.5rem;
    color: white;
    font-weight: bold;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export const CloseBtn = styled.button`
  background: transparent;
  color: white;
  border: 0;
  font-weight: bold;
  font-size: 1rem;
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  cursor: pointer;
`;
