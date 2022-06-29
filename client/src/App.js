import { useState } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom' //v6
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import ItemDetail from './pages/ItemDetail';
import Cart from './pages/Cart';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/menu" exact element={<Menu />} />
          <Route path="/menu/:name"  element={<ItemDetail />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/cart" exact element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;
