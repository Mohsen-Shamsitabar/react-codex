import CardCentralResources from "@/components/helpers/CardCentralResources.tsx";
import CardCorners from "@/components/helpers/CardCorners.tsx";
import type { StarterCardProps } from "@/types/cards.ts";

const StarterCard = (props: StarterCardProps) => {
  const { centralResources, cornerSpaces } = props;

  return (
    <div className="bg-secondary-cream relative size-full">
      <CardCorners cornerSpaces={cornerSpaces} />
      <CardCentralResources centralResources={centralResources} />
    </div>
  );
};

export default StarterCard;
