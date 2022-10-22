import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';

function App() {
  return (
    <Routes>

    <Route path='/' element={<Home/>}></Route>
    <Route path='/blog' element={<Blog/>}></Route>

    </Routes>
  );
}

export default App;
