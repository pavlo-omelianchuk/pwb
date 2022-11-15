import Box from '@mui/material/Box';
import { SliderThumb } from '@mui/material/Slider';
import {
  Heading5,
  PrimaryButton,
  ResultWrapper,
  SectionWrapper,
  SitesSlider,
  SliderWrapper,
} from './PricingCalculator.styles';

export const PricingCalculator = () => {
  const marks = [
    {
      value: 0,
      label: '0',
    },
    {
      value: 1,
      label: '1',
    },
    {
      value: 2,
      label: '2',
    },
    {
      value: 3,
      label: '3',
    },
    {
      value: 4,
      label: '4',
    },
    {
      value: 5,
      label: '5+',
    },
  ];
  function valuetext(value: number) {
    return `${value}`;
  }

  interface AirbnbThumbComponentProps extends React.HTMLAttributes<unknown> {}

  function AirbnbThumbComponent(props: AirbnbThumbComponentProps) {
    const { children, ...other } = props;
    return (
      <SliderThumb {...other}>
        {children}
        <img
          loading="lazy"
          src="https://uploads-ssl.webflow.com/636333d38401f1c84fb4d0e0/6373a93204ec08003472ae81_Group%2018441.svg"
          alt=""
        />
      </SliderThumb>
    );
  }

  return (
    <SectionWrapper>
      <Heading5 className="heading-5">Results</Heading5>
      <div className="container-small">
        <ResultWrapper>
          <div className="heading-4">1,000 Orders</div>
          <div className="heading-2 text-orange">£10,000 GMV</div>
          <div>per month</div>
        </ResultWrapper>
      </div>
      <PrimaryButton className="btn-primary w-button">Book a call</PrimaryButton>
      <SliderWrapper>
        <Heading5 className="heading-5">How many sites have you got?</Heading5>
        <Box sx={{ width: 792, margin: 'auto' }}>
          <SitesSlider
            aria-label="sites"
            defaultValue={1}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            step={1}
            min={1}
            max={5}
            marks={marks}
            slots={{ thumb: AirbnbThumbComponent }}
          />
        </Box>
      </SliderWrapper>
    </SectionWrapper>
  );
};
