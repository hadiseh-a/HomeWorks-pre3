import { Button } from "react-bootstrap";
import Nav from "./components/Nav";
import Side from "./components/Side";
import AllTasks from "./pages/Alltasks";
import CompletedTasks from "./pages/CompletedTasks";
import Directories from "./pages/Directories";
import ImportantTasks from "./pages/ImportantTasks";
import UnCompletedTasks from "./pages/UnCompletedTasks";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <section style={{ margin: 0, display: "flex", alignItems: "start" }}>
          <Side />
          <Nav />
        </section>
        <button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
</svg>
</button>
        <Routes>
          <Route path="/" element={<AllTasks />} />
          <Route path="/ImportantTasks" element={<ImportantTasks />} />
          <Route path="/CompletedTasks" element={<CompletedTasks />} />
          <Route path="/UnCompletedTasks" element={<UnCompletedTasks />} />
          <Route path="Directories" element={<Directories />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
