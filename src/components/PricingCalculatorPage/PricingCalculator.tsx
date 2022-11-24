import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { ThemeProvider } from '@mui/material/styles';
import dayjs, { Dayjs } from 'dayjs';
import { useEffect, useState } from 'react';
import { theme } from 'src/assets/themeMUI/createTheme';
import { GMV_RATE, marks, resultBlockIcons, weekdays, WEEKS_IN_MONTH } from 'src/helpers/constants';
import { countTotalMeals } from 'src/helpers/countTotalMeals';
import { playSound } from 'src/helpers/playSound';
import { DayCardComponent } from './DayCardComponent/DayCard';
import { CheckedIcon, StyledCheckbox } from './DayCardComponent/DayCard.styles';
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
    {
      day: 'Monday',
      isChecked: true,
      totalMeals: 76,
      workingHours: [...Array(24).keys()],
      timeTable: ['12AM', '12AM', null, null],
      timeValues: [
        dayjs('2022-01-01T00:00:00.000Z'),
        dayjs('2022-01-01T00:00:00.000Z'),
        dayjs('2022-01-01T12:00:00.000Z'),
        dayjs('2022-01-01T00:00:00.000Z'),
      ],
    },
    {
      day: 'Tuesday',
      isChecked: true,
      totalMeals: 80,
      workingHours: [...Array(24).keys()],
      timeTable: ['12AM', '12AM', null, null],
      timeValues: [
        dayjs('2022-01-01T00:00:00.000Z'),
        dayjs('2022-01-01T00:00:00.000Z'),
        dayjs('2022-01-01T12:00:00.000Z'),
        dayjs('2022-01-01T00:00:00.000Z'),
      ],
    },
    {
      day: 'Wednesday',
      isChecked: true,
      totalMeals: 78,
      workingHours: [...Array(24).keys()],
      timeTable: ['12AM', '12AM', null, null],
      timeValues: [
        dayjs('2022-01-01T00:00:00.000Z'),
        dayjs('2022-01-01T00:00:00.000Z'),
        dayjs('2022-01-01T12:00:00.000Z'),
        dayjs('2022-01-01T00:00:00.000Z'),
      ],
    },
    {
      day: 'Thursday',
      isChecked: true,
      totalMeals: 89,
      workingHours: [...Array(24).keys()],
      timeTable: ['12AM', '12AM', null, null],
      timeValues: [
        dayjs('2022-01-01T00:00:00.000Z'),
        dayjs('2022-01-01T00:00:00.000Z'),
        dayjs('2022-01-01T12:00:00.000Z'),
        dayjs('2022-01-01T00:00:00.000Z'),
      ],
    },
    {
      day: 'Friday',
      isChecked: true,
      totalMeals: 102,
      workingHours: [...Array(24).keys()],
      timeTable: ['12AM', '12AM', null, null],
      timeValues: [
        dayjs('2022-01-01T00:00:00.000Z'),
        dayjs('2022-01-01T00:00:00.000Z'),
        dayjs('2022-01-01T12:00:00.000Z'),
        dayjs('2022-01-01T00:00:00.000Z'),
      ],
    },
    {
      day: 'Saturday',
      isChecked: true,
      totalMeals: 107,
      workingHours: [...Array(24).keys()],
      timeTable: ['12AM', '12AM', null, null],
      timeValues: [
        dayjs('2022-01-01T00:00:00.000Z'),
        dayjs('2022-01-01T00:00:00.000Z'),
        dayjs('2022-01-01T12:00:00.000Z'),
        dayjs('2022-01-01T00:00:00.000Z'),
      ],
    },
    {
      day: 'Sunday',
      isChecked: true,
      totalMeals: 117,
      workingHours: [...Array(24).keys()],
      timeTable: ['12AM', '12AM', null, null],
      timeValues: [
        dayjs('2022-01-01T00:00:00.000Z'),
        dayjs('2022-01-01T00:00:00.000Z'),
        dayjs('2022-01-01T12:00:00.000Z'),
        dayjs('2022-01-01T00:00:00.000Z'),
      ],
    },
  ]);

  const [gmv, setGmv] = useState(51988);
  const [totalOrders, setTotalOrders] = useState(2810);

  const [checkedSameEveryDay, setCheckedSameEveryDay] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

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

  const updateFormValues = (day: string, isChecked: boolean, workingHours: number[], timeTable: string[], timeValues: Dayjs | null) => {
    setFormValues(
      [...formValues].map(object => {
        if (object.day === day) {
          const orders = countTotalMeals({
            day,
            workingHours,
          });
          return {
            ...object,
            totalMeals: orders,
            isChecked: isChecked,
            workingHours: workingHours,
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
          {resultBlockIcons.map((image: any, key: number) => {
            return <img src={image} id={`icon-${key.toLocaleString()}`} width="50px" />;
          })}
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
              if (!isPlaying) {
                setIsPlaying(true);
                playSound();
              } else {
                setTimeout(() => {
                  setIsPlaying(false);
                }, 1000);
              }
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
                formValues={formValues}
                updateFormValues={updateFormValues}
                setCheckedSameEveryDay={setCheckedSameEveryDay}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
              />
            );
          })}
          <ThemeProvider theme={theme}>
            <StyledCheckbox isEdit flexEnd>
              <FormControlLabel
                value="Same every day"
                control={
                  <Checkbox
                    checked={checkedSameEveryDay}
                    onChange={() => {
                      setCheckedSameEveryDay(prev => !prev);
                      const mondaysDayCheck: boolean = [...formValues].map(day => {
                        if (day.day === 'Monday') {
                          return day.isChecked;
                        } else return;
                      })[0];

                      const mondaysWorkingHours = [...formValues].map(day => {
                        if (day.day === 'Monday') {
                          return day.workingHours;
                        }
                      })[0];
                      console.log(mondaysWorkingHours);

                      formValues.forEach(object => {
                        if (object.day !== 'Monday') {
                          console.log(object.day, mondaysDayCheck, mondaysWorkingHours);
                          setFormValues(
                            [...formValues].map(object => {
                              if (object.day !== 'Monday') {
                                const orders = countTotalMeals({
                                  day: object.day,
                                  workingHours: mondaysWorkingHours,
                                });
                                return {
                                  ...object,
                                  totalMeals: orders,
                                  isChecked: mondaysDayCheck,
                                  workingHours: mondaysWorkingHours,
                                };
                              } else return object;
                            }),
                          );
                        }
                      });
                    }}
                    inputProps={{ 'aria-label': 'controlled' }}
                    checkedIcon={<CheckedIcon sameEveryDay />}
                  />
                }
                label="Same every day"
                labelPlacement="end"
              />
            </StyledCheckbox>
          </ThemeProvider>
        </>
      </DaysWrapper>
    </SectionWrapper>
  );
};
