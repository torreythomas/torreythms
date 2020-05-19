import React from 'react';
import './Projects.css';
import 'tachyons'
import Scroll from '../Scroll'

const Project = () => {

    return (
<div className="tl pa3 ma3 projects-div">

  <div className="imgs">
<Scroll>
 <a href="https://torreythomas.github.io/Hangman/"  ><img className="grow shadow"  src={require('../images/hangman.png')}/></a>
 <h2> Hangman</h2>
 <p className="tl ma2 pa3"> 
 
 The Hangman project was the first project that I made while at General Assembly. I used HTML, CSS, and Javascript to create a Hangman game. User's can enter any letter and make up to five guesses to guess the spooky halloween-themed word. If they guess correctly, they will recieve a win in the win count. If not, they will get to guess a new word. I enjoyed working on this application and testing my javascript abilities. Some current fixes include adding some responsive design as well as sharpening up the Javascript code to fix minor lags in the wrong guesses column.
 

 </p>
<div className="flex justify-center ma2 pa3">
 <a className=" project-icons" href="https://github.com/torreythomas/Hangman"> <i class="fab fa-github-square"></i> </a>
<a  className="  project-icons" href="https://medium.com/@torreythms/spooky-halloween-hangman-d0cf2d42feaa"><i class="fab fa-medium"></i></a>
</div>



 <a href="https://torreythomas.github.io/AfterTheStorm/"><img className="grow shadow"  src={require('../images/afterthestorm.png')}/></a>
<h2> After the Storm</h2>
 <p className="tl ma2 pa3"> 
 
After the Storm is a start-up application website that I made using Bootstrap and CSS. The purpose of this project was to focus on using CSS and Bootstrap to sharpen my CSS skills wit flexbox and grid. I liked this application a lot because it allowed me to begin to open my mind to the creative side of coding and to think about what I would actually want a personal site to look like. I seek to create more projects that resonate with my personal values and this project influenced me to create Refulgence, a larger project that I created.

 </p>

 <div className="flex justify-center ma2 pa3">
 <a className=" project-icons" href="https://torreythomas.github.io/AfterTheStorm/"> <i class="fab fa-github-square"></i> </a></div>



 <a href="https://refulgence.netlify.app/"><img className="grow shadow"  src={require('../images/refulgence.png')}/></a>

  <h2> Refulgence</h2>

  <p className="tl ma2 pa3"> 
 
  Refulgence is a fully front-end application made with React, SCSS, and Bootstrap. With only 3 days to complete the site to the best of my ability, I sought to challenge myself to work in a real-world type of environment with hard deadlines. I really enjoyed creating this application as it allowed me to practice making deployments, creating a smooth workflow, and utilizing time management skills and online resources to help me finish any issues without just copy and pasting code. The purpose of this project was to challenge me mentally and skillfully to complete what a real-world website looks like, as opposed to making small side projects.
 
  </p>

  <div className="flex justify-center ma2 pa3">
 <a className=" project-icons" href="https://github.com/torreythomas/refulgence"> <i class="fab fa-github-square"></i> </a>
</div>



<a href="https://fathomless-plateau-83900.herokuapp.com/countries"><img className="grow shadow" src={require('../images/countriesapi.png')}/></a> 
 <h2> Countries API </h2>
 <p className="tl ma2 pa3"> 
 
The Countries API is a REST API with create,update,read,and delete functionalities. Utilizing MongoDB, Atlas, and deployed with Heroku, this API was created to shift my focus from what was previously only front-end oriented to a back-end state of mind. This created the building blocks of my understanding of fetching data from API's and utilizing the back-end to store user data and information as well.
 </p>

 <div className=" proj-icons flex justify-center ma2 pa3">
 <a className=" project-icons" href="https://github.com/torreythomas/countriesAPI"> <i class="fab fa-github-square"></i> </a>
<a  className="  project-icons" href="https://medium.com/@torreythms/countries-api-374a6a7cdb41"><i class="fab fa-medium"></i></a>
</div>




  </Scroll>
  </div>
  </div>
    )


}


export default Project;