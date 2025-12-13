import Board from "@/components/Board.tsx";
import CardBase from "@/components/CardBase.tsx";
import { CARD_TYPES } from "@/contstants/cards.ts";
import { SelectedCardProvider } from "@/providers/SelectedCardProvider.tsx";
import generateCard from "@/utilities/generate-card.ts";

const App = () => {
  return (
    <SelectedCardProvider selectedCard={null}>
      <div className="size-full">
        <div className="flex w-full flex-row gap-4 overflow-x-scroll overflow-y-hidden border-4 py-4">
          <CardBase
            card={
              generateCard({
                cardType: CARD_TYPES.RESOURCE,
              })!
            }
          />

          <CardBase
            card={
              generateCard({
                cardType: CARD_TYPES.RESOURCE,
              })!
            }
          />

          <CardBase
            card={
              generateCard({
                cardType: CARD_TYPES.RESOURCE,
              })!
            }
          />

          <CardBase
            card={
              generateCard({
                cardType: CARD_TYPES.GOLD,
              })!
            }
          />
        </div>

        <Board />
      </div>
    </SelectedCardProvider>
  );
};

export default App;
