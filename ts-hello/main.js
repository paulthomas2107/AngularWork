function log(message) {
    console.log(message);
}
var message = "Hello Paul!";
log(message);
var number = 1; // global
let count = 12; // scope is blocked
let a;
let b;
let c;
let d;
let e;
let e2 = [1, 2, 3];
let f = [1, true, "Paul"]; // mixed
var colors;
(function (colors) {
    colors[colors["BLUE"] = 0] = "BLUE";
    colors[colors["RED"] = 121] = "RED";
    colors[colors["WHITE"] = 21766] = "WHITE";
})(colors || (colors = {}));
let backg = colors.BLUE;
let messagex1 = "abc";
let endswithc = messagex1.endsWith("c");
log(endswithc);
let doLog = (message) => {
    console.log(message);
};
doLog("Hi PAul");
// or
let anotherLog = (message) => console.log(message);
let drawPoint = (poimt) => { };
drawPoint({
    x: 1,
    y: 2,
    name: "paul",
});
class Car {
    constructor(make, model, price, reduction) {
        this.price = price;
        this.reduction = reduction;
    }
    getFinalPrice() {
        console.log(this.price - this.reduction);
    }
    setPrice(price) {
        if (price < 1) {
            throw new Error("Price must be > 0");
        }
        this.price = price;
    }
}
// Create object and call method
let myCar = new Car("Porsce", "911TS", 12345.67, 999.99);
myCar.getFinalPrice();
console.log(myCar);
//myCar.setPrice(-12.0); // throws error
myCar.setPrice(18123.21);
myCar.getFinalPrice();
