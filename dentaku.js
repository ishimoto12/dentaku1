let buttons = document.querySelectorAll("button");
let display = document.getElementById("display");

function buttonPressed(Event) {
  const text = Event.target.textContent;
  let lastWord = display.textContent.slice(-1);

  if (text === "=") {
    display.textContent = eval(display.textContent);
  } else if (text === "AC") {
        display.textContent = 0;
  } else if (text === "+" || text === "-" || text === "*" || text === "/") {
        if (lastWord === "+" || lastWord === "-" || lastWord === "*" || lastWord === "/") {
            display.textContent = display.textContent.slice(0, -1);
            display.textContent += text;
        } else {
            display.textContent += text;
        }
  } else {
        if (display.textContent === "0") {
            display.textContent = text;
        }
        else {
            display.textContent += text;
        }
  }
}

buttons.forEach((button) => {addEventListener("click", buttonPressed);});