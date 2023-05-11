import { okBurgerType } from "../utilities";
import { ICommand } from "./command.interface";

export class CashierCommand implements ICommand {

    constructor(private orders: okBurgerType[]) {
        this.orders = orders;
    }
    execute(type: okBurgerType): void {
        this.orders.push(type);
    }


}