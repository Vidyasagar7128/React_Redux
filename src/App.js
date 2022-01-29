import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderComponent from './Components/HeaderComponent';
import ProductsComponent from './Components/ProductsComponent';
import ProductComponent from './Components/ProductComponent';

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route exact path='/' element={<ProductsComponent />} />
          <Route exact path='/details/:id' element={<ProductComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
