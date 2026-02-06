import CardCorners from "@/components/helpers/CardCorners.tsx";
import CardPoints from "@/components/helpers/CardPoints.tsx";
import CardRequirements from "@/components/helpers/CardRequirements.tsx";
import type { GoldCardProps } from "@/types/cards.ts";
import getPrimaryColorToken from "@/utilities/get-primary-color.ts";

const GoldCard = (props: GoldCardProps) => {
  const { cornerSpaces, points, primaryResource, requirements } = props;

  const bgcToken = getPrimaryColorToken(primaryResource);

  return (
    <div className={`${bgcToken} relative size-full`}>
      <CardCorners cornerSpaces={cornerSpaces} />
      <CardPoints points={points} />
      <CardRequirements requirements={requirements} />
    </div>
  );
};

export default GoldCard;
