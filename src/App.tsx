import React, { useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { Home } from './pages/Home';
import { NotFoundPage } from './pages/Error';
import { useDispatch, useSelector } from 'react-redux';
import { addImageCache } from './pages/redux/action/imageCacheActions';
import response from './json/image_path.json';
import { NavBar } from './pages/component/navbar';
import { Enhanched } from './pages/Enhanched';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchImageCache = async () => {
      dispatch(addImageCache(response));
    };

    fetchImageCache();
  }, [dispatch]);

  return (
    <div className="App">
      <Router basename="/">
        <NavBar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/enhanched' element={<Enhanched />} />
            <Route path="*" element={<NotFoundPage />}></Route>
          </Routes>
        </div>
      </Router>

    </div>
  );
}

export default App;
