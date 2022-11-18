import Stack from '@mui/material/Stack';
import { Form } from 'formik';
import styled from 'styled-components';
import { DayCardProps } from './PricingCalculator.styles';

export const StyledStuck = styled(Stack)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 33px;
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
    font-family: inherit;
    input {
      padding: 3px 0 0 26px;
    }
  }
`;
export const StyledForm = styled(Form)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  height: 33px;
  align-items: flex-start;
  flex-direction: row !important;
  margin-top: 0px;
  margin-block-end: 0;
`;
export const EditHours = styled.div<DayCardProps>`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 33px;
  transition: all 900ms;

  opacity: ${props => (props.isEdit ? '1' : '0')};
  display: ${props => (props.isEdit ? 'flex' : 'none')};
`;
export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  background-color: #f16d4d;
  border-radius: 9px;

  svg {
    width: 18px;
  }
`;
