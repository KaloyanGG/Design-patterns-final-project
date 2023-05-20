import { BurgerWithGarlic } from "./burgers/decorators/with-garlic.decorator";
import { BurgerWithKetchup } from "./burgers/decorators/with-ketchup.decorator";
import { Restaurant } from "./restaurant";
import { BurgerType } from "./utilities";

const restaurant = Restaurant.getInstance();


let burger = restaurant.makeBurger(BurgerType.CLASSIC);
if (!burger) {
    console.log('No more orders.');
} else {
    burger = new BurgerWithKetchup(burger).getBurger();
    burger = new BurgerWithGarlic(burger).getBurger();
    restaurant.serve(burger);
}





















// (new ?Burger()) restaurant -> cashier/cook -> burgerFactory -> burger
// Make 3 burger classes (1 interface)
// Cashier/Cook Command classes (1 interface with execute())
// delete burgerCommands

