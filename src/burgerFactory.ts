import { IBurger } from "./burgers/burger.interface";
import { ClassicBurger } from "./burgers/types/classicBurger";
import { KingBurger } from "./burgers/types/kingBurger";
import { VegetarianBurger } from "./burgers/types/vegetarianBurger";
import { BurgerType, okBurgerType } from "./utilities";

export class BurgerFactory {

    makeBurger(type: BurgerType): IBurger {

        switch (type) {
            case 'classic':
                return new ClassicBurger();
            case 'king':
                return new KingBurger();
            case 'vegetarian':
                return new VegetarianBurger();
            default:
                return new ClassicBurger();
        }

    }

}