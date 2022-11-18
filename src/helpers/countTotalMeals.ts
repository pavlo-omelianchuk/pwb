import { ampmTimeToNumbers } from './ampmTimeToNumbers';
import { getDaySchema } from './getDaySchema';

type countTotalOrdersProps = {
  day: string;
  allDay?: boolean;
  morningStartTime: string | null;
  morningEndTime: string | null;
  eveningStartTime: string | null;
  eveningEndTime: string | null;
};

export const countTotalMeals = ({
  day,
  allDay,
  morningStartTime,
  morningEndTime,
  eveningStartTime,
  eveningEndTime,
}: countTotalOrdersProps) => {
  let allHours = [...Array(24).keys()];

  let workingHours: any;

  if (!!allDay) {
    workingHours = allHours;
  } else {
    const openingHour = !!morningStartTime && ampmTimeToNumbers(morningStartTime);
    const closingHour = !!morningEndTime && ampmTimeToNumbers(morningEndTime);
    const openingHour2 = !!eveningStartTime && ampmTimeToNumbers(eveningStartTime);
    const closingHour2 = !!eveningEndTime && ampmTimeToNumbers(eveningEndTime);

    const arrayOfOpenedHours = () => {
      const workingHours = Array.from(
        allHours
          .map(hour => {
            // TODO
            // catch error if  opening or close hour is 0
            if (!!openingHour && !!closingHour && hour >= openingHour && hour < closingHour) {
              console.log('first');
              return hour;
            }
            if (!!openingHour2 && !!closingHour2 && hour >= openingHour2 && hour < closingHour2) {
              console.log('sec');
              return hour;
            }
            if (!!openingHour2 && !!closingHour2 && closingHour2 < openingHour2) {
              console.log('thr');
              if (hour >= openingHour2 && hour <= 23) {
                return hour;
              }
              if (hour < closingHour2) {
                return hour;
              }
            }
            if (!!openingHour && !!closingHour && closingHour < openingHour) {
              console.log('four');
              if (hour >= openingHour && hour <= 23) {
                return hour;
              }
              if (hour < closingHour) {
                return hour;
              }
            }
          })
          .filter(Boolean),
      );
      return workingHours;
    };
    workingHours = arrayOfOpenedHours();
  }
  console.log(workingHours);

  const totalOrders = (schema: any) => {
    const orders: any[] = schema?.map((hour: any) => {
      if (workingHours.includes(+Object.keys(hour)[0])) {
        return Object.values(hour);
      }
    });
    return orders.filter(Boolean);
  };

  let orders = totalOrders(getDaySchema(day));

  return orders;
};
