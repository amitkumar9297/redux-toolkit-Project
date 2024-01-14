
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
// import './App.css';
import './index.css'
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navbar from './Components/Navbar';
import store from './store/store';

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' Component={Home} />
            <Route path='/cart' Component={Cart} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
