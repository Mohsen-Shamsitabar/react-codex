import type {
  BLANK_TYPES,
  POINT_CATEGORIES,
  PRIMARY_RESOURCE_TYPES,
  SECONDARY_RESOURCE_TYPES,
} from "@/contstants/cards.ts";

export type PrimaryResource =
  (typeof PRIMARY_RESOURCE_TYPES)[keyof typeof PRIMARY_RESOURCE_TYPES];

export type SecondaryResource =
  (typeof SECONDARY_RESOURCE_TYPES)[keyof typeof SECONDARY_RESOURCE_TYPES];

export type BlankSpace = (typeof BLANK_TYPES)[keyof typeof BLANK_TYPES];
export type Resource = PrimaryResource | SecondaryResource;

export type PrimaryResourceSpace = PrimaryResource | BlankSpace;
export type SecondaryResourceSpace = SecondaryResource | BlankSpace;
export type ResourceSpace = Resource | BlankSpace;

export type PointCategory = keyof typeof POINT_CATEGORIES;
export type Points = {
  value: number;
  category?: PointCategory;
};

/**
 * [`top-left`, `top-right`, `bottom-right`, `bottom-left`]
 */
export type CornerSpaces = [
  PrimaryResourceSpace,
  PrimaryResourceSpace,
  PrimaryResourceSpace,
  PrimaryResourceSpace,
];

// === === === === === === === ===

/**
 * ### max length is 3
 */
export type CentralResources = PrimaryResourceSpace[];

export type StartingCardProps = {
  cornerSpaces: CornerSpaces;
  centralResources: CentralResources;
};

export type StartingCard = {
  type: "starting";
  properties: StartingCardProps;
};

// ========== ResourceCard ========== //

export type ResourceCardProps = {
  primaryResource: PrimaryResource;
  cornerSpaces: CornerSpaces;
  points?: Points;
};

export type ResourceCard = {
  type: "resource";
  properties: ResourceCardProps;
};

// ========== GoldCard ========== //

/**
 * ### max length is 5
 */
export type GoldCardRequirement = PrimaryResourceSpace[];

export type GoldCardProps = {
  primaryResource: PrimaryResource;
  cornerSpaces: CornerSpaces;
  points: Points;
  requirements: GoldCardRequirement;
};

export type GoldCard = {
  type: "gold";
  properties: GoldCardProps;
};

// ========== ObjectiveCard ========== //

export type ObjectiveCardProps = "";

export type ObjectiveCard = {
  type: "objective";
  properties: ObjectiveCardProps;
};

// === === === === === === === ===

export type Card = StartingCard | ResourceCard | GoldCard | ObjectiveCard;
