import CardBase from "@/components/cards/CardBase.tsx";
import { BOARD_SETTINGS } from "@/contstants/board.ts";
import { CARD_SETTINGS, CELL_POS_SEPARATOR } from "@/contstants/cards.ts";
import { useSelectedCard } from "@/providers/SelectedCardProvider.tsx";
import type { BoardCell, CellPosition } from "@/types/board.ts";
import { useState } from "react";

type Props = {
  position: CellPosition;
  cell: BoardCell;
};

const Cell = (props: Props) => {
  const { position, cell: cellProp } = props;

  const [cell, setCell] = useState(cellProp);

  const { selectedCard, setSelectedCard } = useSelectedCard();

  const boardWidth = BOARD_SETTINGS.size;
  const boardHeight = BOARD_SETTINGS.size;

  const centerX = boardWidth / 2;
  const centerY = boardHeight / 2;

  const [cellX, cellY] = position
    .split(CELL_POS_SEPARATOR)
    .map(v => Number(v)) as [number, number];

  let yPoint = centerY + cellY * CARD_SETTINGS.height;
  let xPoint = centerX + cellX * CARD_SETTINGS.width;

  if (cellX > 0) {
    xPoint = xPoint - CARD_SETTINGS.cornerSize;
  } else if (cellX < 0) {
    xPoint = xPoint + CARD_SETTINGS.cornerSize;
  }

  if (cellY > 0) {
    yPoint = yPoint - CARD_SETTINGS.cornerSize;
  } else if (cellY < 0) {
    yPoint = yPoint + CARD_SETTINGS.cornerSize;
  }

  const handleOnCellPlaceholderClick = () => {
    if (!selectedCard) return;

    setCell(selectedCard);
    setSelectedCard(null);
  };

  const renderCard = () => {
    if (!cell?.card) {
      return (
        <div
          className="cell-placeholder"
          onClick={handleOnCellPlaceholderClick}
        />
      );
    }

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

export default Cell;
