export const round = (value, fix) => {
  if (isNaN(value)) return '';

  fix = getFix(value, fix);

  value = parseFloat(value);

  var valueAsString = value + '';
  var prefix =
    valueAsString.indexOf('.') >= 0 ? valueAsString.split('.')[0].length + 1 : valueAsString.length;

  return parseFloat((value + '').substring(0, fix + prefix));
};

export const formatCurrency = (value, fix) => {
  // return 'sdfa';
  if (!value || value === 0 || Math.abs(value) < 0.00000001) return '0.00';
  if (fix > 0) {
    fix = getFix(value, fix);
    value = round(value, fix);
  }

  var result = value
    .toFixed(fix === 0 ? 1 : fix)
    .toString()
    .replace(/\d(?=(\d{3})+\.)/g, '$&,');

  return fix === 0 ? result.split('.')[0] : result;
};

export const formatVolumn = (value, fix) => {
  return formatCurrency(value, fix);
};
const getFix = (value, fix) => {
  var maxFix = fix;
  var valueAsString = value + '';
  if (valueAsString.indexOf('e') >= 0) {
    var els = valueAsString.split('-');
    if (els.length === 2) fix = parseInt(els[1]);
  } else if (valueAsString.indexOf('.') >= 0) {
    els = valueAsString.split('.');
    if (els.length === 2) fix = els[1].length;
  } else {
    fix = 2;
  }

  if (fix > maxFix) {
    fix = maxFix;
  } else {
    if (fix === 1) fix = 2;
    else if (fix > 10) fix = 10;
  }
  return fix;
};
export const formatPercent = (value) => {
  if (value > 99.999 && value <= 100) value = 100;

  value = round(value, 2);
  var result = value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  return result;
};
export const roundTrade = (value, fix) => {
  if (isNaN(value)) return '';
  let newFix = getFixTrade(value, fix);

  value = parseFloat(value);

  var valueAsString = value + '';
  var prefix =
    valueAsString.indexOf('.') >= 0 ? valueAsString.split('.')[0].length + 1 : valueAsString.length;

  return parseFloat((value + '').substring(0, newFix + prefix));
};
export const getFixTrade = (value, fix) => {
  var maxFix = fix;
  var valueAsString = value + '';
  if (valueAsString.indexOf('e') >= 0) {
    var els = valueAsString.split('-');
    if (els.length === 2) fix = parseInt(els[1]);
  } else if (valueAsString.indexOf('.') >= 0) {
    var els = valueAsString.split('.');
    if (els.length === 2) fix = els[1].length;
  } else {
    fix = 2;
  }

  if (fix > maxFix) {
    fix = maxFix;
  } else {
    if (fix == 1) fix = 2;
    else if (fix > 10) fix = 10;
  }
  return fix;
};
export const formatCurrencyTrade = (value, fix) => {
  if (!value || value == 0 || Math.abs(value) < 0.00000001) return '0.00';
  value = round(value, fix);
  var newFix = getFixTrade(value, fix);
  var result = value.toFixed(newFix).replace(/\d(?=(\d{3})+\.)/g, '$&,');

  return result;
};
