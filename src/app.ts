import { Restaurant } from "./restaurant";


const restaurant = Restaurant.getInstance();

restaurant.cashInBurger('classic');
restaurant.cashInBurger('king');
let burger = restaurant.makeBurger();
restaurant.cashInBurger('vegetarian');
//TO THE READY BURGER, WE CAN ADD SAUCES


restaurant.makeBurger();
restaurant.makeBurger();


// (new ?Burger()) restaurant -> cashier/cook -> burgerFactory -> burger

// Make 3 burger classes (1 interface)
// Cashier/Cook Command classes (1 interface with execute())
// delete burgerCommands

