import Input from 'components/Input';

import usePub from 'hooks/usePub';
import useFormStep from 'hooks/useFormStep';

import * as S from './styles';

const ContactInformation = () => {
  const nameMaxLength = 20;
  const instagramMaxLength = 30;

  const step = 'contactInformation';

  const { pubContext, handlePub } = usePub();
  const { checkInputError } = useFormStep();

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
          onChange={(event) => handlePub(step, 'responsible', event)}
          value={pubContext[step].responsible.value}
          hasError={checkInputError(step, 'responsible')}
          errorText="Erro no responsible"
        />
        <Input
          name="email"
          placeholder="Digite o seu email"
          label="Qual o seu email?"
          required
          onChange={(event) => handlePub(step, 'email', event)}
          value={pubContext[step].email.value}
          hasError={checkInputError(step, 'email')}
          errorText="Erro no email"
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
          onChange={(event) => handlePub(step, 'whatsapp', event)}
          value={pubContext[step].whatsapp.value}
          hasError={checkInputError(step, 'whatsapp')}
          errorText="Erro no whatsapp"
        />
        <Input
          name="instagram"
          placeholder="Digite o Instagram do boteco"
          label="Qual o Instagram do boteco?"
          maxLength={instagramMaxLength}
          onChange={(event) => handlePub(step, 'instagram', event)}
          value={pubContext[step].instagram.value}
          hasError={checkInputError(step, 'instagram')}
          errorText="Erro no instagram"
        />
      </S.InputGroup>
    </>
  );
};
export default ContactInformation;
