import FormControlLabel from '@mui/material/FormControlLabel';
import Switch, { SwitchProps } from '@mui/material/Switch';
import styled from 'styled-components';

type CheckedIconProps = {
  sameEveryDay?: boolean;
};

export type DayCardProps = {
  isEdit?: boolean;
  checkedDay?: boolean;
  flexEnd?: boolean;
};

export const CheckedIcon = styled.div<CheckedIconProps>`
  display: block;
  width: 20px;
  height: 20px;
  margin: 2px;
  border-radius: 4px;
  border: 2px solid #e6e6e6;
  background-color: #f16d4d;
  ${props =>
    props.sameEveryDay &&
    `
    width: 24px;
    height: 24px;
    margin: 0px;
    border-radius: 8px;
    border: 3px solid #FFFFFF;
    `}
`;

export const DayCard = styled.div<DayCardProps>`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  transition: height 1s;
  height: ${props => (props.isEdit ? '172px ' : '88px')};
  padding: 27px 33px;
  background-color: white;
  border-radius: 15px;
  margin-bottom: 20px;

  hr {
    border-color: #ebebeb;
    width: 100%;
    margin: 20px 0;
    display: ${props => (props.isEdit ? 'block ' : 'none')};
    transition: all ease-in-out 500ms;
  }
  @media (width < 900px) {
    transition: all ease-in-out 500ms;
    padding: 19px 15px;
    min-height: ${props => (props.checkedDay ? '123px ' : '0px')};
    height: ${props => (props.isEdit ? '292px ' : '0px')};
    /* border: 1px solid #4cfe00; */
  }
`;

export const ToggleDayBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
  h5 {
    font-size: inherit;
  }
  @media (width < 900px) {
    width: 80%;
    margin: 0 auto;
    justify-content: space-between;
  }
  @media (width < 650px) {
    width: 95%;
  }
`;

export const DisplayHoursBlockWrapper = styled.div<DayCardProps>`
  transition: all ease-in-out 1000ms;
  opacity: ${props => (props.checkedDay ? '1 ' : '0')};
  position: relative;
  top: ${props => (props.checkedDay ? '0 ' : '-5px')};

  @media (width < 900px) {
    width: 80%;
    display: flex;
    margin: 0 auto;

    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 15px;
  }
  @media (width < 650px) {
    width: 95%;
  }
`;

export const StyledFormControlLabel = styled(FormControlLabel)`
  position: absolute;
  left: 20%;
  top: 20px;
  @media (width < 900px) {
    position: relative;
    left: 0;
    top: 0;
    width: 100%;
    margin: 0 !important;
    /* border: 1px solid #000; */
  }
`;

export const DisplayHoursBlock = styled.div<DayCardProps>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  transition: display ease-in-out 500ms;
  display: ${props => (props.isEdit ? 'none ' : 'flex')};

  span {
    position: relative;
    top: 4px;
    font-size: 14px;
  }
  @media (width < 900px) {
    width: 100%;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
  }
`;
export const MultiOpeningsOption = styled.div<DayCardProps>`
  display: ${props => (props.isEdit ? 'flex' : 'none')};
  flex-direction: row;
  justify-content: ${props => (props.flexEnd ? 'flex-end' : 'flex-start')};
  align-items: center;
  gap: 15px;

  label {
    margin: 0;

    .MuiFormControlLabel-label {
      position: relative;
      font-size: 18px;
      font-weight: 500;
      top: 2px;
    }
  }
  @media (width < 900px) {
    label {
      & > span {
        padding-left: 0;
        margin-left: -4px;
      }
    }
  }
`;
export const EditIconHolder = styled.div`
  cursor: pointer;
  svg {
    &:hover path {
      fill: black;
    }
  }
`;

export const OpenDaySwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))`
  top: 0;
  width: 69px !important;
  height: 32px !important;
  padding: 0 !important;
  border-radius: 15px;

  & .MuiSwitch-switchBase {
    padding: 3.5px !important;

    &.Mui-checked {
      transform: translateX(37px);
      color: #f16d4d;
      & + .MuiSwitch-track {
        background-color: #f6cec4;
        opacity: 1;
        border: 0;
      }
      &.Mui-disabled + .MuiSwitch-track {
        opacity: 0.5;
      }
    }
    &.Mui-focusVisible .MuiSwitch-thumb {
      color: #f16d4d !important;
      border: 6px solid #fff;
    }
  }

  & .MuiSwitch-thumb {
    box-sizing: border-box;
    width: 24px;
    height: 24px;
    background-color: ${props => (props.checked ? '#F16D4D' : '#A7A7A7')};
  }

  & .MuiSwitch-track {
    /* border-radius: 26, 2; */
    background-color: #ebebeb;
    opacity: 1;
  }
`;
