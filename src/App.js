import './App.css';
import Landing from './routes/landing';
import Postview from './routes/postview';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Form from './routes/form';
function App() {
  return (
    <div className="wrapper">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/postview" element={<Postview />} />
          <Route path="/form" element={<Form />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
