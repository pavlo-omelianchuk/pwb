import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { ThemeProvider } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { theme } from 'src/assets/themeMUI/createTheme';
import {
  MARKS,
  RESULT_BLOCK_ICONS,
  TIME_VALUES,
  WEEKDAYS,
  WEEKS_IN_MONTH,
} from 'src/helpers/constants';
import { countTotalMeals } from 'src/helpers/countTotalMeals';
import { getContent } from 'src/helpers/languageContent';
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
  const initialValues = [
    {
      day: WEEKDAYS[0],
      isChecked: true,
      isCheckedMulti: false,
      totalMeals: 76,
      workingHours: [...Array(24).keys()],

      timeValues: [
        TIME_VALUES.morningStartTimeValue,
        TIME_VALUES.morningEndTimeValue,
        TIME_VALUES.eveningStartTimeValue,
        TIME_VALUES.eveningEndTimeValue,
      ],
    },
    {
      day: WEEKDAYS[1],
      isChecked: true,
      isCheckedMulti: false,
      totalMeals: 80,
      workingHours: [...Array(24).keys()],
      timeValues: [
        TIME_VALUES.morningStartTimeValue,
        TIME_VALUES.morningEndTimeValue,
        TIME_VALUES.eveningStartTimeValue,
        TIME_VALUES.eveningEndTimeValue,
      ],
    },
    {
      day: WEEKDAYS[2],
      isChecked: true,
      isCheckedMulti: false,
      totalMeals: 78,
      workingHours: [...Array(24).keys()],
      timeValues: [
        TIME_VALUES.morningStartTimeValue,
        TIME_VALUES.morningEndTimeValue,
        TIME_VALUES.eveningStartTimeValue,
        TIME_VALUES.eveningEndTimeValue,
      ],
    },
    {
      day: WEEKDAYS[3],
      isChecked: true,
      isCheckedMulti: false,
      totalMeals: 89,
      workingHours: [...Array(24).keys()],
      timeValues: [
        TIME_VALUES.morningStartTimeValue,
        TIME_VALUES.morningEndTimeValue,
        TIME_VALUES.eveningStartTimeValue,
        TIME_VALUES.eveningEndTimeValue,
      ],
    },
    {
      day: WEEKDAYS[4],
      isChecked: true,
      isCheckedMulti: false,
      totalMeals: 102,
      workingHours: [...Array(24).keys()],
      timeValues: [
        TIME_VALUES.morningStartTimeValue,
        TIME_VALUES.morningEndTimeValue,
        TIME_VALUES.eveningStartTimeValue,
        TIME_VALUES.eveningEndTimeValue,
      ],
    },
    {
      day: WEEKDAYS[5],
      isChecked: true,
      isCheckedMulti: false,
      totalMeals: 107,
      workingHours: [...Array(24).keys()],
      timeValues: [
        TIME_VALUES.morningStartTimeValue,
        TIME_VALUES.morningEndTimeValue,
        TIME_VALUES.eveningStartTimeValue,
        TIME_VALUES.eveningEndTimeValue,
      ],
    },
    {
      day: WEEKDAYS[6],
      isChecked: true,
      isCheckedMulti: false,
      totalMeals: 117,
      workingHours: [...Array(24).keys()],
      timeValues: [
        TIME_VALUES.morningStartTimeValue,
        TIME_VALUES.morningEndTimeValue,
        TIME_VALUES.eveningStartTimeValue,
        TIME_VALUES.eveningEndTimeValue,
      ],
    },
  ];
  const [sitesValue, setSitesValue] = useState(1);
  const [formValues, setFormValues] = useState<any[]>(initialValues);

  const [gmv, setGMV] = useState(51988);
  const [totalOrders, setTotalOrders] = useState(2810);

  const [checkedSameEveryDay, setCheckedSameEveryDay] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [documentLang, setDocumentLang] = useState('en');

  // const documentLanguage = document.documentElement.lang || 'en';
  setTimeout(() => {
    const documentLanguage = document.documentElement.lang || 'en';
    setDocumentLang(documentLanguage);
    console.log('documentLanguage is', documentLanguage);
  }, 500);

  const { result, orders, perMonth, howManySites, whatDaysOpen, sameEveryDay, aov, symbol } =
    getContent(documentLang);

  console.log('current AOV_MULTIPLIER is', aov);
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
    setGMV(totalMeals * aov);
    return () => {};
  }, [formValues, sitesValue, documentLang]);

  function valuetext(value: number) {
    setSitesValue(value);
    return `${value}`;
  }
  console.log(formValues);

  const updateFormValues = (day: string, isChecked: boolean, workingHours: number[]) => {
    if (!workingHours) {
      setFormValues(
        [...formValues].map(object => {
          if (object.day === day) {
            const initialTimeValues = initialValues.map(object => {
              if (object.day === day) {
                return object.timeValues;
              }
            })[0];

            return {
              ...object,
              timeValues: initialTimeValues,
            };
          } else return object;
        }),
      );
    } else {
      setFormValues(
        [...formValues].map(object => {
          if (object.day === day) {
            const orders = countTotalMeals({
              day,
              workingHours,
            });
            console.log('orders', orders);
            return {
              ...object,
              totalMeals: orders,
              isChecked,
              workingHours,
            };
          } else return object;
        }),
      );
    }
  };

  return (
    <SectionWrapper>
      <Heading5 className="heading-5">{result}</Heading5>
      <div className="container-small">
        {/* Section that renders results. Orders qty and GMV in pounds      */}
        <ResultWrapper>
          <div className="heading-4">
            {Math.round(totalOrders)?.toLocaleString()} {orders}
          </div>
          <div className="heading-2 text-orange">
            {symbol} {Math.round(gmv)?.toLocaleString()} GMV
          </div>
          <div>{perMonth}</div>
          {RESULT_BLOCK_ICONS.map((image: any, key: number) => {
            return <img src={image} id={`icon-${key.toLocaleString()}`} width="50px" />;
          })}
        </ResultWrapper>
      </div>
      {/* Button is invisible here, to hold a space. Will be rendered in Webflow  */}
      <PrimaryButton className="btn-primary w-button"></PrimaryButton>
      {/* Section that renders sites qty, that user have, based on slider position from 1 to 5+
      where 5+ means 5
      */}
      <SliderWrapper>
        <Heading5 className="heading-5">{howManySites}</Heading5>
        <Box sx={{ width: '100%', margin: 'auto' }}>
          <SitesSlider
            aria-label="sites"
            defaultValue={1}
            valueLabelDisplay="off"
            getAriaValueText={valuetext}
            step={1}
            min={1}
            max={5}
            marks={MARKS}
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
          <Heading5 className="heading-5">{whatDaysOpen}</Heading5>
          {WEEKDAYS.map((day, index) => {
            return (
              <DayCardComponent
                key={index}
                index={index}
                day={day}
                documentLang={documentLang}
                formValues={formValues}
                setFormValues={setFormValues}
                updateFormValues={updateFormValues}
                setCheckedSameEveryDay={setCheckedSameEveryDay}
                checkedSameEveryDay={checkedSameEveryDay}
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
                      const mondaysTimeValues = [...formValues].map(day => {
                        if (day.day === 'Monday') {
                          return day.timeValues;
                        }
                      })[0];
                      const mondaysIsCheckedMulti = [...formValues].map(day => {
                        if (day.day === 'Monday') {
                          return day.isCheckedMulti;
                        }
                      })[0];

                      !checkedSameEveryDay &&
                        formValues.forEach(object => {
                          if (object.day !== 'Monday') {
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
                                    isCheckedMulti: mondaysIsCheckedMulti,
                                    workingHours: mondaysWorkingHours,
                                    timeValues: mondaysTimeValues,
                                  };
                                } else return object;
                              }),
                            );
                          }
                        });
                      setCheckedSameEveryDay(prev => !prev);
                    }}
                    inputProps={{ 'aria-label': 'controlled' }}
                    checkedIcon={<CheckedIcon sameEveryDay />}
                  />
                }
                label={sameEveryDay}
                labelPlacement="end"
              />
            </StyledCheckbox>
          </ThemeProvider>
        </>
      </DaysWrapper>
    </SectionWrapper>
  );
};
