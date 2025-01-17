$(document).ready(function() {	

    var id = '#dialog';
  
    //Get the screen height and width
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();
  
    //Set heigth and width to mask to fill up the whole screen
    $('#mask').css({'width':maskWidth,'height':maskHeight});
    
    //transition effect		
    $('#mask').fadeIn(500);	
    $('#mask').fadeTo("slow",0.9);	
  
    //Get the window height and width
    var winH = $(window).height();
    var winW = $(window).width();
              
    //Set the popup window to center
    $(id).css('top',  winH/2-$(id).height()/2);
    $(id).css('left', winW/2-$(id).width()/2);
  
    //transition effect
    $(id).fadeIn(2000); 	
  
  //if close button is clicked
  $('.window .close').click(function (e) {
    //Cancel the link behavior
    e.preventDefault();
    
    $('#mask').hide();
    $('.window').hide();
  });		
  
  //if mask is clicked
  $('#mask').click(function () {
    $(this).hide();
    $('.window').hide();
  });		
  
  });
  
  document.querySelectorAll('.play-pause-button').forEach(button => {
    button.addEventListener('click', e => {
        if(button.classList.contains('playing')) {
            button.classList.remove('paused', 'playing');
            button.classList.add('paused');
        } else {
            if(button.classList.contains('paused')) {
                button.classList.add('playing');
            }
        }
        if(!button.classList.contains('paused')) {
            button.classList.add('paused');
        }
    });
  });


  window.onscroll = function () {
    scrollRotate();
    scrollRotate2();
    scrollRotate3();
    scrollRotate4();
    scrollRotate5();
};


function scrollRotate() {
    let image = document.getElementById("reload");
    image.style.transform = "scale(2,1)";
}

// window.onscroll = function () {
//   scrollRotate();
// };

function scrollRotate2() {
  let image = document.getElementById("reload2");
  image.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";
}

function scrollRotate3() {
  let image = document.getElementById("reload3");
  image.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";
}

function scrollRotate4() {
  let image = document.getElementById("reload4");
  image.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";
}

function scrollRotate5() {
  let image = document.getElementById("reload5");
  image.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";
}



gsap.registerPlugin(MotionPathPlugin);

// The start and end positions in terms of the page scroll
const offsetFromTop = innerHeight * 0.25;
const pathBB = document.querySelector("#path").getBoundingClientRect();
const startY = pathBB.top - innerHeight + offsetFromTop;
const finishDistance = startY + pathBB.height - offsetFromTop;

// the animation to use
var tween = gsap.to("#rec", {
  duration: 5, 
  paused: true,
  ease: "none",
  motionPath: {
    path: "#path",
    align: "#path",
    autoRotate: true,
    alignOrigin: [0.5, 0.5]
  }
}).pause(0.001);

// Listen to the scroll event
document.addEventListener("scroll", function() {
  // Prevent the update from happening too often (throttle the scroll event)
  if (!requestId) {
    requestId = requestAnimationFrame(update);
  }
});

update();

function update() {
  // Update our animation
  tween.progress((scrollY - startY) / finishDistance);
  
  // Let the scroll event fire again
  requestId = null;
}