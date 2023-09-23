import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Quiz from './pages/quiz';
import Home from './pages/home';

function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;
