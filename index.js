const input = document.querySelector(".input-search");
const btn = document.querySelector(".btn-search");
const divCep = document.querySelector(".logradouro");
const divCity = document.querySelector(".cidade");
const divDistrict = document.querySelector(".bairro");
const divState = document.querySelector(".estado");
const divResult = document.querySelector(".cep-content-container");

const getCep = async () => {
  const cep = input.value;

  const apiUrl = `https://cep.awesomeapi.com.br/json/${cep}`;
  const res = await fetch(apiUrl);
  const data = await res.json();

  if (input.value === "") {
    alert("Por favor, insira o CEP.");
  } else {
    divCep.innerHTML = `<p>${data.address}</p>`;
    divCity.innerHTML = `<p>${data.city}</p>`;
    divDistrict.innerHTML = `<p>${data.district}</p>`;
    divState.innerHTML = `<p>${data.state}</p>`;
    divResult.classList.add("show");
  }
};

btn.addEventListener("click", () => {
  getCep();
});
