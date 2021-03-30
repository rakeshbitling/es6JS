const items = [
    { name: "Rakesh1", price: 10 },
    { name: "Sonar", price: 20 },
    { name: "Rakesh1", price: 30 }
];
const cost = items.reduce((a,item) => {
    return item.price + a;
},0);
console.log("COSTING==>>"+cost);
