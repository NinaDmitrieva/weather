import React from 'react';
import {Route, Routes} from 'react-router-dom';
import { Home } from '../src/pages/Home/Home';
import { MonchStatistics } from '../src/pages/MonchStatistics/MonchStatistics';
import { Header } from './shered/Header/Header';


function App() {
  return (
    <div className="container">
      <Header />
     < Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/montch-statistics'  element={<MonchStatistics />}/>
     </Routes>
    </div>
  );
}

export default App;