import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ApiTest from "./components/ApiTest";



function App() {
  return (
   
      <BrowserRouter>
        <Routes>
          <Route path="/test" element={<ApiTest />} />
        </Routes>
      </BrowserRouter>

  );
}

export default App;
