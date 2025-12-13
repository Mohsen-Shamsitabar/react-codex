import { CARD_TYPES, POINT_CATEGORIES } from "@/contstants/cards.ts";
import type { CardTypeRecord, Points } from "@/types/cards.ts";

type CardTypesWithPoints = CardTypeRecord["GOLD"] | CardTypeRecord["RESOURCE"];

/**
 * Gold cards will receive a guaranteed Points object!
 */
const generateCardPoints = (
  cardType: CardTypesWithPoints,
): Points | undefined => {
  if (cardType === CARD_TYPES.RESOURCE) {
    const rngNumber = Math.random();

    if (rngNumber >= 0.75) {
      return { value: 1 };
    }

    return;
  }

  const rngNumber = Math.random();

  if (rngNumber >= 0.5) {
    return {
      value: 1,
      category: POINT_CATEGORIES.CORNER,
    };
  }

  return {
    value: 2,
    category: POINT_CATEGORIES.QUILL,
  };
};

export default generateCardPoints;
