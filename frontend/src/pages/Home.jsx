import React from 'react'
import topLeft from '../assets/img/top-left.svg';
import bottomRight from '../assets/img/bottom-right.svg';
import bottomLeft from '../assets/img/botom-left.svg';
import circles from '../assets/img/circles.svg';
import curved from '../assets/img/curved.svg';
import circle from '../assets/img/circle.svg';
import Input from '../components/containers/Input.';
import Button from '../components/containers/Button';
const Home = () => {
  return (
    <div className="alert_container">
    <div className="layers">
    <div className="top-left__layer">
       <img src={topLeft} alt=""/>
     </div>
     <div className="bottom-right__layer">
       <img src={bottomRight} alt=""/>
     </div>
     <div className="bottom-left__layer">
       <img src={bottomLeft} alt=""/>
     </div>
     <div className="circles">
       <img src={circles} alt=""/>
     </div>
    </div>
   <div className="form">
     <div className="logo"><h1>Port<span>L</span>inks</h1></div>
     <div className="big_text">
       <h1>Why create a portfolio website from  scratch if we've got you covered?</h1>
     </div>
     <div className="small_text">
       <p>Be one of the first 100 to try it out</p>
     </div>
    <form action="">
      <Input type="text" placeholder="Your email" />
      <Button>Get notified</Button>
    </form>
<div className="curved">
  <img src={curved} alt=""/>
</div>
<div className="circle">
  <img src={circle} alt=""/>
</div>
   </div>
    <div className="date"><span style={{display:"inline-block",marginRight:'.5rem'}}>&copy;</span>{new Date().getFullYear()}</div>
    </div>
  )
}

export default Home
