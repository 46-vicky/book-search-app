import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import BookDetails from './components/BookDetails';

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/book/:id' element={<BookDetails />}/>
     </Routes>
    </div>
  );
}

export default App;
