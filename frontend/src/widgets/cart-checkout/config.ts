import {
  ChinaFlag,
  USAFlag,
  RussiaFlag,
  BelarusFlag,
  UnitedKingdomFlag,
} from '@/shared/ui';

export const countryCodes = [
  { code: '+7', label: 'Россия' },
  { code: '+375', label: 'Беларусь' },
  { code: '+1', label: 'США' },
  { code: '+86', label: 'Китай' },
  { code: '+44', label: 'Великобритания' },
];

export const getPhoneMask = (countryCode: string) => {
  switch (countryCode) {
    case '+7':
      return '+7 (999) 999-99-99';
    case '+375':
      return '+375 (99) 999-99-99';
    case '+1':
      return '+1 (999) 999-9999';
    case '+86':
      return '+86 999 9999 9999';
    case '+44':
      return '+44 9999 999999';
    default:
      return '';
  }
};

export const getFlagComponent = (code: string) => {
  switch (code) {
    case '+7':
      return RussiaFlag;
    case '+375':
      return BelarusFlag;
    case '+1':
      return USAFlag;
    case '+86':
      return ChinaFlag;
    case '+44':
      return UnitedKingdomFlag;
    default:
      return null;
  }
};
