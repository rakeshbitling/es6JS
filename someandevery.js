const items = [
    { name: "Rakesh1", price: 1 },
    { name: "Sonar", price: 23 },
    { name: "Rakesh1", price: 54 }
];
const hasExpensive = items.some((item) => {
    return item.name == "Rakesh1"
});
console.log(items);
console.log("=======================");
console.log(hasExpensive)

console.log("===")
const hasExpensiveAll = items.every((item) => {
    return item.name !== "A"
});
console.log(hasExpensiveAll)
