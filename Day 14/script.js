dragbox = document.querySelector(".dragbox")
awesomeBox = document.querySelector(".awesome-inputbox")

dragbox.addEventListener("dblclick",() => {
  console.log("Double Click")
})

awesomeBox.addEventListener("focus", () => {
  awesomeBox.placeholder = "Focused"
})

awesomeBox.addEventListener("blur", () => {
  awesomeBox.placeholder = "Blurred"
})

dragbox.addEventListener("dragstart", () => {
  dragbox.style.backgroundColor = "blue";
})


dragbox.addEventListener("dragend", () => {
  dragbox.style.backgroundColor = "red";
})