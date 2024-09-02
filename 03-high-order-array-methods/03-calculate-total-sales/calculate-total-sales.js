function calculateTotalSalesWithTax(products, tax) {
  const totalPrice = products.reduce((sum, product) => {
    return sum + product.price * product.quantity;
  }, 0);

  const taxAmount = (totalPrice * tax) / 100;
  const priceWithTax = taxAmount + totalPrice;
  // return parseFloat(priceWithTax.toFixed(2));
  return Number(priceWithTax);
}

module.exports = calculateTotalSalesWithTax;
