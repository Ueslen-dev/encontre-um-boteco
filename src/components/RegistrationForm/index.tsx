import { useState } from 'react';
import { Steps, Button as ButtonAntd, Form } from 'antd';

import { GiBeerStein as GiBeerSteinIcon } from 'react-icons/gi';

import {
  IoIosChatboxes as IoIosChatboxesIcon,
  IoIosHome as IoIosHomeIcon
} from 'react-icons/io';

import {
  RightOutlined as RightOutlinedIcon,
  LeftOutlined as LeftOutlinedIcon
} from '@ant-design/icons';

import Container from 'components/Container';
import Button from 'components/Button';

import PrincipalInformation from './Steps/PrincipalInformation';
import ContactInformation from './Steps/ContactInformation';
import LocationInformation from './Steps/LocationInformation';

import * as S from './styles';

const { Step } = Steps;

const RegistrationForm = () => {
  const steps = [
    {
      title: 'Boteco novo, uhuu!',
      content: <PrincipalInformation />,
      icon: <GiBeerSteinIcon className="iconSize" />
    },
    {
      title: 'Queremos saber mais',
      content: <ContactInformation />,
      icon: <IoIosChatboxesIcon className="iconSize" />
    },
    {
      title: 'Como podemos encontrar?',
      content: <LocationInformation />,
      icon: <IoIosHomeIcon className="iconSize" />
    }
  ];

  const [current, setCurrent] = useState(0);

  const next = () => setCurrent(current + 1);
  const prev = () => setCurrent(current - 1);

  return (
    <Container>
      <S.Wrapper>
        <S.Ttile>Ei, corre aqui!</S.Ttile>
        <S.Subtitle>
          Os campos marcados com (<span>*</span>) são obrigatórios, tudo bem?
        </S.Subtitle>
        <Steps current={current}>
          {steps.map((step) => (
            <Step key={step.title} title={step.title} icon={step.icon} />
          ))}
        </Steps>
        <Form name="pub" className="steps-content">
          {steps[current].content}
        </Form>
        <S.StepsAction>
          {current > 0 && (
            <ButtonAntd
              type="primary"
              shape="circle"
              icon={<LeftOutlinedIcon className="icon" />}
              onClick={() => prev()}
              size="large"
              className="previousButton"
            />
          )}

          {current < steps.length - 1 && (
            <ButtonAntd
              type="primary"
              shape="circle"
              icon={<RightOutlinedIcon className="icon" />}
              onClick={() => next()}
              size="large"
            />
          )}

          {current === steps.length - 1 && (
            <Button
              type="primary"
              name="Cadastrar"
              buttonSize="medium"
              htmlType="submit"
            />
          )}
        </S.StepsAction>
      </S.Wrapper>
    </Container>
  );
};
export default RegistrationForm;
