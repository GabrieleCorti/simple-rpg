import { keyboardStore } from "./store";

export function changeScope(scope: string) {
  const [store, setStore] = keyboardStore;
  setStore("scope", scope);
  return store.scope;
}
