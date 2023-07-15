import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy, useState } from 'react';
import './App.css';
import { NavBar } from './Component/NavBar';
import { Home } from './Component/Home';
import { AddProduct } from './Component/AddProduct';
import {EditProduct} from"./Component/EditProduct";
import { DisplayProduct } from './Component/DisplayProduct';
import { Footer } from './Footer';
import { Login } from './Login';
import { AddEmployee } from './Component/AddEmployee';
import { NotFound } from './Component/NotFound';
import { Cust } from './Component/Cust';
import { AddCustomer } from './Component/AddCustomer';
import { EditCust } from './Component/EditCust';

const LazyDisplayEmployee = lazy(() =>
  import("./Component/DisplayEmployee.jsx").then((module) => ({
    default: module.DisplayEmployee,
  }))
);

export default function App() {
  const [isLogin,setisLogin] = useState(false);
  return (
    <div>
      <NavBar isLog={isLogin}/>
      
      <Routes>
        <Route index="Home" element={<Home/>}></Route>
        <Route path="addProduct" element={<AddProduct/>}></Route>
        <Route path="editProduct/:id" element={<EditProduct/>}></Route>
        <Route path='dispProduct/:id' element={<DisplayProduct/>}></Route>
        <Route path='login' element={<Login setLog = {setisLogin}/>}></Route>
        
        <Route path='customer/editCust/:id' element={<EditCust/>}></Route>
        <Route path='login/addEmp' element={<AddEmployee/>}></Route>
        <Route path='customer' element={<Cust/>}></Route>
        <Route path='customer/addCust' element={<AddCustomer/>}></Route>
        <Route path="dispEmp/:id" element={ /* Wrap LazyDisplayEmployee with Suspense */
          <Suspense fallback={<Loading />}>
            <LazyDisplayEmployee setLog = {setisLogin} />
          </Suspense>
        } />
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>

      <Footer/>
    </div>
  );
}

function Loading() {
  return (
    <div class="d-flex justify-content-center">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>
  )
}


