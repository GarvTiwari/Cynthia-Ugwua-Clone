const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});
function firstpageAnim(){
  var tl = gsap.timeline();
  tl.from("#nav",{
    y:'-10',
    opacity:0,
    ease:Expo,
    duration:1.7,
    delay:1.4

  })  
  .to(".boundingelm",{
    y:0,
    delay:-2,
    duration:2,
    ease:Expo.easeInOut
  })
  .from(".herofooter",{

  })
}
var timefix;  
// jab mouse move ho ek position se dusre pe tab mouse japta ho jaye aur jab ruke tb circle bn jaye 

function circlefix(){
  var xscale = 1;
  var yscale = 1;
  var xprev  = 0;
  var yprev = 0;
window.addEventListener("mousemove",function(dets){
  clearTimeout(timefix);
var xdiff =  dets.clientX - xprev;
  var ydiff = dets.clientY-yprev;
  xprev = dets.clientX;
  yprev = dets.clientY;
  xscale =  gsap.utils.clamp(.8,1.2,xdiff);
  yscale =  gsap.utils.clamp(.8,1.2,ydiff); 
  circleMouseFollow(dets.clientX, dets.clientY, xscale, yscale);

  timefix =  setTimeout(function(){
    document.querySelector(".min-circle").style.transform = 
    `translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1)`;
  },100);

})}
circlefix(); 

function circleMouseFollow(x,y,xscale,yscale){
    window.addEventListener("mousemove",function(dets){
    // document.querySelector(".min-circle").style.transform = `translate${dets.clientX}px, ${dets.clientY}px`
 
    document.querySelector(".min-circle").style.transform = 
        `translate(${x}px, ${y}px) scale(${xscale}, ${yscale})`;

    // document.querySelector(".min-circle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale ${xscale}), ${yscale}`;
    })
}

circleMouseFollow();
firstpageAnim();


//  Image moveable 
//  sabse pahele sare elelment to select kro uske baad mai teno pe mousemove event ka use kre k x and y ki value ko pata kro x aur y ki value k sath mai image ko bi move krayo .

document.querySelectorAll('.elem').forEach(function  (elem){
  var rotate = 0;
  var diffrot = 0; 


  elem.addEventListener("mouseleave",function(){ 
    gsap.to(elem.querySelector('img'),{
      opacity:0,
      ease:Power3,
    })
  
  });



  elem.addEventListener("mousemove",function(dets){ 
    var diff = dets.clientY-elem.getBoundingClientRect().top;
    diffrot = dets.clientX -rotate;
    var leftPosition = dets.clientX - elem.getBoundingClientRect().left - 3 * window.innerWidth / 100;
    rotate = dets.clientX;
    gsap.to(elem.querySelector('img'),{
      opacity:1,
      ease:Power3,
      top:diff,
      left:leftPosition,
      rotate:gsap.utils.clamp(-20,20,diffrot * 0.13),
    
    })
  
  });

})





 



