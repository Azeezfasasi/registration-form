import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import faceb from './assets/images/faceb.svg';
import google from './assets/images/google.svg';
import arrow from './assets/images/arrow.svg';
import Reg1SignUp from './forms/Reg1SignUp';
import Reg1SignIn from './forms/Reg1SignIn';
import Reg2SignUp from './forms/Reg2SignUp';
import Reg3SignUp from './forms/Reg3SignUp';
import Reg3Signin from './forms/Reg3SignIn';
import Reg4SignUp from './forms/Reg4SignUp';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Reg1SignUp />} />
          <Route path='/forms/reg1signin' element={<Reg1SignIn />} />
          <Route path='/forms/reg2signup' element={<Reg2SignUp />} />
          <Route path='/forms/reg3signup' element={<Reg3SignUp />} />
          <Route path='/forms/reg3signin' element={<Reg3Signin />} />
          <Route path='/forms/reg4signup' element={<Reg4SignUp />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
