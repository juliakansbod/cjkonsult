/* VISA MENY */

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId);
  
    if (toggle && nav) {
      toggle.addEventListener("click", () => {
        nav.classList.toggle("show");
      });
    }
  };
  showMenu("nav-toggle", "nav-menu"); /* Klasserna från index.html */
  
  /* AKTIV OCH TA BORT MENY */
  const navLink = document.querySelectorAll(".nav_link");
  
  function linkAction() {
    //Aktiv länk
    navLink.forEach((n) => n.classList.remove("active"));
    this.classList.add("active");
  
    //Ta bort menyn när man trycker på en länk
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show");
  }
  
  navLink.forEach((n) => n.addEventListener("click", linkAction));
  
  /* SCROLL REVEAL ANIMATION */
  
  const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
  });
  
  /* Scroll "Home" */
  sr.reveal(".start-text", {});
  sr.reveal(".slogan", { delay: 200 });
  sr.reveal(".home_img", { delay: 400 });
  sr.reveal(".home_social-icon", { interval: 200 });
  
  /* Scroll "About" */
  // sr.reveal(".about-text", {});
  sr.reveal(".about-img", { delay: 200 });
  // sr.reveal(".btn", { delay: 400 });
  sr.reveal(".service-text", { delay: 200 });

  
  /* Scroll "Skills" */
  sr.reveal(".review", {});
  sr.reveal(".testi-item", { interval: 200 });
  sr.reveal(".ratings", { interval: 200 });
  sr.reveal(".skills_img", { delay: 400 });

  sr.reveal(".contact", {});
  sr.reveal(".contact-item", { delay: 200});

  
 /* Header (navbar) "fastklistrad" när man scrollar ner och med färgbakgrund */
window.addEventListener("scroll", function(){
  if(this.pageYOffset > 60){
      document.querySelector(".header").classList.add("sticky"); 
  }
  else{
      document.querySelector(".header").classList.remove("sticky");
  }
});





//Smooth scroll när man hoppar från en html sida till en annan:

window.onload = () => {
  const transition_el = document.querySelector('.transition');
  const anchors = document.querySelectorAll('a');

  setTimeout(() => {
    transition_el.classList.remove('is-active');
  }, 0);

  // for (let i = 0; i < anchors.length; i++) {
  //   const anchor = anchors[i];
    
  //   anchor.addEventListener('click', e => {
  //     e.preventDefault();
  //     let target = e.target.href;

  //     transition_el.classList.add('is-active');

  //     setTimeout(() => {
  //       window.location.href = target;
  //     }, 0);
  //   });
  // }

}