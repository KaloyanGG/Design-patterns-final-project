import { BurgerFactory } from "../burgerFactory";
import { IBurger } from "../burgers/burger.interface";
import { ClassicBurger } from "../burgers/types/classicBurger";
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
            return null;
        }

        console.log(`Cook: ${type} burger is ready.`);

        return this.burgerFactory.makeBurger(type);

    }
}