import { IBurger } from "./burgers/burger.interface";
import { ClassicBurger } from "./burgers/classicBurger";
import { KingBurger } from "./burgers/kingBurger";
import { VegetarianBurger } from "./burgers/vegetarianBurger";
import { okBurgerType } from "./utilities";

export class BurgerFactory {

    makeBurger(type: okBurgerType): IBurger {
        let burger = null;

        switch (type) {
            case 'classic':
                burger = new ClassicBurger();
                break;
            case 'king':
                burger = new KingBurger();
                break;
            case 'vegetarian':
                burger = new VegetarianBurger();
                break;
        }

        return burger;
    }

}