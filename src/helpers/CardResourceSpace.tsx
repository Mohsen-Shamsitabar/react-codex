import { BLANK_TYPES } from "@/contstants/cards.ts";
import type { ResourceSpace } from "@/types/cards.ts";

const CardResourceSpace = (resourceSpace: ResourceSpace) => {
  if (resourceSpace === BLANK_TYPES.EMPTY || resourceSpace === BLANK_TYPES.NULL)
    return null;

  switch (resourceSpace) {
    case "BLUE": {
      return <div className="bg-primary-blue aspect-square border" />;
    }
    case "GREEN": {
      return <div className="bg-primary-green aspect-square border" />;
    }
    case "ORANGE": {
      return <div className="bg-primary-orange aspect-square border" />;
    }
    case "PURPLE": {
      return <div className="bg-primary-purple aspect-square border" />;
    }
    case "QUILL": {
      return <div className="aspect-square border bg-cyan-400" />;
    }
    default:
      return null;
  }
};

export default CardResourceSpace;
