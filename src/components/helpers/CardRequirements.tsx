import CardResourceSpace from "@/components/helpers/CardResourceSpace.tsx";
import type { GoldCardRequirement } from "@/types/cards.ts";

type Props = {
  requirements: GoldCardRequirement;
};

const CardRequirements = (props: Props) => {
  const { requirements } = props;

  const mapRequirements = () => {
    return requirements.map((resource, idx) => (
      <div
        key={`${resource}-${idx}`}
        className="image-container w-req-resource aspect-square"
      >
        {CardResourceSpace(resource)}
      </div>
    ));
  };

  return (
    <div className="h-points-height bg-secondary-cream absolute right-0 bottom-0 left-0 m-auto flex w-fit flex-row items-center gap-2 px-2">
      {mapRequirements()}
    </div>
  );
};

export default CardRequirements;
