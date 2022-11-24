import { ampmTimeToNumbers } from './ampmTimeToNumbers';

type countOpenedHoursProps = {
  morningStartTime: string | null;
  morningEndTime: string | null;
  eveningStartTime: string | null;
  eveningEndTime: string | null;
};

export const countOpenedHours = ({
  morningStartTime,
  morningEndTime,
  eveningStartTime,
  eveningEndTime,
}: countOpenedHoursProps) => {
  let allHours = [...Array(24).keys()];
  let workingHours: any;

  const openingHour = !!morningStartTime && ampmTimeToNumbers(morningStartTime);
  const closingHour = !!morningEndTime && ampmTimeToNumbers(morningEndTime);
  const openingHour2 = !!eveningStartTime && ampmTimeToNumbers(eveningStartTime);
  const closingHour2 = !!eveningEndTime && ampmTimeToNumbers(eveningEndTime);

  const arrayOfOpenedHours = () => {
    const workingHours = allHours
      .map(hour => {
        if (
          openingHour !== undefined &&
          closingHour !== undefined &&
          hour >= openingHour &&
          hour < closingHour
        ) {
          console.log('first');
          return hour;
        }
        if (
          openingHour2 !== undefined &&
          closingHour2 !== undefined &&
          hour >= openingHour2 &&
          hour < closingHour2
        ) {
          console.log('sec');
          return hour;
        }
        if (
          openingHour2 !== undefined &&
          closingHour2 !== undefined &&
          closingHour2 < openingHour2
        ) {
          console.log('thr');
          if (hour >= openingHour2 && hour <= 23) {
            return hour;
          }
          if (hour < closingHour2) {
            return hour;
          }
        }
        if (openingHour !== undefined && closingHour !== undefined && closingHour < openingHour) {
          console.log('four');
          if (hour >= openingHour && hour <= 23) {
            return hour;
          }
          if (hour < closingHour) {
            return hour;
          }
        }
      })
      .filter(Boolean);

    return workingHours;
  };
  workingHours = arrayOfOpenedHours();

  console.log('workingHours', workingHours);

  return workingHours;
};
