import { Box, FormGroup } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import { SliderThumb } from '@mui/material/Slider';
import { useState } from 'react';
import {
  DayCard,
  DaysWrapper,
  EditIconHolder,
  Heading5,
  HoursBlock,
  OpenDaySwitch,
  PrimaryButton,
  ResultWrapper,
  SectionWrapper,
  SitesSlider,
  SliderWrapper,
  ToggleDayBlock,
} from './PricingCalculator.styles';

interface PizzaThumbComponentProps extends React.HTMLAttributes<unknown> {}

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

export const PricingCalculator = () => {
  const [sitesValue, setSitesValue] = useState(1);

  function valuetext(value: number) {
    setSitesValue(value);
    return `${value}`;
  }

  function PizzaThumbComponent(props: PizzaThumbComponentProps) {
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

  const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Friday', 'Sunday'];

  return (
    <SectionWrapper>
      <Heading5 className="heading-5">Results</Heading5>
      <div className="container-small">
        <ResultWrapper>
          <div className="heading-4">{sitesValue},000 Orders</div>
          <div className="heading-2 text-orange">£10,000 GMV</div>
          <div>per month</div>
        </ResultWrapper>
      </div>
      <PrimaryButton className="btn-primary w-button">Book a call</PrimaryButton>
      <SliderWrapper>
        <Heading5 className="heading-5">How many sites have you got?</Heading5>
        <Box sx={{ width: '100%', margin: 'auto' }}>
          <SitesSlider
            aria-label="sites"
            defaultValue={1}
            valueLabelDisplay="off"
            getAriaValueText={valuetext}
            step={1}
            min={1}
            max={5}
            marks={marks}
            slots={{ thumb: PizzaThumbComponent }}
            onChange={() => {
              console.log('play sound');
            }}
          />
        </Box>
      </SliderWrapper>
      <DaysWrapper>
        <Heading5 className="heading-5">What days do you open?</Heading5>
        {weekdays.map(day => {
          const [checked, setChecked] = useState(true);
          const handleSwitch = () => {
            setChecked(prev => !prev);
          };

          return (
            <DayCard>
              <ToggleDayBlock>
                <h5>{day}</h5>
                <FormGroup>
                  <FormControlLabel
                    sx={{
                      color: checked ? '#F16D4D' : '#D5D5D5',
                      position: 'absolute',
                      left: '20%',
                      top: '50%',
                      transform: 'translateY(-50%)',
                    }}
                    control={
                      <OpenDaySwitch
                        sx={{ m: 1 }}
                        defaultChecked
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                          handleSwitch();
                        }}
                        checked={checked}
                      />
                    }
                    label={checked ? 'Open' : 'Closed'}
                  />
                </FormGroup>
              </ToggleDayBlock>
              <HoursBlock>
                <span>From 10AM to 12AM</span> • <span>From 10AM to 12AM</span>
                <EditIconHolder>
                  <svg
                    id="Icon_-_Edit"
                    data-name="Icon - Edit"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      id="Rectangle_6968"
                      data-name="Rectangle 6968"
                      width="24"
                      height="24"
                      rx="8"
                      fill="#b5e9cf"
                      opacity="0"
                    />
                    <path
                      id="noun-edit-3094244"
                      d="M78.44-.047a1.944,1.944,0,0,0-1.379.571L70.517,7.068l2.76,2.76,6.544-6.544A1.952,1.952,0,0,0,78.44-.047Zm-8.262,7.7-.2,2.365a.325.325,0,0,0,.351.351l2.363-.2Z"
                      transform="translate(-62.979 7.047)"
                      fill="#1e1e1e"
                    />
                  </svg>
                </EditIconHolder>
              </HoursBlock>
            </DayCard>
          );
        })}
      </DaysWrapper>
    </SectionWrapper>
  );
};
