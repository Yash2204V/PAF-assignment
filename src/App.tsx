import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Movie from "./pages/Movie"
import Header from "./components/Header"
import { RecoilRoot } from "recoil"

function App() {
  return (
    <>
      <RecoilRoot>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<Movie />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </>
  )
}

export default App