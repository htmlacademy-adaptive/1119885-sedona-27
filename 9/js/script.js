const header=document.querySelector(".header"),nav=document.querySelector(".navigation");header.classList.remove("header--no-js"),nav.classList.remove("navigation--no-js");const navButton=document.querySelector(".navigation__menu-button"),navList=document.querySelector(".navigation__list");navButton.addEventListener("click",(function(){navList.classList.toggle("navigation__list--opened")})),window.addEventListener("click",(function(n){const t=n.target;t.closest(".navigation__list")||t.closest(".navigation__menu-button")||navList.classList.remove("navigation__list--opened")}));