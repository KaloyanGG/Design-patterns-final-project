import { BurgerFactory } from "./burgerFactory";

export class Restaurant {

    private static instance: Restaurant;
    // private burgers: IBurger[];

    private constructor() {
    }

    cashInBurger(type: string) {
    }
    makeBurger() {
    }

    static getInstance() {

        if (!Restaurant.instance) {
            Restaurant.instance = new Restaurant();
        }
        return Restaurant.instance;

    }

}