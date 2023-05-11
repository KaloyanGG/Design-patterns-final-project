export type okBurgerType = 'classic' | 'king' | 'vegetarian';

export function okBurgerType(type: string): type is okBurgerType {
    return ['classic', 'king', 'vegetarian'].includes(type);
}