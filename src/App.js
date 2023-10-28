import { BrowserRouter, Routes, Route } from "react-router-dom";

import DummyTable from "./pages/DummyTable";
import DummyList from "./pages/DummyList";
import DummyChart from "./pages/DummyChart";

import "./main.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dummy-list" element={<DummyList />} />
        <Route path="/dummy-chart" element={<DummyChart />} />
        <Route path="/dummy-table" element={<DummyTable />} />
        <Route path="/" element={<DummyTable />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
