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
  console.log('Меня вызвали');

  return nirmalizeMass.reduce((min, p) => {
    return p.price < min ? p.price : min;
  }, nirmalizeMass[0].price);
}

function productFiltered(mass, categ, beginPrice, endPrice, typeSort, findSalers, directionSort) {
  return (
    mass
      // фильтр по категории
      .filter(el => {
        return !categ || el.category == categ;
      })
      // фильтр по ценам
      .filter(product => {
        if (!product.price) return true;
        return Number(product.price) >= beginPrice && Number(product.price) <= endPrice;
      })
      //сотрировка
      .sort((lastOne, nextOne) => {
        //по рейтингу
        if (typeSort == 'rating') {
          console.log(lastOne.relationships.seller);
          const ratePrev = findSalers(lastOne.relationships.seller).rating;
          const reteNext = findSalers(nextOne.relationships.seller).rating;
          if (directionSort == 'up') {
            return ratePrev > reteNext ? 1 : -1;
          } else {
            return ratePrev < reteNext ? 1 : -1;
          }
          //по цене
        } else if (typeSort == 'price') {
          const pricePrev = lastOne.price;
          const priceNext = nextOne.price;
          if (directionSort == 'up') {
            return pricePrev > priceNext ? 1 : -1;
          } else {
            return pricePrev < priceNext ? 1 : -1;
          }
        }
      })
  );
}
export { getMaxPrice, getMinPrice, productFiltered };
