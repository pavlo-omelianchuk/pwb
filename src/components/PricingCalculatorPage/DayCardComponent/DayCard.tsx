import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import { ThemeProvider } from '@mui/material/styles';
import dayjs, { Dayjs } from 'dayjs';
import React, { useEffect, useState } from 'react';
import { theme } from 'src/assets/themeMUI/createTheme';
import { countTotalMeals } from 'src/helpers/countTotalMeals';
import { playSound } from 'src/helpers/playSound';
import { EditHoursComponent } from '../EditHoursComponent/EditHoursComponent';
import {
  CheckedIcon,
  DayCard,
  DisplayHoursBlock,
  DisplayHoursBlockWrapper,
  EditIconHolder,
  MultiOpeningsOption,
  OpenDaySwitch,
  StyledFormControlLabel,
  ToggleDayBlock,
} from './DayCard.styles';

type DayCardComponentProps = {
  isPlaying: boolean;
  setIsPlaying: any;
  checkedSameEveryDay: boolean;
  setCheckedSameEveryDay: any;
  day: string;
  updateFormValues: (day: string, isFromCheck: boolean, totalMeals?: number) => void;
};

export const DayCardComponent = ({
  day,
  updateFormValues,
  isPlaying,
  setIsPlaying,
  checkedSameEveryDay,
  setCheckedSameEveryDay,
}: DayCardComponentProps) => {
  const [checkedDay, setCheckedDay] = useState(true);
  const [checkedMulti, setCheckedMulti] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [morningStartTime, setMorningStartTime] = useState<null | string>(null);
  const [morningEndTime, setMorningEndTime] = useState<null | string>(null);
  const [eveningStartTime, setEveningStartTime] = useState<null | string>(null);
  const [eveningEndTime, setEveningEndTime] = useState<null | string>(null);
  const [showDetailedTime, setShowDetailedTime] = useState(false);
  const [morningStartValue, setMorningStartValue] = useState<Dayjs | null>(
    dayjs('2022-01-01T00:00:00.000Z'),
  );
  const [morningEndValue, setMorningEndValue] = useState<Dayjs | null>(
    dayjs('2022-01-01T00:00:00.000Z'),
  );
  const [eveningStartValue, setEveningStartValue] = useState<Dayjs | null>(
    dayjs('2022-01-01T12:00:00.000Z'),
  );
  const [eveningEndValue, setEveningEndValue] = useState<Dayjs | null>(
    dayjs('2022-01-01T00:00:00.000Z'),
  );

  useEffect(() => {
    if (morningStartTime === '12AM' && morningEndTime === '12AM') {
      setShowDetailedTime(false);
    }
    if (day === 'Monday') {
      localStorage.setItem('mst', JSON.stringify(morningStartTime));
      localStorage.setItem('met', JSON.stringify(morningEndTime));
      // localStorage.setItem('mst', JSON.stringify(morningStartTime));
      // localStorage.setItem('mst', JSON.stringify(morningStartTime));
    }
    return () => {};
  }, [morningStartTime, morningEndTime]);

  const stateTimeValues = {
    morningStartValue,
    morningEndValue,
    eveningStartValue,
    eveningEndValue,
    setMorningStartValue,
    setMorningEndValue,
    setEveningStartValue,
    setEveningEndValue,
  };

  const setStateData = {
    setMorningStartTime,
    setMorningEndTime,
    setEveningStartTime,
    setEveningEndTime,
  };

  const handleSubmit = () => {
    // if available 24 hours per day, - display "All day" message
    // else, - display detailed Hours

    setCheckedSameEveryDay(false);

    if (morningStartTime === '12AM' && morningEndTime === '12AM') {
      const allDay = true;
      const orders = countTotalMeals({
        day,
        allDay,
        morningStartTime,
        morningEndTime,
        eveningStartTime,
        eveningEndTime,
      });

      updateFormValues(day, true, orders);
      setShowDetailedTime(false);
    } else {
      setShowDetailedTime(true);
      const orders = countTotalMeals({
        day,
        morningStartTime,
        morningEndTime,
        eveningStartTime,
        eveningEndTime,
      });

      updateFormValues(day, true, orders);
    }

    setIsEdit(false);

    if (!isPlaying) {
      setIsPlaying(true);
      playSound();
    } else {
      setTimeout(() => {
        setIsPlaying(false);
      }, 1000);
    }

    // alert(JSON.stringify(values, null, 2));
  };

  const handleSwitch = () => {
    const allDay = true;
    const orders = countTotalMeals({
      day,
      allDay,
      morningStartTime,
      morningEndTime,
      eveningStartTime,
      eveningEndTime,
    });
    console.log(orders);
    setCheckedDay(prev => !prev);
    !!checkedDay && setIsEdit(false);
    !!checkedDay
      ? updateFormValues(day, !checkedDay, 0)
      : updateFormValues(day, !checkedDay, orders);

    setMorningStartValue(dayjs('2022-01-01T00:00:00.000Z'));
    setMorningEndValue(dayjs('2022-01-01T00:00:00.000Z'));
  };

  const handleEditHours = () => {
    setIsEdit(true);
  };

  return (
    <DayCard isEdit={isEdit} checkedDay={checkedDay} checkedMulti={checkedMulti}>
      <ToggleDayBlock>
        <h5>{day}</h5>
        <FormGroup>
          <StyledFormControlLabel
            sx={{
              color: checkedDay ? '#F16D4D' : '#D5D5D5',
            }}
            control={
              <OpenDaySwitch
                sx={{ m: 1 }}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  handleSwitch();
                  if (!isPlaying) {
                    setIsPlaying(true);
                    playSound();
                  } else {
                    setTimeout(() => {
                      setIsPlaying(false);
                    }, 1000);
                  }
                }}
                checked={checkedDay}
              />
            }
            label={checkedDay ? 'Open' : 'Closed'}
          />
        </FormGroup>
      </ToggleDayBlock>
      <DisplayHoursBlockWrapper checkedDay={checkedDay}>
        <DisplayHoursBlock isEdit={isEdit}>
          {!!showDetailedTime ? (
            <>
              <span>
                From {morningStartTime} to {morningEndTime}
              </span>{' '}
              {!!checkedMulti && (
                <>
                  <span>•</span>
                  <span>
                    From {eveningStartTime} to {eveningEndTime}
                  </span>
                </>
              )}
            </>
          ) : (
            <div style={{ position: 'relative', top: '2px' }}>All day</div>
          )}

          <EditIconHolder onClick={handleEditHours}>
            <svg
              id="Icon_-_Edit"
              data-name="Icon - Edit"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                id="noun-edit-3094244"
                d="M78.44-.047a1.944,1.944,0,0,0-1.379.571L70.517,7.068l2.76,2.76,6.544-6.544A1.952,1.952,0,0,0,78.44-.047Zm-8.262,7.7-.2,2.365a.325.325,0,0,0,.351.351l2.363-.2Z"
                transform="translate(-62.979 7.047)"
                fill="#1e1e1e"
              />
            </svg>
          </EditIconHolder>
        </DisplayHoursBlock>
        <ThemeProvider theme={theme}>
          {!!isEdit && (
            <MultiOpeningsOption isEdit={isEdit} checkedMulti={checkedMulti}>
              <FormControlLabel
                value="Multiple openings"
                control={
                  <Checkbox
                    checked={checkedMulti}
                    onChange={() => setCheckedMulti(prev => !prev)}
                    inputProps={{ 'aria-label': 'controlled' }}
                    checkedIcon={<CheckedIcon />}
                  />
                }
                label="Multiple openings"
                labelPlacement="end"
              />
            </MultiOpeningsOption>
          )}
        </ThemeProvider>
      </DisplayHoursBlockWrapper>

      <Divider />
      <EditHoursComponent
        handleSubmit={handleSubmit}
        isEdit={isEdit}
        isMulti={checkedMulti}
        checkedDay={checkedDay}
        setStateData={setStateData}
        stateTimeValues={stateTimeValues}
      />
    </DayCard>
  );
};
