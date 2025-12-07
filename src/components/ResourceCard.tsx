import CardCorners from "@/helpers/CardCorners.tsx";
import CardPoints from "@/helpers/CardPoints.tsx";
import type { ResourceCardProps } from "@/types/cards.ts";
import getPrimaryColorToken from "@/utilities/get-primary-color.ts";

const ResourceCard = (props: ResourceCardProps) => {
  const { cornerSpaces, primaryResource, points } = props;

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
};

export default ResourceCard;
