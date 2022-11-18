import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import styled from 'styled-components';

type CheckedIconProps = {
  sameEveryDay?: boolean;
};
export const CheckedIcon = styled.div<CheckedIconProps>`
  display: block;
  width: 20px;
  height: 20px;
  margin: 2px;
  border-radius: 4px;
  border: 2px solid #e6e6e6;
  background-color: #f16d4d;
  ${props =>
    props.sameEveryDay &&
    `
    width: 24px;
    height: 24px;
    margin: 0px;
    border-radius: 8px;
    border: 3px solid #FFFFFF;
    `}
`;

