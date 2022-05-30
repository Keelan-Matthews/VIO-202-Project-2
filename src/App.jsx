import './App.css';
import Navbar from './components/Nav';
import Bio from './components/Bio';
import World from './components/World';
import Author from './components/Author';
import Characters from './components/Characters';
import Title from './components/Title';
import 'bootstrap/dist/css/bootstrap.min.css';
import Background from './images/background.svg';
import { useState } from 'react';
import $ from 'jquery';

function App() {
  const [scale, setScale] = useState(1);
  const [translateX, setTranslateX] = useState("0px");
  const [translateY, setTranslateY] = useState("0px");

  $(window).scroll(function(e){ 
      if ($(this).scrollTop() <= 2800){ 
          setScale(1);
          setTranslateX("0px");
          setTranslateY("0px");
     }
      if ($(this).scrollTop() > 2800){ 
          setScale(1.9);
          setTranslateX("400px");
          setTranslateY("200px");
      }
      if ($(this).scrollTop() > 3700){ 
        setScale(3.9);
        setTranslateX("500px");
        setTranslateY("270px");
    }
  });

  return (
    <main>
      <div className="background-container">
        <img src={Background} className="background-2" alt="" style={{transform: `scale(${scale}) translateX(${translateX}) translateY(${translateY})`, transition: "transform 1s ease"}}/>
      </div>
      <Navbar/>
      <Title/>
      <Bio/>
      <World/>
      <Characters/>
      <Author/>
    </main>
  );
}

export default App;
