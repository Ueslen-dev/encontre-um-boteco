export const regex = {
  onlyNumbers: /[^\d]/gi,
  formatMobileNumber: /(\d{2})(\d{5})(\d{4})/g,
  removeSpecialCharacter: /[^a-zA-Z0-9]/gi,
  formatInstagram: /[^a-zA-Z[.0-9[-]/g,
  formatEmail: /\S+@\S+\.\S+/g
};

export default regex;
