import { BurgerFactory } from "./burgerFactory";
import { BaseBurger } from "./burgers/baseBurger";
import { IBurger } from "./burgers/burger.interface";
import { CashierCommand } from "./people/cashier";
import { Cook } from "./people/cook";
// import { CookCommand } from "./people/cook";
import { BurgerType, okBurgerType } from "./utilities";

export class Restaurant {

    private static instance: Restaurant;
    private cashierCommand: CashierCommand = new CashierCommand();
    private cook: Cook = new Cook();

    private constructor() { }

    serve(burger: BaseBurger): void {
        console.log(`Serving: ${burger.type} burger${burger.sauces.length !== 0 ? ' with ' + burger.sauces.join(', ') : ''}.`);
    }

    makeBurger(type: BurgerType): IBurger | undefined {
        if (!okBurgerType(type)) {
            console.log('No such burger type.');
            return;
        }
        return this.cashierCommand.execute(this.cook, type);
        // console.log(`Cashier: Order received: ${type}`);
    }


    static getInstance() {

        if (!Restaurant.instance) {
            Restaurant.instance = new Restaurant();
        }
        return Restaurant.instance;

    }

}