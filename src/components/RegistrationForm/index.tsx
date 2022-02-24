import { useState } from 'react';
import { Steps, Button, message, Form } from 'antd';

import { GiBeerStein as GiBeerSteinIcon } from 'react-icons/gi';
import {
  IoIosChatboxes as IoIosChatboxesIcon,
  IoIosHome as IoIosHomeIcon
} from 'react-icons/io';

import Container from 'components/Container';

import * as S from './styles';

const { Step } = Steps;

const RegistrationForm = () => {
  const steps = [
    {
      title: 'Boteco novo, uhuu!',
      content: 'Já quero saber quem é',
      icon: <GiBeerSteinIcon className="iconSize" />
    },
    {
      title: 'Como entrar em contato?',
      content: 'Como entrar em contato?',
      icon: <IoIosChatboxesIcon className="iconSize" />
    },
    {
      title: 'Como podemos encontrar?',
      content: 'Como podemos encontrar?',
      icon: <IoIosHomeIcon className="iconSize" />
    }
  ];

  const [current, setCurrent] = useState(0);

  const next = () => setCurrent(current + 1);
  const prev = () => setCurrent(current - 1);

  return (
    <S.Wrapper>
      <Container>
        <S.Ttile>Ei, corre aqui!</S.Ttile>
        <S.Subtitle>
          Os campos marcados com (<span>*</span>) são obrigatórios, tudo bem?
        </S.Subtitle>
      </Container>
      <Steps current={current}>
        {steps.map((step) => (
          <Step key={step.title} title={step.title} icon={step.icon} />
        ))}
      </Steps>
      <Form className="steps-content">{steps[current].content}</Form>
      <S.StepsAction>
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success('Processing complete!')}
          >
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </S.StepsAction>
    </S.Wrapper>
  );
};
export default RegistrationForm;
