import Input from 'components/Input';

import usePub from 'hooks/usePub';
import useFormStep from 'hooks/useFormStep';

import messagesForFormSteps from './messagesForFormSteps';

import * as S from './styles';

const ContactInformation = () => {
  const nameMaxLength = 20;
  const instagramMaxLength = 30;

  const step = 'contactInformation';
  const maxNumberLength = 11;

  const { pubContext, handlePubForm } = usePub();
  const { checkInputError } = useFormStep();

  return (
    <>
      <S.InputGroup
        gridTemplateColumns="1fr 2fr"
        gap="20px"
        marginBottom="25px"
      >
        <Input
          name="responsible"
          placeholder="Digite o seu nome"
          label="Qual o seu nome?"
          maxLength={nameMaxLength}
          onChange={(event) => handlePubForm(step, 'responsible', event)}
          value={pubContext[step].responsible.value}
        />
        <Input
          name="email"
          placeholder="Digite o seu email"
          label="Qual o seu email?"
          required
          onChange={(event) => handlePubForm(step, 'email', event)}
          value={pubContext[step].email.value}
          hasError={checkInputError(step, 'email')}
          errorText={messagesForFormSteps.LABEL_EMAIL_IS_EMPTY}
        />
      </S.InputGroup>
      <S.InputGroup
        gridTemplateColumns="2fr 1fr"
        className="marginAndGap"
        gap="20px"
        marginBottom="20px"
      >
        <Input
          name="whatsapp"
          placeholder="Digite o número de WhatsApp"
          label="Qual o número de WhatsApp do boteco?"
          onChange={(event) => handlePubForm(step, 'whatsapp', event)}
          value={pubContext[step].whatsapp.value}
          maxLength={maxNumberLength}
        />
        <Input
          name="instagram"
          placeholder="Digite o Instagram do boteco"
          label="Qual o Instagram do boteco?"
          maxLength={instagramMaxLength}
          onChange={(event) => handlePubForm(step, 'instagram', event)}
          value={pubContext[step].instagram.value}
        />
      </S.InputGroup>
    </>
  );
};
export default ContactInformation;
