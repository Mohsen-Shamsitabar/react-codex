import CardCentralResources from "@/helpers/CardCentralResources.tsx";
import CardCorners from "@/helpers/CardCorners.tsx";
import type { PrimaryResource } from "@/types/cards.ts";
import getPrimaryColorToken from "@/utilities/get-primary-color.ts";

type Props = {
  primaryResource: PrimaryResource;
};

const CardOffSide = (props: Props) => {
  const { primaryResource } = props;

  const bgcToken = getPrimaryColorToken(primaryResource);

  return (
    <div className={`${bgcToken} relative size-full`}>
      <CardCorners />
      <CardCentralResources centralResources={[primaryResource]} />
    </div>
  );
};

export default CardOffSide;
