export interface IBurger {
    price: number;
    type: string;
    addSauce(sauce: string): void;
    sauces: string[];
}
//declaration