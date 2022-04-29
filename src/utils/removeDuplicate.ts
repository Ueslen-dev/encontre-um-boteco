export const removeDuplicateObjectsFromArray = (
  array: unknown[],
  equalElement: string
) => {
  return Array.from(new Set(array.map((object) => object[equalElement]))).map(
    (element) => {
      return array.find((object) => object[equalElement] === element);
    }
  );
};
