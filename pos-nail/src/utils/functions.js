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
