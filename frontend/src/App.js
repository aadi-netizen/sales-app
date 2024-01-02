import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SalesNavbar from './common/Navbar';
import AddEntry from './pages/AddEntry';
import Top5sales from './pages/Top5sales';
import TotalRevenue from './pages/totalRevenue';
import Login from './pages/login';
import Ragister from './pages/ragister';

function App() {
  return (
    <BrowserRouter>
    <SalesNavbar />
      <Routes>
        <Route path='/' element={<AddEntry />} />
        <Route path='/top5sales' element={<Top5sales />} />
        <Route path='/totalrevenue' element={<TotalRevenue />} />
        <Route path='/login' element={<Login />} />
        <Route path='/ragister' element={<Ragister />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
