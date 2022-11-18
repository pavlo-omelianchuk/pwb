export const ampmTimeToNumbers = (time: string) => {
  switch (time) {
    case '12AM':
      return 0;
    case '01AM':
      return 1;
    case '02AM':
      return 2;
    case '02AM':
      return 3;
    case '04AM':
      return 4;
    case '05AM':
      return 5;
    case '06AM':
      return 6;
    case '07AM':
      return 7;
    case '08AM':
      return 8;
    case '09AM':
      return 9;
    case '10AM':
      return 10;
    case '11AM':
      return 11;
    case '12PM':
      return 12;
    case '01PM':
      return 13;
    case '02PM':
      return 14;
    case '03PM':
      return 15;
    case '04PM':
      return 16;
    case '05PM':
      return 17;
    case '06PM':
      return 18;
    case '07PM':
      return 19;
    case '08PM':
      return 20;
    case '09PM':
      return 21;
    case '10PM':
      return 22;
    case '11PM':
      return 23;
    default:
      break;
  }
};
