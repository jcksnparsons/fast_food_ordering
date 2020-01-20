const restaurant = {
    name: "Bob's Burgers",
    orders: [],
    placeOrder: function (meal) {
        this.orders.push(meal)
    }
}

const chickenComboMeal = {
    sandwichType: "chicken sandwich",
    fries: true,
    drinkSize: "large"
};

const burgerComboMeal = {
    sandwichType: "cheeseburger",
    fries: true,
    drinkSize: "medium"
};

const fishSandwichComboMeal = {
    sandwichType: "fried fish sandwich",
    fries: false,
    drinkSize: "extra large"
}

// Place an order
restaurant.placeOrder(chickenComboMeal);
restaurant.placeOrder(fishSandwichComboMeal);
restaurant.placeOrder(burgerComboMeal);

// Invoke the function to return the list of all orders


// Output all orders to the console using console.table()
console.table(restaurant.orders)