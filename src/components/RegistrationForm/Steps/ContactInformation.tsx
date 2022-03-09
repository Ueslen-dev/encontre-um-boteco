import Input from 'components/Input';

import * as S from './styles';

const ContactInformation = () => {
  const nameMaxLength = 20;
  const instagramMaxLength = 30;

  return (
    <>
      <S.InputGroup
        gridTemplateColumns="1fr 2fr"
        gap="20px"
        marginBottom="30px"
      >
        <Input
          name="responsible"
          placeholder="Digite o seu nome"
          label="Qual o seu nome?"
          required
          maxLength={nameMaxLength}
        />
        <Input
          name="email"
          placeholder="Digite o seu email"
          label="Qual o seu email?"
          required
        />
      </S.InputGroup>
      <S.InputGroup
        gridTemplateColumns="2fr 1fr"
        className="marginAndGap"
        gap="50px"
        marginBottom="20px"
      >
        <Input
          name="whatsapp"
          placeholder="Digite o número de WhatsApp"
          label="Qual o número de WhatsApp do boteco?"
        />
        <Input
          name="instagram"
          placeholder="Digite o Instagram do boteco"
          label="Qual o Instagram do boteco?"
          maxLength={instagramMaxLength}
        />
      </S.InputGroup>
    </>
  );
};
export default ContactInformation;
