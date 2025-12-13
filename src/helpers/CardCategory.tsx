import { POINT_CATEGORIES } from "@/contstants/cards.ts";
import type { PointCategory } from "@/types/cards.ts";

type Props = {
  category: PointCategory;
};

const CardCategory = (props: Props) => {
  const { category } = props;

  switch (category) {
    case POINT_CATEGORIES.CORNER: {
      return (
        <div className="border bg-amber-800">
          <div className="aspect-square w-1/2 bg-black" />
        </div>
      );
    }

    case POINT_CATEGORIES.QUILL: {
      return <div className="bg-quill border" />;
    }

    default:
      return null;
  }
};

export default CardCategory;
