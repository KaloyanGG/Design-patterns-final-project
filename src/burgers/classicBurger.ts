import { IBurger } from "./burger.interface";

export class ClassicBurger implements IBurger {
    price = 8;
    type = 'classic';
}