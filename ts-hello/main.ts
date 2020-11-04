function log(message) {
  console.log(message);
}

var message = "Hello Paul!";

log(message);

var number = 1; // global
let count = 12; // scope is blocked

let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number;
let e2: number[] = [1, 2, 3];
let f: any[] = [1, true, "Paul"]; // mixed

enum colors {
  BLUE = 0,
  RED = 121,
  WHITE = 21766,
}

let backg = colors.BLUE;

let messagex1 = "abc";
let endswithc = (messagex1 as string).endsWith("c");
log(endswithc);

let doLog = (message) => {
  console.log(message);
};

doLog("Hi PAul");

// or
let anotherLog = (message: string) => console.log(message);

let drawPoint = (poimt: { x: number; y: number; name: string }) => {};

drawPoint({
  x: 1,
  y: 2,
  name: "paul",
});

interface Stuff {
  name: string;
  age: number;
  draw: () => void;
}

class Car {
  constructor(
    make: string,
    model: string,
    private price: number,
    private reduction: number
  ) {}

  getFinalPrice() {
    console.log(this.price - this.reduction);
  }
  setPrice(price: number) {
    if (price < 1) {
      throw new Error("Price must be > 0");
    }
    this.price = price;
  }
}

// Create object and call method
let myCar: Car = new Car("Porsce", "911TS", 12345.67, 999.99);
myCar.getFinalPrice();
console.log(myCar);
//myCar.setPrice(-12.0); // throws error
myCar.setPrice(18123.21);
myCar.getFinalPrice();

