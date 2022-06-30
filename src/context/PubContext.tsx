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
  clearPubContext: () => void;
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
      isValid: true
    },
    email: {
      value: '',
      isValid: false
    },
    whatsapp: {
      value: '',
      isValid: true
    },
    instagram: {
      value: '',
      isValid: true
    },
    hasTouched: false
  },
  locationInformation: {
    address: {
      value: '',
      isValid: true
    },
    reference: {
      value: '',
      isValid: true
    },
    photo: {
      value: '',
      isValid: true
    },
    hasTouched: false
  },
  pubRequestService: {
    isFetching: false,
    error: null,
    isSearch: false,
    pubs: {
      page: null,
      totalResults: null,
      totalPages: null,
      results: []
    },
    pubsSearchResults: [],
    isCodeValide: false,
    idDeletePubCurrent: null
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
      setPubContext((prevValues) => {
        return {
          ...prevValues,
          pubRequestService: {
            ...prevValues['pubRequestService'],
            [state]: value
          }
        };
      });
    },
    [setPubContext]
  );

  const clearPubContext = useCallback(() => {
    return setPubContext(INITIAL_STATE);
  }, []);

  const state = useMemo(() => {
    return {
      pubContext,
      setPubStore,
      setStepFormHasTouched,
      setPubRequestService,
      clearPubContext
    };
  }, [
    pubContext,
    setPubStore,
    setStepFormHasTouched,
    setPubRequestService,
    clearPubContext
  ]);

  return <PubContext.Provider value={state}>{children}</PubContext.Provider>;
};

export { PubContext, PubProvider };
