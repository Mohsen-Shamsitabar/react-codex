import Cell from "@/components/Cell.tsx";
import type { BoardCell, CellPosition } from "@/types/board.ts";
import type { StarterCard } from "@/types/cards.ts";
import generateCard from "@/utilities/generate-card.ts";

const card1 = generateCard({ cardType: "STARTER" }) as StarterCard;

const boardData = new Map<CellPosition, BoardCell>([
  ["0,0", { isOffSide: false, card: card1 }],
  ["1,1", null],
  ["-1,-1", null],
  ["1,-1", null],
  ["-1,1", null],
]);

//==================================//

const Board = () => {
  const renderCells = () => {
    return [...boardData.entries()].map(([position, cell]) => (
      <Cell
        key={position}
        cell={cell}
        position={position}
      />
    ));
  };

  return <div className="relative size-full bg-amber-100">{renderCells()}</div>;
};

export default Board;
