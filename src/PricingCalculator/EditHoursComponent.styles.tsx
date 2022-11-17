import Stack from '@mui/material/Stack';
import { Form } from 'formik';
import styled from 'styled-components';

export const StyledStuck = styled(Stack)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center !important;
  flex-direction: row !important;

  label {
    font-family: inherit;
    font-size: 14px;
    font-weight: 500;
    padding: 15px 10px;
    margin: 0;
    color: #1e1e1e;
    :first-child {
      padding-left: 0;
    }
  }
  #sp-from {
    padding-left: 24px;
  }

  .MuiInputBase-root {
    height: 32px;
    width: 120px;
    border-radius: 12px;
    color: #767676;
    background-color: #ebebeb;
  }
`;
export const StyledForm = styled(Form)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  flex-direction: row !important;
`;
export const StyledButton = styled.button`
  width: 32px;
  height: 32px;
  background-color: #f16d4d;
  border-radius: 9px;
  padding: 0 5px 0;
  svg {
    width: 18px;
  }
`;
