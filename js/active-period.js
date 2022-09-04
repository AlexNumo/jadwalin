const monthly = document.querySelector('#monthly');
const yearly = document.querySelector('#yearly');
const starterPrice = document.querySelector('#starter-price');
const professionalrPrice = document.querySelector('#professional-price');
const companyPrice = document.querySelector('#company-price');

monthly.addEventListener("click", ChooseSubscriptionMonthly);
yearly.addEventListener("click", ChooseSubscriptionYearly);
yearly.addEventListener('animationend', function () {
  yearly.classList.remove('animation-close')
});
monthly.addEventListener('animationend', function () {
  monthly.classList.remove('animation-close')
});

function ChooseSubscriptionMonthly() {
  monthly.classList.add("active-subscription", "animation-open");
  yearly.classList.remove("active-subscription", "animation-open");
  yearly.classList.add("animation-close");
  starterPrice.innerHTML = '$12';
  professionalrPrice.innerHTML = '$36';
  companyPrice.innerHTML = '$56';
};

function ChooseSubscriptionYearly() {
  yearly.classList.add("active-subscription", "animation-open");
  monthly.classList.remove("active-subscription", "animation-open");
  monthly.classList.add("animation-close");
  starterPrice.innerHTML = '$19';
  professionalrPrice.innerHTML = '$54';
  companyPrice.innerHTML = '$89';
};