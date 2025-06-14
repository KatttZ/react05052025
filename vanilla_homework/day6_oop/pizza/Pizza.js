// Create a Pizza class that takes in a size and an array of topping codes.
// The class should have the following methods:
// - getBaseCost(): returns the base cost of the pizza based on the size.
// - getTotalCost(): returns the total cost of the pizza including the base cost and the cost of the toppings.
// - getDescription(): returns a string that describes the pizza in the following format:
//   "A {size} pizza with {topping1}, {topping2}, {topping3}."
//   Example: "A medium pizza with pepperoni, green pepper."

// size: "small", "medium", "large"
// their costs: 6.5, 7.5, 8.5

// Example toppingCodes
// {
//   p: { cost: 1.5, name: "pepperoni" },
//   g: { cost: 0.86, name: "green pepper" },
// };

export const BASE_PRICE = {
  small: 6.5,
  medium: 7.5,
  large: 8.5,
};

export const TOPPINGS = {
  p: { cost: 1.5, name: "pepperoni" },
  g: { cost: 0.86, name: "green pepper" },
  o: { cost: 0.5, name: "onion" },
  bo: { cost: 0.2, name: "black olive" },
  m: { cost: 0.82, name: "mushroom" },
  c: { cost: 0.77, name: "cheese" },
};

export default class Pizza {
  constructor(size, toppingCodes) {
    this.size = size,
    this.toppingCodes = toppingCodes
  }

  getBaseCost() {
    return BASE_PRICE[this.size] || 0
  }

  getTotalCost() {
    let totalCost = this.getBaseCost();

    for(const code of this.toppingCodes){
      let topping = TOPPINGS[code]
      if(topping){
        totalCost += topping.cost
      }
   
    }
    return totalCost;
  }

  getDescription() {
    if(this.toppingCodes.length === 0){
      return `A ${this.size} pizza with no toppings.`
    }

    const toppingNames = this.toppingCodes
      .map(code => TOPPINGS[code]?.name)

    return `A ${this.size} pizza with ${toppingNames.join(", ")}.`;
  }
}
