(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const c=()=>`
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
</section>`,d=()=>`
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
</section>`,p=()=>`
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
`,m=()=>`
<section class="landing-page">
    <h3>
      I am <span class="landing-page__strong">Berlin-based UX/UI designer</span>,
      focused on creating exclusive user experience through research and a deep
      understanding of user needs
    </h3>
    <div class="main-text">
      <h4>My case studies</h4>
      <img
        src="../../assets/arrow-down-bold.svg"
        alt="Arrow down"
        class="arrow"
      />
  </div>
  </section>
  ${c()}
  ${d()}
  ${p()}
 `,g=()=>`
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
`,u=()=>`
<div class="resume">
   <h1>Page in construction 🛠️</h1>
</div>
`,o={404:{template:"/components/404.html",title:"404",description:"Page not found"},"/":{template:m(),title:"NK - Home",description:"This is the home page"},about:{template:g(),title:"NK - About",description:"This is the about page"},resume:{template:u(),title:"NK - Resume",description:"This is the resume page"}},l=async()=>{var i=window.location.hash.replace("#","");i.length==0&&(i="/");const s=o[i]||o[404],n=s.template;document.getElementById("content").innerHTML=n,document.title=s.title,document.querySelector('meta[name="description"]').setAttribute("content",s.description)};window.addEventListener("hashchange",l);l();
