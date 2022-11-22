import CheckIcon from '@mui/icons-material/Check';
import { ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { Formik } from 'formik';
import { theme } from 'src/assets/themeMUI/createTheme';
import { EditHours, StyledButton, StyledForm, StyledStuck } from './EditHoursComponent.styles';

type EditHoursComponentProps = {
  isEdit: boolean;
  handleSubmit: () => void;
  isMulti: boolean;
  setStateData: any;
  stateTimeValues: any;
  checkedDay: any;
};

export const EditHoursComponent = ({
  isEdit,
  handleSubmit,
  isMulti,
  setStateData,
  checkedDay,
  stateTimeValues,
}: EditHoursComponentProps) => {
  // the time values we use in set timer

  //setState values, to redefine time result
  const { setMorningStartTime, setMorningEndTime, setEveningStartTime, setEveningEndTime } =
    setStateData;

  const {
    morningStartValue,
    morningEndValue,
    eveningStartValue,
    eveningEndValue,
    setMorningStartValue,
    setMorningEndValue,
    setEveningStartValue,
    setEveningEndValue,
  } = stateTimeValues;

  return (
    <ThemeProvider theme={theme}>
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
                  views={['hours']}
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
                  views={['hours']}
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
                      views={['hours']}
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
                      views={['hours']}
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
    </ThemeProvider>
  );
};
