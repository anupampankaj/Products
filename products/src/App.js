import {BrowserRouter,Routes,Route} from 'react-router-dom'
import AddPrdt from './Components/AddPrdt';
import Categories from './Components/Categories';
import ProdDetails from './Components/ProdDetails';
import Products from './Components/Products';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Products/>} />
      <Route path='/:id' element={<ProdDetails/>} />
      <Route path='/add' element={<AddPrdt/>} />
      <Route path='/cat' element={<Categories/>} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
