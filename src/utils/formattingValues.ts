const regex = {
  onlyNumbers: /[^\d]/gi,
  formatMobileNumber: /(\d{2})(\d{5})(\d{4})/g,
  removeSpecialCharacter: /[^a-zA-Z0-9]/gi,
  formatInstagram: /[^a-zA-Z[.0-9[-]/g,
  formatEmail: /\S+@\S+\.\S+/g
};

export const formatMobileNumber = (number: string) => {
  const lengthNumber = 11;
  const formatNumberPosition = '($1) $2-$3';

  const clearNumber = number.replace(regex.onlyNumbers, '');

  return clearNumber.length <= lengthNumber
    ? clearNumber.replace(regex.formatMobileNumber, formatNumberPosition)
    : null;
};

export const removeSpecialCharacter = (data: string) =>
  data.replace(regex.removeSpecialCharacter, '');

export const formatInstagram = (data: string) =>
  data.replace(regex.formatInstagram, '');

export const formatEmail = (email: string) => regex.formatEmail.test(email);
