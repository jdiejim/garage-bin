export const getKey = () => Math.round(Math.random() * Date.now());
export const updateArray = (array, item) => array.map((element) => {
  if (element.id === item.id) {
    return item;
  }
  return element;
});

export const getCounters = array => array.reduce((obj, element) => {
  const counters = obj;
  const type = element.cleanliness.toLowerCase();

  if (!counters[type]) {
    counters[type] = 0;
  }

  counters[type] += 1;
  return counters;
}, {});
