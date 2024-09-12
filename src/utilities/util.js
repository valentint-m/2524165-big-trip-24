function getRandomArrayElement (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomInteger(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export { getRandomArrayElement, getRandomInteger };
