import { Divider } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import React from 'react';
import { EditHoursComponent } from './EditHoursComponent';
import {
  DayCard,
  EditIconHolder,
  HoursBlock,
  OpenDaySwitch,
  ToggleDayBlock,
} from './PricingCalculator.styles';

type DayCardComponentProps = {
  day: string;
  isChecked: boolean;
  isEdit: boolean;
  handleSwitch: () => void;
  handleEditHours: () => void;
  handleSubmit: any;
};

export const DayCardComponent = ({
  day,
  isChecked,
  isEdit,
  handleSwitch,
  handleEditHours,
  handleSubmit,
}: DayCardComponentProps) => {
  return (
    <DayCard isEdit={isEdit}>
      <ToggleDayBlock>
        <h5>{day}</h5>
        <FormGroup>
          <FormControlLabel
            sx={{
              color: isChecked ? '#F16D4D' : '#D5D5D5',
              position: 'absolute',
              left: '20%',
              top: '20px',
            }}
            control={
              <OpenDaySwitch
                sx={{ m: 1 }}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  handleSwitch();
                }}
                checked={isChecked}
              />
            }
            label={isChecked ? 'Open' : 'Closed'}
          />
        </FormGroup>
      </ToggleDayBlock>
      <HoursBlock>
        <span>From 10AM to 12AM</span> <span>•</span> <span>From 10AM to 12AM</span>
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
      <Divider />
      <EditHoursComponent handleSubmit={handleSubmit} day={day} isEdit={isEdit} />
    </DayCard>
  );
};
