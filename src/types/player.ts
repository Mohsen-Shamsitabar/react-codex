import type {
  GoldCard,
  ObjectiveCard,
  Resource,
  ResourceCard,
} from "@/types/cards.ts";

export type Player = {
  objectiveCards: ObjectiveCard[];
  cards: (ResourceCard | GoldCard)[];
  score: number;
  resources: Record<Resource, number>;
};
