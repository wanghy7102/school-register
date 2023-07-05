import { BrowserRouter, Routes, Route } from "react-router-dom";
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import "./App.css";
import Form from "./Form";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/school-register/" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
