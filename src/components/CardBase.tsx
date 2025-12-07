import PlayableCard from "@/components/PlayableCard.tsx";
import StartingCard from "@/components/StartingCard.tsx";
import { CARD_TYPES } from "@/contstants/cards.ts";
import type { Card } from "@/types/cards.ts";

const CardBase = (card: Card) => {
  if (card.type === CARD_TYPES.GOLD || card.type === CARD_TYPES.RESOURCE) {
    return <PlayableCard {...card} />;
  }

  if (card.type === CARD_TYPES.STARTER) {
    return (
      <div className="w-card-width aspect-card">
        <StartingCard {...card.properties} />;
      </div>
    );
  }

  if (card.type === CARD_TYPES.OBJECTIVE) {
    return <div className="w-card-width aspect-card">objective</div>;
  }

  return null;
};

export default CardBase;
