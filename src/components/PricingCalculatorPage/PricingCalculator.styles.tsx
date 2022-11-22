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
  visibility: hidden;
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


