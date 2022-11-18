import { ampmTimeToNumbers } from './ampmTimeToNumbers';

type countTotalOrdersProps = {
  day: string | null;
  morningStartTime: string | null;
  morningEndTime: string | null;
  eveningStartTime: string | null;
  eveningEndTime: string | null;
};

type ArrayOfOpenedHoursProps = {
  openingHour: number | undefined;
  closingHour: number | undefined;
  openingHour2: number | undefined;
  closingHour2: number | undefined;
};

export const countTotalMeals =  ({
  day,
  morningStartTime,
  morningEndTime,
  eveningStartTime,
  eveningEndTime,
}: countTotalOrdersProps) => {
  
  const openingHour = ampmTimeToNumbers(morningStartTime || '');
  const closingHour = ampmTimeToNumbers(morningEndTime || '');
  const openingHour2 = ampmTimeToNumbers(eveningStartTime || '');
  const closingHour2 = ampmTimeToNumbers(eveningEndTime || '');
  console.log('opening ===>', openingHour);
  console.log('closing ===>', closingHour);
  console.log('opening ===>', openingHour2);
  console.log('closing ===>', closingHour2);

  const allHours = [...Array(24).keys()];
  return Array.from(
    allHours
      .map(hour => {
        if (openingHour && closingHour && hour >= openingHour && hour < closingHour) {
          return hour;
        } else if (openingHour2 && closingHour2 && hour >= openingHour2 && hour < closingHour2) {
          return hour;
        } else if (openingHour2 && closingHour2 && closingHour2 < openingHour2) {
          if (hour >= openingHour2 && hour <= 23) {
            return hour;
          }
          if (hour < closingHour2) {
            return hour;
          }
        }
      })
      .filter(Boolean),
  );

  // //Single opening
  // if (!eveningEndTime && !!openingHour && !!closingHour) {
  //   const openHours = () => {
  //     const ddd = ORDERS_QUANTITY_SCHEMA[0].Monday;
  //     const uniquePartsNames: any[] = Array.from(
  //       ddd?.map((hour: any) => {
  //         console.log(+Object.keys(hour)[0] === openingHour);
  //         return Object.values(hour);
  //       }),
  //     );
  //     return uniquePartsNames;
  //   };
  //   openHours();
  //   console.log(day, morningStartTime, morningEndTime, eveningStartTime, eveningEndTime);
  // } else {
  //   console.log(day, morningStartTime, morningEndTime, eveningStartTime, eveningEndTime);
  // }

  let orders = 0;

  return orders;
};
