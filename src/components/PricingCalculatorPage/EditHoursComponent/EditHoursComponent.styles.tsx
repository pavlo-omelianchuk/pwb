import Stack from '@mui/material/Stack';
import { Form } from 'formik';
import styled from 'styled-components';
import { DayCardProps } from '../DayCardComponent/DayCard.styles';

export const EditHours = styled.div<DayCardProps>`
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
    margin-top: 15px;
  }
`;

export const StyledForm = styled(Form)<DayCardProps>`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 100%;
  height: fit-content;
  align-items: flex-start;
  flex-direction: row !important;
  margin-top: 0px;
  margin-block-end: 0;

  @media (width < 900px) {
    justify-content: ${props => (props.$isCheckedMulti ? 'flex-end' : 'space-between')};
    gap: 15px;
    flex-wrap: wrap;
    width: 90%;
    height: fit-content;
    margin: 0 auto;
  }
  @media (width < 721px) {
    justify-content: space-between;
    align-items: flex-end;
  }
  @media (width < 650px) {
    width: 100%;
  }
`;
export const StyledStuck = styled(Stack)<DayCardProps>`
  display: flex;
  flex-wrap: nowrap;
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
    width: 100px;
    border-radius: 12px;
    color: #767676;
    background-color: #ebebeb;
    input {
      padding: 3px 0 0 23px;
      font-family: inherit;
      font-size: 14px;
      font-weight: 500;
    }
  }
  @media (width < 900px) {
    flex-direction: column;
    justify-content: space-between;
    width: ${props => (props.$isCheckedMulti ? '100%' : 'fit-content')};
    height: fit-content;
    gap: 15px;

    #sp-from {
      padding-left: 0;
    }
  }
  @media (width < 721px) {
    flex-wrap: wrap;
    width: ${props => (props.$isCheckedMulti ? '50%' : 'fit-content')};
    #morning-hours-block,
    #evening-hours-block {
      /* width: 100%; */
      /* justify-content: space-between; */
    }
  }
  @media (width < 494px) {
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
  width: 128px;
  height: 32px;
  color: white;
  background-color: #f16d4d;
  border-radius: 9px;

  /* svg {
    width: 18px;
  } */
  @media (width < 494px) {
    width: 100%;
  }
`;
