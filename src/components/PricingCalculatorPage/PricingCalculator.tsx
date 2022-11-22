import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { ThemeProvider } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { theme } from 'src/assets/themeMUI/createTheme';
import { GMV_RATE, marks, weekdays, WEEKS_IN_MONTH } from 'src/helpers/constants';
import { playSound } from 'src/helpers/playSound';
import { DayCardComponent } from './DayCardComponent/DayCard';
import { CheckedIcon, MultiOpeningsOption } from './DayCardComponent/DayCard.styles';
import { PizzaThumbComponent } from './PizzaComponent/PizzaComponent';
import {
  DaysWrapper,
  Heading5,
  PrimaryButton,
  ResultWrapper,
  SectionWrapper,
  SitesSlider,
  SliderWrapper,
} from './PricingCalculator.styles';

export const PricingCalculator = () => {
  const [sitesValue, setSitesValue] = useState(1);
  const [formValues, setFormValues] = useState<any[]>([
    { day: 'Monday', isChecked: true, totalMeals: 76 },
    { day: 'Tuesday', isChecked: true, totalMeals: 80 },
    { day: 'Wednesday', isChecked: true, totalMeals: 78 },
    { day: 'Thursday', isChecked: true, totalMeals: 89 },
    { day: 'Friday', isChecked: true, totalMeals: 102 },
    { day: 'Saturday', isChecked: true, totalMeals: 107 },
    { day: 'Sunday', isChecked: true, totalMeals: 117 },
  ]);

  const [gmv, setGmv] = useState(51988);
  const [totalOrders, setTotalOrders] = useState(2810);

  const [checkedSameEveryDay, setCheckedSameEveryDay] = useState(true);

  useEffect(() => {
    const totalMeals =
      Array.from(
        formValues.map(day => {
          return day.totalMeals;
        }),
      ).reduce((a, b) => a + b, 0) *
      WEEKS_IN_MONTH *
      sitesValue;
    setTotalOrders(totalMeals);
    setGmv(totalMeals * GMV_RATE);
    return () => {};
  }, [formValues, sitesValue]);

  function valuetext(value: number) {
    setSitesValue(value);
    return `${value}`;
  }

  console.log(formValues);

  const updateFormValues = (day: string, isChecked: boolean, totalMeals?: number) => {
    setFormValues(
      [...formValues].map(object => {
        if (object.day === day) {
          return {
            ...object,
            totalMeals: totalMeals,
            isChecked: isChecked,
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
          <div className="heading-4">{Math.round(totalOrders)?.toLocaleString()} Orders</div>
          <div className="heading-2 text-orange">£{Math.round(gmv)?.toLocaleString()} GMV</div>
          <div>per month</div>
        </ResultWrapper>
      </div>
      {/* Button is invisible here, to hold a space. Will be rendered in Webflow  */}
      <PrimaryButton className="btn-primary w-button">Book a call</PrimaryButton>
      {/* Section that renders sites qty, that user have, based on slider position from 1 to 5+
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
              playSound();
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
                key={day}
                day={day}
                updateFormValues={updateFormValues}
                checkedSameEveryDay={checkedSameEveryDay}
                setCheckedSameEveryDay={setCheckedSameEveryDay}
              />
            );
          })}
          <ThemeProvider theme={theme}>
            <MultiOpeningsOption isEdit flexEnd>
              <FormControlLabel
                value="Same every day"
                control={
                  <Checkbox
                    checked={checkedSameEveryDay}
                    onChange={() => {
                      setCheckedSameEveryDay(prev => !prev);
                    }}
                    inputProps={{ 'aria-label': 'controlled' }}
                    checkedIcon={<CheckedIcon sameEveryDay />}
                  />
                }
                label="Same every day"
                labelPlacement="end"
              />
            </MultiOpeningsOption>
          </ThemeProvider>
        </>
      </DaysWrapper>
    </SectionWrapper>
  );
};
