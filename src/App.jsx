import { Route, Routes } from "react-router-dom";
import "./App.css";
import NewStudent from "./pages/NewStudent";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Home page</h1>} />
        <Route path="/students/new" element={<NewStudent />} />
        <Route path="*" element={<h1>404 page</h1>} />
      </Routes>
    </>
  );
}

export default App;
