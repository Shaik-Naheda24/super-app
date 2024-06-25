import Registration from "./pages/resgistration/Registration";
import GenrePage from "./pages/genre/GenrePage";
import Dashboard from "./pages/dashboard/Dashboard";
import Movies from "./pages/movies/Movies";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registration />} ></Route>
        <Route path="/genre" element={<GenrePage />} ></Route>
        <Route path="/dashboard" element={<Dashboard />} ></Route>
        <Route path="/movies" element={<Movies />} ></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;