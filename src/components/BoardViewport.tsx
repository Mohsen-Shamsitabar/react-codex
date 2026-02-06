import Board from "@/components/Board.tsx";
import { BOARD_SETTINGS } from "@/contstants/board.ts";
import { useState } from "react";

const BoardViewport = () => {
  const [boardScale, setBoardScale] = useState(1);

  const decreaseScale = () => {
    setBoardScale(c => {
      const newScale = c - BOARD_SETTINGS.scaleChange;

      if (newScale <= 0.2) return c;

      return newScale;
    });
  };

  const increaseScale = () => {
    setBoardScale(c => {
      const newScale = c + BOARD_SETTINGS.scaleChange;

      // if (newScale > 1) return c;

      return newScale;
    });
  };

  return (
    <div className="relative size-full scroll-mb-60 overflow-auto border-8 border-red-500">
      <div className="fixed top-4 right-4 z-50 flex flex-col items-center justify-center gap-2 bg-black p-2 opacity-50">
        <button
          onClick={increaseScale}
          className="flex size-4 cursor-pointer items-center justify-center border text-center text-white"
        >
          +
        </button>

        <button
          onClick={decreaseScale}
          className="flex size-4 cursor-pointer items-center justify-center border text-center text-white"
        >
          -
        </button>
      </div>

      <div
        className={`size-board aspect-square transition-all`}
        style={{ scale: boardScale }}
      >
        <Board />
      </div>
    </div>
  );
};

export default BoardViewport;
