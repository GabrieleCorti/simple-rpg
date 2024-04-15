import { createKeyboardListener } from "./modules";
import { Fight } from "./pages";

function App() {
  createKeyboardListener();
  return <Fight />;
}

export default App;
