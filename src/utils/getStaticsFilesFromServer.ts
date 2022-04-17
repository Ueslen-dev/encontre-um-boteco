export const getStaticsFilesFromServer = (file: string | Blob) => {
  const filePathStatic = `${process.env.NEXT_PUBLIC_ENCONTRE_UM_BOTECO_URL}/files/images/${file}`;

  return filePathStatic;
};

export default getStaticsFilesFromServer;
