import { useEffect } from "react";



export const useIntersectionObserver = ({
  root,
  target,
  onIntersect,
  isIntersecting,
  threshold = 0.3,
  rootMargin = "0px"
}) => {
 
  useEffect(() => {
    if (!root) {
      console.warn(
        `No "root" specified for Intersection Observer.

useIntersectionObserver needs to be called with an initial configuration,
where you'd pass in a "root" value (a React Ref using the useRef hook)
to an element that contains a child that would intersect with it: a 
container that's aware of its children.

Please add a root option and try again.

More info: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Creating_an_intersection_observer`
      );
      return;
    }
    /*const element = root.current;
    const tar = element.querySelector('video');
      const observer = new IntersectionObserver((entries) => {
        
          //updateMyElementIsVisible(root.isIntersecting);
          entries.forEach(entry => {
            if (!entry.isIntersecting) {
              target.current.pause();
              playState = false;
            } else {
              target.current.play();
              playState = true;
            }
          });
          
        
      }, {});
      const onVisibilityChange = () => {
        if (root.hidden || !playState) {
          target.pause();
        } else {
          target.play();
        }
      };
      
    //root.addEventListener("visibilitychange", onVisibilityChange);
    

    if (!target) {
      console.warn(
        `No target specified for Intersection Observer.

useIntersectionObserver needs to be called with an initial configuration,
where you'd pass in a "target" value (a React Ref using the useRef hook) that
represents an element that is contained inside a root element that will be
tracked.

Please add a target option and try again.

More info: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Creating_an_intersection_observer`
      );
      return;
    }

    observer.observe(target.current);

    // Let's clean up after ourselves.
    return () => {
      observer.unobserve(root.current);
    };*/

    let options = {
      root: null,
      rootMargin: '0px',
      threshold: [0.2, 0.5,1],
    
  };
  let prev =0;
  function disableScroll(entry) {
    // Get the current page scroll position
    let scrollTop = 
      window.pageYOffset || document.documentElement.scrollTop;
    let scrollLeft = 
      window.pageXOffset || document.documentElement.scrollLeft;

        // if any scroll is attempted,
        // set this to the previous value
        window.onscroll = function() {
          //window.scrollTo(scrollLeft, scrollTop);
          //entry.target.scrollIntoView();
          //entry.target.style.transform='translateY(${entry.target.getBoundingClientRect().top}px)';
        };
}

  let callback = (entries, observer) => {
      entries.forEach(entry => {
          
              if (entry.isIntersecting) {
                  entry.target.play(); 
              }
              else {
                  entry.target.pause();   
              }
                console.log(entry.intersectionRatio);
                console.log(entry.isIntersecting);
                
                if(entry.intersectionRatio >= 0.7 && entry.intersectionRatio>prev){
                  /*
                  entry.target.position = "absolute";*/
                  console.log(window.pageYOffset);
                  entry.target.width = typeof window !== 'undefined' ? (window.innerWidth+100) : null;
                    entry.target.height =typeof window !== 'undefined' ? window.innerHeight : null;
                    document.getElementById("overlay-desc").style.display = "flex";
                    document.getElementById("overlay-desc").className+= " animation";
                  //document.getElementById("video-container").style.position = "fixed";
                  //document.getElementById("videoo").style.position = "relative";
                  //document.getElementById("overlay-desc").style.position = "absolute";
                  
                  entry.target.top = 0;
                  entry.target.bottom = 0;
                  entry.target.right = 0;
                  entry.target.left = 0;
                  
                  disableScroll(entry);
                }else if(entry.intersectionRatio > 0.4 && entry.intersectionRatio>prev){
                  entry.target.width = "720";
                  entry.target.height = "500";
                }
                else if(entry.intersectionRatio < 0.3){
                  entry.target.width = "520";
                  entry.target.height = "300";
                }
               
                
             
                prev = entry.intersectionRatio;
            
        
          
  
      });
  }
  
  let observer = new IntersectionObserver(callback, options);
  const videos = document.querySelectorAll("video");
  
  videos.forEach(vide => {
      observer.observe(vide);
  });
  
  
  });
};
