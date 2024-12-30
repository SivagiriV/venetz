import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ContactUs from './pages/Contact';
import CustomizeNets from './pages/Customize';
import NotFoundPage from './pages/NotFoundPage';


function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/mosquito-net/ready-to-install" exact element={<Home />} />
          <Route path="/mosquito-net/contact-form" exact element={<ContactUs />} />
          <Route path="/mosquito-net/calculate-price" exact element={<CustomizeNets />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </div>
  );
}
export default App;