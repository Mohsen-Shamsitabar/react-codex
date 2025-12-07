import CardCentralResources from "@/helpers/CardCentralResources.tsx";
import CardCorners from "@/helpers/CardCorners.tsx";
import CardPoints from "@/helpers/CardPoints.tsx";
import CardRequirements from "@/helpers/CardRequirements.tsx";
import type { Card } from "@/types/cards.ts";
import getPrimaryColorToken from "@/utilities/get-primary-color.ts";

type Props = {
  card: Card;
};

const CardBase = (props: Props) => {
  const { card } = props;

  const renderCardType = () => {
    switch (card.type) {
      case "starting": {
        const { centralResources, cornerSpaces } = card.properties;

        return (
          <div className="bg-secondary-cream relative size-full">
            <CardCorners cornerSpaces={cornerSpaces} />
            <CardCentralResources centralResources={centralResources} />
          </div>
        );
      }
      case "resource": {
        const { cornerSpaces, primaryResource, points } = card.properties;

        const bgcToken = getPrimaryColorToken(primaryResource);

        const renderPoints = () => {
          if (!points) return null;

          return <CardPoints points={points} />;
        };

        return (
          <div className={`${bgcToken} relative size-full`}>
            <CardCorners cornerSpaces={cornerSpaces} />
            {renderPoints()}
          </div>
        );
      }
      case "gold": {
        const { cornerSpaces, primaryResource, points, requirements } =
          card.properties;

        const bgcToken = getPrimaryColorToken(primaryResource);

        return (
          <div className={`${bgcToken} relative size-full`}>
            <CardCorners cornerSpaces={cornerSpaces} />
            <CardPoints points={points} />
            <CardRequirements requirements={requirements} />
          </div>
        );
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
