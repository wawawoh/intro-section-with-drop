const dropDown = document.querySelector(".drop-down-button");
const dropCompany = document.querySelector(".drop-company");
dropDown.addEventListener("click", (e) => {
  e.target.nextElementSibling.classList.toggle("show");
});

dropCompany.addEventListener("click", (e) => {
  e.target.nextElementSibling.classList.toggle("show");
});
