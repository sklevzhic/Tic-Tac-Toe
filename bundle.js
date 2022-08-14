(()=>{"use strict";var e={307:(e,t,n)=>{n.r(t)},250:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getCurrentFigure=t.renderCell=t.renderCells=t.renderBoard=void 0;const r=n(944);function a(e){let t=document.createElement("div");return t.classList.add("cells__wrapper"),e.forEach(((e,n)=>{let r=document.createElement("div");r.classList.add("cells__row"),e.forEach(((e,t)=>{r.appendChild(l(t,n,e))})),t.appendChild(r)})),t}function l(e,t,n){let a=document.createElement("div");return a.setAttribute("data-x",String(e)),a.setAttribute("data-y",String(t)),a.classList.add("cell"),n===r.Figures.FIGUREX&&a.classList.add("cell__X"),n===r.Figures.FIGURE0&&a.classList.add("cell__0"),n&&a.classList.add("disable"),a.textContent=n,a}t.renderBoard=e=>a(e),t.renderCells=a,t.renderCell=l,t.getCurrentFigure=function(e){return e%2?r.Figures.FIGURE0:r.Figures.FIGUREX}},211:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getInformationTemplate=void 0,t.getInformationTemplate=(e,t,n)=>{let r=document.createElement("div");r.classList.add("information");let a=document.createElement("h5");a.classList.add("title"),a.textContent="Информация";let l=document.createElement("p"),d=document.createElement("p"),i=document.createElement("p");return l.classList.add("step"),d.classList.add("currentFigure"),i.classList.add("winSeries"),l.textContent="Счетчик ходов: "+e,d.innerHTML=`Текущий ход: <span class="activeFigure">${n}</span>`,i.textContent="Победная серия: "+t,r.appendChild(a),r.appendChild(l),r.appendChild(d),r.appendChild(i),r}},402:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.renderModal=void 0,t.renderModal=(e,t)=>{let n=document.createElement("div");n.classList.add("overlay");let r=document.createElement("div");r.classList.add("content"),n.appendChild(r),r.innerHTML=e;let a=document.createElement("button");return a.classList.add("button"),a.textContent="Начать новую игру",r.appendChild(a),a.addEventListener("click",t),n}},122:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.generateInput=t.renderSettingsNewGame=void 0;const r=n(346);t.renderSettingsNewGame=(e,n,a)=>{let l=document.createElement("div"),d=document.createElement("h5");d.classList.add("title"),d.textContent="Начать новую игру";let i=document.createElement("label");i.textContent="Размер сетки";let s=(0,t.generateInput)(e,p);i.appendChild(s);let c=document.createElement("label");c.textContent="Победная серия";let o=(0,t.generateInput)(n,p);c.appendChild(o);let u=document.createElement("button");function p(){s.value=+s.value<=+r.MIN_VALUE?r.MIN_VALUE:+s.value>+r.MAX_VALUE?r.MAX_VALUE:s.value,o.value=String(+o.value<=+r.MIN_VALUE?r.MIN_VALUE:Math.min(Math.round(1*+s.value),+o.value))}return u.classList.add("newGame"),u.textContent="Начать",l.appendChild(d),l.appendChild(i),l.appendChild(c),l.appendChild(u),u.addEventListener("click",(()=>a(+s.value,+o.value))),l},t.generateInput=(e,t,n=r.MIN_VALUE,a=r.MAX_VALUE)=>{let l=document.createElement("input");return l.classList.add("input"),l.type="number",l.step=r.STEP,l.min=String(n),l.max=String(a),l.onchange=t,l.onkeypress=()=>!1,l.onwheel=()=>!0,l.title="Изменить значение можно прокруткой колеса мыши",l.value=String(e),l}},919:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.renderSidebar=void 0;const r=n(122),a=n(211),l=n(250);t.renderSidebar=(e,t)=>{let n=document.createElement("div");n.classList.add("sidebar");let d=document.createElement("div");d.classList.add("settingsWrapper"),d.appendChild((0,r.renderSettingsNewGame)(e.newSize,e.newWinSeries,t));let i=document.createElement("div");return i.classList.add("informationWrapper"),i.innerHTML="",i.appendChild((0,a.getInformationTemplate)(e.step,e.winSeriesInGame,(0,l.getCurrentFigure)(e.step))),n.appendChild(d),n.appendChild(i),n}},346:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.STEP=t.MAX_VALUE=t.MIN_VALUE=void 0,t.MIN_VALUE="3",t.MAX_VALUE="55",t.STEP="2"},944:(e,t)=>{var n;Object.defineProperty(t,"__esModule",{value:!0}),t.Figures=void 0,(n=t.Figures||(t.Figures={})).FIGUREX="X",n.FIGURE0="0"}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var l=t[r]={exports:{}};return e[r](l,l.exports,n),l.exports}n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{n(307);const e=n(250),t=n(402),r=n(919);function a(e){return[...Array(e)].map((()=>Array(e).fill("")))}!function(){let n={size:3,winSeriesInGame:3,step:0,cells:a(3),newSize:3,newWinSeries:3},l=document.createElement("div");l.classList.add("wrapper");let d=document.createElement("div"),i=(0,r.renderSidebar)(n,o);d.appendChild(i);let s=document.createElement("div");s.classList.add("main");let c=document.createElement("div");if(c.classList.add("board"),c.addEventListener("click",(function(r,l=(0,e.getCurrentFigure)(n.step)){let d=r.target;if(d.classList.contains("cell")&&!d.classList.contains("disable")){let r=Number(d.getAttribute("data-x")),i=Number(d.getAttribute("data-y")),s={x:r,y:i};n.cells[Number(i)][Number(r)]=l,n.step++,d.textContent=l,d.classList.add("X"===l?"cell__X":"cell__0"),d.classList.add("disable"),u(),localStorage.setItem("board",JSON.stringify(n));let p=function(t,n,r,a){let l={vertical:{x:"n",y:"i",arr:[]},horizontal:{x:"i",y:"n",arr:[]},mainDiagonal:{x:"i",y:"i",arr:[]},secondaryDiagonal:{x:"i",y:"d",arr:[]}};if(Object.keys(l).map((e=>{l[e].arr=function(e,t,n,r){let a=[];for(let l=1-t;l<t;l++){let t="n"===r.x?n.x:"d"===r.x?n.x-l:n.x+l,d="n"===r.y?n.y:"d"===r.y?n.y-l:n.y+l;t>=0&&d>=0&&t<e.length&&d<e.length&&a.push(e[d][t])}return a}(t,r,n,l[e])})),Object.keys(l).some((t=>function(e,t,n){let r=0;for(let a=0;a<=e.length-1;a++){let l=e[a]===n?r+1:0;if(r=l,l===t)return!0}return!1}(l[t].arr,r,(0,e.getCurrentFigure)(a)))))return`<p>Победа <span class="activeFigure">${(0,e.getCurrentFigure)(a)}</span></p>`;return a===t.length*t.length-1?"<p>Ничья</p>":""}(n.cells,s,n.winSeriesInGame,n.step-1);if(p){let e=(0,t.renderModal)(p,o);c.appendChild(e),localStorage.setItem("board",JSON.stringify(Object.assign(Object.assign({},n),{cells:a(n.size),step:0})))}}})),c.appendChild((0,e.renderBoard)(n.cells)),s.appendChild(c),l.appendChild(d),l.appendChild(s),document.body.appendChild(l),localStorage.getItem("board")){let e=localStorage.getItem("board");e&&(n=JSON.parse(e),p(),u())}function o(e=n.size,t=n.winSeriesInGame){let r=Number.isInteger(e)?e:n.size;n.size=r,n.winSeriesInGame=t,n.cells=a(r),n.step=0,n.newWinSeries=t,n.newSize=r,p(),u(),localStorage.setItem("board",JSON.stringify(n))}function u(){d.innerHTML="",d.appendChild((0,r.renderSidebar)(n,o))}function p(){c.innerHTML="",c.appendChild((0,e.renderBoard)(n.cells))}}()})()})();