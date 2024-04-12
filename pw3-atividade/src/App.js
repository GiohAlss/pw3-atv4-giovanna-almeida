import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Form from './pages/Form';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path='form' element={<Form />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;