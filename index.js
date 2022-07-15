
const title = document.querySelector("#title");
const text = document.querySelector("#text");
const button = document.querySelector("button");

// function adviceQuote() {
//     fetch("https://api.adviceslip.com/advice").then(res => res.json()).then(result => {
//     console.log(result);
//     text.innerHTML = result.advice;
//     });
// }


// button.addEventListener("click", adviceQuote);

const adviceQuote = async () => {
    const res = await fetch("https://api.adviceslip.com/advice")
    const data = await res.json()
  
    title.innerHTML = `Advice #${data.slip.id}`
   text.innerHTML = `"${data.slip.advice}"`
  }
  
  adviceQuote()