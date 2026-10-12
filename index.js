import{i as l,a as u,S as P,N as q,P as M,A as re}from"./assets/vendor-D8_pSMXa.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function r(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=r(s);fetch(s.href,a)}})();document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".header-burger-btn"),t=document.querySelector(".mobile-menu-close-btn"),r=document.querySelector(".mobile-menu");function i(){r.classList.toggle("is-open")}e&&e.addEventListener("click",i),t&&t.addEventListener("click",i),document.querySelectorAll(".mobile-menu-link, .mobile-menu-btn").forEach(a=>{a.addEventListener("click",()=>{r.classList.remove("is-open")})})});const n="/SweetCraft/assets/icons-0lH9uKN_.svg",ae="https://deserts-store.b.goit.study/api",b="order-form-data",D=document.querySelector(".order-modal-backdrop"),ie=document.querySelector(".order-close-btn"),o=document.querySelector(".order-form"),x=document.querySelector(".order-submit-btn"),j=document.querySelector(".order-loader");let H=null,$=null;function ne(){const e={name:o.elements.name.value,phone:o.elements.phone.value,comment:o.elements.comment.value};localStorage.setItem(b,JSON.stringify(e))}function oe(){const e=localStorage.getItem(b);if(e)try{const t=JSON.parse(e);o.elements.name.value=t.name||"",o.elements.phone.value=t.phone||"",o.elements.comment.value=t.comment||""}catch{localStorage.removeItem(b)}}function U(e){e.key==="Escape"&&L()}function ce(e,t){H=e,$=t,oe(),D.classList.add("is-modal-open"),document.addEventListener("keydown",U)}function L(e=!0){D.classList.remove("is-modal-open"),document.removeEventListener("keydown",U),e&&$&&$()}o.addEventListener("input",ne);ie.addEventListener("click",()=>L());D.addEventListener("click",e=>{e.target===e.currentTarget&&L()});o.addEventListener("submit",async e=>{e.preventDefault();const t=o.elements.phone.value.replaceAll(" ","");if(t.length!==12){l.warning({message:"Телефон має містити 12 цифр, наприклад 380961234568.",position:"topRight"});return}const r={name:o.elements.name.value.trim(),phone:t,comment:o.elements.comment.value.trim(),dessertId:H};j.classList.add("is-visible"),x.disabled=!0;try{const i=await u.post(`${ae}/orders`,r);l.success({message:`Дякуємо! Замовлення ${i.data.orderNum} прийнято, ми скоро зв'яжемось з вами.`,position:"topRight"}),o.reset(),localStorage.removeItem(b),L(!1)}catch{l.error({message:"Не вдалося надіслати замовлення. Перевірте дані й спробуйте ще раз.",position:"topRight"})}finally{j.classList.remove("is-visible"),x.disabled=!1}});const le="https://deserts-store.b.goit.study/api",de=document.querySelector(".dessert-list"),B=document.querySelector(".dessert-details-modal-backdrop"),ue=document.querySelector(".dessert-details-close-btn"),F=document.querySelector(".dessert-details-loader"),w=document.querySelector(".dessert-details-content");let V=null;async function pe(e){return(await u.get(`${le}/desserts/${e}`)).data}function me(e){return Number.isInteger(e)?`value-${e}`:`value-${Math.floor(e)} half`}function ge(){return`<div class="star">
      <svg class="star-empty"><use href="/img/star-rating.icons.svg#star-empty"></use></svg>
      <svg class="star-half"><use href="/img/star-rating.icons.svg#star-half"></use></svg>
      <svg class="star-filled"><use href="/img/star-rating.icons.svg#star-filled"></use></svg>
    </div>`.repeat(5)}function fe(e){return`<img class="dessert-details-img" src="${e.image}" alt="${e.name}" />
    <div class="dessert-details-info">
      <h2 class="dessert-details-name">${e.name}</h2>
      <p class="dessert-details-price">${e.price} грн</p>
      <div class="rating dessert-details-rating ${me(e.rate)}" aria-label="Рейтинг ${e.rate} з 5">
        <div class="star-container">${ge()}</div>
      </div>
      <p class="dessert-details-text">${e.description}</p>
      <p class="dessert-details-composition">
        <span class="dessert-details-composition-label">Склад</span>: ${e.composition}
      </p>
      <button type="button" class="dessert-details-order-btn">Перейти до замовлення</button>
    </div>`}function K(e){e.key==="Escape"&&g()}function z(){B.classList.add("is-modal-open"),document.addEventListener("keydown",K)}function g(){B.classList.remove("is-modal-open"),document.removeEventListener("keydown",K)}async function G(e){V=e,w.innerHTML="",F.classList.add("is-visible"),z();try{const t=await pe(e);w.innerHTML=fe(t)}catch{g(),l.error({message:"Не вдалося завантажити десерт. Спробуйте пізніше.",position:"topRight"})}finally{F.classList.remove("is-visible")}}de.addEventListener("click",e=>{const t=e.target.closest(".dessert-btn");t&&G(t.dataset.id)});ue.addEventListener("click",g);B.addEventListener("click",e=>{e.target===e.currentTarget&&g()});w.addEventListener("click",e=>{e.target.closest(".dessert-details-order-btn")&&(g(),ce(V,z))});u.defaults.baseURL="https://deserts-store.b.goit.study/api";const C={listPopularList:document.querySelector(".popular-product-list")},ve={DESSERTS:"/desserts"};let f=1;const E=10;let J=null;const be={modules:[q,M],slidesPerView:1,spaceBetween:16,resistance:!1,resistanceRatio:0,touchReleaseOnEdges:!0,navigation:{nextEl:".popular-swiper-button-next",prevEl:".popular-swiper-button-prev"},pagination:{el:".popular-swiper-pagination",dynamicBullets:!0,dynamicMainBullets:3,clickable:!0},breakpoints:{768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:3,spaceBetween:24}},on:{async slideChange(e){const{realIndex:t,slides:{length:r}}=e;if(!(!(t+1>=r-2)||f>=J))try{f+=1;const{desserts:s}=await W(f,E),a=Y(s);C.listPopularList.insertAdjacentHTML("beforeend",a),e.update()}catch(s){l.error({title:"Error",message:`Помилка отримання Популярних продуктів пiд час довантаження ${s}`}),console.log(`Помилка отримання Популярних продуктів пiд час довантаження ${s}`)}}}},ye=()=>new P(".popular-swiper",be);async function W(e=1,t=3){const{data:r}=await u(`${ve.DESSERTS}?page=${e}&limit=${t}&type=popular`);return r}document.addEventListener("DOMContentLoaded",he);C.listPopularList.addEventListener("click",Le);async function he(){try{const{desserts:e,total:t}=await W(f,E);J=Math.ceil(t/E);const r=Y(e);C.listPopularList.insertAdjacentHTML("beforeend",r),ye()}catch(e){l.error({title:"Error",message:`Помилка отримання Популярних продуктів пiд час ініціалізації ${e}`}),console.log(`Помилка отримання Популярних продуктів пiд час ініціалізації ${e}`)}}function Le(e){const t=e.target.closest(".popular-product-list-item-btn");t&&G(t.dataset.id)}function Y(e){return e.map(({_id:t,category:r,description:i,image:s,name:a,price:c})=>`<li class="swiper-slide popular-product-list-item">
        <img
          src="${s}"
          alt="${a}"
          class="popular-product-list-item-img"
        />

        <div class="popular-product-list-item-info-wrapper">
          <p class="popular-product-list-item-category">
            ${r.name}
          </p>

          <h3 class="popular-product-list-item-title">
            ${a}
          </h3>

          <p class="popular-product-list-item-description">
            ${i}
          </p>
        </div>

        <div class="popular-product-list-item-price-btn-modal-wrapper">
          <p class="popular-product-list-item-price">
            ${c} грн
          </p>

          <button
            type="button"
            class="popular-product-list-item-btn"
            data-id="${t}"
            aria-label="Детальніше про ${a}"
          >
            <svg width="24" height="24">
              <use href="${n}#arrow_outwardicon"></use>
            </svg>
          </button>
        </div>
      </li>`).join("")}const Q="https://deserts-store.b.goit.study/api",X=8,y=document.querySelector(".category-list"),I=document.querySelector(".dessert-list"),p=document.querySelector(".load-more-btn"),Z=document.querySelector(".loader");let d=1,m="select-all";async function $e(){return(await u.get(`${Q}/categories`)).data}async function O(e,t){const r={page:e,limit:X};return t!=="select-all"&&(r.category=t),(await u.get(`${Q}/desserts`,{params:r})).data}function we(e){const t=e.map(r=>`<li>
        <button type="button" class="category-select-btn" data-id="${r._id}">${r.name}</button></li>`).join("");y.insertAdjacentHTML("beforeend",t)}function R(e){return e.map(t=>`<li class="dessert-item">
        <img class="dessert-img" src="${t.image}" alt="${t.name}" loading="lazy" />
        <p class="dessert-category">${t.category.name}</p>
        <h3 class="dessert-name">${t.name}</h3>
        <p class="dessert-text">${t.description}</p>
        <div class="dessert-bottom">
          <p class="dessert-price">${t.price} грн</p>
          <button type="button" class="dessert-btn" data-id="${t._id}" aria-label="Детальніше про ${t.name}">
            <svg class="dessert-btn-icon" width="24" height="24">
              <use href="/img/icons.svg#arrow_outwardicon"></use>
            </svg>
          </button>
        </div>
      </li>`).join("")}function T(e){d*X<e?p.classList.add("is-visible"):p.classList.remove("is-visible")}function A(){l.error({message:"Не вдалося завантажити десерти. Спробуйте пізніше.",position:"topRight"})}function N(){Z.classList.add("is-visible")}function _(){Z.classList.remove("is-visible")}async function Ee(){N();try{const e=await $e();we(e);const t=await O(d,m);I.innerHTML=R(t.desserts),T(t.totalItems)}catch{A()}finally{_()}}Ee();const h=document.querySelector(".category-wrap"),Se=document.querySelector(".category-toggle");Se.addEventListener("click",()=>h.classList.toggle("is-open"));const S=document.querySelector(".current-category");S.textContent=y.querySelector(".is-active").textContent.trim();y.addEventListener("click",async e=>{const t=e.target.closest(".category-select-btn");if(!t)return;const r=y.querySelector(".is-active"),i=m,s=d,a=p.classList.contains("is-visible");r.classList.remove("is-active"),t.classList.add("is-active"),S.textContent=t.textContent.trim(),h.classList.remove("is-open"),d=1,m=t.dataset.id,N(),p.classList.remove("is-visible");try{const c=await O(d,m);I.innerHTML=R(c.desserts),T(c.totalItems)}catch{t.classList.remove("is-active"),r.classList.add("is-active"),S.textContent=r.textContent.trim(),m=i,d=s,a&&p.classList.add("is-visible"),A()}finally{_()}});document.addEventListener("click",e=>{h.contains(e.target)||h.classList.remove("is-open")});p.addEventListener("click",async()=>{d+=1,N(),p.classList.remove("is-visible");try{const e=await O(d,m);I.insertAdjacentHTML("beforeend",R(e.desserts)),T(e.totalItems)}catch{A()}finally{_()}});new P(".about-us__swiper",{modules:[q,M],enabled:!1,slidesPerView:1,slidesPerGroup:1,spaceBetween:0,loop:!1,navigation:{nextEl:".about-us__button--next",prevEl:".about-us__button--prev"},pagination:{el:".about-us__pagination",clickable:!0},breakpoints:{768:{enabled:!0,slidesPerView:2,slidesPerGroup:1,spaceBetween:24},1440:{enabled:!0,slidesPerView:2,slidesPerGroup:1,spaceBetween:24}}});document.querySelector(".js-faq-accordion");new re(".js-faq-accordion",{elementClass:"js-faq-ac",triggerClass:"js-faq-ac-trigger",panelClass:"js-faq-ac-panel",duration:300,showMultiple:!1,openOnInit:[0]});const ke={modules:[q,M],grabCursor:!0,spaceBetween:20,slidesPerView:1,breakpoints:{768:{slidesPerView:3,spaceBetween:24}},pagination:{el:".feedback-swiper-pagination",dynamicBullets:!0,clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},on:{async slideChange(e){const{realIndex:t,slides:{length:r}}=e;if(!(!(t+1>=r-2)||v>=ee))try{v+=1;const{feedbacks:s}=await te(v,k);se(s),e.update()}catch(s){l.error({title:"Error",message:`Помилка отримання Фiдбекiв пiд час довантаження ${s}`}),console.log(`Помилка отримання Фiдбекiв пiд час довантаження ${s}`)}}}},Pe=()=>new P(".feedback-swiper",ke);let v=1;const k=10;let ee=null;const qe=document.querySelector(".feedback-swiper-wrapper");document.addEventListener("DOMContentLoaded",Me);async function Me(){try{const{feedbacks:e,total:t}=await te(v,k);ee=Math.ceil(t/k),se(e),Pe()}catch(e){l.error({title:"Error",message:`Помилка отримання Фiдбекiв пiд час ініціалізації ${e}`}),console.log(`Помилка отримання Фiдбекiв пiд час ініціалізації ${e}`)}}u.defaults.baseURL="https://deserts-store.b.goit.study/api/";const De={FEEDBACKS:"feedbacks"};async function te(e,t){return(await u(`${De.FEEDBACKS}?page=${e}&limit=${t}`)).data}function se(e){const t=e.map(({author:r,description:i,rate:s})=>{const a=Ce(s);return Be(r,i,a)}).join("");qe.insertAdjacentHTML("beforeend",t)}function Be(e,t,r){return`<div class="feedback-swiper-slide swiper-slide">
      <div class="rating ${r}">
            <div class="star-container">
              <div class="star">
                <svg class="star-empty">
                  <use href="${n}#star-empty"></use>
                </svg>
                <svg class="star-half">
                  <use href="${n}#star-half"></use>
                </svg>
                <svg class="star-filled">
                  <use href="${n}#star-filled"></use>
                </svg>
              </div>
              <div class="star">
                <svg class="star-empty">
                  <use href="${n}#star-empty"></use>
                </svg>
                <svg class="star-half">
                  <use href="${n}#star-half"></use>
                </svg>
                <svg class="star-filled">
                  <use href="${n}#star-filled"></use>
                </svg>
              </div>
              <div class="star">
                <svg class="star-empty">
                  <use href="${n}#star-empty"></use>
                </svg>
                <svg class="star-half">
                  <use href="${n}#star-half"></use>
                </svg>
                <svg class="star-filled">
                  <use href="${n}#star-filled"></use>
                </svg>
              </div>
              <div class="star">
                <svg class="star-empty">
                  <use href="${n}#star-empty"></use>
                </svg>
                <svg class="star-half">
                  <use href="${n}#star-half"></use>
                </svg>
                <svg class="star-filled">
                  <use href="${n}#star-filled"></use>
                </svg>
              </div>
              <div class="star">
                <svg class="star-empty">
                  <use href="${n}#star-empty"></use>
                </svg>
                <svg class="star-half">
                  <use href="${n}#star-half"></use>
                </svg>
                <svg class="star-filled">
                  <use href="${n}#star-filled"></use>
                </svg>
              </div>
            </div>
          </div>
          <p class="feedback-description">"${t}"</p>
          <p class="feedback-name">${e}</p></div>`}function Ce(e){return Number.isInteger(e)?`value-${e}`:`value-${Number.parseInt(e)} half`}
//# sourceMappingURL=index.js.map
