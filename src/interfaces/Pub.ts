import PubData from './PubData';

export interface Pub {
  principalInformation: {
    state: {
      value: string;
      isValid: boolean;
    };
    city: {
      value: string;
      isValid: boolean;
    };
    name: {
      value: string;
      isValid: boolean;
    };
    hasTouched: boolean;
  };
  contactInformation: {
    responsible: {
      value: string;
      isValid: boolean;
    };
    email: {
      value: string;
      isValid: boolean;
    };
    whatsapp: {
      value: string;
      isValid: boolean;
    };
    instagram: {
      value: string;
      isValid: boolean;
    };
    hasTouched: boolean;
  };
  locationInformation: {
    address: {
      value: string;
      isValid: boolean;
    };
    reference: {
      value: string;
      isValid: boolean;
    };
    photo: {
      value: string;
      isValid: boolean;
    };
    hasTouched: boolean;
  };
  pubRequestService?: {
    isFetching?: boolean;
    error: Error | null;
    isSearch?: boolean;
    pubs: {
      page: number;
      totalPages: number;
      totalResults: number;
      results: PubData[];
    };
    pubsSearchResults?: PubData[];
    photoFilename?: string;
    isCodeValide?: boolean;
    idDeletePubCurrent?: string;
  };
}
