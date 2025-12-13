import {
  BLANK_TYPES,
  PRIMARY_RESOURCE_TYPES,
  SECONDARY_RESOURCE_TYPES,
} from "@/contstants/cards.ts";
import type {
  PrimaryResource,
  PrimaryResourceSpace,
  Resource,
  ResourceSpace,
  SecondaryResource,
  SecondaryResourceSpace,
} from "@/types/cards.ts";
import isBlankType from "@/utilities/is-blank-type.ts";
import isPrimaryResource from "@/utilities/is-primary-resource.ts";
import isSecondaryResource from "@/utilities/is-secondary-resource.ts";

/**
 * { `[resourceSpace]`: `[count]` }
 */
const RESOURCE_CONFIG: Map<ResourceSpace, number> = new Map([
  [PRIMARY_RESOURCE_TYPES.BLUE, 1],
  [PRIMARY_RESOURCE_TYPES.GREEN, 1],
  [PRIMARY_RESOURCE_TYPES.ORANGE, 1],
  [PRIMARY_RESOURCE_TYPES.PURPLE, 1],
  //
  [SECONDARY_RESOURCE_TYPES.QUILL, 1],
  //
  [BLANK_TYPES.EMPTY, 1],
  [BLANK_TYPES.NULL, 1],
]);

const resources: Resource[] = [];
const resourceSpaces: ResourceSpace[] = [];

const primaryResources: PrimaryResource[] = [];
const primaryResourceSpaces: PrimaryResourceSpace[] = [];

const secondaryResources: SecondaryResource[] = [];
const secondaryResourceSpaces: SecondaryResourceSpace[] = [];

RESOURCE_CONFIG.keys().forEach(resource => {
  const resourceCount = RESOURCE_CONFIG.get(resource);

  if (!resourceCount) return;

  for (let i = 0; i < resourceCount; i++) {
    resourceSpaces.push(resource);

    if (isBlankType(resource)) {
      primaryResourceSpaces.push(resource);
      secondaryResourceSpaces.push(resource);
    }

    if (isPrimaryResource(resource)) {
      resources.push(resource);
      primaryResources.push(resource);
      primaryResourceSpaces.push(resource);
    }

    if (isSecondaryResource(resource)) {
      resources.push(resource);
      secondaryResources.push(resource);
      secondaryResourceSpaces.push(resource);
    }
  }
});

const generateResourceSpace = (): ResourceSpace => {
  const rngIdx = Math.floor(Math.random() * resourceSpaces.length);

  if (rngIdx >= resourceSpaces.length) return BLANK_TYPES.EMPTY;

  const randomResource = resourceSpaces[rngIdx]!;

  return randomResource;
};

const generateResource = (): Resource => {
  const rngIdx = Math.floor(Math.random() * resources.length);

  if (rngIdx >= resources.length) return SECONDARY_RESOURCE_TYPES.QUILL;

  const randomResource = resources[rngIdx]!;

  return randomResource;
};

const generatePrimaryResourceSpace = (): PrimaryResourceSpace => {
  const rngIdx = Math.floor(Math.random() * primaryResourceSpaces.length);

  if (rngIdx >= primaryResourceSpaces.length) return BLANK_TYPES.EMPTY;

  const randomResource = primaryResourceSpaces[rngIdx]!;

  return randomResource;
};

const generatePrimaryResource = (): PrimaryResource => {
  const rngIdx = Math.floor(Math.random() * primaryResources.length);

  if (rngIdx >= primaryResources.length) return PRIMARY_RESOURCE_TYPES.BLUE;

  const randomResource = primaryResources[rngIdx]!;

  return randomResource;
};

const generateSecondaryResourceSpace = (): SecondaryResourceSpace => {
  const rngIdx = Math.floor(Math.random() * secondaryResourceSpaces.length);

  if (rngIdx >= secondaryResourceSpaces.length) return BLANK_TYPES.EMPTY;

  const randomResource = secondaryResourceSpaces[rngIdx]!;

  return randomResource;
};

const generateSecondaryResource = (): SecondaryResource => {
  const rngIdx = Math.floor(Math.random() * secondaryResources.length);

  if (rngIdx >= secondaryResources.length)
    return SECONDARY_RESOURCE_TYPES.QUILL;

  const randomResource = secondaryResources[rngIdx]!;

  return randomResource;
};

export {
  generatePrimaryResource,
  generatePrimaryResourceSpace,
  generateResource,
  generateResourceSpace,
  generateSecondaryResource,
  generateSecondaryResourceSpace,
};
