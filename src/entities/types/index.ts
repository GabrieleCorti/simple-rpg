import { TODO } from "../../utils";

export interface Stats {
  at: number;
  ca: number;
  sp: number;
}
export interface Item {
  name: string;
  path: string;
  effect: {
    description: string;
    temporaryStatModifier: Partial<Stats>;
    specialAttacks: TODO[];
  };
}
export interface Entity {
  name: string;
  stats: Stats;
  path: string;
  temporaryStatModifier: Stats;
  equip: {
    head: null;
    body: null;
    lHand: null;
    rHand: null;
  };
  specialAttacks: TODO[];
}
