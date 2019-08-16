/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
function getMaxPrice(mass) {
  const nirmalizeMass = mass.filter(el => el.price);
  let max = 0;

  nirmalizeMass.forEach(el => {
    if (el.price > max) {
      max = el.price;
    }
  });
  return max;
}

function getMinPrice(mass) {
  const nirmalizeMass = mass.filter(el => el.price);
  if (nirmalizeMass.length > 0) {
    return nirmalizeMass.reduce(
      (min, p) => (p.price < min ? p.price : min),
      nirmalizeMass[0].price
    );
  }
  return 0;
}

function productFiltered(mass, categ, beginPrice, endPrice, typeSort, store, directionSort) {
  return (
    mass
      // фильтр по категории
      .filter(el => !categ || el.category === categ)
      // фильтр по ценам
      .filter(product => {
        if (!product.price) return true;
        return Number(product.price) >= beginPrice && Number(product.price) <= endPrice;
      })
      // сотрировка
      .sort((lastOne, nextOne) => {
        // по рейтингу
        if (typeSort === 'rating') {
          const ratePrev = store.getters.getSellerById(lastOne.relationships.seller).rating;
          const reteNext = store.getters.getSellerById(nextOne.relationships.seller).rating;
          if (directionSort === 'up') {
            return ratePrev > reteNext ? 1 : -1;
          }
          return ratePrev < reteNext ? 1 : -1;

          // по цене
        }
        if (typeSort === 'price') {
          const pricePrev = lastOne.price;
          const priceNext = nextOne.price;
          if (directionSort === 'up') {
            return pricePrev > priceNext ? 1 : -1;
          }
          return pricePrev < priceNext ? 1 : -1;
        }
      })
  );
}
export { getMaxPrice, getMinPrice, productFiltered };
