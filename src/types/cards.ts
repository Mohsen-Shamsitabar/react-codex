import type {
  BLANK_TYPES,
  CARD_TYPES,
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

export type CardTypeRecord = typeof CARD_TYPES;
export type CardType = (typeof CARD_TYPES)[keyof typeof CARD_TYPES];

export type PointCategory = keyof typeof POINT_CATEGORIES;
export type Points = {
  value: number;
  category?: PointCategory;
};

/**
 * [`top-left`, `top-right`, `bottom-right`, `bottom-left`]
 */
export type CornerSpaces = [
  ResourceSpace,
  ResourceSpace,
  ResourceSpace,
  ResourceSpace,
];

export type CardId = `CARD_${string}`;

// === === === === === === === ===

/**
 * ### max length is 3
 */
export type CentralResources = PrimaryResource[];

export type StarterCardProps = {
  cornerSpaces: CornerSpaces;
  centralResources: CentralResources;
};

export type StarterCard = {
  id: CardId;
  type: CardTypeRecord["STARTER"];
  properties: StarterCardProps;
};

// ========== ResourceCard ========== //

export type ResourceCardProps = {
  primaryResource: PrimaryResource;
  cornerSpaces: CornerSpaces;
  points?: Points;
};

export type ResourceCard = {
  id: CardId;
  type: CardTypeRecord["RESOURCE"];
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
  id: CardId;
  type: CardTypeRecord["GOLD"];
  properties: GoldCardProps;
};

// ========== ObjectiveCard ========== //

export type ObjectiveCardProps = "";

export type ObjectiveCard = {
  id: CardId;
  type: CardTypeRecord["OBJECTIVE"];
  properties: ObjectiveCardProps;
};

// === === === === === === === ===

export type Card = StarterCard | ResourceCard | GoldCard | ObjectiveCard;
export type FlipableCardType = ResourceCard | GoldCard;
