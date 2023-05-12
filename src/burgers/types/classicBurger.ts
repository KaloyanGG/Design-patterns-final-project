import { BaseBurger } from "../baseBurger";

export class ClassicBurger extends BaseBurger {
    constructor() {
        super(8, 'classic');
        // console.log("this: " + this.constructor.name);

    }
}