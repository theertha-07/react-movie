
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Movies from "../pages/Movies/Movies";
import Poster from "../pages/Poster/Poster";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<Home />} />
          <Route path="poster" element={<Poster />} />
          <Route path="movies" element={<Movies />} />

          

        </Route>
      </Routes>
    </BrowserRouter>
  )
}