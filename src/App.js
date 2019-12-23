import React from 'react';
import Kursus from './state/state';
import Materi from './prop/prop';
import './prop/style.css';
function App() {
  return (
    <div className="App">
      <Kursus/>
      <p>contoh state</p>
      <hr/>
      <Materi img={require('./prop/slide1.jpg')}des="belajar seo" harga="120000"/>
      <Materi img={require('./prop/slide1.jpg')}des="google adword" harga="400000"/>
      <Materi img={require('./prop/slide1.jpg')}des="belajar react js" harga="50000"/>
      
    </div>
  );
}

export default App;
