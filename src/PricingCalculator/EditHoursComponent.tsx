import CheckIcon from '@mui/icons-material/Check';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import dayjs, { Dayjs } from 'dayjs';
import { Formik } from 'formik';
import { useState } from 'react';
import { EditHours, StyledButton, StyledForm, StyledStuck } from './EditHoursComponent.styles';

type EditHoursComponentProps = {
  isEdit: boolean;
  handleSubmit: () => void;
  isMulti: boolean;
  setStateData: any;
  checkedDay: any;
};

export const EditHoursComponent = ({
  isEdit,
  handleSubmit,
  isMulti,
  setStateData,
  checkedDay,
}: EditHoursComponentProps) => {
  // the time values we use in set timer
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

  //setState values, to redefine time result
  const { setMorningStartTime, setMorningEndTime, setEveningStartTime, setEveningEndTime } =
    setStateData;

  return (
    <EditHours isEdit={isEdit}>
      <Formik
        initialValues={{}} // initial values coming from declared state variables in useState hook
        onSubmit={() => {
          // check if evening start value is not less that morning end value
          !!isMulti &&
            eveningStartValue &&
            morningEndValue &&
            eveningStartValue < morningEndValue &&
            setEveningStartValue(morningEndValue);

          handleSubmit();
        }}
      >
        <StyledForm>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StyledStuck>
              <label htmlFor="morning-date-from">From</label>
              <MobileTimePicker
                closeOnSelect
                disabled={!checkedDay}
                value={morningStartValue}
                minutesStep={60}
                onChange={newValue => {
                  setMorningStartValue(newValue);
                }}
                renderInput={params => {
                  setMorningStartTime(params?.inputProps?.value?.replace(':00 ', ''));
                  return <TextField id="morning-date-from" {...params} />;
                }}
              />
              <label htmlFor="morning-date-to">To</label>
              <MobileTimePicker
                closeOnSelect
                disabled={!checkedDay}
                value={morningEndValue}
                minutesStep={60}
                onChange={newValue => {
                  setMorningEndValue(newValue);
                }}
                renderInput={params => {
                  setMorningEndTime(params?.inputProps?.value?.replace(':00 ', ''));
                  return <TextField id="morning-date-to" {...params} />;
                }}
              />

              {!!isMulti && (
                <>
                  {' '}
                  <label id="sp-from" htmlFor="morning-date-from">
                    From
                  </label>
                  <MobileTimePicker
                    disabled={!checkedDay}
                    closeOnSelect
                    value={eveningStartValue}
                    minutesStep={60}
                    onChange={newValue => {
                      setEveningStartValue(newValue);
                    }}
                    renderInput={params => {
                      setEveningStartTime(params?.inputProps?.value?.replace(':00 ', ''));
                      return <TextField id="evening-date-from" {...params} />;
                    }}
                  />
                  <label htmlFor="evening-date-to">To</label>
                  <MobileTimePicker
                    disabled={!checkedDay}
                    closeOnSelect
                    value={eveningEndValue}
                    minutesStep={60}
                    onChange={newValue => {
                      setEveningEndValue(newValue);
                    }}
                    renderInput={params => {
                      setEveningEndTime(params?.inputProps?.value?.replace(':00 ', ''));
                      return <TextField id="evening-date-to" {...params} />;
                    }}
                  />
                </>
              )}
            </StyledStuck>
          </LocalizationProvider>
          <StyledButton disabled={!checkedDay} type="submit">
            <CheckIcon sx={{ color: 'white' }} />
          </StyledButton>
        </StyledForm>
      </Formik>
    </EditHours>
  );
};
