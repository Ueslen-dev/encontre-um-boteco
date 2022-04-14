interface PubData {
  name: string;
  email: string;
  whatsapp: string;
  instagram: string;
  state: number;
  city: number;
  address: string;
  reference: string;
  responsible: string;
  photo?: string | Blob;
}

export default PubData;
