import { BrowserRouter, Route, Routes } from "react-router-dom";
import {  Home } from "./pages";
import { HomeLayout } from "./Layout";

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomeLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
export default App;
