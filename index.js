import{S as c,N as u,P as d,A as h,i as g,a as f}from"./assets/vendor-D8buL3hb.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();new c(".about-us__swiper",{modules:[u,d],enabled:!1,slidesPerView:1,slidesPerGroup:1,spaceBetween:0,loop:!1,navigation:{nextEl:".about-us__button--next",prevEl:".about-us__button--prev"},pagination:{el:".about-us__pagination",clickable:!0},breakpoints:{768:{enabled:!0,slidesPerView:2,slidesPerGroup:1,spaceBetween:24},1440:{enabled:!0,slidesPerView:2,slidesPerGroup:1,spaceBetween:24}}});document.querySelector(".js-faq-accordion");new h(".js-faq-accordion",{elementClass:"js-faq-ac",triggerClass:"js-faq-ac-trigger",panelClass:"js-faq-ac-panel",duration:300,showMultiple:!1,openOnInit:[0]});const b={modules:[u,d],grabCursor:!0,spaceBetween:20,slidesPerView:1,breakpoints:{768:{slidesPerView:3,spaceBetween:24}},pagination:{el:".feedback-swiper-pagination",dynamicBullets:!0,clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},on:{async slideChange(s){const{realIndex:t,slides:{length:a}}=s;if(!(!(t+1>=a-2)||n>=p))try{n+=1;const{feedbacks:e}=await v(n,o);m(e),s.update()}catch(e){g.error({title:"Error",message:`Помилка отримання Фiдбекiв пiд час довантаження ${e}`}),console.log(`Помилка отримання Фiдбекiв пiд час довантаження ${e}`)}}}},w=()=>new c(".feedback-swiper",b);let n=1;const o=10;let p=null;const y=document.querySelector(".feedback-swiper-wrapper");document.addEventListener("DOMContentLoaded",E);async function E(){try{const{feedbacks:s,total:t}=await v(n,o);p=Math.ceil(t/o),m(s),w()}catch(s){g.error({title:"Error",message:`Помилка отримання Фiдбекiв пiд час ініціалізації ${s}`}),console.log(`Помилка отримання Фiдбекiв пiд час ініціалізації ${s}`)}}f.defaults.baseURL="https://deserts-store.b.goit.study/api/";const P={FEEDBACKS:"feedbacks"};async function v(s,t){return(await f(`${P.FEEDBACKS}?page=${s}&limit=${t}`)).data}function m(s){const t=s.map(({author:a,description:i,rate:e})=>{const r=$(e);return k(a,i,r)}).join("");y.insertAdjacentHTML("beforeend",t)}function k(s,t,a){return`<div class="feedback-swiper-slide swiper-slide">
      <div class="rating ${a}">
            <div class="star-container">
              <div class="star">
                <svg class="star-empty">
                  <use href="/img/icons.svg#star-empty"></use>
                </svg>
                <svg class="star-half">
                  <use href="/img/icons.svg#star-half"></use>
                </svg>
                <svg class="star-filled">
                  <use href="/img/icons.svg#star-filled"></use>
                </svg>
              </div>
              <div class="star">
                <svg class="star-empty">
                  <use href="/img/icons.svg#star-empty"></use>
                </svg>
                <svg class="star-half">
                  <use href="/img/icons.svg#star-half"></use>
                </svg>
                <svg class="star-filled">
                  <use href="/img/icons.svg#star-filled"></use>
                </svg>
              </div>
              <div class="star">
                <svg class="star-empty">
                  <use href="/img/icons.svg#star-empty"></use>
                </svg>
                <svg class="star-half">
                  <use href="/img/icons.svg#star-half"></use>
                </svg>
                <svg class="star-filled">
                  <use href="/img/icons.svg#star-filled"></use>
                </svg>
              </div>
              <div class="star">
                <svg class="star-empty">
                  <use href="/img/icons.svg#star-empty"></use>
                </svg>
                <svg class="star-half">
                  <use href="/img/icons.svg#star-half"></use>
                </svg>
                <svg class="star-filled">
                  <use href="/img/icons.svg#star-filled"></use>
                </svg>
              </div>
              <div class="star">
                <svg class="star-empty">
                  <use href="/img/icons.svg#star-empty"></use>
                </svg>
                <svg class="star-half">
                  <use href="/img/icons.svg#star-half"></use>
                </svg>
                <svg class="star-filled">
                  <use href="/img/icons.svg#star-filled"></use>
                </svg>
              </div>
            </div>
          </div>
          <p class="feedback-description">"${t}"</p>
          <p class="feedback-name">${s}</p></div>`}function $(s){return Number.isInteger(s)?`value-${s}`:`value-${Number.parseInt(s)} half`}
//# sourceMappingURL=index.js.map
