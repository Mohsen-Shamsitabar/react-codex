import { SECONDARY_RESOURCE_TYPES } from "@/contstants/cards.ts";
import type { ResourceSpace, SecondaryResource } from "@/types/cards.ts";

const isSecondaryResource = (
  resource: ResourceSpace,
): resource is SecondaryResource => {
  return resource === SECONDARY_RESOURCE_TYPES.QUILL;
};

export default isSecondaryResource;
