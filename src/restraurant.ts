import { BurgerFactory } from "./burgerFactory";

export class Restaurant {

    private static instance: Restaurant;
    private burgerFactory: BurgerFactory;
    // private burgers: IBurger[];

    private constructor() {
        this.burgerFactory = new BurgerFactory();
    }

    cashInBurger(type: string) {
        const burger = this.burgerFactory.cashBurger(type);
        // console.log(`Cashing in burger. Type: ${type}`);
        // return burger;
    }
    makeBurger() {
        const burger = this.burgerFactory.createBurger();
        // console.log("Making burger. Type: " + burger.name);
    }

    static getInstance() {

        if (!Restaurant.instance) {
            Restaurant.instance = new Restaurant();
        }
        return Restaurant.instance;

    }

}