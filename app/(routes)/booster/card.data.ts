import { CardType } from "./card.model";

// Instead of hard-coding the card data in the component, we can do a loop from 1 to 10
// and generate the image path from the loop index.
const COMMON_CARDS: CardType[] = Array.from({ length: 5 }, (_, i) => ({
  category: "common",
  id: i + 1,
}));

export const ALL_CARDS: CardType[] = [
  ...COMMON_CARDS,
];
