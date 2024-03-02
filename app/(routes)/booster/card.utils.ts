import { ALL_CARDS } from "./card.data";
import { CardType } from "./card.model";

export const getAllCommonCards = (): CardType[] => {
 return ALL_CARDS.filter(card => card.category === "common");
};
