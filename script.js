// Second project of Mouhcine's Fallahi Js Portfolio
// Counter
//------------------------------------------------------------------//

//----------------------//
// Dom Elements         //
//--------------------- //
const count = document.querySelector(".counter-count");
const buttonContainer = document.querySelector(".counter-buttons");
const increment = document.querySelector(".button--increment");
const decrement = document.querySelector(".button--decrement");

// The current count

let currentCount = 0;
// colors
let incrementColor = "#78a6c8";
let decrementColor = "#e65c4f";
//----------------------//
// Update function      //
//--------------------- //
const update = (value, color) => {
  count.innerHTML = value;
  count.style.color = color;
  count.style.transform = "scale(1.2)";
  setTimeout(() => {
    count.style.color = "";
    count.style.transform = "";
  }, 500);
};
// initial call
update(currentCount);
//----------------------//
// Events               //
//--------------------- //
// We will update the value every time the user clicks on a button
buttonContainer.addEventListener("click", (event) => {
  const target = event.target;
  console.log(target);
  if (target.classList.contains("button--increment")) {
    currentCount++;
    update(currentCount, incrementColor);
  } else if (target.classList.contains("button--decrement")) {
    currentCount--;
    update(currentCount, decrementColor);
  }
});
