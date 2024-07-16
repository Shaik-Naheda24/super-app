import Registration from "./pages/registration/Registration";
import GenrePage from "./pages/genre/GenrePage";
import HomePage from "./pages/homepage/Homepage";
import Dashboard from "./pages/dashboard/Dashboard";
import PromotionPage from "./pages/promotion/PromotionPage";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registration />} ></Route>
        <Route path="/genre" element={<GenrePage />} ></Route>
        <Route path="/homepage" element={<HomePage />}></Route>
        <Route path="/dashboard" element={<Dashboard />} ></Route>
        <Route path="/movies" element={<PromotionPage />} ></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;