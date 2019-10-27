export default function currencyFilter(val, curr) {
  var options = { style: "currency", currency: curr };
  return new Intl.NumberFormat("ru-RU", options).format(val);
}
