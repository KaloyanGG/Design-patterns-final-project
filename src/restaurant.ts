import { TakeARestObserver } from './observer/take-a-rest-observer';
import { BurgerFactory } from "./burgerFactory";
import { BaseBurger } from "./burgers/baseBurger";
import { IBurger } from "./burgers/burger.interface";
import { CashierCommand } from "./people/cashier";
import { Cook } from "./people/cook";
import { BurgerType, okBurgerType } from "./utilities";

export class Restaurant {

    private static instance: Restaurant;
    private cashierCommand: CashierCommand = new CashierCommand();
    private cook: Cook = new Cook();
    private burgersMade: number = 0;
    private needToRest: boolean = false;
    private takeARestObserver: TakeARestObserver = new TakeARestObserver();

    private constructor() { }

    serve(burger: BaseBurger): void {
        console.log(`Serving: ${burger.type} burger${burger.sauces.length !== 0 ? ' with ' + burger.sauces.join(', ') : ''}.`);
    }

    makeBurger(type: BurgerType): IBurger | undefined {
        if (!okBurgerType(type)) {
            console.log('No such burger type.');
            return;
        }

        this.takeARestObserver.update(this);

        if (!this.needToRest) {
            this.burgersMade++;
            return this.cashierCommand.execute(this.cook, type);
        }

        // console.log(`Cashier: Order received: ${type}`);
    }
    startRest(): void {
        this.needToRest = true;
    }
    finishRest(): void {
        this.needToRest = false;
    }
    doNeedToRest(): boolean {
        return this.needToRest;
    }
    resetBurgers(): void {
        this.burgersMade = 0;
    }


    static getInstance() {

        if (!Restaurant.instance) {
            Restaurant.instance = new Restaurant();
        }
        return Restaurant.instance;

    }

    getBurgersMade(): number {
        return this.burgersMade;
    }



}