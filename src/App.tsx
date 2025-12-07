import CardBase from "@/components/CardBase.tsx";
import {
  BLANK_TYPES,
  CARD_TYPES,
  POINT_CATEGORIES,
  PRIMARY_RESOURCE_TYPES,
} from "@/contstants/cards.ts";
import type { Card } from "@/types/cards.ts";

const App = () => {
  // const startingCard: Card = {
  //   type: "starting",
  //   properties: {
  //     centralResources: [
  //       PRIMARY_RESOURCE_TYPES.BLUE,
  //       PRIMARY_RESOURCE_TYPES.PURPLE,
  //       PRIMARY_RESOURCE_TYPES.ORANGE,
  //     ],
  //     cornerSpaces: [
  //       PRIMARY_RESOURCE_TYPES.BLUE,
  //       BLANK_TYPES.NULL,
  //       PRIMARY_RESOURCE_TYPES.GREEN,
  //       BLANK_TYPES.EMPTY,
  //     ],
  //   },
  // };

  const resourceCard: Card = {
    id: "CARD_resource1",
    type: CARD_TYPES.RESOURCE,
    properties: {
      primaryResource: PRIMARY_RESOURCE_TYPES.BLUE,
      cornerSpaces: [
        BLANK_TYPES.NULL,
        PRIMARY_RESOURCE_TYPES.PURPLE,
        BLANK_TYPES.NULL,
        BLANK_TYPES.EMPTY,
      ],
      points: { value: 1, category: POINT_CATEGORIES.CORNER },
    },
  };

  // const goldCard: Card = {
  //   id: "CARD_gold1",
  //   type: "gold",
  //   properties: {
  //     primaryResource: PRIMARY_RESOURCE_TYPES.BLUE,
  //     cornerSpaces: [
  //       PRIMARY_RESOURCE_TYPES.ORANGE,
  //       BLANK_TYPES.EMPTY,
  //       PRIMARY_RESOURCE_TYPES.BLUE,
  //       BLANK_TYPES.EMPTY,
  //     ],
  //     points: { value: 1, category: POINT_CATEGORIES.CORNER },
  //     requirements: [
  //       PRIMARY_RESOURCE_TYPES.BLUE,
  //       PRIMARY_RESOURCE_TYPES.BLUE,
  //       PRIMARY_RESOURCE_TYPES.GREEN,
  //       PRIMARY_RESOURCE_TYPES.ORANGE,
  //       PRIMARY_RESOURCE_TYPES.PURPLE,
  //     ],
  //   },
  // };

  return (
    <div className="flex size-full flex-col items-center justify-center">
      <CardBase {...resourceCard} />
    </div>
  );
};

export default App;
