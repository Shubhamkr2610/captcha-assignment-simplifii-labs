import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { HomePage , InfoPage } from './pages';
function App() {

  const [userInfo , setUserInfo] = useState({})


  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage setUserInfo={setUserInfo}/>}/>
        <Route path='/info' element={<InfoPage info={userInfo}/>}/>
      </Routes>
      
      </BrowserRouter>
    
    
    </div>
  );
}

export default App;
