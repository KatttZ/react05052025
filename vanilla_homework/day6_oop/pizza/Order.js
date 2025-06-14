// Create an Order class that takes in an array of Pizza instances and has the following methods:
// - addPizza(pizza): adds a pizza to the order.
// - removePizza(index): removes a pizza from the order at the given index.
// - getTotalCost(): returns the total cost of all pizzas in the order.
// - updateStatus(newStatus): updates the status of the order.
// The Order class should have the following properties:
// - pizzas: an array of Pizza instances.
// - status: a string representing the status of the order. Default value is "pending".

export default class Order {
  constructor() {
    this.pizzas = [];
    this.status = "pending";
  }

  addPizza(pizza) {
    this.pizzas.push(pizza);
  }

  removePizza(index) {
    this.pizzas.splice(index,1);
  }

  getTotalCost() {
    let total = 0;
    for(let pizza of this.pizzas){
      let eachCost = pizza.getTotalCost()
      total += eachCost;
    }
    return total;
  }

  updateStatus(newStatus) {
    this.status = newStatus
  }
}
