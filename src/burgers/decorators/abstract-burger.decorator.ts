import { IBurger } from '../burger.interface';

export class BaseBurgerDecorator {
    private burger: IBurger;
    constructor(burger: IBurger) {
        this.burger = burger;
    }
    getBurger(): IBurger {
        return this.burger;
    }

}



