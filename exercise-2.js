db.pizzaOrders.findOne(
  { customer_name: "Zoe" },
  { total_price: true, customer_name: true }
);
