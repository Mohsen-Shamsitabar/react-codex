import BoardViewport from "@/components/BoardViewport.tsx";
import { SelectedCardProvider } from "@/providers/SelectedCardProvider.tsx";

const App = () => {
  return (
    <SelectedCardProvider selectedCard={null}>
      <main className="size-full">
        <BoardViewport />
      </main>
    </SelectedCardProvider>
  );
};

export default App;
