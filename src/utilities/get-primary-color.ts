import { PRIMARY_RESOURCE_TYPES } from "@/contstants/cards.ts";
import type { PrimaryResource } from "@/types/cards.ts";

const getPrimaryColorToken = (
  primaryResource: PrimaryResource,
): string | undefined => {
  switch (primaryResource) {
    case PRIMARY_RESOURCE_TYPES.BLUE: {
      return "bg-primary-blue";
    }
    case PRIMARY_RESOURCE_TYPES.GREEN: {
      return "bg-primary-green";
    }
    case PRIMARY_RESOURCE_TYPES.ORANGE: {
      return "bg-primary-orange";
    }
    case PRIMARY_RESOURCE_TYPES.PURPLE: {
      return "bg-primary-purple";
    }
    default:
      return;
  }
};

export default getPrimaryColorToken;
