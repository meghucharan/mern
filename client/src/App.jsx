

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './signup'
import Login from './login'

function App() {
  return (
    <div>
       <BrowserRouter>
       <Routes>
        <Route path='register' element={<Signup />}></Route>
        <Route path='/log' element={<Login />}></Route>
       </Routes>
       </BrowserRouter>
       </div>
  )
}
export default App;











