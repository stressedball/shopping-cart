import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Header from './components/Header';
import Shopping from './components/Shopping';

function App() {
  return (
    <div role='app' className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shopping' element={<Shopping />} />
      </Routes>
      <footer>MADE BY TS</footer>
    </div>
  );
}

export default App;
