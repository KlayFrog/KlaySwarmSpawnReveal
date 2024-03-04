"use client";

import { Button } from "@/app/_components/button";
import { BoosterCard } from "./card";
import { useReducer, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { CardType, FlippableCardType } from "./card.model";
import { getAllCommonCards } from "./card.utils";

type BoosterCard = FlippableCardType & { key: string };

type BoosterState = {
 cards: BoosterCard[];
 allCardFlipped: boolean;
};

type BoosterAction =
 | { type: "flipCard"; cardToFlip: BoosterCard }
 | { type: "flipAllCards" }
 | { type: "openNewPack" };

function reducer(state: BoosterState, action: BoosterAction): BoosterState {
 switch (action.type) {
    case "flipCard":
      action.cardToFlip.flipped = true;
      state.allCardFlipped = state.cards.every((card) => card.flipped);
      return { ...state };
    case "flipAllCards":
      state.cards.forEach((card) => (card.flipped = true));
      return { ...state, allCardFlipped: true };
    case "openNewPack":
      return {
        ...state,
        cards: getAllCommonCards().map((card) => ({
          ...card,
          key: uuidv4(),
          flipped: false,
        })),
        allCardFlipped: false,
      };
    default:
      throw new Error();
 }
}

const initialState: BoosterState = {
 cards: getAllCommonCards().map((card) => ({
    ...card,
    key: uuidv4(),
    flipped: false,
 })),
 allCardFlipped: false,
};

export default function BoosterIndex() {
 const [state, dispatch] = useReducer(reducer, initialState);

 useEffect(() => {
    const handleResize = () => {
      const isPortrait = window.innerHeight > window.innerWidth;
      const cards = document.querySelectorAll('.cardContainer');
      cards.forEach((card) => {
        if (isPortrait) {
          card.style.width = '185px';
          card.style.height = '258px';
        } else {
          card.style.width = '285px';
          card.style.height = '398px';
        }
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call once to set initial sizes

    // Cleanup function to remove the event listener
    return () => window.removeEventListener('resize', handleResize);
 }, []);

 return (
    <main className="w-full h-full flex flex-col justify-center items-center gap-3">
      <div className="flex flex-wrap gap-3 items-center justify-center">
        {state.cards.map((card) => (
          <BoosterCard
            key={card.key}
            card={card}
            onFlip={() => dispatch({ type: "flipCard", cardToFlip: card })}
          />
        ))}
      </div>
      {!state.allCardFlipped && (
        <Button
          onClick={() =>
            dispatch({
              type: "flipAllCards",
            })
          }
          disabled={state.allCardFlipped}
        >
          Reveal all
        </Button>
      )}
    </main>
 );
}
