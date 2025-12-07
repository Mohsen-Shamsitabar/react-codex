import GoldCard from "@/components/GoldCard.tsx";
import ResourceCard from "@/components/ResourceCard.tsx";
import StartingCard from "@/components/StartingCard.tsx";
import type { Card } from "@/types/cards.ts";

const CardBase = (card: Card) => {
  const renderCardType = () => {
    switch (card.type) {
      case "starting": {
        return <StartingCard {...card.properties} />;
      }
      case "resource": {
        return <ResourceCard {...card.properties} />;
      }
      case "gold": {
        return <GoldCard {...card.properties} />;
      }
      case "objective": {
        return;
      }

      default:
        return null;
    }
  };

  return <div className="w-card-width aspect-card">{renderCardType()}</div>;
};

export default CardBase;
