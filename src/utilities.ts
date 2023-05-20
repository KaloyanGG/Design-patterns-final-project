// export type okBurgerType = 'classic' | 'king' | 'vegetarian';

export enum BurgerType {
    CLASSIC = 'classic',
    KING = 'king',
    VEGETARIAN = 'vegetarian'
}

export function okBurgerType(type: BurgerType): boolean {
    return Object.values(BurgerType).includes(type);
    // return ['classic', 'king', 'vegetarian'].includes(type);
}

