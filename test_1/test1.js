const products = [
    { name : "pen", price: 1000, category: "stationery"},
    { name : "notebook", price: 3000, category: "stationery"},
    { name : "mouse", price: 20000, category: "device"},
    { name : "keyboard", price: 30000, category: "device"},

];

const price5000 = products.filter(product => product.price >= 5000);
console.log(price5000);

const productNames = products.map(product => product.name);

const sumProducts = products.reduce((acc, cur)=>{
    return acc + cur.price;
}, 0)

console.log(sumProducts);

const productDevicename = products.filter((pd)=> pd.category === "device").map((product)=> product.name);
console.log(productDevicename);

const items = ["apple", "banana", "orange", "apple", "banana", "banana"];
const ItemsAwrray = [ ...new Ate]