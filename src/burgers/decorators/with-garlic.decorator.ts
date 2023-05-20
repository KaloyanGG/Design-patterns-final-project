import { IBurger } from "../burger.interface";
import { BaseBurgerDecorator } from "./abstract-burger.decorator";

export class BurgerWithGarlic extends BaseBurgerDecorator {

    constructor(burger: IBurger) {
        burger.addSauce('garlic');
        super(burger);
    }
    
}