import { Restaurant } from "../restaurant";

export class TakeARestObserver {


    public update(restaurant: Restaurant): void {
        if (restaurant.doNeedToRest()) {
            console.log('Taking a rest...');
        }
        if (!restaurant.doNeedToRest() && restaurant.getBurgersMade() > 0 && restaurant.getBurgersMade() % 2 === 0) {
            console.log('Taking a rest...');
            restaurant.resetBurgers();
            restaurant.startRest();
        }
    }
}