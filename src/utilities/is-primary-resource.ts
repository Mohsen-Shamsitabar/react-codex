import { PRIMARY_RESOURCE_TYPES } from "@/contstants/cards.ts";
import type { PrimaryResource, ResourceSpace } from "@/types/cards.ts";

const isPrimaryResource = (
  resource: ResourceSpace,
): resource is PrimaryResource => {
  return (
    resource === PRIMARY_RESOURCE_TYPES.BLUE ||
    resource === PRIMARY_RESOURCE_TYPES.GREEN ||
    resource === PRIMARY_RESOURCE_TYPES.ORANGE ||
    resource === PRIMARY_RESOURCE_TYPES.PURPLE
  );
};

export default isPrimaryResource;
