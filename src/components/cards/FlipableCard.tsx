import CardOffSide from "@/components/cards/CardOffSide.tsx";
import GoldCard from "@/components/cards/GoldCard.tsx";
import ResourceCard from "@/components/cards/ResourceCard.tsx";
import { CARD_TYPES } from "@/contstants/cards.ts";
import { useSelectedCard } from "@/providers/SelectedCardProvider.tsx";
import type { FlipableCardType } from "@/types/cards.ts";
import cn from "@/utilities/cn.ts";
import { motion } from "framer-motion";
import { useState, type MouseEvent } from "react";

type Props = {
  card: FlipableCardType;
  canInteractWith?: boolean;
  isOffSide?: boolean;
};

const FlipableCard = (props: Props) => {
  const {
    card,
    canInteractWith = true,
    isOffSide: isOffSideProp = false,
  } = props;

  const { primaryResource } = card.properties;

  const [isOffSide, setIsOffSide] = useState(isOffSideProp);

  const { selectedCard, setSelectedCard } = useSelectedCard();

  const isCardSelected = selectedCard?.card.id === card.id;

  const handleRightClick = (event: MouseEvent) => {
    if (!canInteractWith) return;

    event.preventDefault();

    setIsOffSide(c => !c);
    setSelectedCard(null);
  };

  const handleLeftClick = (_event: MouseEvent) => {
    if (!canInteractWith) return;

    setSelectedCard({ card, isOffSide });

    if (isCardSelected) {
      setSelectedCard(null);
      return;
    }
  };

  const renderFront = () => {
    switch (card.type) {
      case CARD_TYPES.RESOURCE:
        return <ResourceCard {...card.properties} />;
      case CARD_TYPES.GOLD:
        return <GoldCard {...card.properties} />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      className={cn(
        "w-card-width h-card-height relative shrink-0 cursor-pointer ring-black transform-3d",
        canInteractWith ? "pointer-events-auto" : "pointer-events-none",
        isCardSelected ? "ring-4" : "ring-0",
      )}
      onClick={handleLeftClick}
      onContextMenu={handleRightClick}
      animate={{ rotateY: isOffSide ? 180 : 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Front */}
      <div className="absolute inset-0 backface-hidden hover:brightness-90">
        {renderFront()}
      </div>

      {/* Back */}
      <div className="absolute inset-0 rotate-y-180 backface-hidden hover:brightness-90">
        <CardOffSide primaryResource={primaryResource} />
      </div>
    </motion.div>
  );
};

export default FlipableCard;
