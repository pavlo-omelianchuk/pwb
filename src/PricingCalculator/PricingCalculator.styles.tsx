import Slider from '@mui/material/Slider';
import Switch, { SwitchProps } from '@mui/material/Switch';
import styled from 'styled-components';

export const SectionWrapper = styled.div`
  width: 100%;
  text-align: center;
`;
export const Heading5 = styled.h5`
  width: 100%;
  margin: 0 auto 20px;
  text-align: center;
`;
export const PrimaryButton = styled.a`
  min-width: 253px;
`;

export const ResultWrapper = styled.div`
  background: #ffffff;
  background-image: url('https://uploads-ssl.webflow.com/636333d38401f1c84fb4d0e0/6372c2a9d60cdc4b91d1ab70_Mask%20Group%20793%402x.png');
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 34px;
  gap: 5px;

  height: 170px;
  width: 792px;
  margin: 0 auto 32px;
  border-radius: 15px;
  /* max-width: 90vw; */

  .heading-2 {
    margin-bottom: 0;
  }

  .heading-4 {
    margin-bottom: 5px;
    margin-top: 0;
  }
`;

export const SliderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 80px auto 0;
  width: 755px;
  max-width: 85vw;
`;

export const SitesSlider = styled(Slider)`
  /* & .MuiSlider-root {
display: flex;
flex-direction: column;
justify-content: center;
  } */
  & .MuiSlider-track {
    color: #f16d4d;
    border-radius: 15px 0 0 15px;
    height: 20px;
    position: relative;
    left: -2% !important;
    top: -18px;
  }
  & .MuiSlider-rail {
    color: #fff;
    opacity: 1;
    border-radius: 15px;
    height: 20px;
    width: 104%;
    position: relative;
    left: -2%;
  }
  & .MuiSlider-mark {
    display: none;
  }
  & .MuiSlider-markLabel {
    margin-top: 16.7px;
    font-size: 18px;
    font-weight: 500;
    font-family: inherit;

    &:focus,
    &:hover,
    &.Mui-active,
    &.Mui-focusVisible {
      color: black;
    }
  }
  & .MuiSlider-thumb {
    height: 42px;
    width: 42px;
    background-color: transparent;

    &:focus,
    &:hover,
    &.Mui-active,
    &.Mui-focusVisible {
      box-shadow: inherit;
    }
  }
`;

export const DaysWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 80px auto 0;
  width: 792px;
  max-width: 85vw;
`;
type DayCardProps = {
  isEdit: boolean;
};

export const DayCard = styled.div<DayCardProps>`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: ${props => (props.isEdit ? '172px ' : '88px')};
  padding: 27px 33px;
  background-color: white;
  border-radius: 15px;
  margin-bottom: 20px;
`;
export const ToggleDayBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;
export const HoursBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  span {
    position: relative;
    top: 4px;
  }
`;
export const EditIconHolder = styled.div`
  cursor: pointer;
  svg {
    &:hover rect {
      /* opacity: 0.5; */
    }
    &:hover path {
      fill: black;
    }
  }
`;

export const EditHours = styled.div`
  display: flex;
  position: absolute;
  top: 84px;
`;
export const MorningHours = styled.div`
  display: flex;
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
    transition-duration: 300ms;
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
    border-radius: 26/2;
    background-color: #ebebeb;
    opacity: 1;
    transition-duration: all 300ms;
  }
  .MuiFormControlLabel-label {
    color: red !important;
  }
`;
