import { Cook } from "../people/cook";
import { IBurgerCommand } from "./burger.interface";

// export class KingBurger implements IBurger {
//     constructor(public price = 12.50, public name = 'King Burger') {
//         console.log('King Burger created.');
//     }

// }

export class KingBurgerCommand implements IBurgerCommand {

    constructor(private cook: Cook) {
        this.cook = cook;

    }
    execute(): void {
        this.cook.makeKingBurger();
    }

}