// import { IBurger } from "./burgers/burger.interface";
// import { ClassicBurger } from "./burgers/classic";
// import { KingBurger } from "./burgers/king";
// import { VegetarianBurger } from "./burgers/vegetarian";
import { IBurgerCommand } from "./burgers/burger.interface";
import { ClassicBurgerCommand } from "./burgers/classic";
import { KingBurgerCommand } from "./burgers/king";
import { VegetarianBurgerCommand } from "./burgers/vegetarian";
import { Cashier } from "./people/cashier";
import { Cook } from "./people/cook";

export class BurgerFactory {

    burgerOrders: string[] = [];
    cashier: Cashier;
    cook: Cook;

    constructor() {
        this.cashier = new Cashier();
        this.cook = new Cook();
    }

    cashBurger(type: string) {
        this.cashier.takeOrder(this.burgerOrders, type);
    }
    createBurger() {
        if (this.burgerOrders.length === 0) {
            throw new Error('No orders made.');
        }
        const burgerType = this.burgerOrders.pop();

        let command: IBurgerCommand;
        switch (burgerType) {
            case 'classic':
                command = new ClassicBurgerCommand(this.cook);
                break;
            case 'king':
                command = new KingBurgerCommand(this.cook);
                break;
            case 'vegetarian':
                command = new VegetarianBurgerCommand(this.cook);
                break;
            default:
                throw new Error('Burger type not found.');
        }
        command.execute();

    }
}