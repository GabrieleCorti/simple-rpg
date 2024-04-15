import { Action, keyboardStore } from "./store";
import { produce } from "solid-js/store";
import { onCleanup, onMount } from "solid-js";

export function createKeyboardBindAndListen(action: Action) {
  const [store, setStore] = keyboardStore;

  onMount(() => {
    setStore(
      "actions",
      produce((as) => as.push(action))
    );
  });

  onCleanup(() => {
    const filteredActions = store.actions.filter(
      (t) => t.action !== action.action
    );
    setStore("actions", filteredActions);
  });
}
export function createMultipleKeyboardBindAndListen(actions: Action[]) {
  const [store, setStore] = keyboardStore;

  onMount(() => {
    setStore(
      "actions",
      produce((as) => as.push(...actions))
    );
  });

  onCleanup(() => {
    const filteredActions = store.actions.filter(
      (t) => !actions.some((a) => a.action === t.action)
    );
    setStore("actions", filteredActions);
  });
}
