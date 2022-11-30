import Slider from '@mui/material/Slider';
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
  position: relative;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 34px;
  gap: 5px;
  overflow: hidden;
  height: 170px;
  max-width: 792px;
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

  & #icon-0 {
    position: absolute;
    left: -19px;
    bottom: -28px;
    width: 121px;
    z-index: 2;
  }
  & #icon-1 {
    position: absolute;
    left: 65px;
    bottom: -31px;
    width: 83px;
    z-index: 2;
  }
  & #icon-2 {
    position: absolute;
    left: 112px;
    bottom: -38px;
    width: 80px;
    z-index: 1;
  }
  & #icon-3 {
    position: absolute;
    left: 160px;
    bottom: -16px;
    width: 80px;
    z-index: 2;
    transform: rotate(338deg);
  }
  & #icon-4 {
    position: absolute;
    right: 138px;
    bottom: -33px;
    width: 85px;
    z-index: 2;
  }
  & #icon-5 {
    position: absolute;
    right: 94px;
    bottom: -34px;
    width: 83px;
    z-index: 2;
  }
  & #icon-6 {
    position: absolute;
    right: 49px;
    bottom: -25px;
    width: 71px;
    z-index: 2;
  }
  & #icon-7 {
    position: absolute;
    right: -9px;
    bottom: -16px;
    width: 80px;
    z-index: 1;
  }

  @media (width < 650px) {
    justify-content: center;
    height: 280px;
    margin: 0;
    padding: 0;
    & #icon-4 {
      position: absolute;
      right: 138px;
      top: -33px;
      width: 85px;
      z-index: 2;
      transform: rotate(182deg);
    }
    & #icon-5 {
      position: absolute;
      right: 98px;
      top: -34px;
      width: 83px;
      z-index: 2;
      transform: rotate(208deg);
    }
    & #icon-6 {
      position: absolute;
      right: 59px;
      top: -25px;
      width: 71px;
      z-index: 2;
      transform: rotate(229deg);
    }
    & #icon-7 {
      position: absolute;
      right: -9px;
      top: -16px;
      width: 80px;
      z-index: 1;
    }
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
  max-width: 792px;
  /* max-width: 85vw; */
  @media (width < 900px) {
    /* max-width: 100vw; */
  }
`;
