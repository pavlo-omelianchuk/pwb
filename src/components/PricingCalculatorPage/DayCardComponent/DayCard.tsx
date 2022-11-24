import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import { ThemeProvider } from '@mui/material/styles';
import dayjs, { Dayjs } from 'dayjs';
import React, { useEffect, useState } from 'react';
import { theme } from 'src/assets/themeMUI/createTheme';
import { countOpenedHours } from 'src/helpers/getOpenedHours';
import { playSound } from 'src/helpers/playSound';
import { EditHoursComponent } from '../EditHoursComponent/EditHoursComponent';
import {
  CheckedIcon,
  DayCard,
  DisplayHoursBlock,
  DisplayHoursBlockWrapper,
  EditIconHolder,
  OpenDaySwitch,
  StyledCheckbox,
  StyledFormControlLabel,
  ToggleDayBlock,
} from './DayCard.styles';

type DayCardComponentProps = {
  isPlaying: boolean;
  setIsPlaying: any;
  setCheckedSameEveryDay: any;
  day: string;
  formValues: any[];
  updateFormValues: (
    day: string,
    isChecked: boolean,
    workingHours: number[],
    timeTable: string[],
    timeValues: Dayjs | null,
  ) => void;
};

export const DayCardComponent = ({
  day,
  updateFormValues,
  isPlaying,
  setIsPlaying,
  formValues,
  setCheckedSameEveryDay,
}: DayCardComponentProps) => {
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
    // if (day === 'Monday') {
    //   localStorage.setItem('mst', JSON.stringify(morningStartTime));
    //   localStorage.setItem('met', JSON.stringify(morningEndTime));
    //   // localStorage.setItem('mst', JSON.stringify(morningStartTime));
    //   // localStorage.setItem('mst', JSON.stringify(morningStartTime));
    // }
    // return () => {};
  }, [morningStartTime, morningEndTime]);

  const currentDayFormValues = formValues
    .map(dayState => {
      if (dayState.day === day) {
        return dayState;
      }
    })
    .filter(Boolean)?.[0];

  console.log('inside', day, currentDayFormValues);

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
      let workingHours = [...Array(24).keys()];

      updateFormValues(day, true, workingHours);
      setShowDetailedTime(false);
    } else {
      setShowDetailedTime(true);
      const workingHours = countOpenedHours({
        morningStartTime,
        morningEndTime,
        eveningStartTime,
        eveningEndTime,
      });

      updateFormValues(day, true, workingHours);
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
  };

  const handleDayToggle = () => {
    //in case of switching  a day toggle ON, assign all day as working day
    //in case of switching a day toggle OFF, assign 0 working hours
    setCheckedSameEveryDay(false);

    let workingHours = [...Array(24).keys()];

    !!currentDayFormValues?.isChecked && setIsEdit(false);
    !!currentDayFormValues?.isChecked
      ? updateFormValues(day, !currentDayFormValues?.isChecked, [])
      : updateFormValues(day, !currentDayFormValues?.isChecked, workingHours);

    setMorningStartValue(dayjs('2022-01-01T00:00:00.000Z'));
    setMorningEndValue(dayjs('2022-01-01T00:00:00.000Z'));
  };

  const handleEditHours = () => {
    setIsEdit(true);
  };

  return (
    <DayCard
      isEdit={isEdit}
      checkedDay={currentDayFormValues?.isChecked}
      checkedMulti={checkedMulti}
    >
      <ToggleDayBlock>
        <h5>{day}</h5>
        <FormGroup>
          <StyledFormControlLabel
            sx={{
              color: currentDayFormValues?.isChecked ? '#F16D4D' : '#D5D5D5',
            }}
            control={
              <OpenDaySwitch
                sx={{ m: 1 }}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  handleDayToggle();
                  if (!isPlaying) {
                    setIsPlaying(true);
                    playSound();
                  } else {
                    setTimeout(() => {
                      setIsPlaying(false);
                    }, 1000);
                  }
                }}
                checked={currentDayFormValues?.isChecked}
              />
            }
            label={currentDayFormValues?.isChecked ? 'Open' : 'Closed'}
          />
        </FormGroup>
      </ToggleDayBlock>
      <DisplayHoursBlockWrapper checkedDay={currentDayFormValues?.isChecked}>
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
            <StyledCheckbox checkedMulti={checkedMulti}>
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
            </StyledCheckbox>
          )}
        </ThemeProvider>
      </DisplayHoursBlockWrapper>

      <Divider />
      <EditHoursComponent
        handleSubmit={handleSubmit}
        isEdit={isEdit}
        isMulti={checkedMulti}
        checkedDay={currentDayFormValues?.isChecked}
        setStateData={setStateData}
        stateTimeValues={stateTimeValues}
      />
    </DayCard>
  );
};
