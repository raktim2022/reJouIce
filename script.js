gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform
    ? "transform"
    : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


function cursoreffect() {
var cursor = document.querySelector("#cursor")
var page1_content = document.querySelector("#page1-content")

page1_content.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        duration: 0.7,
        ease:"back-out"
    })
})

page1_content.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
        opacity: 1,
        scale:1
    })
})
page1_content.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
        opacity: 0,
        scale:0
    })
})
}
function page2Text() {
    
gsap.to("#page2 #line hr", {
    x: 0,
    duration: 2,
    delay:2,
    opacity:1,
    scrollTrigger: {
        trigger: "#page2 #line",
        scroller: "#main",
        // markers: true,
        start: "top 85%",
        end: "top 40%",
        scrub:2,
    }
})
gsap.from("#page2_head p", {
    y: 120,
    duration: 2,
    stagger:0.3,
    scrollTrigger: {
        trigger: "#page2_head",
        scroller: "#main",
        start: "top 95%",
        end: "top 75%",
        scrub:2,
    }
})
gsap.from("#page2-p1", {
    y: 120,
    duration: 2,
    stagger:0.3,
    scrollTrigger: {
        trigger: "#p2_contain",
        scroller: "#main",
        // markers: true,
        start: "top 95%",
        end: "top 50%",
        scrub:2,
    }
})
gsap.from("#page2-p2", {
    y: 120,
    duration: 2,
    scrollTrigger: {
        trigger: "#p2_contain",
        scroller: "#main",
        // markers: true,
        start: "top 95%",
        end: "top 50%",
        scrub:2,
    }
})
}


function breakText() {
    var h1=document.querySelector("#page1-content h1")
    var h1Text = h1.textContent
    var splitedText = h1Text.split("")
    var clutter=""
    splitedText.forEach(function (e) {
        
            clutter +=`<span>${e}</span>`
    })
    h1.innerHTML=clutter
}


function page1Text() {
    gsap.from("#page1-content span", {
        y: 120,
        duration: 1,
        delay: 0.5,
        opacity:0,
        stagger:0.15,
    })
    gsap.from("#page1-content nav", {
        x: 100,
        duration: 1,
        delay: 0.5,
        stagger:0.15,
        opacity:0
    })
}

function page3Text() {
    document.querySelector("#contain p").addEventListener("mouseenter", function () {
    gsap.to("#contain hr", {
    y: -6,
    x: 900,
    duration: 0.7,
    width:"700px",
})
})
document.querySelector("#contain p").addEventListener("mouseleave", function () {
    gsap.to("#contain hr", {
        x: -100,
        duration: 0.5,
        width:"90px",
        
})
})
    gsap.from("#page3 p", {
    y: 120,
    duration: 2,
    stagger: 0.3,
    opacity:0,
    scrollTrigger: {
        trigger: "#page3",
        scroller: "#main",
        start: "top 55%",
        end: "top 45%",
        scrub:2,
    }
})
}

function page5Text() {
    
gsap.to("#page5 #line hr", {
    x: 0,
    duration: 2,
    delay:2,
    opacity:1,
    scrollTrigger: {
        trigger: "#page5 #line",
        scroller: "#main",
        // markers: true,
        start: "top 85%",
        end: "top 40%",
        scrub:2,
    }
})
gsap.from("#page5_head p", {
    y: 120,
    duration: 2,
    stagger:0.3,
    scrollTrigger: {
        trigger: "#page5_head",
        scroller: "#main",
        start: "top 95%",
        end: "top 75%",
        scrub:2,
    }
})
gsap.from("#page5-p1", {
    y: 120,
    duration: 2,
    stagger:0.3,
    scrollTrigger: {
        trigger: "#p5_contain",
        scroller: "#main",
        // markers: true,
        start: "top 95%",
        end: "top 50%",
        scrub:2,
    }
})
gsap.from("#page5-p5", {
    y: 120,
    duration: 2,
    scrollTrigger: {
        trigger: "#p5_contain",
        scroller: "#main",
        // markers: true,
        start: "top 95%",
        end: "top 50%",
        scrub:2,
    }
})
}
function page6Animation() {
var cursor = document.querySelector("#cursor6")
var page6 = document.querySelector("#page6")

page6.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        duration: 0.7,
        // ease:"back-out"
    })
})

page6.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
        opacity: 1,
        scale:1
    })
})
page6.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
        opacity: 0,
        scale:0
    })
})
}


function page7Text() {
    
gsap.to("#page7 #line hr", {
    x: 0,
    duration: 2,
    delay:2,
    opacity:1,
    scrollTrigger: {
        trigger: "#page7 #line",
        scroller: "#main",
        // markers: true,
        start: "top 85%",
        end: "top 40%",
        scrub:2,
    }
})
gsap.from("#page7_head p", {
    y: 120,
    duration: 2,
    stagger:0.3,
    scrollTrigger: {
        trigger: "#page7_head",
        scroller: "#main",
        start: "top 95%",
        end: "top 75%",
        scrub:2,
    }
})
gsap.from("#page7-p1", {
    y: 120,
    duration: 2,
    stagger:0.3,
    scrollTrigger: {
        trigger: "#p7_contain",
        scroller: "#main",
        // markers: true,
        start: "top 95%",
        end: "top 50%",
        scrub:2,
    }
})
gsap.from("#page7-p7", {
    y: 120,
    duration: 2,
    scrollTrigger: {
        trigger: "#p7_contain",
        scroller: "#main",
        // markers: true,
        start: "top 95%",
        end: "top 50%",
        scrub:2,
    }
})
}


function swiper() {
    var swiper = new Swiper(".mySwiper", {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: true,
          },
        });
}

function page9Text() {
    document.querySelector("#contain p").addEventListener("mouseenter", function () {
    gsap.to("#page9 #contain hr", {
    y: -6,
    x: 900,
    duration: 0.7,
    width:"700px",
})
})
document.querySelector("#contain p").addEventListener("mouseleave", function () {
    gsap.to("#page9 #contain hr", {
        x: -100,
        duration: 0.5,
        width:"90px",
        
})
})
    gsap.from("#page9 p", {
    y: 120,
    duration: 2,
    stagger: 0.3,
    opacity:0,
    scrollTrigger: {
        trigger: "#page9",
        scroller: "#main",
        start: "top 55%",
        end: "top 45%",
        scrub:2,
    }
})
}


function page10Text() {
    

    gsap.from("#page10", {
        y: -250,
        duration: 2.4,
        stagger:0.3,
        scrollTrigger: {
            trigger: "#page10 p",
            scroller: "#main",
            start: "top 94%",
            // end: "top 65%",
            scrub:2,
        }
    })
    
}

function loader() {
    
    var t1 = gsap.timeline();
    t1.from("#loader h3",{
            x: 40,
            opacity: 0,
            duration: 1,
            stagger:0.1
    })
    t1.to("#loader h3",{
            x: -40,
            opacity: 0,
            duration: 1, 
            stagger:0.1
    })
    t1.to("#loader",{
        opacity: 0,
    })
    t1.to("#loader",{
        display: "none",
    })
}


loader()
page10Text()
swiper()
page7Text()
page6Animation()
page5Text()
page3Text()
breakText()
page1Text()
page2Text()
cursoreffect()
page9Text()