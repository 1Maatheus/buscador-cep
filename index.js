const input = document.querySelector(".input-search");
const btn = document.querySelector(".btn-search");
const divCep = document.querySelector(".cep-address");
const divCity = document.querySelector(".cep-city");
const divDistrict = document.querySelector(".cep-district");
const divState = document.querySelector(".cep-state");
const divResult = document.querySelector(".cep-content-container");

const getCep = async () => {
  const cep = input.value;

  const apiUrl = `https://cep.awesomeapi.com.br/json/${cep}`;
  const res = await fetch(apiUrl);
  const data = await res.json();

  divCep.innerHTML = `<h1>${data.address}</h1>`;
  divCity.innerHTML = `<h1>${data.city}</h1>`;
  divDistrict.innerHTML = `<h1>${data.district}</h>`;
  divState.innerHTML = `<h1>${data.state}</h1>`;
  divResult.classList.add("show");

  console.log(data);
};

btn.addEventListener("click", () => {
  getCep();
});
