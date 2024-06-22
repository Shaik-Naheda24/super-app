import Registration from "./pages/resgistration/Registration";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/registration" element={<Registration />} ></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;