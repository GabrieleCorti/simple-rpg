import { createStore } from "solid-js/store";

export interface Action {
  key: string;
  scope: string;
  action: () => unknown;
}
export interface KeyboardStoreValue {
  scope: string;
  actions: Array<Action>;
}
export const keyboardStore = createStore<KeyboardStoreValue>({
  scope: "main",
  actions: [],
});
