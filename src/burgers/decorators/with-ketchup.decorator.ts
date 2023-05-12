import { IBurger } from "../burger.interface";
import { BaseBurgerDecorator } from "./abstract-burger.decorator";

export class BurgerWithKetchup extends BaseBurgerDecorator {
    constructor(burger: IBurger) {
        burger.addSauce('ketchup');
        super(burger);
    }

}
