import { Box } from '@mui/material';
import { SliderThumb } from '@mui/material/Slider';
import { useState } from 'react';
import { DayCardComponent } from './DayCard';
import {
  DaysWrapper,
  Heading5,
  PrimaryButton,
  ResultWrapper,
  SectionWrapper,
  SitesSlider,
  SliderWrapper,
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
export const weekdays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

export const PricingCalculator = () => {
  const [sitesValue, setSitesValue] = useState(1);
  const [formValues, setFormValues] = useState<any[]>([
    { day: 'Monday', isChecked: true, totalMeals: 0 },
    { day: 'Tuesday', isChecked: true, totalMeals: 0 },
    { day: 'Wednesday', isChecked: true, totalMeals: 0 },
    { day: 'Thursday', isChecked: true, totalMeals: 0 },
    { day: 'Friday', isChecked: true, totalMeals: 0 },
    { day: 'Saturday', isChecked: true, totalMeals: 0 },
    { day: 'Sunday', isChecked: true, totalMeals: 0 },
  ]);

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

  console.log(formValues);
  const updateTotalWorkingHours = (day: string) => {
    setFormValues(
      [...formValues].map(object => {
        if (object.day === day) {
          return {
            ...object,
            isChecked: !object.isChecked,
          };
        } else return object;
      }),
    );
  };
  return (
    <SectionWrapper>
      <Heading5 className="heading-5">Results</Heading5>
      <div className="container-small">
        {/* Section that renders results. Orders qty and GMV in pounds      */}
        <ResultWrapper>
          <div className="heading-4">{sitesValue},000 Orders</div>
          <div className="heading-2 text-orange">£10,000 GMV</div>
          <div>per month</div>
        </ResultWrapper>
      </div>
      <PrimaryButton className="btn-primary w-button">Book a call</PrimaryButton>
      {/* Section that renders sites user has, based on slider position from 1 to 5+
      where 5+ means 5
      */}
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
      {/* Section that renders days list Enabled by default  with full day opening hours */}
      <DaysWrapper>
        <>
          <Heading5 className="heading-5">What days do you open?</Heading5>
          {weekdays.map(day => {
            return (
              <DayCardComponent
                sitesValue={sitesValue}
                key={day}
                day={day}
                updateTotalWorkingHours={updateTotalWorkingHours}
              />
            );
          })}
        </>
      </DaysWrapper>
    </SectionWrapper>
  );
};
