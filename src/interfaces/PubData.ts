interface PubData {
  _id?: string;
  name: string;
  email: string;
  whatsapp: string;
  instagram: string;
  state: number;
  city: number;
  address: string;
  reference: string;
  photo?: string | Blob;
  responsible: string;
  code?: string;
  __v?: number;
}

export default PubData;
