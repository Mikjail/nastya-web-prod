(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();const l=()=>`
    <div class="navbar">
    <div class="logo">
      <a href="your-homepage-url">
        <img src="assets/logo.png" alt="Your Logo" />
      </a>
    </div>
    <div class="middle">
      <a class="nav-link" href="#">Home</a>
      <a class="nav-link" href="#about">About</a>
      <a class="nav-link" href="#resume">Resume</a>
    </div>
    <div class="right">
      <a class="primary-btn nav-link" href="#contact">Contact</a>
    </div>
  </div>`;document.getElementById("nav").innerHTML=l();const d=()=>`
  <div class="footer-content">
    <p class="footer-text">
      Get in touch with me at <strong>anastasiiakiias@gmail.com</strong>
    </p>
    <div class="footer-icons">
  <a href="https://www.linkedin.com/in/anastasiiakiias/" target="_blank">
    <img src="assets/linkedin.svg" alt="LinkedIn Icon" class="icon" />
  </a>
  <a href="https://www.behance.net/anastasiiakiias" target="_blank">
    <img src="assets/behance.svg" alt="Behance Icon" class="icon" />
  </a>
  <a href="https://www.instagram.com/anastasiiakiias/" target="_blank">
    <img src="assets/instagram.svg" alt="Instagram Icon" class="icon" />
  </a>
</div>
  </div>
`;document.getElementById("footer").innerHTML=d();document.getElementById("nav").innerHTML=l();document.getElementById("footer").innerHTML=d();window.onload=function(){const i=document.querySelectorAll(".nav-link"),t=window.location.hash;r(i,t),window.addEventListener("hashchange",function(){const n=window.location.hash;r(i,n)})};const r=(i,t)=>{i.forEach(function(n){n.getAttribute("href")===t?n.classList.add("active"):n.classList.remove("active")}),t===""&&i[0].classList.add("active")},g=()=>`
<section class="mind-me case-study">
  <img src="assets/mind-me.svg" alt="" class="mind-me__img"/>
  <div class="mind-me__right">
    <h1 class="mind-me__title main-title">MindMe</h1>
    <h2 class="mind-me__subtitle subtitle">Mental Health Support App</h2>
    <p class="mind-me__description">
      A mobile app designed to provide comprehensive mental health support for
      individuals and help them navigate and overcome different mental health
      issues effectively
    </p>
    <p class="mind-me__tags">UX Research | UI Design | Testing</p>
  </div>
</section>`,p=()=>`
<section class="beanfesto case-study">
    <div class="beanfesto__left">
        <h1 class="beanfesto__title main-title">Beanfesto</h1>
        <h2 class="beanfesto__subtitle subtitle">E - Commerce App</h2>
        <p class="beanfesto__description">
            A coffee product app designed for coffee lovers who 
            seek an effortless way to explore a diverse selection of coffee
            products while making sustainable and informed purchasing decisions
        </p>
        <p class="beanfesto__tags">
            UX Research | UI Design
        </p>
    </div>
    <img class="beanfesto__img" src="assets/beanfesto.svg" alt="">
</section>`,h=()=>`
<section class="i-travel case-study">
  <img src="assets/i-travel.svg" alt="" class="i-travel__img"/>
  <div class="i-travel__right">
    <h1 class="i-travel__title main-title">ITravel</h1>
    <h2 class="i-travel__subtitle subtitle">Travel Planner App</h2>
    <p class="i-travel__description">
        A mobile app that helps users plan their trips and activities with seamless
        integration, personalized recommendations, and streamlined itinerary management,
        making it enjoyable and efficient
    </p>
    <p class="i-travel__tags">UX Research | UI Design</p>
  </div>
</section>
`,u=()=>`
<section class="landing-page">
    <h3>
      I am <span class="landing-page__strong">Berlin-based UX/UI designer</span>,
      focused on creating exclusive user experience through research and a deep
      understanding of user needs
    </h3>
    <div class="main-text">
      <h4>My case studies</h4>
      <img
        src="assets/arrow-down-bold.svg"
        alt="Arrow down"
        class="arrow"
      />
  </div>
  </section>
  ${g()}
  ${p()}
  ${h()}
 `,f=()=>`
<div>
  <div class="container">
    <div class="image-container">
      <img src="assets/me.jpg" alt="portrait of Anastasiia Kiias" />
    </div>
    <div class="text-container">
      <h3>Hey there!</h3>
      <p class="regular-text">
        I'm Anastasiia,
        <strong>a UX/UI designer living in Berlin</strong>. My journey into
        design began with a twist — I used to be a flight attendant! Through my
        travels and interactions, I discovered a love for understanding people's
        needs and making their experiences better.
      </p>
      <p class="regular-text">
        I believe in the power of
        <strong>simplicity and practicality</strong>, and I'm passionate about
        blending these elements tocreate designs that are both
        <strong>user-focused and visually appealing</strong>. I also believe
        that good design should be <strong>accessible to everyone</strong>, no
        matter their background or preferences.
      </p>
      <p class="regular-text">
        I like to find inspiration in everyday life, whether it's through new
        experiences, trying different cuisines or exploring new destinations.
        I'm excited to be a part of the ever-evolving design world and to bring
        my unique perspective to
        <strong>creating meaningful digital experiences</strong>.
      </p>
    </div>
  </div>
</div>
`,v=()=>`
<div class="resume">
   <h1>Page in construction 🛠️</h1>
</div>
`,c={404:{template:"/components/404.html",title:"404",description:"Page not found"},"/":{template:u(),title:"NK - Home",description:"This is the home page"},about:{template:f(),title:"NK - About",description:"This is the about page"},resume:{template:v(),title:"NK - Resume",description:"This is the resume page"}},m=async()=>{var i=window.location.hash.replace("#","");i.length==0&&(i="/");const t=c[i]||c[404],n=t.template;document.getElementById("content").innerHTML=n,document.title=t.title,document.querySelector('meta[name="description"]').setAttribute("content",t.description)};window.addEventListener("hashchange",m);m();
