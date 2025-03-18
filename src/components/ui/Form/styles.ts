import styled from "styled-components";

export const FormContainer = styled.div`
  max-width: 654px;
  width: 100%;
  margin: 0 auto;

  select {
    border-radius: 4px;
    border: 1px solid transparent;
    padding: 1rem;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    border: #242424 2px solid;
    transition: border-color 0.25s;
  }

  select:hover {
    border-color: #646cff;
    background-color: #1a1a1a;
  }

  option {
    font-size: large;
  }

  option:hover {
    background-color: #646cff;
  }
`;

export const FormHeader = styled.header`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 1rem;
  border-bottom: 2px solid #646cff;
  max-width: 350px;
  width: 100%;
  font-size: clamp(0.8rem, 2vw, 1rem);
`;

export const FormGroup = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;

  @media (width <= 768px) {
    flex-direction: column;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 8px;
  justify-content: center;
  align-items: left;
  gap: 1rem;
  background-color: #1a1a1a;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  border-radius: 4px;
  border: 1px solid transparent;
  font-size: large;
  padding: 1rem;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  border: #242424 2px solid;
  transition: border-color 0.25s;

  &:hover {
    border-color: #646cff;
    background-color: #242424;
  }

  &:focus,
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
    background-color: #242424;
  }

  &[type="submit"] {
    background-color: #646cff;
    color: white;
    border: none;
    cursor: pointer;
    transition: background-color 0.25s;
    max-width: 100px;
    width: 100%;
    margin: 1rem 1.6rem;
  }

  &[type="submit"]:hover {
    background-color: #535bf2;
  }
`;

export const Error = styled.span`
  color: #e74c3c;
  margin-top: 0.3rem;
  font-size: 0.85rem;
`;

export const SubmitButton = styled.button`
  background-color: #646cff;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #646cd9;
  }
`;
