import "./App.css";
import Hire from "./Components/Hire";
import HomePage from "./Components/HomePage";
import GetJob from "./Components/GetJob";
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>

          <Route path="/" element={<HomePage />} />
          <Route path="/getJob" element={<GetJob />} />
          <Route path="/hire" element={<Hire />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;