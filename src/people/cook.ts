import { BurgerFactory } from "../burgerFactory";
import { IBurger } from "../burgers/burger.interface";
import { ClassicBurger } from "../burgers/types/classicBurger";
import { BurgerType, okBurgerType } from "../utilities";

export class Cook {

    private burgerFactory: BurgerFactory;

    constructor(/*private orders: okBurgerType[]*/) {
        // this.orders = orders;
        this.burgerFactory = new BurgerFactory();
    }

    makeBurger(type: BurgerType): IBurger {

        console.log(`Cook: ${type} burger is ready.`);

            return this.burgerFactory.makeBurger(type);

        
    }
}