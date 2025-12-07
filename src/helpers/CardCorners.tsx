import { BLANK_TYPES } from "@/contstants/cards.ts";
import CardResourceSpace from "@/helpers/CardResourceSpace.tsx";
import type { CornerSpaces } from "@/types/cards.ts";

type Props = {
  cornerSpaces?: CornerSpaces;
};

// might need a better way...
const initialValue: CornerSpaces = [
  BLANK_TYPES.EMPTY,
  BLANK_TYPES.EMPTY,
  BLANK_TYPES.EMPTY,
  BLANK_TYPES.EMPTY,
];

const CardCorners = (props: Props) => {
  const { cornerSpaces = initialValue } = props;

  const [topLeft, topRight, bottomRight, bottomLeft] = cornerSpaces;

  const renderTopLeftCorner = () => {
    if (topLeft === BLANK_TYPES.NULL) return null;

    return (
      <div className="bg-primary-cream w-corner-width aspect-corner absolute top-0 left-0 flex items-center justify-center">
        <div className="image-container aspect-square w-1/2">
          {CardResourceSpace(topLeft)}
        </div>
      </div>
    );
  };

  const renderTopRightCorner = () => {
    if (topRight === BLANK_TYPES.NULL) return null;

    return (
      <div className="bg-primary-cream w-corner-width aspect-corner absolute top-0 right-0 flex items-center justify-center">
        <div className="image-container aspect-square w-1/2">
          {CardResourceSpace(topRight)}
        </div>
      </div>
    );
  };

  const renderBottomRightCorner = () => {
    if (bottomRight === BLANK_TYPES.NULL) return null;

    return (
      <div className="bg-primary-cream w-corner-width aspect-corner absolute right-0 bottom-0 flex items-center justify-center">
        <div className="image-container aspect-square w-1/2">
          {CardResourceSpace(bottomRight)}
        </div>
      </div>
    );
  };

  const renderBottomLeftCorner = () => {
    if (bottomLeft === BLANK_TYPES.NULL) return null;

    return (
      <div className="bg-primary-cream w-corner-width aspect-corner absolute bottom-0 left-0 flex items-center justify-center">
        <div className="image-container aspect-square w-1/2">
          {CardResourceSpace(bottomLeft)}
        </div>
      </div>
    );
  };

  return (
    <>
      {renderTopLeftCorner()}
      {renderTopRightCorner()}
      {renderBottomRightCorner()}
      {renderBottomLeftCorner()}
    </>
  );
};

export default CardCorners;
