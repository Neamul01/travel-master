import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home/Home'
import Header from './components/Shared/Header/Header';
import Checkout from './components/Checkout/Checkout';
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About';
import Login from './components/Login/Login/Login';
import NotFound from './components/NotFound/NotFound'
import Footer from './components/Shared/Footer/Footer'
import SignUp from './components/Login/Signup/Signup';
import RequireAuth from './components/Shared/RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <div className='absolute w-full top-0'>
        <Header></Header>
      </div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path='home/:checkoutId' element={<Checkout></Checkout>}></Route>
        <Route path='blogs' element={<Blogs></Blogs>}></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
