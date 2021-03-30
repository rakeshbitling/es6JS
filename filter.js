const items = [
    {name: "Rakesh", price: 1},
    {name: "Rakesh", price: 23},
    {name: "Mahipal", price: 54}
];
const filteredItems = items.filter((t) =>  t.name == 'Rakesh').map((data)=>{
    return data.price;
});
console.log(items);
console.log("=======================");
console.log(filteredItems)
