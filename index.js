import{S as c,N as u,P as g,A as m,a as d}from"./assets/vendor-BFwNxb1T.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=r(s);fetch(s.href,a)}})();new c(".about-us__swiper",{modules:[u,g],enabled:!1,slidesPerView:1,slidesPerGroup:1,spaceBetween:0,loop:!1,navigation:{nextEl:".about-us__button--next",prevEl:".about-us__button--prev"},pagination:{el:".about-us__pagination",clickable:!0},breakpoints:{768:{enabled:!0,slidesPerView:2,slidesPerGroup:1,spaceBetween:24},1440:{enabled:!0,slidesPerView:2,slidesPerGroup:1,spaceBetween:24}}});document.querySelector(".js-faq-accordion");new m(".js-faq-accordion",{elementClass:"js-faq-ac",triggerClass:"js-faq-ac-trigger",panelClass:"js-faq-ac-panel",duration:300,showMultiple:!1,openOnInit:[0]});const h={modules:[u,g],grabCursor:!0,slidesPerView:1,breakpoints:{375:{slidesPerView:1,spaceBetween:20},768:{slidesPerView:3,spaceBetween:30}},pagination:{el:".swiper-pagination",dynamicBullets:!0,clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},on:{async slideChange(e){const{realIndex:t,slides:{length:r}}=e;if(t+1>=r-2&&n<f){n+=1;const{feedbacks:i}=await p(n,o);v(i),e.update()}}}},b=()=>new c(".swiper",h);let n=1;const o=10;let f=null;const w=document.querySelector(".swiper-wrapper");document.addEventListener("DOMContentLoaded",y);async function y(){const{feedbacks:e,total:t}=await p(n,o);f=Math.ceil(t/o),v(e),b()}d.defaults.baseURL="https://deserts-store.b.goit.study/api/";const P={FEEDBACKS:"feedbacks"};async function p(e,t){return(await d(`${P.FEEDBACKS}?page=${e}&limit=${t}`)).data}function v(e){const t=e.map(({author:r,description:i,rate:s})=>{const a=k(s);return E(r,i,a)}).join("");w.insertAdjacentHTML("beforeend",t)}function E(e,t,r){return`<div class="swiper-slide">
      <div class="rating ${r}">
            <div class="star-container">
              <div class="star">
                <svg class="star-empty">
                  <use href="../img/star-rating.icons.svg#star-empty"></use>
                </svg>
                <svg class="star-half">
                  <use href="../img/star-rating.icons.svg#star-half"></use>
                </svg>
                <svg class="star-filled">
                  <use href="../img/star-rating.icons.svg#star-filled"></use>
                </svg>
              </div>
              <div class="star">
                <svg class="star-empty">
                  <use href="../img/star-rating.icons.svg#star-empty"></use>
                </svg>
                <svg class="star-half">
                  <use href="../img/star-rating.icons.svg#star-half"></use>
                </svg>
                <svg class="star-filled">
                  <use href="../img/star-rating.icons.svg#star-filled"></use>
                </svg>
              </div>
              <div class="star">
                <svg class="star-empty">
                  <use href="../img/star-rating.icons.svg#star-empty"></use>
                </svg>
                <svg class="star-half">
                  <use href="../img/star-rating.icons.svg#star-half"></use>
                </svg>
                <svg class="star-filled">
                  <use href="../img/star-rating.icons.svg#star-filled"></use>
                </svg>
              </div>
              <div class="star">
                <svg class="star-empty">
                  <use href="../img/star-rating.icons.svg#star-empty"></use>
                </svg>
                <svg class="star-half">
                  <use href="../img/star-rating.icons.svg#star-half"></use>
                </svg>
                <svg class="star-filled">
                  <use href="../img/star-rating.icons.svg#star-filled"></use>
                </svg>
              </div>
              <div class="star">
                <svg class="star-empty">
                  <use href="../img/star-rating.icons.svg#star-empty"></use>
                </svg>
                <svg class="star-half">
                  <use href="../img/star-rating.icons.svg#star-half"></use>
                </svg>
                <svg class="star-filled">
                  <use href="../img/star-rating.icons.svg#star-filled"></use>
                </svg>
              </div>
            </div>
          </div>
          <p class="feedback-description">"${t}"</p>
          <p class="feedback-name">${e}</p></div>`}function k(e){return Number.isInteger(e)?`value-${e}`:`value-${Number.parseInt(e)} half`}
//# sourceMappingURL=index.js.map
