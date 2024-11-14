const display = document.getElementById("display");
const button = document.querySelectorAll(".button");

button.forEach((button) => {
  button.addEventListener("click", function () {
    const buttonText = this.textContent;

    if (buttonText === "AC") {
      display.value = "";

    } else if (buttonText === "B") {
      display.value = display.value.slice(0, -1);

    } else if (buttonText === "=") {
      try {
        display.value = eval(display.value);
      } catch (error) {
        display.value = "Error";
      }
    } 
    
    else {
      display.value += buttonText;
    }
  });
});