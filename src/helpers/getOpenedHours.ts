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

  if (!morningStartTime || !morningEndTime) {
    return;
  }

  let openingHour = !!morningStartTime && ampmTimeToNumbers(morningStartTime);
  let closingHour = !!morningEndTime && ampmTimeToNumbers(morningEndTime);
  let openingHour2 = !!eveningStartTime && ampmTimeToNumbers(eveningStartTime);
  let closingHour2 = !!eveningEndTime && ampmTimeToNumbers(eveningEndTime);

  const arrayOfOpenedHours = () => {
    if (openingHour === closingHour) {
      return allHours;
    }

    const workingHours = allHours
      .map(hour => {
        if (
          openingHour !== undefined &&
          closingHour !== undefined &&
          hour >= openingHour &&
          hour < closingHour
        ) {
          return hour;
        }
        if (
          openingHour2 !== undefined &&
          closingHour2 !== undefined &&
          hour >= openingHour2 &&
          hour < closingHour2
        ) {
          return hour;
        }
        if (
          openingHour2 !== undefined &&
          closingHour2 !== undefined &&
          closingHour2 < openingHour2
        ) {
          if (hour >= openingHour2 && hour <= 23) {
            return hour;
          }
          if (hour < closingHour2) {
            return hour;
          }
        }
        if (openingHour !== undefined && closingHour !== undefined && closingHour < openingHour) {
          if (hour < closingHour) {
            return hour;
          }
          if (hour >= openingHour && hour <= 23) {
            return hour;
          }
        }
      })
      .filter((element: number | undefined) => element !== undefined);

    return workingHours;
  };
  workingHours = arrayOfOpenedHours();

  console.log('workingHours =>', workingHours);

  return workingHours;
};
