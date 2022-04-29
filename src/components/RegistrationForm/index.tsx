import dynamic from 'next/dynamic';
import { useState, useMemo } from 'react';
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

const ContactInformationDynamic = dynamic(
  () => import('./Steps/ContactInformation')
);
const LocationInformationDynamic = dynamic(
  () => import('./Steps/LocationInformation')
);

import usePub from 'hooks/usePub';
import useFormStep from 'hooks/useFormStep';

import * as S from './styles';

const { Step } = Steps;

const RegistrationForm = () => {
  const { submitPubForm } = usePub();
  const { validateStep, checkStepFormHasBeenTouched } = useFormStep();

  const formsSteps = useMemo(() => {
    return {
      0: 'principalInformation',
      1: 'contactInformation',
      2: 'locationInformation'
    };
  }, []);

  const steps = [
    {
      title: 'Boteco novo, uhuu!',
      content: <PrincipalInformation />,
      icon: <GiBeerSteinIcon className="iconSize" />
    },
    {
      title: 'Queremos saber mais',
      content: <ContactInformationDynamic />,
      icon: <IoIosChatboxesIcon className="iconSize" />
    },
    {
      title: 'Como podemos encontrar?',
      content: <LocationInformationDynamic />,
      icon: <IoIosHomeIcon className="iconSize" />
    }
  ];

  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent(current - 1);
  const next = (type?: string) => {
    const stepIsValid = validateStep(formsSteps[current]);
    checkStepFormHasBeenTouched(formsSteps[current], true);

    return type === 'submit'
      ? stepIsValid && submitPubForm()
      : stepIsValid && setCurrent(current + 1);
  };

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
              onClick={() => next('submit')}
            />
          )}
        </S.StepsAction>
      </S.Wrapper>
    </Container>
  );
};
export default RegistrationForm;
