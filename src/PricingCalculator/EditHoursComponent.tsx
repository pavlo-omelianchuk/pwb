import CheckIcon from '@mui/icons-material/Check';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import dayjs, { Dayjs } from 'dayjs';
import { Formik } from 'formik';
import { useState } from 'react';
import { StyledButton, StyledForm, StyledStuck } from './EditHoursComponent.styles';
import { EditHours, MorningHours } from './PricingCalculator.styles';

interface MyFormValues {
  totalMeals: number;
}

export const EditHoursComponent = ({ day, isEdit, handleSubmit }: any) => {
  const initialValues: MyFormValues = { totalMeals: 0 };
  const [morningStartValue, setMorningStartValue] = useState<Dayjs | null>(
    dayjs('2022-01-01T00:00:00.000Z'),
  );
  const [morningEndValue, setMorningEndValue] = useState<Dayjs | null>(
    dayjs('2022-01-01T00:00:00.000Z'),
  );
  const [eveningStartValue, setEveningStartValue] = useState<Dayjs | null>(
    dayjs('2022-01-01T00:00:00.000Z'),
  );
  const [eveningEndValue, setEveningEndValue] = useState<Dayjs | null>(
    dayjs('2022-01-01T00:00:00.000Z'),
  );

  const [morningStartTime, setMorningStartTime] = useState(null);
  const [morningEndTime, setMorningEndTime] = useState(null);
  const [eveningStartTime, setEveningStartTime] = useState(null);
  const [eveningEndTime, setEveningEndTime] = useState(null);
  console.log('evening: ', eveningStartTime, eveningEndTime);
  console.log('morning: ', morningStartTime, morningEndTime);

  return (
    <EditHours isEdit={isEdit}>
      <MorningHours>
        <Formik
          initialValues={initialValues}
          onSubmit={() => {
            handleSubmit({ day, eveningEndTime });
          }}
        >
          <StyledForm>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <StyledStuck>
                <label htmlFor="morning-date-from">From</label>
                <MobileTimePicker
                  ampm={false}
                  closeOnSelect
                  value={morningStartValue}
                  minutesStep={60}
                  onChange={newValue => {
                    setMorningStartValue(newValue);
                  }}
                  renderInput={params => {
                    setMorningStartTime(params?.inputProps?.value?.slice(0, 2));
                    return <TextField id="morning-date-from" {...params} />;
                  }}
                />
                <label htmlFor="morning-date-to">To</label>
                <MobileTimePicker
                  ampm={false}
                  closeOnSelect
                  value={morningEndValue}
                  minutesStep={60}
                  onChange={newValue => {
                    setMorningEndValue(newValue);
                  }}
                  renderInput={params => {
                    setMorningEndTime(params?.inputProps?.value?.slice(0, 2));
                    return <TextField id="morning-date-to" {...params} />;
                  }}
                />
                <label id="sp-from" htmlFor="morning-date-from">
                  From
                </label>
                <MobileTimePicker
                  ampm={false}
                  closeOnSelect
                  value={eveningStartValue}
                  minutesStep={60}
                  onChange={newValue => {
                    setEveningStartValue(newValue);
                  }}
                  renderInput={params => {
                    setEveningStartTime(params?.inputProps?.value?.slice(0, 2));
                    return <TextField id="evening-date-from" {...params} />;
                  }}
                />
                <label htmlFor="evening-date-to">To</label>
                <MobileTimePicker
                  ampm={false}
                  closeOnSelect
                  value={eveningEndValue}
                  minutesStep={60}
                  onChange={newValue => {
                    setEveningEndValue(newValue);
                    console.log(eveningEndValue);
                    console.log(typeof eveningEndValue);
                  }}
                  renderInput={params => {
                    setEveningEndTime(params?.inputProps?.value?.slice(0, 2));
                    return <TextField id="evening-date-to" {...params} />;
                  }}
                />
              </StyledStuck>
            </LocalizationProvider>
            <StyledButton type="submit">
              <CheckIcon sx={{ color: 'white' }} />
            </StyledButton>
          </StyledForm>
        </Formik>
      </MorningHours>
    </EditHours>
  );
};
