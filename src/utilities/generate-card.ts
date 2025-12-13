import { CARD_TYPES } from "@/contstants/cards.ts";
import type {
  CardTypeRecord,
  CornerSpaces,
  GoldCard,
  PrimaryResource,
  ResourceCard,
  StarterCard,
} from "@/types/cards.ts";
import generateCardId from "@/utilities/generate-card-id.ts";
import generateCardPoints from "@/utilities/generate-card-points.ts";
import generateCentralResources from "@/utilities/generate-central-resources.ts";
import generateRequirements from "@/utilities/generate-requirements.ts";
import {
  generatePrimaryResourceSpace,
  generateResourceSpace,
  generateSecondaryResourceSpace,
} from "@/utilities/resource-generators.ts";

type Options =
  | {
      cardType: CardTypeRecord["GOLD"];
      primaryResource: PrimaryResource;
    }
  | {
      cardType: CardTypeRecord["RESOURCE"];
      primaryResource: PrimaryResource;
    }
  | {
      cardType: CardTypeRecord["OBJECTIVE"];
    }
  | {
      cardType: CardTypeRecord["STARTER"];
    };

const generateCard = (option: Options) => {
  const { cardType } = option;

  const cardId = generateCardId();

  switch (cardType) {
    case CARD_TYPES.GOLD: {
      const { primaryResource } = option;

      const cornerSpaces: CornerSpaces = [
        generateSecondaryResourceSpace(),
        generateSecondaryResourceSpace(),
        generateSecondaryResourceSpace(),
        generateSecondaryResourceSpace(),
      ];

      const points = generateCardPoints(cardType)!;
      const requirements = generateRequirements(primaryResource);

      const goldCard: GoldCard = {
        id: cardId,
        type: cardType,
        properties: {
          primaryResource,
          cornerSpaces,
          points,
          requirements,
        },
      };

      return goldCard;
    }

    case CARD_TYPES.RESOURCE: {
      const { primaryResource } = option;

      const cornerSpaces: CornerSpaces = [
        generateResourceSpace(),
        generateResourceSpace(),
        generateResourceSpace(),
        generateResourceSpace(),
      ];

      const points = generateCardPoints(cardType);

      const resourceCard: ResourceCard = {
        id: cardId,
        type: cardType,
        properties: {
          primaryResource,
          cornerSpaces,
          points,
        },
      };

      return resourceCard;
    }

    case CARD_TYPES.STARTER: {
      const cornerSpaces: CornerSpaces = [
        generatePrimaryResourceSpace(),
        generatePrimaryResourceSpace(),
        generatePrimaryResourceSpace(),
        generatePrimaryResourceSpace(),
      ];

      const centralResources = generateCentralResources();

      const startedCard: StarterCard = {
        id: cardId,
        type: cardType,
        properties: {
          cornerSpaces,
          centralResources,
        },
      };

      return startedCard;
    }

    // OBJECTIVE CARDS
    default: {
      return;
    }
  }
};

export default generateCard;
