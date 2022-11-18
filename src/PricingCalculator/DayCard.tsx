import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import React, { useState } from 'react';
import { countTotalMeals } from 'src/helpers/countTotalMeals';
import { EditHoursComponent } from './EditHoursComponent';
import {
  DayCard,
  EditIconHolder,
  HoursBlock,
  MultiOpeningsOption,
  OpenDaySwitch,
  ToggleDayBlock,
} from './PricingCalculator.styles';

type DayCardComponentProps = {
  sitesValue: number;
  day: string;
  updateFormValues: (day: string, isFromCheck: boolean, totalMeals?: number) => void;
};

export const DayCardComponent = ({ day, updateFormValues, sitesValue }: DayCardComponentProps) => {
  const [checkedDay, setCheckedDay] = useState(true);
  const [checkedMulti, setCheckedMulti] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [morningStartTime, setMorningStartTime] = useState(null);
  const [morningEndTime, setMorningEndTime] = useState(null);
  const [eveningStartTime, setEveningStartTime] = useState(null);
  const [eveningEndTime, setEveningEndTime] = useState(null);
  const [showDetailedTime, setShowDetailedTime] = useState(false);

  const handleSubmit = () => {
    // if available 24 hours per day, - display "All day" message
    // else, - display detailed Hours
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

      updateFormValues(day, false, orders);
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

      updateFormValues(day, false, orders);
    }

    setIsEdit(false);
    // alert(JSON.stringify(values, null, 2));
  };

  const handleSwitch = () => {
    setCheckedDay(prev => !prev);
    updateFormValues(day, true);
  };
  const setStateData = {
    setMorningStartTime,
    setMorningEndTime,
    setEveningStartTime,
    setEveningEndTime,
  };

  const handleEditHours = () => {
    setIsEdit(true);
  };

  return (
    <DayCard isEdit={isEdit}>
      <ToggleDayBlock>
        <h5>{day}</h5>
        <FormGroup>
          <FormControlLabel
            sx={{
              color: checkedDay ? '#F16D4D' : '#D5D5D5',
              position: 'absolute',
              left: '20%',
              top: '20px',
            }}
            control={
              <OpenDaySwitch
                sx={{ m: 1 }}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  const allDay = true;
                  const orders = countTotalMeals({
                    day,
                    allDay,
                    morningStartTime,
                    morningEndTime,
                    eveningStartTime,
                    eveningEndTime,
                  });

                  handleSwitch();
                  !!checkedDay && setIsEdit(false);
                  !!checkedDay
                    ? updateFormValues(day, false, 0)
                    : updateFormValues(day, false, orders);
                }}
                checked={checkedDay}
              />
            }
            label={checkedDay ? 'Open' : 'Closed'}
          />
        </FormGroup>
      </ToggleDayBlock>
      <HoursBlock isEdit={isEdit}>
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
          <div>All day</div>
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
      </HoursBlock>
      <MultiOpeningsOption isEdit={isEdit}>
        <FormControlLabel
          value="Multiple openings"
          control={
            <Checkbox
              checked={checkedMulti}
              onChange={() => setCheckedMulti(prev => !prev)}
              inputProps={{ 'aria-label': 'controlled' }}
            />
          }
          label="Multiple openings"
          labelPlacement="end"
        />
      </MultiOpeningsOption>
      <Divider />
      <EditHoursComponent
        handleSubmit={handleSubmit}
        isEdit={isEdit}
        isMulti={checkedMulti}
        checkedDay={checkedDay}
        setStateData={setStateData}
      />
    </DayCard>
  );
};
