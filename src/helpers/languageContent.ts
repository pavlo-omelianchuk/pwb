export const getContent = (lang: string) => {
  switch (lang) {
    case 'en':
      return englishContent;
    case 'en-us':
      return englishUSContent;
    case 'fr':
      return frenchContent;
    case 'hu':
      return hungarianContent;
    case 'cs':
      return czechContent;
    case 'sv':
      return swedishContent;
    case 'fi':
      return finnishContent;

    default:
      return englishContent;
  }
};

const englishContent = {
  result: 'Results',
  orders: 'Orders',
  perMonth: 'Per month',
  howManySites: 'How many sites do you have?',
  whatDaysOpen: 'What days open?',
  monday: 'Monday',
  tuesday: 'Tuesday',
  wednesday: 'Wednesday',
  thursday: 'Thursday',
  friday: 'Friday',
  saturday: 'Saturday',
  sunday: 'Sunday',
  open: 'Open',
  closed: 'Closed',
  allDay: 'All day',
  multipleOpenings: 'Multi Openings',
  from: 'From',
  to: 'To',
  sameEveryDay: 'Same every day',
  aov: 18.5,
  symbol: '£',
};
const englishUSContent = {
  result: 'Results',
  orders: 'Orders',
  perMonth: 'Per month',
  howManySites: 'How many sites do you have?',
  whatDaysOpen: 'What days open?',
  monday: 'Monday',
  tuesday: 'Tuesday',
  wednesday: 'Wednesday',
  thursday: 'Thursday',
  friday: 'Friday',
  saturday: 'Saturday',
  sunday: 'Sunday',
  open: 'Open',
  closed: 'Closed',
  allDay: 'All day',
  multipleOpenings: 'Multi Openings',
  from: 'From',
  to: 'To',
  sameEveryDay: 'Same every day',
  aov: 22.4,
  symbol: '$',
};
const frenchContent = {
  result: 'Résultats',
  orders: 'Ordres',
  perMonth: 'par mois',
  howManySites: 'Combien de sites avez-vous ?',
  whatDaysOpen: 'Quels jours ouvrez-vous ?',
  monday: 'Lundi',
  tuesday: 'Mardi',
  wednesday: 'Mercredi',
  thursday: 'Jeudi',
  friday: 'Vendredi',
  saturday: 'Samedi',
  sunday: 'Dimanche',
  open: 'Ouverte',
  closed: 'Fermée',
  allDay: 'Toute la journée',
  multipleOpenings: 'Ouvertures multiples',
  from: 'De',
  to: 'à',
  sameEveryDay: 'Le même tous les jours',
  aov: 21.5,
  symbol: '€',
};

const hungarianContent = {
  result: 'Eredmények',
  orders: 'Rendelések',
  perMonth: 'Havonta',
  howManySites: 'Hány webhelye van?',
  whatDaysOpen: 'Milyen napok vannak nyitva?',
  monday: 'Hétfő',
  tuesday: 'Kedd',
  wednesday: 'Szerda',
  thursday: 'Csütörtök',
  friday: 'Péntek',
  saturday: 'Szombat',
  sunday: 'Vasárnap',
  open: 'Nyitott',
  closed: 'Zárva',
  allDay: 'Egész nap',
  multipleOpenings: 'Több nyílás',
  from: 'Este',
  to: 'és',
  sameEveryDay: 'Minden nap ugyanaz',
  aov: 8785.5,
  symbol: 'Ft',
};
const czechContent = {
  result: 'Výsledky',
  orders: 'Objednávky',
  perMonth: 'Za měsíc',
  howManySites: 'Kolik stránek máte?',
  whatDaysOpen: 'Které dny otevřeno?',
  monday: 'pondělí',
  tuesday: 'úterý',
  wednesday: 'středa',
  thursday: 'čtvrtek',
  friday: 'pátek',
  saturday: 'sobota',
  sunday: 'neděle',
  open: 'Otevřít',
  closed: 'Zavřeno',
  allDay: 'Celý den',
  multipleOpenings: 'Vícenásobné otvory',
  from: 'Od',
  to: 'Do',
  sameEveryDay: 'Stejné každý den',
  aov: 523.5,
  symbol: 'Kč',
};
const swedishContent = {
  result: 'Resultat',
  orders: 'Beställningar',
  perMonth: 'Per månad',
  howManySites: 'Hur många sajter har du?',
  whatDaysOpen: 'Vilka dagar är öppet?',
  monday: 'Måndag',
  tuesday: 'Tisdag',
  wednesday: 'Onsdag',
  thursday: 'Torsdag',
  friday: 'Fredag',
  saturday: 'Lördag',
  sunday: 'söndag',
  open: 'Öppna',
  closed: 'Stängt',
  allDay: 'Hela dagen',
  multipleOpenings: 'Flera öppningar',
  from: 'Från',
  to: 'till',
  sameEveryDay: 'Samma varje dag',
  aov: 233,
  symbol: 'kr',
};
const finnishContent = {
  result: 'Tulokset',
  orders: 'tilaukset',
  perMonth: 'kuukaudessa',
  howManySites: 'Kuinka monta sivustoa sinulla on?',
  whatDaysOpen: 'Mitkä päivät ovat avoinna?',
  monday: 'Maanantai',
  tuesday: 'Tiistai',
  wednesday: 'Keskiviikko',
  thursday: 'Torstai',
  friday: 'Perjantai',
  saturday: 'Lauantai',
  sunday: 'Sunnuntai',
  open: 'Avaa',
  closed: 'suljettu',
  allDay: 'Koko päivän',
  multipleOpenings: 'Useita avauksia',
  from: 'klo',
  to: '',
  sameEveryDay: 'Sama joka päivä',
  aov: 21.5,
  symbol: '€',
};
