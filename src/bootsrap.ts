import { BurgerFactory } from "./burgerFactory";
import { Restaurant } from "./restraurant";

export class Bootstrap {

    public static async run() {

        const restaurant = Restaurant.getInstance();
        restaurant.cashInBurger('king');
        restaurant.cashInBurger('classic');
        restaurant.cashInBurger('classic');
        try {
            restaurant.makeBurger();
            restaurant.makeBurger();
            restaurant.makeBurger();
        } catch (e: any) {
            console.log(e.message);
        }

    }

}