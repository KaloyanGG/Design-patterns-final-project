import { BurgerFactory } from "./burgerFactory";
import { BaseBurger } from "./burgers/baseBurger";
import { IBurger } from "./burgers/burger.interface";
import { CashierCommand } from "./people/cashier";
import { CookCommand } from "./people/cook";
import { okBurgerType } from "./utilities";

export class Restaurant {

    private static instance: Restaurant;
    private orders: okBurgerType[] = [];
    private cashierCommand: CashierCommand = new CashierCommand(this.orders);
    private cookCommand: CookCommand = new CookCommand(this.orders);


    private constructor() { }

    serve(burger: BaseBurger): void {
        console.log(`Serving: ${burger.type} burger${burger.sauces.length !== 0 ? ' with ' + burger.sauces.join(', ') : ''}.`);
    }

    cashInBurger(type: string): void {
        if (!okBurgerType(type)) {
            console.log('No such burger type.');
            return;
        }
        this.cashierCommand.execute(type);
        console.log(`Cashier: Order received: ${type}`);
    }
    makeBurger() {
        return this.cookCommand.execute();
    }

    static getInstance() {

        if (!Restaurant.instance) {
            Restaurant.instance = new Restaurant();
        }
        return Restaurant.instance;

    }

}