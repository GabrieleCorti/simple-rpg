import { onCleanup } from "solid-js";
import { keyboardStore } from "./store";

export function createKeyboardListener() {
  const [store] = keyboardStore;
  const handleKeydown = (e: KeyboardEvent) => {
    e.preventDefault();
    store.actions
      .find((v) => v.scope === store.scope && v.key === e.key)
      ?.action();
  };

  document.addEventListener("keydown", handleKeydown);

  onCleanup(() => {
    document.removeEventListener("keydown", handleKeydown);
  });
}
