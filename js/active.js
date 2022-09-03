const monthly = document.querySelector('#monthly');
const yearly = document.querySelector('#yearly');
const starter = document.querySelector('#starter');
const professional = document.querySelector('#professional');
const company = document.querySelector('#company');
const starterPrice = document.querySelector('#starter-price');
const professionalrPrice = document.querySelector('#professional-price');
const companyPrice = document.querySelector('#company-price');

monthly.addEventListener("click", ChooseSubscriptionMonthly);
yearly.addEventListener("click", ChooseSubscriptionYearly);
starter.addEventListener("click", ChooseStarter);
professional.addEventListener("click", ChooseProfessional);
company.addEventListener("click", ChooseCompany);

function ChooseSubscriptionMonthly() {
  monthly.classList.add("active-subscription");
  yearly.classList.remove("active-subscription");
  starterPrice.innerHTML = '$12';
  professionalrPrice.innerHTML = '$36';
  companyPrice.innerHTML = '$56';
};

function ChooseSubscriptionYearly() {
  yearly.classList.add("active-subscription");
  monthly.classList.remove("active-subscription");
  starterPrice.innerHTML = '$19';
  professionalrPrice.innerHTML = '$54';
  companyPrice.innerHTML = '$89';
};

function ChooseStarter() {
  starter.classList.add("active-plan");
  professional.classList.remove("active-plan");
  company.classList.remove("active-plan");
};

function ChooseProfessional() {
  starter.classList.remove("active-plan");
  professional.classList.add("active-plan");
  company.classList.remove("active-plan");
};

function ChooseCompany() {
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
