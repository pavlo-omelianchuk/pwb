export const ampmTimeToNumbers = (time: string) => {
  switch (time) {
    case '12AM':
      return 0;
    case '1AM':
      return 1;
    case '2AM':
      return 2;
    case '3AM':
      return 3;
    case '4AM':
      return 4;
    case '5AM':
      return 5;
    case '6AM':
      return 6;
    case '7AM':
      return 7;
    case '8AM':
      return 8;
    case '9AM':
      return 9;
    case '10AM':
      return 10;
    case '11AM':
      return 11;
    case '12PM':
      return 12;
    case '1PM':
      return 13;
    case '2PM':
      return 14;
    case '3PM':
      return 15;
    case '4PM':
      return 16;
    case '5PM':
      return 17;
    case '6PM':
      return 18;
    case '7PM':
      return 19;
    case '8PM':
      return 20;
    case '9PM':
      return 21;
    case '10PM':
      return 22;
    case '11PM':
      return 23;
    default:
      break;
  }
};
