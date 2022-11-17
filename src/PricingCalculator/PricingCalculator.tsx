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

export const PricingCalculator = () => {
  const [sitesValue, setSitesValue] = useState(1);
  const [isMonday, setIsMonday] = useState(true);
  const [isTuesday, setIsTuesday] = useState(true);
  const [isWednesday, setIsWednesday] = useState(true);
  const [isThursday, setIsThursday] = useState(true);
  const [isFriday, setIsFriday] = useState(true);
  const [isSaturday, setIsSaturday] = useState(true);
  const [isSunday, setIsSunday] = useState(true);

  function valuetext(value: number) {
    setSitesValue(value);
    return `${value}`;
  }

  const handleSubmit = (values: any, actions: { setSubmitting: (arg0: boolean) => void }) => {
    console.log({ values, actions });
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);
  };

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

  // const weekdays = ['Monday'];
  const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

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
        <>
          <Heading5 className="heading-5">What days do you open?</Heading5>
          {weekdays.map(day => {
            const [checked, setChecked] = useState(true);
            const [isEdit, setIsEdit] = useState(false);

            const handleSwitch = () => {
              setChecked(prev => !prev);
              if (day === 'Monday') setIsMonday(!checked);
              if (day === 'Tuesday') setIsTuesday(!checked);
              if (day === 'Wednesday') setIsWednesday(!checked);
              if (day === 'Thursday') setIsThursday(!checked);
              if (day === 'Friday') setIsFriday(!checked);
              if (day === 'Saturday') setIsSaturday(!checked);
              if (day === 'Sunday') setIsSunday(!checked);
            };

            const handleEditHours = () => {
              setIsEdit(prev => !prev);
              console.log('first');
            };

            return (
              <DayCardComponent
                key={day}
                day={day}
                isChecked={checked}
                isEdit={isEdit}
                handleSwitch={handleSwitch}
                handleEditHours={handleEditHours}
                handleSubmit={handleSubmit}
              />
            );
          })}
        </>
      </DaysWrapper>
    </SectionWrapper>
  );
};
