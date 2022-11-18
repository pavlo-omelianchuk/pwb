import { ORDERS_QUANTITY_SCHEMA } from './constants';

export const getDaySchema = (day: string) => {
  switch (day) {
    case 'Monday':
      return ORDERS_QUANTITY_SCHEMA[0].Monday;
    case 'Tuesday':
      return ORDERS_QUANTITY_SCHEMA[0].Tuesday;
    case 'Wednesday':
      return ORDERS_QUANTITY_SCHEMA[0].Wednesday;
    case 'Thursday':
      return ORDERS_QUANTITY_SCHEMA[0].Thursday;
    case 'Friday':
      return ORDERS_QUANTITY_SCHEMA[0].Friday;
    case 'Saturday':
      return ORDERS_QUANTITY_SCHEMA[0].Saturday;
    case 'Sunday':
      return ORDERS_QUANTITY_SCHEMA[0].Sunday;

    default:
      break;
  }
};
