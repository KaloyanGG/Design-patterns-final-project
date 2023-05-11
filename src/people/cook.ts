import { BurgerFactory } from "../burgerFactory";
import { IBurger } from "../burgers/burger.interface";
import { ClassicBurger } from "../burgers/classicBurger";
import { KingBurger } from "../burgers/kingBurger";
import { VegetarianBurger } from "../burgers/vegetarianBurger";
import { okBurgerType } from "../utilities";
import { ICommand } from "./command.interface";

export class CookCommand implements ICommand {

    private burgerFactory: BurgerFactory;

    constructor(private orders: okBurgerType[]) {
        this.orders = orders;
        this.burgerFactory = new BurgerFactory();
    }

    execute(): IBurger | null {
        const type = this.orders.shift();
        if (!type) {
            console.log('No orders to cook');
            return null;
        }
        return this.burgerFactory.makeBurger(type);

    }
}