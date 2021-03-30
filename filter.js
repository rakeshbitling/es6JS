const items = [
    {name: "Rakesh", price: 1},
    {name: "Sonar", price: 23},
    {name: "Mahipal", price: 54}
];
const filteredItems = items.find((t) =>  t.price > 23);
console.log(items);
console.log("=======================");
console.log(filteredItems)
