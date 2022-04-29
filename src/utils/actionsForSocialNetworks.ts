import { removeSpecialCharacter } from 'utils/formattingValues';

const whatsappAPi = process.env.NEXT_PUBLIC_WHATSAPP_API;
const instagramAPI = process.env.NEXT_PUBLIC_INSTAGRAM_API;

export const openInstagram = (instagram: string) => {
  const endpoint = `${instagramAPI}/${instagram}`;

  return window.open(endpoint);
};

export const openWhatsapp = (number: string) => {
  const message = 'Olá, tudo bem? Vim através do Encontre um Boteco :)';
  const newNumber = removeSpecialCharacter(number);

  const endpoint = `${whatsappAPi}/send?phone=55${newNumber}&text=${message}`;

  return window.open(endpoint);
};
