(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(e){if(e.ep)return;e.ep=!0;const a=i(e);fetch(e.href,a)}})();const d=()=>`
    <div class="navbar">
    <div class="logo">
      <a href="/">
        <img src="assets/logo.png" alt="Your Logo" />
      </a>
    </div>
    <div class="middle">
      <a class="nav-link" href="">Home</a>
      <a class="nav-link" href="#about">About</a>
      <a class="nav-link" href="#resume">Resume</a>
    </div>
    <div class="right">
      <a class="primary-btn nav-link" href="#contact">Contact</a>
    </div>
  </div>`;document.getElementById("nav").innerHTML=d();const m=()=>`
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
`;document.getElementById("footer").innerHTML=m();document.getElementById("nav").innerHTML=d();document.getElementById("footer").innerHTML=m();window.onload=function(){const s=document.querySelectorAll(".nav-link"),t=window.location.hash;c(s,t),window.addEventListener("hashchange",function(){const i=window.location.hash;c(s,i)})};const c=(s,t)=>{s.forEach(function(i){i.getAttribute("href")===t?i.classList.add("active"):i.classList.remove("active")}),t===""&&s[0].classList.add("active")},o=({text:s,href:t,variant:i,className:n})=>`
        <a class="custom-btn ${n} ${i}" href="${t}">${s}</a>
    `,h=()=>`
<section class="mind-me case-study xl">
  <img src="assets/mind-me.svg" alt="" class="mind-me__img"/>
  <div class="mind-me__right">
    <h1 class="mind-me__title main-title">MindMe</h1>
    <h2 class="mind-me__subtitle subtitle">Mental Health Support App</h2>
    <p class="mind-me__description">
      A mobile app designed to provide comprehensive mental health support for
      individuals and help them navigate and overcome different mental health
      issues effectively.
    </p>
    <p class="mind-me__tags">UX Research | UI Design | Testing</p>
    ${o({text:"View",href:"#mind-me",variant:"secondary"})}
  </div>
</section>
`,g=()=>`
<section class="beanifesto case-study xl">
    <div class="beanifesto__left">
        <h1 class="beanifesto__title main-title">Beanifesto</h1>
        <h2 class="beanifesto__subtitle subtitle">E - Commerce App</h2>
        <p class="beanifesto__description">
            A coffee product app designed for coffee lovers who 
            seek an effortless way to explore a diverse selection of coffee
            products while making sustainable and informed purchasing decisions.
        </p>
        <p class="beanifesto__tags">
            UX Research | UI Design
        </p>
        ${o({text:"View",href:"/",variant:"secondary"})}
    </div>
    <img class="beanifesto__img" src="assets/beanifesto.svg" alt="">
</section>`,u=()=>`
<section class="i-travel case-study xl">
  <img src="assets/i-travel.svg" alt="" class="i-travel__img"/>
  <div class="i-travel__right">
    <h1 class="i-travel__title main-title">ITravel</h1>
    <h2 class="i-travel__subtitle subtitle">Travel Planner App</h2>
    <p class="i-travel__description">
        A mobile app that helps users plan their trips and activities with seamless
        integration, personalized recommendations, and itinerary management,
        making it enjoyable and efficient.
    </p>
    <p class="i-travel__tags">UX Research | UI Design</p>
    ${o({text:"View",href:"/",variant:"secondary"})}
  </div>
</section>
`,v=()=>`
<div class="contact-form">
  <h1>Let's get in touch!</h1>
  <form  method="post">
    <div class="input-group">
        <input type="text" id="name" name="name" placeholder="Name" required />
        <input type="email" id="email" name="email" placeholder="Email address" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$" required />
    </div>
    
    <textarea id="message" name="message" placeholder="Your message here..." required></textarea>
    
    <input class="contact-form__button" type="submit" value="Send">
  </form>
</div>
`,f=()=>`
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
  ${h()}
  ${g()}
  ${u()}
  ${v()}
 `,_=()=>`
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
`,b=()=>`
<div class="resume">
   <h1>Page in construction 🛠️</h1>
</div>
`,y=()=>`
<section class="mind-me-case xl">
    <img class="mind-me-case__img" src="assets/mindMeCase.svg" alt="">
    <div class="mind-me-case__right">
        <h1 class="mind-me-case__title main-title">MindMe</h1>
        <p class="mind-me-case__description">
        MindMe is a mobile app designed to provide comprehensive mental 
        health support for individuals and help them navigate and overcome 
        different mental health issues effectively
        </p>
        ${o({text:"PROTOTYPE",href:"/",variant:"case1-green",className:"mind-me-case__btn"})}
    </div>
</section>
<section class="mind-me-case__section2 xl">
    <div class="mind-me-case__process">
      <h1>PROCESS</h1>
      <p>
        In the project's initial stages, I conducted comprehensive user research, 
        identifying pain points in accessing mental health support. I also iteratively 
        designed and refined the app's user interface, focusing on a responsive and 
        user-centric design.
      </p>
    </div>
    <div class="mind-me-case__role-timeline">
      <div class="mind-me-case__role">
        <h1>ROLE</h1>
        <p>Solo designer: User research, IA, user flow, persona, wireframing, prototyping</p>
      </div>
      <div class="mind-me-case__timeline">
        <h1>Timeline</h1>
        <p><strong>4 weeks</strong></p>
        <p>August 2023 to September 2023</p>
      </div>
    </div>
    <div class="mind-me-case__problem">
        <h1>PROBLEM</h1>
        <h4> Getting help for your mental health shouldn't be so hard.</h4>
        <p>
       
Life can be tough, and many people struggle with things like stress, anxiety, or feeling down. It's great to have apps that can help, but some make it really complicated. You spend a lot of time filling out forms, answering a lot of questions and then before you even get to see who can help you, they ask for money. And it's not just a little money; it can be really expensive. This makes it tough for people to get the help they need when they need it. 
        </p>
    </div>
    <div class="mind-me-case__solution">

    </div>
  <div>

  
</section>
`,l={404:{template:"/components/404.html",title:"404",description:"Page not found"},"/":{template:f(),title:"NK - Home",description:"This is the home page"},about:{template:_(),title:"NK - About",description:"This is the about page"},resume:{template:b(),title:"NK - Resume",description:"This is the resume page"},"mind-me":{template:y(),title:"NK - Resume",description:"MindMe - Case Study"}},p=async()=>{var s=window.location.hash.replace("#","");s.length==0&&(s="/");const t=l[s]||l[404],i=t.template;document.getElementById("content").innerHTML=i,document.title=t.title,document.querySelector('meta[name="description"]').setAttribute("content",t.description)};window.addEventListener("hashchange",p);p();
