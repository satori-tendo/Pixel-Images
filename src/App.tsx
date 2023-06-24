import React from 'react';
import s from './App.module.scss';
import arrow from './assets/arrow.gif'
import beforeimg from './assets/beforeimg.jpg'
import afterimg from './assets/afterimg.png'
 
function App() {
  return (
    <div className={s.app}>
      <div className={s.container}>
        <h1>Здесь ты можешь сделать пиксельную картинку из обычной</h1>
        <div className={s.images}>
          <img src={beforeimg} alt='' className={`${s.image1} ${s.image}`} />
          <img src={arrow} alt="" className={s.arrow}/>
          <img src={afterimg} alt='' className={`${s.image2} ${s.image}`} />
        </div>
        <div className={s.buttonWrapper}>
          <button className={s.button}>Сделать картинку</button>
        </div>
      </div>
    </div>
  );
}

export default App;
