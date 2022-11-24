type ArrayOfOpenedHoursProps = {
  openingHour: number | undefined;
  closingHour: number | undefined;
  openingHour2: number | undefined;
  closingHour2: number | undefined;
};

export const getArrayOfWorkingHours = ({
  openingHour,
  closingHour,
  openingHour2,
  closingHour2,
}: ArrayOfOpenedHoursProps) => {
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
};
