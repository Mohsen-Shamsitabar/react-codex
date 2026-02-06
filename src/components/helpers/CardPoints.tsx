import CardCategory from "@/components/helpers/CardCategory.tsx";
import type { Points } from "@/types/cards.ts";

type Props = {
  points: Points;
};

const CardPoints = (props: Props) => {
  const { points } = props;

  const { value, category } = points;

  const renderCategory = () => {
    if (!category) return null;

    return (
      <>
        <span className="h-1/2 w-0.5 rounded-2xl bg-black opacity-50" />
        <span className="image-container w-category aspect-square">
          <CardCategory category={category} />
        </span>
      </>
    );
  };

  return (
    <div className="h-points-height bg-secondary-cream absolute top-0 right-0 left-0 m-auto flex w-fit flex-row items-center gap-4 px-4">
      <span className="text-lg font-bold">{value}</span>

      {renderCategory()}
    </div>
  );
};

export default CardPoints;
