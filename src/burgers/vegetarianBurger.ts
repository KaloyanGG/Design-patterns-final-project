import { IBurger } from "./burger.interface";

export class VegetarianBurger implements IBurger {
    price = 6;
    type = 'vegetarian';
}