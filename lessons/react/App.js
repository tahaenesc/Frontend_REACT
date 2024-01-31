import { HomePage } from "./pages/HomePage/HomePage"
import { AboutPage } from "./pages/AboutPage/AboutPage"
import { NoPage } from "./pages/NoPage/NoPage"
import { ProductsPage } from "./pages/ProductsPage/ProductsPage";
import { VideoPlayerPage } from "./pages/VideoPlayerPage/VideoPlayerPage";
import { ReduxPage } from "./pages/ReduxPage/ReduxPage";

import { NavBar } from "./components/NavBar/NavBar";

import { BrowserRouter, Routes, Route } from 'react-router-dom'


export function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/videoplayer" element={<VideoPlayerPage />} />
          <Route path="/redux" element={<ReduxPage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
