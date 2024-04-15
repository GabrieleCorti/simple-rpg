import { createStore } from "solid-js/store";
import { Entity } from "../types";

export const playerStore = createStore<Entity>({
  name: "Antonio",
  path: "...",
  stats: {
    at: 2,
    ca: 2,
    sp: 2,
  },
  temporaryStatModifier: { at: 2, ca: 2, sp: 2 },
  equip: {
    head: null,
    body: null,
    lHand: null,
    rHand: null,
  },
  specialAttacks: [],
});
