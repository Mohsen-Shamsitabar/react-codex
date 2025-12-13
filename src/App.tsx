import CardBase from "@/components/CardBase.tsx";
import { CARD_TYPES, PRIMARY_RESOURCE_TYPES } from "@/contstants/cards.ts";
import generateCard from "@/utilities/generate-card.ts";

const App = () => {
  const card = generateCard({
    cardType: CARD_TYPES.GOLD,
    primaryResource: PRIMARY_RESOURCE_TYPES.GREEN,
  })!;

  return (
    <div className="flex size-full flex-col items-center justify-center">
      <CardBase {...card} />
    </div>
  );
};

export default App;
