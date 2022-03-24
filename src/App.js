import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useRef, useEffect, useState  } from 'react';
import VideoPlayer from 'react-video-js-player';
import { useIntersectionObserver} from "./hook";
import { InView } from 'react-intersection-observer';


export default function App() {
  const root = useRef(null); // We need a ref to our "root" or our parent,
  const targetVideo = useRef(null); // We need a ref to our "target" or our child-to-watch,
  const target = useRef(null); 
  // Let's use a bit of state.
  const [isThingIntersecting, setThingIntersecting] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);
  
  /*const state = {
    classNames: "overlay-desc",
    animationFinished: false,
    showAnimationStartLabel: false
  };*/

 /* const startStopAnimation = () => {
    const { classNames } = state;

    this.setState({ classNames: classNames ? "overlay-desc" : "overlay-desc animation" });
  };

  const onAnimationStart = () => {
    this.setState({
      animationFinished: false,
      showAnimationStartLabel: true
    });
  };

  const onAnimationEnd = () => {
    this.setState({
      animationFinished: true,
      showAnimationStartLabel: false
    });
  };
  const { animationFinished, showAnimationStartLabel } = this.state;
    const displayState = animationFinished ? "block" : "none";
    const displayStateAnimationStart =
      !animationFinished && showAnimationStartLabel ? "block" : "none";
*/
  // Here's our hook! Let's give it some configuration...
  useIntersectionObserver({
    root,
    targetVideo,
    // What do we do when it intersects?
    // The signature of this callback is (collectionOfIntersections, observerElement).
    onIntersect: ([{ isIntersecting }]) => setThingIntersecting(isThingIntersecting)
  });
  /*useIntersectionObserver({
    root,
    target,

    // What do we do when it intersects?
    // The signature of this callback is (collectionOfIntersections, observerElement).
    onIntersect: ([{ isIntersecting }]) => setThingIntersecting(isIntersecting)
  });*/

 const isPressed = false;
const handleScroll = () => {
  isPressed = true;
  console.log('Scrolling...');
};

useEffect(() => {

  root.current.addEventListener('scroll', handleScroll, true);

  // Remove the event listener
  return () => {
    //window.removeEventListener('scroll', handleScroll, true);
  };
}, []);

  return (
    <div className="App" ref={root}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          
        </a>
         
      </header>
        <body>
          <div class="video-container" id = "video-container">
          <video ref={targetVideo} max-width="100%" max-height="100%" loop=""  id="videoo" controls={true} playsInline
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" type="video/mp4">
         
         </video>
        
         <div id = "overlay-desc" className="overlay-desc"/*{this.state.classNames}
            onAnimationEnd={this.onAnimationEnd}
            onAnimationStart={this.onAnimationStart}*/>
         <h2 >Meet the crazy-smart women we asked.</h2>
         </div>
    
         </div>
      

      <div class="test1" id = "test1">
         <h2 >Meettt the crazy-smart women we asked.</h2>
         </div>
         <div class="test2" >
         <h2 >Meetttt the crazy-smart women we asked.</h2>
         </div>
         <div class="test1" >
         <h2 >Meettt the crazy-smart women we asked.</h2>
         </div>
         <div class="test2" >
         <h2 >Meetttt the crazy-smart women we asked.</h2>
         </div>
         <div class="test1" >
         <h2>Meettt the crazy-smart women we asked.</h2>
         </div>
         <div class="test2" >
         <h2>Meetttt the crazy-smart women we asked.</h2>
         </div>
         <div class="test1" >
         <h2 >Meettt the crazy-smart women we asked.</h2>
         </div>
         <div class="test2" >
         <h2>Meetttt the crazy-smart women we asked.</h2>
         </div>
         </body>
    </div>
    
  );
}


