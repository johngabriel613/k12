import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import TestPage from "./pages/TestPage"
import ErrorPage from "./pages/ErrorPage"
import Layout from "./Layout/Layout"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="/" element={<HomePage/>}/>
        <Route path="about" element={<AboutPage/>}/>
        <Route path="test" element={<TestPage/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Route>
    </Routes>
  )
}

export default App
