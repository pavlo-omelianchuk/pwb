import Stack from '@mui/material/Stack';
import { Form } from 'formik';
import styled from 'styled-components';
import { DayCardProps } from '../DayCardComponent/DayCard.styles';

export const EditHours = styled.div<DayCardProps>`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: fit-content;
  transition: all ease-in-out 1s;
  position: absolute;
  top: -5000px;

  ${props =>
    props.isEdit &&
    `
    position: static;
    `}

  opacity: ${props => (props.isEdit ? '1' : '0')};
  @media (width < 900px) {
    width: 80%;
    margin: auto;
  }
  @media (width < 650px) {
    width: 100%;
    margin: 14px 0 0;
  }
`;

//
export const StyledForm = styled(Form)<DayCardProps>`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  height: fit-content;
  align-items: flex-start;
  flex-direction: row !important;
  margin-top: 0px;
  margin-block-end: 0;

  @media (width < 900px) {
    justify-content: ${props => (props.checkedMulti ? 'flex-end' : 'space-between')};
    gap: 15px;
    /* width: 80%;
    justify-content: center;
    height: fit-content; */
  }
  @media (width < 430px) {
    justify-content: flex-end;
  }
`;
export const StyledStuck = styled(Stack)<DayCardProps>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row !important;

  #morning-hours-block,
  #evening-hours-block {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-content: center;

    height: 33px;
  }
  label {
    font-family: inherit;
    font-size: 14px;
    font-weight: 500;
    padding: 15px 8px;
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
    input {
      padding: 3px 0 0 26px;
      font-family: inherit;
      font-size: 14px;
      font-weight: 500;
    }
  }
  @media (width < 900px) {
    flex-direction: column;
    justify-content: center;
    height: fit-content;
    gap: 15px;

    #sp-from {
      padding-left: 0;
    }
  }
  @media (width < 430px) {
    width: 100%;
    #morning-hours-block,
    #evening-hours-block {
      width: 100%;
      justify-content: space-between;
    }
  }
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
  @media (width < 900px) {
    justify-content: flex-start;
  }
`;
