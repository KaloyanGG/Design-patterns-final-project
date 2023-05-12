import { IBurger } from "./burger.interface";

export class BaseBurger implements IBurger {
    price: number;
    type: string;
    sauces: string[];

    constructor(price: number, type: string) {
        this.price = price;
        this.type = type;
        this.sauces = [];
    }

    //implementation
    addSauce(sauce: string): void {
        this.sauces.push(sauce);
    }

}