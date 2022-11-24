import { getDaySchema } from './getDaySchema';

type countTotalOrdersProps = {
  day: string;
  workingHours: number[];
};

export const countTotalMeals = ({
  day,
  workingHours,
}: countTotalOrdersProps) => {

  const totalOrders = (schema: any) => {
    const orders: any[] = schema?.map((hour: any) => {
      if (workingHours.includes(+Object.keys(hour)[0])) {
        return Object.values(hour);
      }
    });
    return orders.filter(Boolean);
  };

  let orders = totalOrders(getDaySchema(day));

  return orders.flat().reduce((a, b) => a + b, 0);
};
