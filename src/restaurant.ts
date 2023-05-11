import { BurgerFactory } from "./burgerFactory";
import { CashierCommand } from "./people/cashier";
import { CookCommand } from "./people/cook";
import { okBurgerType } from "./utilities";

export class Restaurant {

    private static instance: Restaurant;
    private orders: okBurgerType[] = [];
    private cashierCommand: CashierCommand = new CashierCommand(this.orders);
    private cookCommand: CookCommand = new CookCommand(this.orders);

    private constructor() { }

    cashInBurger(type: string): void {
        if (!okBurgerType(type)) {
            console.log('No such burger type.');
            return;
        }
        this.cashierCommand.execute(type);
        console.log(`Cashier: Order received: ${type}`);
    }
    makeBurger() {

        const burgerOrNull = this.cookCommand.execute();
        if (!burgerOrNull) {
            console.log('No orders to cook');
            return;
        }
        console.log(`Cook: ${burgerOrNull.type} burger is ready.`)
        return burgerOrNull;
    }

    static getInstance() {

        if (!Restaurant.instance) {
            Restaurant.instance = new Restaurant();
        }
        return Restaurant.instance;

    }

}