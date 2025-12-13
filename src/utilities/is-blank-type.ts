import { BLANK_TYPES } from "@/contstants/cards.ts";
import type { BlankSpace, ResourceSpace } from "@/types/cards.ts";

const isBlankType = (resource: ResourceSpace): resource is BlankSpace => {
  return resource === BLANK_TYPES.EMPTY || resource === BLANK_TYPES.NULL;
};

export default isBlankType;
