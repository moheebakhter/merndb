import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Form from './Component/Form';
import "bootstrap/dist/css/bootstrap.css"

function App() {
  return (
  <BrowserRouter>
  <div className="App">
    <Routes>
    <Route path="/" element={<Form/>} />
    </Routes>
  </div>
  </BrowserRouter>
  );
}

export default App;
