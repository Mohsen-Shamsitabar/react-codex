import type { CELL_POS_SEPARATOR } from "@/contstants/cards.ts";
import type { FlipableCardType, StarterCard } from "@/types/cards.ts";

export type BoardCell = {
  isOffSide: boolean;
  card: FlipableCardType | StarterCard;
} | null;

export type CellPosition = `${number}${typeof CELL_POS_SEPARATOR}${number}`;
