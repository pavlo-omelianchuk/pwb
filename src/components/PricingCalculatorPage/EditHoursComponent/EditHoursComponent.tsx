import CheckIcon from '@mui/icons-material/Check';
import { ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { Formik } from 'formik';
import { theme } from 'src/assets/themeMUI/createTheme';
import { getContent } from 'src/helpers/languageContent';
import { EditHours, StyledButton, StyledForm, StyledStuck } from './EditHoursComponent.styles';

type EditHoursComponentProps = {
  isEdit: boolean;
  handleSubmit: () => void;
  isMulti: boolean;
  checkedDay: boolean;
  formValues: any[];
  setFormValues: any;
  currentDayTimeTableRow: any;
  currentDayFormValues: any;
  documentLang: string;
};

export const EditHoursComponent = ({
  isEdit,
  handleSubmit,
  isMulti,
  checkedDay,
  formValues,
  setFormValues,
  currentDayTimeTableRow,
  currentDayFormValues,
  documentLang,
}: EditHoursComponentProps) => {
  // the time values we use in set timer

  const [morningStartValue, morningEndValue, eveningStartValue, eveningEndValue] =
    currentDayTimeTableRow;

  const {
    result,
    orders,
    perMonth,
    howManySites,
    whatDaysOpen,
    open,
    closed,
    multipleOpenings,
    from,
    to,
    sameEveryDay,
  } = getContent(documentLang);

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
              // setEveningStartValue(morningEndValue);

              setFormValues(
                [...formValues].map(object => {
                  if (object.day === currentDayFormValues.day) {
                    return {
                      ...object,
                      timeValues: [
                        morningStartValue,
                        morningEndValue,
                        morningEndValue,
                        eveningEndValue,
                      ],
                    };
                  } else return object;
                }),
              );
            handleSubmit();
          }}
        >
          <StyledForm checkedMulti={isMulti}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <StyledStuck>
                <div id="morning-hours-block">
                  <label htmlFor="morning-date-from">{from}</label>
                  <MobileTimePicker
                    closeOnSelect
                    views={['hours']}
                    disabled={!checkedDay}
                    value={morningStartValue}
                    minutesStep={60}
                    onChange={newValue => {
                      // setMorningStartValue(newValue);
                      setFormValues(
                        [...formValues].map(object => {
                          if (object.day === currentDayFormValues.day) {
                            return {
                              ...object,
                              timeValues: [
                                newValue,
                                morningEndValue,
                                eveningStartValue,
                                eveningEndValue,
                              ],
                            };
                          } else return object;
                        }),
                      );
                    }}
                    renderInput={params => {
                      return <TextField id="morning-date-from" {...params} />;
                    }}
                  />
                  <label htmlFor="morning-date-to">{to}</label>
                  <MobileTimePicker
                    closeOnSelect
                    views={['hours']}
                    disabled={!checkedDay}
                    value={morningEndValue}
                    minutesStep={60}
                    onChange={newValue => {
                      // setMorningEndValue(newValue);
                      setFormValues(
                        [...formValues].map(object => {
                          if (object.day === currentDayFormValues.day) {
                            return {
                              ...object,
                              timeValues: [
                                morningStartValue,
                                newValue,
                                eveningStartValue,
                                eveningEndValue,
                              ],
                            };
                          } else return object;
                        }),
                      );
                    }}
                    renderInput={params => {
                      return <TextField id="morning-date-to" {...params} />;
                    }}
                  />
                </div>

                {!!isMulti && (
                  <div id="evening-hours-block">
                    {' '}
                    <label id="sp-from" htmlFor="morning-date-from">
                      {from}
                    </label>
                    <MobileTimePicker
                      disabled={!checkedDay}
                      closeOnSelect
                      views={['hours']}
                      value={eveningStartValue}
                      minutesStep={60}
                      onChange={newValue => {
                        // setEveningStartValue(newValue);
                        setFormValues(
                          [...formValues].map(object => {
                            if (object.day === currentDayFormValues.day) {
                              return {
                                ...object,
                                timeValues: [
                                  morningStartValue,
                                  morningEndValue,
                                  newValue,
                                  eveningEndValue,
                                ],
                              };
                            } else return object;
                          }),
                        );
                      }}
                      renderInput={params => {
                        return <TextField id="evening-date-from" {...params} />;
                      }}
                    />
                    <label htmlFor="evening-date-to">{to}</label>
                    <MobileTimePicker
                      disabled={!checkedDay}
                      closeOnSelect
                      views={['hours']}
                      value={eveningEndValue}
                      minutesStep={60}
                      onChange={newValue => {
                        // setEveningEndValue(newValue);
                        setFormValues(
                          [...formValues].map(object => {
                            if (object.day === currentDayFormValues.day) {
                              return {
                                ...object,
                                timeValues: [
                                  morningStartValue,
                                  morningEndValue,
                                  eveningStartValue,
                                  newValue,
                                ],
                              };
                            } else return object;
                          }),
                        );
                      }}
                      renderInput={params => {
                        return <TextField id="evening-date-to" {...params} />;
                      }}
                    />
                  </div>
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
