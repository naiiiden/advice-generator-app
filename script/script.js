const adviceButton = document.querySelector("#advice_button");
const adviceText = document.querySelector("#advice_text");
const adviceId = document.querySelector("#advice_id");
const dice = document.querySelector("#dice");

window.onload = function() {
    fetchAdvice();
}

async function fetchAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice", {cache: "no-cache"});
    const data = await response.json();
    adviceId.textContent = `ADVICE #${data["slip"]["id"]}`;
    adviceText.textContent = `"${data["slip"]["advice"]}"`;
    return data;
}

adviceButton.addEventListener("click", fetchAdvice);