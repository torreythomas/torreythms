import React from 'react';
import './App.css';
import { Link, Route } from "react-router-dom";
import Projects from './Projects/Projects'
import Home from './Home/Home'
import 'tachyons'


function App() {
  return (
    <div className="App flex">

<div className="div flex tc">
<nav>
<img src={require('./images/IMG_1660.jpeg')}/>

<div className="nav-items">
<h2> Torrey Thomas</h2>
<h3> Full-Stack Web Developer </h3>
<ul>
<Link className="nav-link   grow  animate__animated animate_Bounce" to="/"> 
<p> Home </p>
</Link>
<Link className="nav-link   grow  animate__animated animate_Bounce" to="/projects"> 
<p> Projects </p>
</Link>
<a className="nav-link grow animate_animated animate_Bounce" href="https://drive.google.com/file/d/1mKRuEb_fGMRT6XoWM7nZjAxhcVLCKYBD/view?usp=sharing"> Resumé </a>

</ul>


<a href="https://www.linkedin.com/in/torrey-thomas-aa545a186/"><i class="fab fa-linkedin-in"></i></a>
<a href="https://github.com/torreythomas"><i class="fab fa-github"></i></a>
<a href="https://medium.com/@torreythms"><i class="fab fa-medium-m"></i></a>
</div>
</nav>
<main>
<Route path="/projects" exact component={Projects} />
<Route path="/" exact component={Home} />
        
</main>

             
</div>

    </div>
  );
}

export default App;
