import React from 'react';
import {Route, Routes} from 'react-router-dom';
import { Home } from '../src/pages/Home/Home';
import { MonchStatistics } from '../src/pages/MonchStatistics/MonchStatistics';
import { Header } from './shered/Header/Header';
import { Popup } from './shered/Popup/Popup';


function App() {
  return (
  <div className="global-container">
      {/* <Popup /> */}
    <div className="container">
      <Header />
     < Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/montch-statistics'  element={<MonchStatistics />}/>
     </Routes>
    </div>
  </div>
  );
}

export default App;