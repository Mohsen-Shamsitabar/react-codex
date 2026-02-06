/**
 * Values are in `px`.
 * Also, these values are ***hardcoded*** & are also in use in `index.css`.
 */
export const CARD_SETTINGS = {
  width: 360,
  height: 240,
  cornerSize: 80,
} as const;

//===============================

export const CELL_POS_SEPARATOR = ",";

export const PRIMARY_RESOURCE_TYPES = {
  BLUE: "BLUE",
  GREEN: "GREEN",
  ORANGE: "ORANGE",
  PURPLE: "PURPLE",
} as const;

export const SECONDARY_RESOURCE_TYPES = {
  QUILL: "QUILL",
} as const;

export const BLANK_TYPES = {
  EMPTY: "EMPTY",
  NULL: "NULL",
} as const;

export const POINT_CATEGORIES = {
  CORNER: "CORNER",
  QUILL: "QUILL",
} as const;

export const CARD_TYPES = {
  STARTER: "STARTER",
  RESOURCE: "RESOURCE",
  GOLD: "GOLD",
  OBJECTIVE: "OBJECTIVE",
} as const;
