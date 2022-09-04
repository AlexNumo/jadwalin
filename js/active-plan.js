const starter = document.querySelector('#starter');
const professional = document.querySelector('#professional');
const company = document.querySelector('#company');
const chooseStarter = document.querySelector('#choose-starter');
const chooseProfessional = document.querySelector('#choose-professional');
const chooseCompany = document.querySelector('#choose-company');

starter.addEventListener("click", Starter);
professional.addEventListener("click", Professional);
company.addEventListener("click", Company);

function Starter() {
  chooseStarter.classList.add("active-background", "animation-open");
  chooseProfessional.classList.remove("active-background", "animation-open");
  chooseCompany.classList.remove("active-background", "animation-open");
  starter.classList.add("active-plan");
  professional.classList.remove("active-plan");
  company.classList.remove("active-plan");
};

function Professional() {
  chooseStarter.classList.remove("active-background", "animation-open");
  chooseProfessional.classList.add("active-background", "animation-open");
  chooseCompany.classList.remove("active-background", "animation-open");
  starter.classList.remove("active-plan");
  professional.classList.add("active-plan");
  company.classList.remove("active-plan");
};

function Company() {
  chooseStarter.classList.remove("active-background", "animation-open");
  chooseProfessional.classList.remove("active-background", "animation-open");
  chooseCompany.classList.add("active-background", "animation-open");
  starter.classList.remove("active-plan");
  professional.classList.remove("active-plan");
  company.classList.add("active-plan");
};




// (() => {
//     const refs = {
//       openMenuBtn: document.querySelector("[data-menu-open]"),
//       closeMenuBtn: document.querySelector("[data-menu-close]"),
//       menu: document.querySelector("[data-menu]"),
//     };
  
//     refs.openMenuBtn.addEventListener("click", toggleModal);
//     refs.closeMenuBtn.addEventListener("click", toggleModal);
  
//     function toggleModal() {
//       refs.menu.classList.toggle("is-open");
//     }
//   })();
