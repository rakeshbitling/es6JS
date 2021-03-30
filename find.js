const items = [
    { name: "Rakesh", price: 1 },
    { name: "Sonar", price: 23 },
    { name: "Mahipal", price: 54 }
];
const filteredItems = items.find((item) => {
    return item.name == "Rakesh"
});
console.log(items);
console.log("=======================");
console.log(filteredItems)
