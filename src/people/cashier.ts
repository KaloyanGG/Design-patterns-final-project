import { ClassicBurgerCommand } from '../burgers/classic';
import { KingBurgerCommand } from '../burgers/king';
import { IBurgerCommand } from './../burgers/burger.interface';
import { Cook } from './cook';
export class Cashier {

    takeOrder(orders: string[], type: string) {

        orders.unshift(type);

    }
}