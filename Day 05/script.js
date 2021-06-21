buttons = document.querySelectorAll("button");
display = document.querySelector(".display")


let query = "";

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        content = button.getAttribute("action");
        if (content.length === 1) {
            query += content;
           display.innerHTML = query;
        }
        else if (content == "equal") {
            display.innerHTML = eval(query);
            query = "";
        }
        else if (content == "clear") {
            display.innerHTML = "";
        }

    })
}) 