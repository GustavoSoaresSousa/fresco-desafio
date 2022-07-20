import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { InfoContextProvider } from './contexts/InfoContext';
import { CreateProduct } from './pages/CreateProduct';
import { EditProduct } from './pages/EditProduct';
import { Home } from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <Router>
      <InfoContextProvider>
          <Routes>
            <Route path='/' element={<SignIn />} />
            <Route path='/register' element={<SignUp />} />
            <Route path='/home' element={<Home />} />
            <Route path='/create' element={<CreateProduct />} />
            <Route path='/update' element={<EditProduct />} />
          </Routes>
        <GlobalStyles />
      </InfoContextProvider>
  </Router>
  );
}

export default App;
