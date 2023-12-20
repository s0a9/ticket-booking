const seats = document.querySelectorAll(".seat");
const counts = document.querySelector(".Count span");
const priceElem = document.querySelector(".price span");
const totElem = document.querySelector(".total span");
const subElem = document.querySelector(".Submit");
const InputBox = document.querySelector("#InputBox");
let count = 0;

const price = Math.floor(Math.random(1000, 2000) * 150);

const button = document.createElement("button");
button.innerHTML = "Submit";
button.classList.add("mx-auto");
button.classList.add("p-2");
button.classList.add("text-lg");
button.classList.add("bg-white");
button.classList.add("rounded");
button.classList.add("block");

const movies = document.querySelector("#Movies");
const time = document.querySelector("#Movies");
const date = document.querySelector("#Movies");
const snack = document.querySelector("#Movies");

seats.forEach((seat) => {
  seat.addEventListener("click", () => {
    if (!seat.classList.contains("occupied")) {
      if (!seat.classList.contains("selected")) {
        seat.classList.add("selected");
        priceElem.innerHTML = `${price}`;
        count += 1;
        counts.innerHTML = `${count}`;
        totElem.innerHTML = `${price * count}`;
        subElem.appendChild(button);
      } else {
        seat.classList.remove("selected");
        count -= 1;
        counts.innerHTML = `${count}`;
        totElem.innerHTML = `${price * count}`;
        if (!count) {
          priceElem.innerHTML = "0";
          count.innerHTML = "0";
          subElem.removeChild(button);
        }
      }
    }
  });
});

button.addEventListener("click", () => {
  InputBox.innerHTML = `<div class="mx-auto mt-[50%] text-white font-bold text-xl p-3 bg-gray-500 gap-3">
  <p>Movie Name : ${movies.options[movies.selectedIndex].value}</p>
  <p>Show Time: ${time.value}</p>
  <p>Date: ${date.value}</p>
  <p>Snake: ${snack.options[snack.selectedIndex].value}</p>
  <p>price Per Seat : ${price}</p>
  <p>Total Members: ${count}</p>
  <p>Total Price: ${price * count}</p>
  <p class="text-4xl mt-4 bg-green-600 p-4">Conformed</p>
  <button class="font-bold mt-3 bg-gray-800 p-3" onClick="window.location.reload()">GoBack</button></div>`;
});
