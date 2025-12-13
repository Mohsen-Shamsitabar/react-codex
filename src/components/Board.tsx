import CardBase from "@/components/CardBase.tsx";
import { CARD_SETTINGS } from "@/contstants/cards.ts";
import { useSelectedCard } from "@/providers/SelectedCardProvider.tsx";
import type { FlipableCardType, StarterCard } from "@/types/cards.ts";
import generateCard from "@/utilities/generate-card.ts";
import { useState } from "react";

// type StarterCell = {
//   isOffSide: boolean;
//   card: FlipableCardType | StarterCard;
// };

type BoardCell = {
  isOffSide: boolean;
  card: FlipableCardType | StarterCard;
} | null;
type CellPosition = `${number}|${number}`;

const card1 = generateCard({ cardType: "STARTER" }) as StarterCard;

const boardData = new Map<CellPosition, BoardCell>([
  ["0|0", { isOffSide: false, card: card1 }],
  ["1|1", null],
  ["-1|-1", null],
  ["1|-1", null],
  ["-1|1", null],
]);

type CellProps = {
  position: CellPosition;
  cell: BoardCell;
  boardElement: HTMLDivElement;
};

const Cell = (props: CellProps) => {
  const { position, cell: cellProp, boardElement } = props;

  const [cell, setCell] = useState(cellProp);

  const { selectedCard, setSelectedCard } = useSelectedCard();

  const { width: boardWidth, height: boardHeight } =
    boardElement.getBoundingClientRect();

  const xPivot = boardWidth / 2;
  const yPivot = boardHeight / 2;

  const [x, y] = position.split("|").map(v => Number(v)) as [number, number];

  let yPoint = yPivot + y * CARD_SETTINGS.height;
  let xPoint = xPivot + x * CARD_SETTINGS.width;

  if (x > 0) {
    xPoint = xPoint - CARD_SETTINGS.cornerSize;
  } else if (x < 0) {
    xPoint = xPoint + CARD_SETTINGS.cornerSize;
  }

  if (y > 0) {
    yPoint = yPoint - CARD_SETTINGS.cornerSize;
  } else if (y < 0) {
    yPoint = yPoint + CARD_SETTINGS.cornerSize;
  }

  const handleOnCellPlaceholderClick = () => {
    if (!selectedCard) return;

    setCell(selectedCard);
    setSelectedCard(null);
  };

  const renderCard = () => {
    if (!cell?.card)
      return (
        <div
          className="cell-placeholder"
          onClick={handleOnCellPlaceholderClick}
        />
      );

    return (
      <CardBase
        card={cell.card}
        canInteractWith={false}
        isOffSide={cell.isOffSide}
      />
    );
  };

  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={{
        top: `${yPoint}px`,
        left: `${xPoint}px`,
      }}
    >
      {renderCard()}
    </div>
  );
};

//==================================//

const Board = () => {
  const [boardElement, setBoardElement] = useState<null | HTMLDivElement>(null);

  const renderCells = () => {
    if (!boardElement) return null;

    return [...boardData.entries()].map(([position, cell]) => (
      <Cell
        key={position}
        cell={cell}
        position={position}
        boardElement={boardElement}
      />
    ));
  };

  return (
    <div
      ref={node => setBoardElement(node)}
      className="relative size-full bg-amber-100"
    >
      {renderCells()}
    </div>
  );
};

export default Board;
