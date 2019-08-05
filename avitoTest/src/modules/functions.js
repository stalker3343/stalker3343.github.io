function getMaxPrice(mass) {
  const nirmalizeMass = mass.filter(el => el.price);
  let max = 0;

  nirmalizeMass.forEach(el => {
    if (el['price'] > max) {
      max = el['price'];
    }
  });
  return max;
}

function getMinPrice(mass) {
  const nirmalizeMass = mass.filter(el => el.price);
  return nirmalizeMass.reduce((min, p) => {
    return p.price < min ? p.price : min;
  }, nirmalizeMass[0].price);
}
export { getMaxPrice, getMinPrice };
