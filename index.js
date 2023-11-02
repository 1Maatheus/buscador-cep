const btn = document.querySelector(".btn-generator");
const divPic = document.querySelector(".dog-container");
const input = document.querySelector(".input");
const name = document.querySelector(".name");
const apiKey = "RGAPI-b12dec26-9826-46f6-ad59-aefb664e0058";

const getDogPic = async () => {
  const cep = input.value;

  const apiUrl = `https://cep.awesomeapi.com.br/json/${cep}`;
  const res = await fetch(apiUrl);
  const data = await res.json();

  // divPic.innerHTML = `<img class="img-dog" src="${data[0].url}" />`;
  // // name.innerHTML = `<h1>${data.name}</h1>`;
  // divPic.classList.add("show");
  console.log(data);
};

btn.addEventListener("click", () => {
  getDogPic();
});
