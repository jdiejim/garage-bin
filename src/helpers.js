export const getKey = () => Math.round(Math.random() * Date.now());
export const updateArray = (array, item) => array.map((element) => {
  if (element.id === item.id) {
    return item;
  }
  return element;
});
