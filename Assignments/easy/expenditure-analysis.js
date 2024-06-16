/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/
function calculateTotalSpentByCategory(transactions) {
  const totalTransac = {};

  for (let i = 0; i < transactions.length; i++) {
    const { category, price } = transactions[i];
    if (totalTransac[category]) {
      totalTransac[category] += price;
    } else {
      totalTransac[category] = price;
    }
  }

  return Object.keys(totalTransac).map((category) => ({
    category,
    totalSpent: totalTransac[category],
  }));
}

const transactions = [
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: "Food",
    itemName: "Pizza",
  },
  {
    id: 2,
    timestamp: 1656076800001,
    price: 5,
    category: "Drink",
    itemName: "Coke",
  },
  {
    id: 3,
    timestamp: 1656076800001,
    price: 10,
    category: "Food",
    itemName: "Sandwich",
  },
];

console.log(calculateTotalSpentByCategory(transactions));

module.exports = calculateTotalSpentByCategory;
