export const getPriceInCurrency = (prices, selectedCurrency) => {
  const price = prices.filter(
    (price) => price.currency.label === selectedCurrency.label
  )[0];
  return price;
};

export const handleAddProduct = (productIndex, userProducts) => {
  let item = userProducts[productIndex];
  let allProducts = [...userProducts];

  item = {
    ...item,
    numberOfProduct: userProducts[productIndex].numberOfProduct + 1,
  };

  allProducts.splice(productIndex, 1, item);
  return allProducts;
};

export const  handleRemoveProduct = (productIndex, userProducts) => {
    let item = userProducts[productIndex];
    let allProducts = [...userProducts];

    if (item.numberOfProduct === 1) {
      allProducts.splice(productIndex, 1);
    } else {
      item = {
        ...item,
        numberOfProduct:
          userProducts[productIndex].numberOfProduct - 1,
      };
      allProducts.splice(productIndex, 1, item);
    }
    return allProducts
    
  }

  export const handleGetTotalPrice = (userProducts, selectedCurrency) => {
    let total = 0;
    userProducts.forEach((el) => {
      let amount = getPriceInCurrency(el.prices, selectedCurrency).amount;
      let num = amount * el.numberOfProduct;
      total += num;
    });
    total = Math.round(total);
   
    total = total + '.00'

    return total;
  };

  export const getQuantity = (userProducts) => {
     
      let quantity = 0
      userProducts.forEach(el => {
        quantity += el.numberOfProduct
      })
      return quantity
  }
