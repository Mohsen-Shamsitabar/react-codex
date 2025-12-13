import type { FlipableCardType } from "@/types/cards.ts";
import { createContext, useContext, useState } from "react";

type SelectedCardState = {
  isOffSide: boolean;
  card: FlipableCardType;
};

type ProviderProps = {
  children: React.ReactNode;
  selectedCard: SelectedCardState | null;
};

type ProviderState = {
  selectedCard: ProviderProps["selectedCard"];
  setSelectedCard: (card: ProviderProps["selectedCard"]) => void;
};

const initialState: ProviderState = {
  selectedCard: null,
  setSelectedCard: () => null,
};

const ProviderContext = createContext<ProviderState>(initialState);

const SelectedCardProvider = ({ children, ...props }: ProviderProps) => {
  const [selectedCard, setSelectedCard] =
    useState<ProviderProps["selectedCard"]>(null);

  return (
    <ProviderContext.Provider
      {...props}
      value={{ selectedCard, setSelectedCard }}
    >
      {children}
    </ProviderContext.Provider>
  );
};

const useSelectedCard = () => {
  const context = useContext(ProviderContext);

  if (!context) {
    throw new Error(
      "useSelectedCard must be used within a SelectedCardProvider",
    );
  }

  return context;
};

export { SelectedCardProvider, useSelectedCard, type SelectedCardState };
