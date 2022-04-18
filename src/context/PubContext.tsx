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
    value?: unknown,
    isValid?: boolean
  ) => void;
  setStepFormHasTouched: (step: string, hasTouched: boolean) => void;
  setPubRequestService: (state: string, value: unknown) => void;
}

const INITIAL_STATE = {
  principalInformation: {
    state: {
      value: null,
      isValid: false
    },
    city: {
      value: null,
      isValid: false
    },
    name: {
      value: '',
      isValid: false
    },
    hasTouched: false
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
    hasTouched: false
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
    hasTouched: false
  },
  pubRequestService: {
    isFetching: false,
    error: null,
    pubs: {
      page: null,
      totalResults: null,
      totalPages: null,
      results: []
    }
  }
};

const PubContext = createContext<PubContextInterface>(
  {} as PubContextInterface
);

const PubProvider = ({ children }: Provider) => {
  const [pubContext, setPubContext] = useState<Pub>(INITIAL_STATE);

  const setPubStore = useCallback(
    (step: string, state: string, value?: unknown, isValid?: boolean) => {
      setPubContext((values) => {
        return {
          ...values,
          [step]: {
            ...values[step],
            [state]: {
              value: value,
              isValid: isValid
            }
          }
        };
      });
    },
    [setPubContext]
  );

  const setStepFormHasTouched = useCallback(
    (step: string, hasTouched: boolean) => {
      setPubContext((values) => {
        return {
          ...values,
          [step]: {
            ...values[step],
            hasTouched
          }
        };
      });
    },
    [setPubContext]
  );

  const setPubRequestService = useCallback(
    (state: string, value: boolean) => {
      setPubContext((values) => {
        return {
          ...values,
          pubRequestService: {
            ...values['pubRequestService'],
            [state]: value
          }
        };
      });
    },
    [setPubContext]
  );

  const state = useMemo(() => {
    return {
      pubContext,
      setPubStore,
      setStepFormHasTouched,
      setPubRequestService
    };
  }, [pubContext, setPubStore, setStepFormHasTouched, setPubRequestService]);

  return <PubContext.Provider value={state}>{children}</PubContext.Provider>;
};

export { PubContext, PubProvider };
