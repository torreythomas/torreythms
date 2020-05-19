import React from 'react';
import Slider from '../Carousel/slider'



const Home = () => {

    return (
<div className="tl pa3 ma3">
  <h1> Torrey Thomas. </h1>
  <h2 > Full-Stack Web Developer. </h2>
  <p> 

A Full-Stack Web Developer that values pushing the boundaries of expectation and ability. I not only desire to help assist clients in achieving their goals on the web, but to go beyond them. A natural people person with a proactive mindset, I love looking at the bright-side and contributing to the overall success of clients, businesses, and teams that I work with.
  </p>
  <p> When I'm not coding, I enjoy spending time with family, reading, watching "how to be productive" videos on Youtube, and singing praise songs too loudly. </p>
  <p> <em> I'm currently looking for an outstanding position where I can make an impact while learning and growing in my expertise, experience, and knowledge. </em></p>
  <p className='tl ma0 pa0' style={{color:"yellow"}}> Current Skills:

 <em> HTML | CSS | Javascript | MongoDB | Express | SASS | Responsive Design | React | Bootstrap | Node.js | AJAX</em>
  
  
  
</p>
  <div className=" flex justify-center slider-div">

  <Slider/>
  </div>
  </div>
    )


}


export default Home;