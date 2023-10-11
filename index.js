let a = document.querySelector(".imageContainer");

let b = document.getElementById("btn");
b.onclick = () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then((json) => {
      console.log(json, "hello World");
      console.log(json.message);
      a.innerHTML = `<img src="${json.message}" alt="Loading"/>`;
    });
};
b.onclick();
