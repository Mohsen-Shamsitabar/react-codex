import CardCentralResources from "@/helpers/CardCentralResources.tsx";
import CardCorners from "@/helpers/CardCorners.tsx";
import type { StartingCardProps } from "@/types/cards.ts";

const StartingCard = (props: StartingCardProps) => {
  const { centralResources, cornerSpaces } = props;

  return (
    <div className="bg-secondary-cream relative size-full">
      <CardCorners cornerSpaces={cornerSpaces} />
      <CardCentralResources centralResources={centralResources} />
    </div>
  );
};

export default StartingCard;
