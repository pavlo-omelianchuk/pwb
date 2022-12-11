import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import { ThemeProvider } from '@mui/material/styles';
import React, { useState } from 'react';
import { theme } from 'src/assets/themeMUI/createTheme';
import { TIME_VALUES } from 'src/helpers/constants';
import { countOpenedHours } from 'src/helpers/getOpenedHours';
import { getContent } from 'src/helpers/languageContent';
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
  checkedSameEveryDay: boolean;
  setCheckedSameEveryDay: any;
  day: string;
  index: number;
  documentLang: string;
  formValues: any[];
  setFormValues: any;
  updateFormValues: (day: string, isChecked: boolean, workingHours: number[]) => void;
};

export const DayCardComponent = ({
  day,
  updateFormValues,
  formValues,
  setFormValues,
  checkedSameEveryDay,
  setCheckedSameEveryDay,
  documentLang,
  index,
}: DayCardComponentProps) => {
  const [isEdit, setIsEdit] = useState(false);

  const {
    open,
    closed,
    multipleOpenings,
    from,
    to,
    allDay,
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
    sunday,
  } = getContent(documentLang);

  const currentDayFormValues = formValues
    .map(dayState => {
      if (dayState.day === day) {
        return dayState;
      }
    })
    .filter(Boolean)?.[0];
  const mondaysFormValues = formValues
    .map(dayState => {
      if (dayState.day === 'Monday') {
        return dayState;
      }
    })
    .filter(Boolean)?.[0];

  const displayDay = (index: number) => {
    switch (index) {
      case 0:
        return monday;
      case 1:
        return tuesday;
      case 2:
        return wednesday;
      case 3:
        return thursday;
      case 4:
        return friday;
      case 5:
        return saturday;
      case 6:
        return sunday;
      default:
        break;
    }
  };

  const currentDayTimeTableFormatted = [
    currentDayFormValues?.timeValues?.[0]?.format('hA'),
    currentDayFormValues?.timeValues?.[1]?.format('hA'),
    currentDayFormValues?.timeValues?.[2]?.format('hA'),
    currentDayFormValues?.timeValues?.[3]?.format('hA'),
  ];
  const currentDayTimeTableRow = [
    currentDayFormValues?.timeValues?.[0],
    currentDayFormValues?.timeValues?.[1],
    currentDayFormValues?.timeValues?.[2],
    currentDayFormValues?.timeValues?.[3],
  ];
  const mondaysTimeTable = [
    mondaysFormValues?.timeValues?.[0]?.format('hA'),
    mondaysFormValues?.timeValues?.[1]?.format('hA'),
    mondaysFormValues?.timeValues?.[2]?.format('hA'),
    mondaysFormValues?.timeValues?.[3]?.format('hA'),
  ];

  const displayMorningStartTime: string = !!checkedSameEveryDay
    ? mondaysTimeTable[0]
    : currentDayTimeTableFormatted[0];
  const displayMorningEndTime: string = !!checkedSameEveryDay
    ? mondaysTimeTable[1]
    : currentDayTimeTableFormatted[1];
  const displayEveningStartTime: string = !!checkedSameEveryDay
    ? mondaysTimeTable[2]
    : currentDayTimeTableFormatted[2];
  const displayEveningEndTime: string = !!checkedSameEveryDay
    ? mondaysTimeTable[3]
    : currentDayTimeTableFormatted[3];

  const isAllDay = currentDayFormValues?.workingHours?.length === 24;

  const handleSubmit = () => {
    setCheckedSameEveryDay(false);

    const workingHours = countOpenedHours({
      morningStartTime: currentDayTimeTableFormatted[0],
      morningEndTime: currentDayTimeTableFormatted[1],
      eveningStartTime: !!currentDayFormValues?.isCheckedMulti
        ? currentDayTimeTableFormatted[2]
        : null,
      eveningEndTime: !!currentDayFormValues?.isCheckedMulti
        ? currentDayTimeTableFormatted[3]
        : null,
    });

    updateFormValues(day, true, workingHours);

    setIsEdit(false);
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
    !currentDayFormValues &&
      setFormValues(
        [...formValues].map(object => {
          if (object.day === currentDayFormValues.day) {
            return {
              ...object,
              timeValues: [
                TIME_VALUES.morningStartTimeValue,
                TIME_VALUES.morningEndTimeValue,
                TIME_VALUES.eveningStartTimeValue,
                TIME_VALUES.eveningEndTimeValue,
              ],
            };
          } else return object;
        }),
      );
  };

  const handleEditHours = () => {
    setIsEdit(true);
  };

  return (
    <DayCard
      isEdit={isEdit}
      checkedDay={currentDayFormValues?.isChecked}
      $isCheckedMulti={currentDayFormValues.isCheckedMulti}
    >
      <ToggleDayBlock>
        <h5>{displayDay(index)}</h5>
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
                }}
                checked={currentDayFormValues?.isChecked}
              />
            }
            label={currentDayFormValues?.isChecked ? open : closed}
          />
        </FormGroup>
      </ToggleDayBlock>
      <DisplayHoursBlockWrapper checkedDay={currentDayFormValues?.isChecked}>
        <DisplayHoursBlock isEdit={isEdit} $isCheckedMulti={currentDayFormValues.isCheckedMulti}>
          {!isAllDay ? (
            <div id="display-hours">
              <span>
                {from} {displayMorningStartTime} {to} {displayMorningEndTime}
              </span>{' '}
              {!!currentDayFormValues.isCheckedMulti && (
                <>
                  <span>•</span>
                  <span>
                    {from} {displayEveningStartTime}
                    {to} {displayEveningEndTime}
                  </span>
                </>
              )}
            </div>
          ) : (
            <div style={{ position: 'relative', top: '2px', fontSize: '14px' }}>{allDay}</div>
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
            <StyledCheckbox $isCheckedMulti={currentDayFormValues.isCheckedMulti}>
              <FormControlLabel
                value="Multiple openings"
                control={
                  <Checkbox
                    checked={currentDayFormValues.isCheckedMulti}
                    onChange={() =>
                      setFormValues(
                        [...formValues].map(object => {
                          if (object.day === currentDayFormValues.day) {
                            return {
                              ...object,
                              isCheckedMulti: !object.isCheckedMulti,
                            };
                          } else return object;
                        }),
                      )
                    }
                    inputProps={{ 'aria-label': 'controlled' }}
                    checkedIcon={<CheckedIcon />}
                  />
                }
                label={multipleOpenings}
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
        documentLang={documentLang}
        isMulti={currentDayFormValues.isCheckedMulti}
        checkedDay={currentDayFormValues?.isChecked}
        formValues={formValues}
        setFormValues={setFormValues}
        currentDayFormValues={currentDayFormValues}
        currentDayTimeTableRow={currentDayTimeTableRow}
      />
    </DayCard>
  );
};
