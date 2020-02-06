import Logg from './Logg';

export function truncateText(text, maxChar) {
  if (!text || typeof text !== 'string') return '';
  if (text.length > maxChar) {
    let startString = text.slice(0, 5);
    let endString = text.slice(maxChar - 5, maxChar);
    return `${startString}...${endString}`;
  } else {
    return text;
  }
}

/*
 * Complete the 'countNonUnique' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY numbers as parameter.
 */
export function countNonUnique(number) {
  // Your code goes here
  let INTEGER_ARRAY = [1, 3, 1, 4, 5, 6, 3, 2];
  let res = [];
  let sort_arr = INTEGER_ARRAY.sort();
  for (let i = 0; i < sort_arr.length; i++) {
    if (sort_arr[i + 1] === sort_arr[i]) {
      res.push(sort_arr[i]);
    }
  }
  return res.length;
}
