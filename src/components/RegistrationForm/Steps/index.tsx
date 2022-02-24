import Input from 'components/Input';
import Select from 'components/Select';
import Container from 'components/Container';

import * as S from './styles';

const RegistrationForm = () => (
  <S.Wrapper>
    <Container>
      <h1>Ei, corre aqui!</h1>
      <p>
        Os campos marcados com <span>(*)</span> são obrigatórios, tudo bem?
      </p>
      <S.InputGroup gridTemplateColumns="1fr 1fr">
        <Select
          placeholder="Estado"
          optionValue="id"
          optionName="nome"
          /*  options={states} */
          /*  onChange={(value) => handleChange('selectedState', value)} */
        />
        <Select
          /* disabled={_.isEmpty(citys)} */
          placeholder="Cidade"
          optionValue="id"
          optionName="nome"
          /* options={citys} */
          /* onChange={(value) => handleChange('selectedCity', value)} */
          /* loading={isFetching} */
        />
      </S.InputGroup>
      <S.InputGroup>
        <Input
          name="pubName"
          placeholder="Digite o nome do boteco"
          label="Qual o nome do boteco?"
          required
        />
      </S.InputGroup>
      <S.InputGroup gridTemplateColumns="1fr 2fr">
        <Input
          name="responsible"
          placeholder="Digite o seu nome"
          label="Qual o seu nome?"
          required
        />
        <Input
          name="email"
          placeholder="Digite o seu email"
          label="Qual o seu email?"
          required
        />
      </S.InputGroup>
      <S.InputGroup gridTemplateColumns="2fr 1fr">
        <Input
          name="whatsapp"
          placeholder="Digite o número de WhatsApp"
          label="Qual o número do WhatsApp do boteco?"
        />
        <Input
          name="instagram"
          placeholder="Digite o Instagram do boteco"
          label="Qual o Instagram do boteco?"
        />
      </S.InputGroup>
      <S.InputGroup gridTemplateColumns="1fr 1fr">
        <Input
          name="adress"
          placeholder="Digite o endereço do boteco"
          label="Qual o endereço do boteco?"
          required
        />
        <Input
          name="reference"
          placeholder="Digite um ponto de referência"
          label="Existe algum ponto de referência?"
          required
        />
      </S.InputGroup>
    </Container>
  </S.Wrapper>
);
export default RegistrationForm;
