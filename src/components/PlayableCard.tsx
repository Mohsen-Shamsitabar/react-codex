import CardOffSide from "@/components/CardOffSide.tsx";
import GoldCard from "@/components/GoldCard.tsx";
import ResourceCard from "@/components/ResourceCard.tsx";
import { CARD_TYPES } from "@/contstants/cards.ts";
import type { PlayableCardType } from "@/types/cards.ts";
import { motion } from "framer-motion";
import { useState, type MouseEvent } from "react";

const PlayableCard = (card: PlayableCardType) => {
  const { primaryResource } = card.properties;
  const [isOffSide, setIsOffSide] = useState(false);

  const handleRightClick = (event: MouseEvent) => {
    event.preventDefault();
    setIsOffSide(c => !c);
  };

  const handleLeftClick = (_event: MouseEvent) => {
    return;
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
      className="w-card-width aspect-card relative cursor-pointer transform-3d"
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

export default PlayableCard;
