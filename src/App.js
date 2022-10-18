
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { WavyContainer } from "react-wavy-transitions";
import Home from "./Pages/Home";
import NigthCafe from "./Pages/NigthCafe";
import Page404 from "./Pages/Page404";
import Soon from "./Pages/Soon";
import StaryNight from "./Pages/StaryNight";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <WavyContainer/>
        <Routes>
          <Route
              index
              element={<Home/>}
            >
          </Route>
          <Route
            path='/starry-night'
            element={<StaryNight/>}
          >
          </Route>
          <Route
            path='/night-cafe'
            element={<NigthCafe/>}
          >
          </Route>
          <Route
            path='/coming-soon'
            element={<Soon/>}
          >
          </Route>
          <Route
            path='*'
            element={<Page404/>}
          >
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
