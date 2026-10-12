import{a as l,i as u,S as q,N as P,P as M,A as ne}from"./assets/vendor-D8_pSMXa.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function s(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=s(r);fetch(r.href,a)}})();document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".header-burger-btn"),t=document.querySelector(".mobile-menu-close-btn"),s=document.querySelector(".mobile-menu");function i(){s.classList.toggle("is-open")}e&&e.addEventListener("click",i),t&&t.addEventListener("click",i),document.querySelectorAll(".mobile-menu-link, .mobile-menu-btn").forEach(a=>{a.addEventListener("click",()=>{s.classList.remove("is-open")})})});const n="/SweetCraft/assets/icons-0lH9uKN_.svg";l.defaults.baseURL="https://deserts-store.b.goit.study/api/";const b="order-form-data",D=document.querySelector(".order-modal-backdrop"),ie=document.querySelector(".order-close-btn"),o=document.querySelector(".order-form"),F=document.querySelector(".order-submit-btn"),_=document.querySelector(".order-loader");let H=null,V="",$=null;function oe(){const e={name:o.elements.name.value,phone:o.elements.phone.value,comment:o.elements.comment.value};localStorage.setItem(b,JSON.stringify(e))}function le(){const e=localStorage.getItem(b);if(e)try{const t=JSON.parse(e);o.elements.name.value=t.name||"",o.elements.phone.value=t.phone||"",o.elements.comment.value=t.comment||""}catch{localStorage.removeItem(b)}}function ce(e){const t=e.value.trim();if(e.name==="name"){if(t==="")return"Вкажіть ім'я";if(t.length<2)return"Ім'я має містити щонайменше 2 символи"}if(e.name==="phone"){const s=t.replaceAll(" ","");if(s==="")return"Вкажіть телефон";if(!/^\d{12}$/.test(s))return"Телефон має містити 12 цифр, наприклад 380961234568"}if(e.name==="comment"){if(t==="")return"Напишіть коментар";if(t.length<2)return"Коментар має містити щонайменше 2 символи"}return""}function U(e,t){const s=e.closest(".order-field");s.querySelector(".order-error").textContent=t,s.classList.toggle("is-error",t!==""),e.setAttribute("aria-invalid",t!=="")}function de(){let e=!0;for(const t of["name","phone","comment"]){const s=o.elements[t],i=ce(s);U(s,i),i!==""&&(e=!1)}return e}function K(e){e.key==="Escape"&&L()}function ue(e,t,s){H=e,V=t,$=s,le(),D.classList.add("is-modal-open"),document.addEventListener("keydown",K)}function L(e=!0){D.classList.remove("is-modal-open"),document.removeEventListener("keydown",K),e&&$&&$()}o.addEventListener("input",e=>{oe(),U(e.target,"")});ie.addEventListener("click",()=>L());D.addEventListener("click",e=>{e.target===e.currentTarget&&L()});o.addEventListener("submit",async e=>{if(e.preventDefault(),!de()){o.querySelector(".is-error .order-input").focus();return}const t={name:o.elements.name.value.trim(),phone:o.elements.phone.value.replaceAll(" ",""),comment:o.elements.comment.value.trim(),dessertId:H};_.classList.add("is-visible"),F.disabled=!0;try{await l.post("orders",t),u.success({message:`Дякуємо! Замовлення "${V}" прийнято, ми скоро зв'яжемось з вами.`,position:"topRight"}),o.reset(),localStorage.removeItem(b),L(!1)}catch{u.error({message:"Не вдалося надіслати замовлення. Перевірте дані й спробуйте ще раз.",position:"topRight"})}finally{_.classList.remove("is-visible"),F.disabled=!1}});l.defaults.baseURL="https://deserts-store.b.goit.study/api/";const pe=document.querySelector(".dessert-list"),C=document.querySelector(".dessert-details-modal-backdrop"),me=document.querySelector(".dessert-details-close-btn"),j=document.querySelector(".dessert-details-loader"),E=document.querySelector(".dessert-details-content");let z=null,G="";async function fe(e){return(await l.get(`desserts/${e}`)).data}function ge(e){return Number.isInteger(e)?`value-${e}`:`value-${Math.floor(e)} half`}function ve(){return`<div class="star">
      <svg class="star-empty"><use href="${n}#star-empty"></use></svg>
      <svg class="star-half"><use href="${n}#star-half"></use></svg>
      <svg class="star-filled"><use href="${n}#star-filled"></use></svg>
    </div>`.repeat(5)}function be(e){return`<img class="dessert-details-img" src="${e.image}" alt="${e.name}" />
    <div class="dessert-details-info">
      <h2 class="dessert-details-name">${e.name}</h2>
      <p class="dessert-details-price">${e.price} грн</p>
      <div class="rating dessert-details-rating ${ge(e.rate)}" aria-label="Рейтинг ${e.rate} з 5">
        <div class="star-container">${ve()}</div>
      </div>
      <p class="dessert-details-text">${e.description}</p>
      <p class="dessert-details-composition">
        <span class="dessert-details-composition-label">Склад</span>: ${e.composition}
      </p>
      <button type="button" class="dessert-details-order-btn">Перейти до замовлення</button>
    </div>`}function J(e){e.key==="Escape"&&f()}function W(){C.classList.add("is-modal-open"),document.addEventListener("keydown",J)}function f(){C.classList.remove("is-modal-open"),document.removeEventListener("keydown",J)}async function Y(e){z=e,E.innerHTML="",j.classList.add("is-visible"),W();try{const t=await fe(e);G=t.name,E.innerHTML=be(t)}catch{f(),u.error({message:"Не вдалося завантажити десерт. Спробуйте пізніше.",position:"topRight"})}finally{j.classList.remove("is-visible")}}pe.addEventListener("click",e=>{const t=e.target.closest(".dessert-btn");t&&Y(t.dataset.id)});me.addEventListener("click",f);C.addEventListener("click",e=>{e.target===e.currentTarget&&f()});E.addEventListener("click",e=>{e.target.closest(".dessert-details-order-btn")&&(f(),ue(z,G,W))});l.defaults.baseURL="https://deserts-store.b.goit.study/api";const B={listPopularList:document.querySelector(".popular-product-list")},ye={DESSERTS:"/desserts"};let g=1;const w=10;let Q=null;const he={modules:[P,M],slidesPerView:1,spaceBetween:16,resistance:!1,resistanceRatio:0,touchReleaseOnEdges:!0,navigation:{nextEl:".popular-swiper-button-next",prevEl:".popular-swiper-button-prev"},pagination:{el:".popular-swiper-pagination",dynamicBullets:!0,dynamicMainBullets:3,clickable:!0},breakpoints:{768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:3,spaceBetween:24}},on:{async slideChange(e){const{realIndex:t,slides:{length:s}}=e;if(!(!(t+1>=s-2)||g>=Q))try{g+=1;const{desserts:r}=await X(g,w),a=Z(r);B.listPopularList.insertAdjacentHTML("beforeend",a),e.update()}catch(r){u.error({title:"Error",message:`Помилка отримання Популярних продуктів пiд час довантаження ${r}`}),console.log(`Помилка отримання Популярних продуктів пiд час довантаження ${r}`)}}}},Le=()=>new q(".popular-swiper",he);async function X(e=1,t=3){const{data:s}=await l(`${ye.DESSERTS}?page=${e}&limit=${t}&type=popular`);return s}document.addEventListener("DOMContentLoaded",$e);B.listPopularList.addEventListener("click",Ee);async function $e(){try{const{desserts:e,total:t}=await X(g,w);Q=Math.ceil(t/w);const s=Z(e);B.listPopularList.insertAdjacentHTML("beforeend",s),Le()}catch(e){u.error({title:"Error",message:`Помилка отримання Популярних продуктів пiд час ініціалізації ${e}`}),console.log(`Помилка отримання Популярних продуктів пiд час ініціалізації ${e}`)}}function Ee(e){const t=e.target.closest(".popular-product-list-item-btn");t&&Y(t.dataset.id)}function Z(e){return e.map(({_id:t,category:s,description:i,image:r,name:a,price:c})=>`<li class="swiper-slide popular-product-list-item">
        <img
          src="${r}"
          alt="${a}"
          class="popular-product-list-item-img"
        />

        <div class="popular-product-list-item-info-wrapper">
          <p class="popular-product-list-item-category">
            ${s.name}
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
      </li>`).join("")}l.defaults.baseURL="https://deserts-store.b.goit.study/api/";const ee=8,y=document.querySelector(".category-list"),I=document.querySelector(".dessert-list"),p=document.querySelector(".load-more-btn"),te=document.querySelector(".loader");let d=1,m="select-all";async function we(){return(await l.get("categories")).data}async function O(e,t){const s={page:e,limit:ee};return t!=="select-all"&&(s.category=t),(await l.get("desserts",{params:s})).data}function ke(e){const t=e.map(s=>`<li>
        <button type="button" class="category-select-btn" data-id="${s._id}">${s.name}</button></li>`).join("");y.insertAdjacentHTML("beforeend",t)}function N(e){return e.map(t=>`<li class="dessert-item">
        <img class="dessert-img" src="${t.image}" alt="${t.name}" loading="lazy" />
        <p class="dessert-category">${t.category.name}</p>
        <h3 class="dessert-name">${t.name}</h3>
        <p class="dessert-text">${t.description}</p>
        <div class="dessert-bottom">
          <p class="dessert-price">${t.price} грн</p>
          <button type="button" class="dessert-btn" data-id="${t._id}" aria-label="Детальніше про ${t.name}">
            <svg class="dessert-btn-icon" width="24" height="24">
              <use href="${n}#arrow_outwardicon"></use>
            </svg>
          </button>
        </div>
      </li>`).join("")}function T(e){d*ee<e?p.classList.add("is-visible"):p.classList.remove("is-visible")}function R(){u.error({message:"Не вдалося завантажити десерти. Спробуйте пізніше.",position:"topRight"})}function x(){te.classList.add("is-visible")}function A(){te.classList.remove("is-visible")}async function Se(){x();try{const e=await we();ke(e);const t=await O(d,m);I.innerHTML=N(t.desserts),T(t.totalItems)}catch{R()}finally{A()}}Se();const h=document.querySelector(".category-wrap"),qe=document.querySelector(".category-toggle");qe.addEventListener("click",()=>h.classList.toggle("is-open"));const k=document.querySelector(".current-category");k.textContent=y.querySelector(".is-active").textContent.trim();y.addEventListener("click",async e=>{const t=e.target.closest(".category-select-btn");if(!t)return;const s=y.querySelector(".is-active"),i=m,r=d,a=p.classList.contains("is-visible");s.classList.remove("is-active"),t.classList.add("is-active"),k.textContent=t.textContent.trim(),h.classList.remove("is-open"),d=1,m=t.dataset.id,x(),p.classList.remove("is-visible");try{const c=await O(d,m);I.innerHTML=N(c.desserts),T(c.totalItems)}catch{t.classList.remove("is-active"),s.classList.add("is-active"),k.textContent=s.textContent.trim(),m=i,d=r,a&&p.classList.add("is-visible"),R()}finally{A()}});document.addEventListener("click",e=>{h.contains(e.target)||h.classList.remove("is-open")});p.addEventListener("click",async()=>{d+=1,x(),p.classList.remove("is-visible");try{const e=await O(d,m);I.insertAdjacentHTML("beforeend",N(e.desserts)),T(e.totalItems)}catch{R()}finally{A()}});new q(".about-us__swiper",{modules:[P,M],enabled:!1,slidesPerView:1,slidesPerGroup:1,spaceBetween:0,loop:!1,navigation:{nextEl:".about-us__button--next",prevEl:".about-us__button--prev"},pagination:{el:".about-us__pagination",clickable:!0},breakpoints:{768:{enabled:!0,slidesPerView:2,slidesPerGroup:1,spaceBetween:24},1440:{enabled:!0,slidesPerView:2,slidesPerGroup:1,spaceBetween:24}}});document.querySelector(".js-faq-accordion");new ne(".js-faq-accordion",{elementClass:"js-faq-ac",triggerClass:"js-faq-ac-trigger",panelClass:"js-faq-ac-panel",duration:300,showMultiple:!1,openOnInit:[0]});const Pe={modules:[P,M],grabCursor:!0,spaceBetween:20,slidesPerView:1,breakpoints:{768:{slidesPerView:3,spaceBetween:24}},pagination:{el:".feedback-swiper-pagination",dynamicBullets:!0,clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},on:{async slideChange(e){const{realIndex:t,slides:{length:s}}=e;if(!(!(t+1>=s-2)||v>=se))try{v+=1;const{feedbacks:r}=await re(v,S);ae(r),e.update()}catch(r){u.error({title:"Error",message:`Помилка отримання Фiдбекiв пiд час довантаження ${r}`}),console.log(`Помилка отримання Фiдбекiв пiд час довантаження ${r}`)}}}},Me=()=>new q(".feedback-swiper",Pe);let v=1;const S=10;let se=null;const De=document.querySelector(".feedback-swiper-wrapper");document.addEventListener("DOMContentLoaded",Ce);async function Ce(){try{const{feedbacks:e,total:t}=await re(v,S);se=Math.ceil(t/S),ae(e),Me()}catch(e){u.error({title:"Error",message:`Помилка отримання Фiдбекiв пiд час ініціалізації ${e}`}),console.log(`Помилка отримання Фiдбекiв пiд час ініціалізації ${e}`)}}l.defaults.baseURL="https://deserts-store.b.goit.study/api/";const Be={FEEDBACKS:"feedbacks"};async function re(e,t){return(await l(`${Be.FEEDBACKS}?page=${e}&limit=${t}`)).data}function ae(e){const t=e.map(({author:s,description:i,rate:r})=>{const a=Oe(r);return Ie(s,i,a)}).join("");De.insertAdjacentHTML("beforeend",t)}function Ie(e,t,s){return`<div class="feedback-swiper-slide swiper-slide">
      <div class="rating ${s}">
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
          <p class="feedback-name">${e}</p></div>`}function Oe(e){return Number.isInteger(e)?`value-${e}`:`value-${Number.parseInt(e)} half`}
//# sourceMappingURL=index.js.map
