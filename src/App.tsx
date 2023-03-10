import React, { useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { Home } from './pages/Home';
import { NotFoundPage } from './pages/Error';
import { useDispatch } from 'react-redux';
import { addImageCache } from './pages/redux/action/imageCacheActions';
import image_path_json from './json/image_path.json';
import { NavBar } from './pages/component/navbar';
import { Enhanched } from './pages/Enhanched';


import jsonIndex from './pages/component/jsonIndex';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchImageCache = async () => {
      dispatch(addImageCache(image_path_json));
    };

    fetchImageCache();
  }, [dispatch]);

  return (
    <div className="App">
      <Router basename="/Black-Desert-Tool">
        <NavBar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/enhanched' element={<Enhanched jsonData={jsonIndex} />} />
            <Route path="*" element={<NotFoundPage />}></Route>
          </Routes>
        </div>
      </Router>

    </div>
  );
}

export default App;
