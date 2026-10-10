import{S as u,N as d,P as f,A as b,i as p,a as g}from"./assets/vendor-D8buL3hb.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(e){if(e.ep)return;e.ep=!0;const a=i(e);fetch(e.href,a)}})();new u(".about-us__swiper",{modules:[d,f],enabled:!1,slidesPerView:1,slidesPerGroup:1,spaceBetween:0,loop:!1,navigation:{nextEl:".about-us__button--next",prevEl:".about-us__button--prev"},pagination:{el:".about-us__pagination",clickable:!0},breakpoints:{768:{enabled:!0,slidesPerView:2,slidesPerGroup:1,spaceBetween:24},1440:{enabled:!0,slidesPerView:2,slidesPerGroup:1,spaceBetween:24}}});document.querySelector(".js-faq-accordion");new b(".js-faq-accordion",{elementClass:"js-faq-ac",triggerClass:"js-faq-ac-trigger",panelClass:"js-faq-ac-panel",duration:300,showMultiple:!1,openOnInit:[0]});const t="/SweetCraft/assets/icons-0lH9uKN_.svg",w={modules:[d,f],grabCursor:!0,spaceBetween:20,slidesPerView:1,breakpoints:{768:{slidesPerView:3,spaceBetween:24}},pagination:{el:".feedback-swiper-pagination",dynamicBullets:!0,clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},on:{async slideChange(s){const{realIndex:r,slides:{length:i}}=s;if(!(!(r+1>=i-2)||n>=v))try{n+=1;const{feedbacks:e}=await m(n,c);h(e),s.update()}catch(e){p.error({title:"Error",message:`Помилка отримання Фiдбекiв пiд час довантаження ${e}`}),console.log(`Помилка отримання Фiдбекiв пiд час довантаження ${e}`)}}}},y=()=>new u(".feedback-swiper",w);let n=1;const c=10;let v=null;const $=document.querySelector(".feedback-swiper-wrapper");document.addEventListener("DOMContentLoaded",E);async function E(){try{const{feedbacks:s,total:r}=await m(n,c);v=Math.ceil(r/c),h(s),y()}catch(s){p.error({title:"Error",message:`Помилка отримання Фiдбекiв пiд час ініціалізації ${s}`}),console.log(`Помилка отримання Фiдбекiв пiд час ініціалізації ${s}`)}}g.defaults.baseURL="https://deserts-store.b.goit.study/api/";const P={FEEDBACKS:"feedbacks"};async function m(s,r){return(await g(`${P.FEEDBACKS}?page=${s}&limit=${r}`)).data}function h(s){const r=s.map(({author:i,description:l,rate:e})=>{const a=C(e);return k(i,l,a)}).join("");$.insertAdjacentHTML("beforeend",r)}function k(s,r,i){return`<div class="feedback-swiper-slide swiper-slide">
      <div class="rating ${i}">
            <div class="star-container">
              <div class="star">
                <svg class="star-empty">
                  <use href="${t}#star-empty"></use>
                </svg>
                <svg class="star-half">
                  <use href="${t}#star-half"></use>
                </svg>
                <svg class="star-filled">
                  <use href="${t}#star-filled"></use>
                </svg>
              </div>
              <div class="star">
                <svg class="star-empty">
                  <use href="${t}#star-empty"></use>
                </svg>
                <svg class="star-half">
                  <use href="${t}#star-half"></use>
                </svg>
                <svg class="star-filled">
                  <use href="${t}#star-filled"></use>
                </svg>
              </div>
              <div class="star">
                <svg class="star-empty">
                  <use href="${t}#star-empty"></use>
                </svg>
                <svg class="star-half">
                  <use href="${t}#star-half"></use>
                </svg>
                <svg class="star-filled">
                  <use href="${t}#star-filled"></use>
                </svg>
              </div>
              <div class="star">
                <svg class="star-empty">
                  <use href="${t}#star-empty"></use>
                </svg>
                <svg class="star-half">
                  <use href="${t}#star-half"></use>
                </svg>
                <svg class="star-filled">
                  <use href="${t}#star-filled"></use>
                </svg>
              </div>
              <div class="star">
                <svg class="star-empty">
                  <use href="${t}#star-empty"></use>
                </svg>
                <svg class="star-half">
                  <use href="${t}#star-half"></use>
                </svg>
                <svg class="star-filled">
                  <use href="${t}#star-filled"></use>
                </svg>
              </div>
            </div>
          </div>
          <p class="feedback-description">"${r}"</p>
          <p class="feedback-name">${s}</p></div>`}function C(s){return Number.isInteger(s)?`value-${s}`:`value-${Number.parseInt(s)} half`}
//# sourceMappingURL=index.js.map
