import { createContext, useState, useCallback, useMemo } from 'react';

import { children } from 'types/children';
import { Pub } from 'interfaces/Pub';

type Provider = {
  children: children;
};

interface PubContextInterface {
  pubContext: Pub;
  setPubStore: (
    step: string,
    state: string,
    value: unknown,
    isValid?: boolean,
    stepIsValid?: boolean
  ) => void;
}

const INITIAL_STATE = {
  principalInformation: {
    state: {
      value: '',
      isValid: false
    },
    city: {
      value: '',
      isValid: false
    },
    name: {
      value: '',
      isValid: false
    },
    stepIsValid: false
  },
  contactInformation: {
    responsible: {
      value: '',
      isValid: false
    },
    email: {
      value: '',
      isValid: false
    },
    whatsapp: {
      value: '',
      isValid: false
    },
    instagram: {
      value: '',
      isValid: false
    },
    stepIsValid: false
  },
  locationInformation: {
    address: {
      value: '',
      isValid: false
    },
    reference: {
      value: '',
      isValid: false
    },
    photo: {
      value: '',
      isValid: false
    },
    stepIsValid: false
  }
};

const PubContext = createContext<PubContextInterface>(
  {} as PubContextInterface
);

const PubProvider = ({ children }: Provider) => {
  const [pubContext, setPubContext] = useState<Pub>(INITIAL_STATE);

  const setPubStore = useCallback(
    (
      step: string,
      state: string,
      value: unknown,
      isValid?: boolean,
      stepIsValid?: boolean
    ) => {
      setPubContext((values) => {
        return {
          ...values,
          [step]: {
            ...values[step],
            [state]: {
              value: value,
              isValid: isValid
            },
            stepIsValid: stepIsValid
          }
        };
      });
    },
    [setPubContext]
  );

  const state = useMemo(() => {
    return {
      pubContext,
      setPubStore
    };
  }, [pubContext, setPubStore]);

  return <PubContext.Provider value={state}>{children}</PubContext.Provider>;
};

export { PubContext, PubProvider };
