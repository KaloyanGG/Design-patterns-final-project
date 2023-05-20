import { IBurger } from "../burgers/burger.interface";
import { BurgerType, okBurgerType } from "../utilities";
import { Cook } from "./cook";

export class CashierCommand {

    execute(cook: Cook, type: BurgerType): IBurger {
        // this.orders.push(type);
        return cook.makeBurger(type);
    }


}