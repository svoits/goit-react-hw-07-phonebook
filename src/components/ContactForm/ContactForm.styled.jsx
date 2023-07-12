import styled from '@emotion/styled';
import { Field, Form, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  align-items: center;
  border: 1px black solid;
  border-radius: 5px;
  padding: 15px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  row-gap: 2px;
  color: white;
`;

export const Input = styled(Field)`
  min-width: 300px;
  min-height: 26px;
  padding: 1px 5px;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  border-width: 0;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 120px;
  min-height: 30px;
  margin: 0;

  background-color: white;
  border: 2px black solid;
  border-radius: 5px;
  cursor: pointer;

  font-size: 16px;
  font-family: inherit;
`;

export const StyledError = styled(ErrorMessage)`
  font-size: 14px;
  color: black;
  max-width: 300px;
`;
