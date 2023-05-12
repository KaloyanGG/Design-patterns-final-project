import { IBurger } from "./burgers/burger.interface";
import { ClassicBurger } from "./burgers/types/classicBurger";
import { KingBurger } from "./burgers/types/kingBurger";
import { VegetarianBurger } from "./burgers/types/vegetarianBurger";
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