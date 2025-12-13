import CardOffSide from "@/components/CardOffSide.tsx";
import FlipableCard from "@/components/FlipableCard.tsx";
import StarterCard from "@/components/StarterCard.tsx";
import { CARD_TYPES } from "@/contstants/cards.ts";
import type { Card } from "@/types/cards.ts";

type Props = {
  card: Card;
  canInteractWith?: boolean;
  isOffSide?: boolean;
};

const CardBase = (props: Props) => {
  const { card, canInteractWith = true, isOffSide = false } = props;

  if (card.type === CARD_TYPES.GOLD || card.type === CARD_TYPES.RESOURCE) {
    const { primaryResource } = card.properties;

    if (isOffSide) {
      return (
        <div className="w-card-width h-card-height shrink-0">
          <CardOffSide primaryResource={primaryResource} />
        </div>
      );
    }

    return (
      <FlipableCard
        card={card}
        canInteractWith={canInteractWith}
        isOffSide={isOffSide}
      />
    );
  }

  if (card.type === CARD_TYPES.OBJECTIVE) {
    return <div className="w-card-width h-card-height shrink-0">objective</div>;
  }

  if (card.type === CARD_TYPES.STARTER) {
    return (
      <div className="w-card-width h-card-height shrink-0">
        <StarterCard {...card.properties} />
      </div>
    );
  }

  return null;
};

export default CardBase;
