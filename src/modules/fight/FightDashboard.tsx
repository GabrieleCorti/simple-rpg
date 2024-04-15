import { createSignal } from "solid-js";
import {
  createKeyboardBindAndListen as _,
  createMultipleKeyboardBindAndListen,
} from "..";

export const FightDashboard = () => {
  const [actionCursorPosition, setActionCursorPosition] = createSignal<
    "attack" | "ability" | "items"
  >("attack");

  /* createKeyboardBindAndListen({
    scope: "fight-base",
    key: "ArrowUp",
    action: () => {
      setActionCursorPosition("attack");
    },
  });
  createKeyboardBindAndListen({
    scope: "fight-base",
    key: "ArrowDown",
    action: () => {
      setActionCursorPosition("items");
    },
  });
  createKeyboardBindAndListen({
    scope: "fight-base",
    key: "ArrowLeft",
    action: () => {
      if (actionCursorPosition() === "attack") {
        setActionCursorPosition("items");
      } else if (actionCursorPosition() === "ability") {
        setActionCursorPosition("attack");
      } else {
        setActionCursorPosition("ability");
      }
    },
  });
  createKeyboardBindAndListen({
    scope: "fight-base",
    key: "ArrowRight",
    action: () => {
      if (actionCursorPosition() === "attack") {
        setActionCursorPosition("ability");
      } else if (actionCursorPosition() === "ability") {
        setActionCursorPosition("items");
      } else {
        setActionCursorPosition("attack");
      }
    },
  }); */

  createMultipleKeyboardBindAndListen([
    {
      scope: "fight-base",
      key: "ArrowUp",
      action: () => {
        setActionCursorPosition("attack");
      },
    },
    {
      scope: "fight-base",
      key: "ArrowDown",
      action: () => {
        setActionCursorPosition("items");
      },
    },
    {
      scope: "fight-base",
      key: "ArrowLeft",
      action: () => {
        if (actionCursorPosition() === "attack") {
          setActionCursorPosition("items");
        } else if (actionCursorPosition() === "ability") {
          setActionCursorPosition("attack");
        } else {
          setActionCursorPosition("ability");
        }
      },
    },
    {
      scope: "fight-base",
      key: "ArrowRight",
      action: () => {
        if (actionCursorPosition() === "attack") {
          setActionCursorPosition("ability");
        } else if (actionCursorPosition() === "ability") {
          setActionCursorPosition("items");
        } else {
          setActionCursorPosition("attack");
        }
      },
    },
  ]);

  return (
    <div class="w-full p-6 h-[20%] flex">
      <div class="w-[75%] mr-[2%] rounded-md bg-gray-700/25 h-full border border-red-300"></div>
      <div class="w-[23%] rounded-md bg-gray-700/25 h-full border border-red-300 grid grid-cols-2">
        <button>{actionCursorPosition() === "attack" && "-"} Attacca</button>
        <button>{actionCursorPosition() === "ability" && "-"} Abilità</button>
        <button>{actionCursorPosition() === "items" && "-"} Zaino</button>
      </div>
    </div>
  );
};
