import { Cook } from "../people/cook";
import { IBurgerCommand } from "./burger.interface";

export class ClassicBurgerCommand implements IBurgerCommand {

    constructor(private cook: Cook) {
        this.cook = cook;

    }
    execute(): void {
        this.cook.makeClassicBurger();
    }

}