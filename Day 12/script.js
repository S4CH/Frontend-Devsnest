input_box = document.querySelector(".input-data > input");
add_button = document.querySelector(".input-data > button");
complete_container = document.querySelector(".complete");
incomplete_container = document.querySelector(".incomplete");

const createTodo = () => {
  // Create and Initialize todo container
  const todo_container = document.createElement("div");
  todo_container.classList.add("todo");

  // Add Text to it

  const text_container = document.createElement("h4");
  text_container.innerHTML = input_box.value;
  todo_container.appendChild(text_container);

  // Create Ops container
  const ops = document.createElement("div");
  ops.classList.add("ops");

  // Add Checkbox to it
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.classList.add("done");

  // Add event listener to checkbox to do following processing
  // 1. Move the todo to complete state
  // 2. Strikethrough the todo text

  checkbox.addEventListener("click", () => {
    let textElement = checkbox.parentNode.parentNode.querySelector("h4");
    let tempTodo = textElement.parentNode;
    if (checkbox.checked == true) {
      textElement.style.textDecoration = "line-through";
      complete_container.appendChild(tempTodo);
    } else {
      textElement.style.textDecoration = "none";
      incomplete_container.appendChild(tempTodo);
    }
  });

  ops.appendChild(checkbox);

  // Add delete button to it
  const delete_button = document.createElement("button");
  delete_button.innerHTML = "X";

  delete_button.addEventListener("click",() => {
    let grandparent = delete_button.parentNode.parentNode;
    grandparent.parentNode.removeChild(grandparent);
  })

  ops.appendChild(delete_button);

  // Add ops to todo container
  todo_container.appendChild(ops);

  // Add todo to incomplete box
  incomplete_container.appendChild(todo_container);
};

const resetInputBox = () => {
  input_box.value = "";
};

add_button.addEventListener("click", () => {
  createTodo();
  resetInputBox();
});
