function shuffle(array) {
  var currentIndex = array.length,
    randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

questions = [
  {
    question: "1. Which Hokage sealed the nine-tailed fox inside Naruto?",
    image: "hokages.jpg",
    options: ["Fourth Hokage", "Second Hokage", "Third Hokage", "First Hokage"],
    answer: "Fourth Hokage",
  },
  {
    question: "2. Who tricked Naruto into stealing a sacred scroll?",
    image: "naruto_scroll.jpg",
    options: ["Mizuki", "Sasuke", "Iruka", "Zabuza"],
    answer: "Mizuki",
  },
  {
    question: "3. Which character can only use taijutsu?",
    image: "konoha.jpg",
    options: ["Rock Lee", "Kiba Inuzuka", "Ino Yamanaka", "Neji Hyuga"],
    answer: "Rock Lee",
  },
  {
    question: "4. Naruto first shows his nine-tails chakra when he fights who?",
    image: "naruto_sasuke.jpg",
    options: ["Haku", "Gaara", "Orochimaru", "Itachi Uchiha"],
    answer: "Haku",
  },
  {
    question: "5. What does 'Chidori' mean?",
    image: "chidori.jpg",
    options: [
      "One Thousand Birds",
      "Thousand Years of Death",
      "Five Thousand Swords",
      "Lightning Blade",
    ],
    answer: "One Thousand Birds",
  },
];

let i = 0;

counter = document.querySelector(".counter");
next = document.querySelector(".next");
previous = document.querySelector(".previous");

const setCount = () => {
  counter.innerHTML = `Question : ${i + 1}/5`;
  console.log(i);
};

const setQuestion = () => {
  let data = questions[i];
  const question_element = document.querySelector(".question");
  question_element.innerHTML = data.question;

  const question_image = document.createElement("img");
  question_image.src = `assets/${data.image}`;
  image_container = document.querySelector(".image-container");
  image_container.removeChild(document.querySelector("img"));
  image_container.appendChild(question_image);

  options_element = document.querySelector(".options");
  options_element.innerHTML = "";
  option1 = document.createElement("div");
  option2 = document.createElement("div");
  option3 = document.createElement("div");
  option4 = document.createElement("div");
  options = [option1, option2, option3, option4];

  shuffle(data.options);

  x = 0;

  options.forEach((option) => {
    option.classList.add("option");
    option.classList.add("b");
    option.innerHTML = data.options[x];
    options_element.appendChild(option);
    x++;

    option.addEventListener("click", (e) => {
      if (e.target.innerHTML == data.answer) {
        option.style.backgroundColor = "green";
      } else {
        option.style.backgroundColor = "orangered";
      }
      selected_options = document.querySelectorAll(".option");
      selected_options.forEach((option) => {
        if (option.innerHTML == data.answer) {
          option.style.backgroundColor = "limegreen";
        }
        option.style.pointerEvents = "none";
      });
    });
  });
};

previous.addEventListener("click", (e) => {
  if (i > 0) {
    i -= 1;
    setCount();
    setQuestion();
  } else {
    console.log("This is the first question");
  }
});

next.addEventListener("click", (e) => {
  if (i < 4) {
    i += 1;
    setCount();
    setQuestion();
  } else {
    console.log("This is the last question");
  }
});

setQuestion();
