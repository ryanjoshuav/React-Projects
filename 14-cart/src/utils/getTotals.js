export const getTotals = (cart) => {
  const { totalPrice, totalAmount } = cart.reduce(
    (totals, item) => {
      totals.totalAmount += item.amount;
      totals.totalPrice += item.price * item.amount;

      return totals;
    },
    { totalPrice: 0, totalAmount: 0 }
  );
  return {
    totalAmount,
    totalPrice,
  };
};
