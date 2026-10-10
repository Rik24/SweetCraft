import{a as p,i as d,S as O,N as R,P as T,A as Y}from"./assets/vendor-CXnjcTlo.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function r(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(t){if(t.ep)return;t.ep=!0;const a=r(t);fetch(t.href,a)}})();const x="https://deserts-store.b.goit.study/api",F=8,v=document.querySelector(".category-list"),S=document.querySelector(".dessert-list"),u=document.querySelector(".load-more-btn"),j=document.querySelector(".loader");let c=1,m="select-all";async function Q(){return(await p.get(`${x}/categories`)).data}async function k(e,s){const r={page:e,limit:F};return s!=="select-all"&&(r.category=s),(await p.get(`${x}/desserts`,{params:r})).data}function X(e){const s=e.map(r=>`<li>
        <button type="button" class="category-select-btn" data-id="${r._id}">${r.name}</button></li>`).join("");v.insertAdjacentHTML("beforeend",s)}function q(e){return e.map(s=>`<li class="dessert-item">
        <img class="dessert-img" src="${s.image}" alt="${s.name}" loading="lazy" />
        <p class="dessert-category">${s.category.name}</p>
        <h3 class="dessert-name">${s.name}</h3>
        <p class="dessert-text">${s.description}</p>
        <div class="dessert-bottom">
          <p class="dessert-price">${s.price} грн</p>
          <button type="button" class="dessert-btn" data-id="${s._id}" aria-label="Детальніше про ${s.name}">
            <svg class="dessert-btn-icon" width="24" height="24">
              <use href="/img/icons.svg#arrow_outwardicon"></use>
            </svg>
          </button>
        </div>
      </li>`).join("")}function D(e){c*F<e?u.classList.add("is-visible"):u.classList.remove("is-visible")}function C(){d.error({message:"Не вдалося завантажити десерти. Спробуйте пізніше.",position:"topRight"})}function M(){j.classList.add("is-visible")}function I(){j.classList.remove("is-visible")}async function Z(){M();try{const e=await Q();X(e);const s=await k(c,m);S.innerHTML=q(s.desserts),D(s.totalItems)}catch{C()}finally{I()}}Z();const y=document.querySelector(".category-wrap"),ee=document.querySelector(".category-toggle");ee.addEventListener("click",()=>y.classList.toggle("is-open"));const L=document.querySelector(".current-category");L.textContent=v.querySelector(".is-active").textContent.trim();v.addEventListener("click",async e=>{const s=e.target.closest(".category-select-btn");if(!s)return;const r=v.querySelector(".is-active"),o=m,t=c,a=u.classList.contains("is-visible");r.classList.remove("is-active"),s.classList.add("is-active"),L.textContent=s.textContent.trim(),y.classList.remove("is-open"),c=1,m=s.dataset.id,M(),u.classList.remove("is-visible");try{const l=await k(c,m);S.innerHTML=q(l.desserts),D(l.totalItems)}catch{s.classList.remove("is-active"),r.classList.add("is-active"),L.textContent=r.textContent.trim(),m=o,c=t,a&&u.classList.add("is-visible"),C()}finally{I()}});document.addEventListener("click",e=>{y.contains(e.target)||y.classList.remove("is-open")});u.addEventListener("click",async()=>{c+=1,M(),u.classList.remove("is-visible");try{const e=await k(c,m);S.insertAdjacentHTML("beforeend",q(e.desserts)),D(e.totalItems)}catch{C()}finally{I()}});new O(".about-us__swiper",{modules:[R,T],enabled:!1,slidesPerView:1,slidesPerGroup:1,spaceBetween:0,loop:!1,navigation:{nextEl:".about-us__button--next",prevEl:".about-us__button--prev"},pagination:{el:".about-us__pagination",clickable:!0},breakpoints:{768:{enabled:!0,slidesPerView:2,slidesPerGroup:1,spaceBetween:24},1440:{enabled:!0,slidesPerView:2,slidesPerGroup:1,spaceBetween:24}}});document.querySelector(".js-faq-accordion");new Y(".js-faq-accordion",{elementClass:"js-faq-ac",triggerClass:"js-faq-ac-trigger",panelClass:"js-faq-ac-panel",duration:300,showMultiple:!1,openOnInit:[0]});const i="/SweetCraft/assets/icons-0lH9uKN_.svg",se={modules:[R,T],grabCursor:!0,spaceBetween:20,slidesPerView:1,breakpoints:{768:{slidesPerView:3,spaceBetween:24}},pagination:{el:".feedback-swiper-pagination",dynamicBullets:!0,clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},on:{async slideChange(e){const{realIndex:s,slides:{length:r}}=e;if(!(!(s+1>=r-2)||g>=H))try{g+=1;const{feedbacks:t}=await K(g,$);V(t),e.update()}catch(t){d.error({title:"Error",message:`Помилка отримання Фiдбекiв пiд час довантаження ${t}`}),console.log(`Помилка отримання Фiдбекiв пiд час довантаження ${t}`)}}}},te=()=>new O(".feedback-swiper",se);let g=1;const $=10;let H=null;const re=document.querySelector(".feedback-swiper-wrapper");document.addEventListener("DOMContentLoaded",ae);async function ae(){try{const{feedbacks:e,total:s}=await K(g,$);H=Math.ceil(s/$),V(e),te()}catch(e){d.error({title:"Error",message:`Помилка отримання Фiдбекiв пiд час ініціалізації ${e}`}),console.log(`Помилка отримання Фiдбекiв пiд час ініціалізації ${e}`)}}p.defaults.baseURL="https://deserts-store.b.goit.study/api/";const ie={FEEDBACKS:"feedbacks"};async function K(e,s){return(await p(`${ie.FEEDBACKS}?page=${e}&limit=${s}`)).data}function V(e){const s=e.map(({author:r,description:o,rate:t})=>{const a=oe(t);return ne(r,o,a)}).join("");re.insertAdjacentHTML("beforeend",s)}function ne(e,s,r){return`<div class="feedback-swiper-slide swiper-slide">
      <div class="rating ${r}">
            <div class="star-container">
              <div class="star">
                <svg class="star-empty">
                  <use href="${i}#star-empty"></use>
                </svg>
                <svg class="star-half">
                  <use href="${i}#star-half"></use>
                </svg>
                <svg class="star-filled">
                  <use href="${i}#star-filled"></use>
                </svg>
              </div>
              <div class="star">
                <svg class="star-empty">
                  <use href="${i}#star-empty"></use>
                </svg>
                <svg class="star-half">
                  <use href="${i}#star-half"></use>
                </svg>
                <svg class="star-filled">
                  <use href="${i}#star-filled"></use>
                </svg>
              </div>
              <div class="star">
                <svg class="star-empty">
                  <use href="${i}#star-empty"></use>
                </svg>
                <svg class="star-half">
                  <use href="${i}#star-half"></use>
                </svg>
                <svg class="star-filled">
                  <use href="${i}#star-filled"></use>
                </svg>
              </div>
              <div class="star">
                <svg class="star-empty">
                  <use href="${i}#star-empty"></use>
                </svg>
                <svg class="star-half">
                  <use href="${i}#star-half"></use>
                </svg>
                <svg class="star-filled">
                  <use href="${i}#star-filled"></use>
                </svg>
              </div>
              <div class="star">
                <svg class="star-empty">
                  <use href="${i}#star-empty"></use>
                </svg>
                <svg class="star-half">
                  <use href="${i}#star-half"></use>
                </svg>
                <svg class="star-filled">
                  <use href="${i}#star-filled"></use>
                </svg>
              </div>
            </div>
          </div>
          <p class="feedback-description">"${s}"</p>
          <p class="feedback-name">${e}</p></div>`}function oe(e){return Number.isInteger(e)?`value-${e}`:`value-${Number.parseInt(e)} half`}const ce="https://deserts-store.b.goit.study/api",b="order-form-data",B=document.querySelector(".order-modal-backdrop"),le=document.querySelector(".order-close-btn"),n=document.querySelector(".order-form"),_=document.querySelector(".order-submit-btn"),A=document.querySelector(".order-loader");let U=null,w=null;function de(){const e={name:n.elements.name.value,phone:n.elements.phone.value,comment:n.elements.comment.value};localStorage.setItem(b,JSON.stringify(e))}function ue(){const e=localStorage.getItem(b);if(e)try{const s=JSON.parse(e);n.elements.name.value=s.name||"",n.elements.phone.value=s.phone||"",n.elements.comment.value=s.comment||""}catch{localStorage.removeItem(b)}}function z(e){e.key==="Escape"&&h()}function me(e,s){U=e,w=s,ue(),B.classList.add("is-modal-open"),document.addEventListener("keydown",z)}function h(e=!0){B.classList.remove("is-modal-open"),document.removeEventListener("keydown",z),e&&w&&w()}n.addEventListener("input",de);le.addEventListener("click",()=>h());B.addEventListener("click",e=>{e.target===e.currentTarget&&h()});n.addEventListener("submit",async e=>{e.preventDefault();const s=n.elements.phone.value.replaceAll(" ","");if(s.length!==12){d.warning({message:"Телефон має містити 12 цифр, наприклад 380961234568.",position:"topRight"});return}const r={name:n.elements.name.value.trim(),phone:s,comment:n.elements.comment.value.trim(),dessertId:U};A.classList.add("is-visible"),_.disabled=!0;try{const o=await p.post(`${ce}/orders`,r);d.success({message:`Дякуємо! Замовлення ${o.data.orderNum} прийнято, ми скоро зв'яжемось з вами.`,position:"topRight"}),n.reset(),localStorage.removeItem(b),h(!1)}catch{d.error({message:"Не вдалося надіслати замовлення. Перевірте дані й спробуйте ще раз.",position:"topRight"})}finally{A.classList.remove("is-visible"),_.disabled=!1}});const pe="https://deserts-store.b.goit.study/api",fe=document.querySelector(".dessert-list"),P=document.querySelector(".dessert-details-modal-backdrop"),ge=document.querySelector(".dessert-details-close-btn"),N=document.querySelector(".dessert-details-loader"),E=document.querySelector(".dessert-details-content");let G=null;async function ve(e){return(await p.get(`${pe}/desserts/${e}`)).data}function ye(e){return Number.isInteger(e)?`value-${e}`:`value-${Math.floor(e)} half`}function be(){return`<div class="star">
      <svg class="star-empty"><use href="/img/star-rating.icons.svg#star-empty"></use></svg>
      <svg class="star-half"><use href="/img/star-rating.icons.svg#star-half"></use></svg>
      <svg class="star-filled"><use href="/img/star-rating.icons.svg#star-filled"></use></svg>
    </div>`.repeat(5)}function he(e){return`<img class="dessert-details-img" src="${e.image}" alt="${e.name}" />
    <div class="dessert-details-info">
      <h2 class="dessert-details-name">${e.name}</h2>
      <p class="dessert-details-price">${e.price} грн</p>
      <div class="rating dessert-details-rating ${ye(e.rate)}" aria-label="Рейтинг ${e.rate} з 5">
        <div class="star-container">${be()}</div>
      </div>
      <p class="dessert-details-text">${e.description}</p>
      <p class="dessert-details-composition">
        <span class="dessert-details-composition-label">Склад</span>: ${e.composition}
      </p>
      <button type="button" class="dessert-details-order-btn">Перейти до замовлення</button>
    </div>`}function J(e){e.key==="Escape"&&f()}function W(){P.classList.add("is-modal-open"),document.addEventListener("keydown",J)}function f(){P.classList.remove("is-modal-open"),document.removeEventListener("keydown",J)}async function Le(e){G=e,E.innerHTML="",N.classList.add("is-visible"),W();try{const s=await ve(e);E.innerHTML=he(s)}catch{f(),d.error({message:"Не вдалося завантажити десерт. Спробуйте пізніше.",position:"topRight"})}finally{N.classList.remove("is-visible")}}fe.addEventListener("click",e=>{const s=e.target.closest(".dessert-btn");s&&Le(s.dataset.id)});ge.addEventListener("click",f);P.addEventListener("click",e=>{e.target===e.currentTarget&&f()});E.addEventListener("click",e=>{e.target.closest(".dessert-details-order-btn")&&(f(),me(G,W))});
//# sourceMappingURL=index.js.map
