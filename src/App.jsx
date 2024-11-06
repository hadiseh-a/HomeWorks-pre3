import "./App.css";
import AllTasks from "./pages/Alltasks";
import CompletedTasks from "./pages/CompletedTasks";
import Directories from "./pages/Directories";
import ImportantTasks from "./pages/ImportantTasks";
import UnCompletedTasks from "./pages/UnCompletedTasks";

function App() {
  return (
    <>
      <AllTasks />
      <ImportantTasks />
      <CompletedTasks />
      <UnCompletedTasks />
      <Directories />
    </>
   );
}

export default App;
