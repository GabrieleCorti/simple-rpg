import { onMount } from "solid-js";
import { FightDashboard, changeScope } from "../modules";

export const Fight = () => {
  onMount(() => {
    changeScope("fight-base");
  });
  return (
    <div class="w-screen h-screen">
      <FightDashboard />
    </div>
  );
};
