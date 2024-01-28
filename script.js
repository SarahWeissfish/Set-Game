//אתחול המשחק
//מערך הכרטיסים
let cards_arr = [
  { is_opened: false, src: "images/0.jpg", data_num: 1, data_color: "red", data_fill: "empty", data_shape: "diamond" },
  { is_opened: false, src: "images/1.jpg", data_num: 2, data_color: "red", data_fill: "empty", data_shape: "diamond" },
  { is_opened: false, src: "images/2.jpg", data_num: 3, data_color: "red", data_fill: "empty", data_shape: "diamond" },
  { is_opened: false, src: "images/3.jpg", data_num: 1, data_color: "red", data_fill: "empty", data_shape: "ellipse" },
  { is_opened: false, src: "images/4.jpg", data_num: 2, data_color: "red", data_fill: "empty", data_shape: "ellipse" },
  { is_opened: false, src: "images/5.jpg", data_num: 3, data_color: "red", data_fill: "empty", data_shape: "ellipse" },
  { is_opened: false, src: "images/6.jpg", data_num: 1, data_color: "red", data_fill: "empty", data_shape: "wave" },
  { is_opened: false, src: "images/7.jpg", data_num: 2, data_color: "red", data_fill: "empty", data_shape: "wave" },
  { is_opened: false, src: "images/8.jpg", data_num: 3, data_color: "red", data_fill: "empty", data_shape: "wave" },
  { is_opened: false, src: "images/9.jpg", data_num: 1, data_color: "red", data_fill: "striped", data_shape: "diamond" },
  { is_opened: false, src: "images/10.jpg", data_num: 2, data_color: "red", data_fill: "striped", data_shape: "diamond" },
  { is_opened: false, src: "images/11.jpg", data_num: 3, data_color: "red", data_fill: "striped", data_shape: "diamond" },
  { is_opened: false, src: "images/12.jpg", data_num: 1, data_color: "red", data_fill: "striped", data_shape: "ellipse" },
  { is_opened: false, src: "images/13.jpg", data_num: 2, data_color: "red", data_fill: "striped", data_shape: "ellipse" },
  { is_opened: false, src: "images/14.jpg", data_num: 3, data_color: "red", data_fill: "striped", data_shape: "ellipse" },
  { is_opened: false, src: "images/15.jpg", data_num: 1, data_color: "red", data_fill: "striped", data_shape: "wave" },
  { is_opened: false, src: "images/16.jpg", data_num: 2, data_color: "red", data_fill: "striped", data_shape: "wave" },
  { is_opened: false, src: "images/17.jpg", data_num: 3, data_color: "red", data_fill: "striped", data_shape: "wave" },
  { is_opened: false, src: "images/18.jpg", data_num: 1, data_color: "red", data_fill: "full", data_shape: "diamond" },
  { is_opened: false, src: "images/19.jpg", data_num: 2, data_color: "red", data_fill: "full", data_shape: "diamond" },
  { is_opened: false, src: "images/20.jpg", data_num: 3, data_color: "red", data_fill: "full", data_shape: "diamond" },
  { is_opened: false, src: "images/21.jpg", data_num: 1, data_color: "red", data_fill: "full", data_shape: "ellipse" },
  { is_opened: false, src: "images/22.jpg", data_num: 2, data_color: "red", data_fill: "full", data_shape: "ellipse" },
  { is_opened: false, src: "images/23.jpg", data_num: 3, data_color: "red", data_fill: "full", data_shape: "ellipse" },
  { is_opened: false, src: "images/24.jpg", data_num: 1, data_color: "red", data_fill: "full", data_shape: "wave" },
  { is_opened: false, src: "images/25.jpg", data_num: 2, data_color: "red", data_fill: "full", data_shape: "wave" },
  { is_opened: false, src: "images/26.jpg", data_num: 3, data_color: "red", data_fill: "full", data_shape: "wave" },
  { is_opened: false, src: "images/27.jpg", data_num: 1, data_color: "green", data_fill: "empty", data_shape: "diamond" },
  { is_opened: false, src: "images/28.jpg", data_num: 2, data_color: "green", data_fill: "empty", data_shape: "diamond" },
  { is_opened: false, src: "images/29.jpg", data_num: 3, data_color: "green", data_fill: "empty", data_shape: "diamond" },
  { is_opened: false, src: "images/30.jpg", data_num: 1, data_color: "green", data_fill: "empty", data_shape: "ellipse" },
  { is_opened: false, src: "images/31.jpg", data_num: 2, data_color: "green", data_fill: "empty", data_shape: "ellipse" },
  { is_opened: false, src: "images/32.jpg", data_num: 3, data_color: "green", data_fill: "empty", data_shape: "ellipse" },
  { is_opened: false, src: "images/33.jpg", data_num: 1, data_color: "green", data_fill: "empty", data_shape: "wave" },
  { is_opened: false, src: "images/34.jpg", data_num: 2, data_color: "green", data_fill: "empty", data_shape: "wave" },
  { is_opened: false, src: "images/35.jpg", data_num: 3, data_color: "green", data_fill: "empty", data_shape: "wave" },
  { is_opened: false, src: "images/36.jpg", data_num: 1, data_color: "green", data_fill: "striped", data_shape: "diamond" },
  { is_opened: false, src: "images/37.jpg", data_num: 2, data_color: "green", data_fill: "striped", data_shape: "diamond" },
  { is_opened: false, src: "images/38.jpg", data_num: 3, data_color: "green", data_fill: "striped", data_shape: "diamond" },
  { is_opened: false, src: "images/39.jpg", data_num: 1, data_color: "green", data_fill: "striped", data_shape: "ellipse" },
  { is_opened: false, src: "images/40.jpg", data_num: 2, data_color: "green", data_fill: "striped", data_shape: "ellipse" },
  { is_opened: false, src: "images/41.jpg", data_num: 3, data_color: "green", data_fill: "striped", data_shape: "ellipse" },
  { is_opened: false, src: "images/42.jpg", data_num: 1, data_color: "green", data_fill: "striped", data_shape: "wave" },
  { is_opened: false, src: "images/43.jpg", data_num: 2, data_color: "green", data_fill: "striped", data_shape: "wave" },
  { is_opened: false, src: "images/44.jpg", data_num: 3, data_color: "green", data_fill: "striped", data_shape: "wave" },
  { is_opened: false, src: "images/45.jpg", data_num: 1, data_color: "green", data_fill: "full", data_shape: "diamond" },
  { is_opened: false, src: "images/46.jpg", data_num: 2, data_color: "green", data_fill: "full", data_shape: "diamond" },
  { is_opened: false, src: "images/47.jpg", data_num: 3, data_color: "green", data_fill: "full", data_shape: "diamond" },
  { is_opened: false, src: "images/48.jpg", data_num: 1, data_color: "green", data_fill: "full", data_shape: "ellipse" },
  { is_opened: false, src: "images/49.jpg", data_num: 2, data_color: "green", data_fill: "full", data_shape: "ellipse" },
  { is_opened: false, src: "images/50.jpg", data_num: 3, data_color: "green", data_fill: "full", data_shape: "ellipse" },
  { is_opened: false, src: "images/51.jpg", data_num: 1, data_color: "green", data_fill: "full", data_shape: "wave" },
  { is_opened: false, src: "images/52.jpg", data_num: 2, data_color: "green", data_fill: "full", data_shape: "wave" },
  { is_opened: false, src: "images/53.jpg", data_num: 3, data_color: "green", data_fill: "full", data_shape: "wave" },
  { is_opened: false, src: "images/54.jpg", data_num: 1, data_color: "purple", data_fill: "empty", data_shape: "diamond" },
  { is_opened: false, src: "images/55.jpg", data_num: 2, data_color: "purple", data_fill: "empty", data_shape: "diamond" },
  { is_opened: false, src: "images/56.jpg", data_num: 3, data_color: "purple", data_fill: "empty", data_shape: "diamond" },
  { is_opened: false, src: "images/57.jpg", data_num: 1, data_color: "purple", data_fill: "empty", data_shape: "ellipse" },
  { is_opened: false, src: "images/58.jpg", data_num: 2, data_color: "purple", data_fill: "empty", data_shape: "ellipse" },
  { is_opened: false, src: "images/59.jpg", data_num: 3, data_color: "purple", data_fill: "empty", data_shape: "ellipse" },
  { is_opened: false, src: "images/60.jpg", data_num: 1, data_color: "purple", data_fill: "empty", data_shape: "wave" },
  { is_opened: false, src: "images/61.jpg", data_num: 2, data_color: "purple", data_fill: "empty", data_shape: "wave" },
  { is_opened: false, src: "images/62.jpg", data_num: 3, data_color: "purple", data_fill: "empty", data_shape: "wave" },
  { is_opened: false, src: "images/63.jpg", data_num: 1, data_color: "purple", data_fill: "striped", data_shape: "diamond" },
  { is_opened: false, src: "images/64.jpg", data_num: 2, data_color: "purple", data_fill: "striped", data_shape: "diamond" },
  { is_opened: false, src: "images/65.jpg", data_num: 3, data_color: "purple", data_fill: "striped", data_shape: "diamond" },
  { is_opened: false, src: "images/66.jpg", data_num: 1, data_color: "purple", data_fill: "striped", data_shape: "ellipse" },
  { is_opened: false, src: "images/67.jpg", data_num: 2, data_color: "purple", data_fill: "striped", data_shape: "ellipse" },
  { is_opened: false, src: "images/68.jpg", data_num: 3, data_color: "purple", data_fill: "striped", data_shape: "ellipse" },
  { is_opened: false, src: "images/69.jpg", data_num: 1, data_color: "purple", data_fill: "striped", data_shape: "wave" },
  { is_opened: false, src: "images/70.jpg", data_num: 2, data_color: "purple", data_fill: "striped", data_shape: "wave" },
  { is_opened: false, src: "images/71.jpg", data_num: 3, data_color: "purple", data_fill: "striped", data_shape: "wave" },
  { is_opened: false, src: "images/72.jpg", data_num: 1, data_color: "purple", data_fill: "full", data_shape: "diamond" },
  { is_opened: false, src: "images/73.jpg", data_num: 2, data_color: "purple", data_fill: "full", data_shape: "diamond" },
  { is_opened: false, src: "images/74.jpg", data_num: 3, data_color: "purple", data_fill: "full", data_shape: "diamond" },
  { is_opened: false, src: "images/75.jpg", data_num: 1, data_color: "purple", data_fill: "full", data_shape: "ellipse" },
  { is_opened: false, src: "images/76.jpg", data_num: 2, data_color: "purple", data_fill: "full", data_shape: "ellipse" },
  { is_opened: false, src: "images/77.jpg", data_num: 3, data_color: "purple", data_fill: "full", data_shape: "ellipse" },
  { is_opened: false, src: "images/78.jpg", data_num: 1, data_color: "purple", data_fill: "full", data_shape: "wave" },
  { is_opened: false, src: "images/79.jpg", data_num: 2, data_color: "purple", data_fill: "full", data_shape: "wave" },
  { is_opened: false, src: "images/80.jpg", data_num: 3, data_color: "purple", data_fill: "full", data_shape: "wave" }
];
var currentPage = window.location.pathname.split("/").pop().toLowerCase();
// Execute the relevant function based on the current page
let button_status = new Array(12).fill(false);
let set_cards = 0;
let count_choose_card = 0;
let three_cards = new Array();
function home_page() {
  document.getElementById("enter_btn").addEventListener("click", () => { login_form.style.display = "block" });
  document.querySelector(".close").addEventListener("click", () => { login_form.style.display = "none" });
  document.getElementById("password").addEventListener("change", validation);
  document.querySelector("form").addEventListener("submit", save_data);
}
//פונקצית ראשית למשחק
function the_game() {
  restart_board();
  //הוספת מאזין לארוע לחיצה על כפתור כרטיס
  for (let i = 1; i <= 12; i++) {
    document.getElementById(i).addEventListener("click", () => {
      const audio = new Audio("button-click-sound.mp3");
      audio.play();
    });
    document.getElementById(i).addEventListener("click", choose_card);
    let score=0;
    document.getElementById("score").textContent=score;
  }
  //בחירת רמה
  document.getElementById("level1_bth").addEventListener("click", () => {
    timer(300);
    document.getElementsByClassName("login_f")[0].classList.add("invisible")
  });
  document.getElementById("level2_bth").addEventListener("click", () => {
    timer(180);
    document.getElementsByClassName("login_f")[0].classList.add("invisible")
  });
  //מאזינים לכפתורים
  document.getElementById("clue_bth").addEventListener("click", clue_score);
  document.getElementById("clue_bth").removeAttribute("disabled");
  document.getElementById("add_bth").addEventListener("click", switch_card);
  document.getElementById("Instructions_bth").addEventListener("click", () => {
    window.open('pages/instructions.html');
  });

  document.getElementById("new_game_bth").addEventListener("click", () => {
    window.location.reload()
  });
  document.getElementById("Instruction_bth").addEventListener("click", () => {
    window.open('pages/instructions.html');
  });
  setInterval("check_count()",500);
};

//אתחול 
function restart_board() {
  for (let i = 1; i <= 12; i++) {
    push_img(i);
  }
}
//הגרלת מספר כרטיס שעדיין לא נבחר
function randomCard() {
  let num = Math.floor(Math.random() * 81);
  while (cards_arr[num].is_opened) {
    num = Math.floor(Math.random() * 81);
  }
  cards_arr[num].is_opened = true;
  set_cards++;
  return num;
}
//אתחול הלוח ב-12 כרטיסים
//הכנסת תמונה לכפתור
function push_img(id) {
  let this_card = randomCard();
  var img=document.createElement("img");
  document.getElementById(id).appendChild(img);
  document.getElementById(id).firstChild.setAttribute("src",cards_arr[this_card].src);
  //document.getElementById(id).innerHTML = "<img src=" + cards_arr[this_card].src + ">";
  document.getElementById(id).setAttribute("data_color", cards_arr[this_card].data_color);
  document.getElementById(id).setAttribute("data_num", cards_arr[this_card].data_num);
  document.getElementById(id).setAttribute("data_fill", cards_arr[this_card].data_fill);
  document.getElementById(id).setAttribute("data_shape", cards_arr[this_card].data_shape);
}
function check_count() {
  if (count_choose_card > 0)
    document.getElementById("clue_bth").setAttribute("disabled", true);
  else
    document.getElementById("clue_bth").removeAttribute("disabled");
}
//בחירת כרטיס או ביטול
function choose_card() {
  let this_id = this.id;
  //בחירה
  if (!(this.classList.contains("card_active"))) {
    this.classList.add("card_active");
    three_cards[count_choose_card] = {
      id: this.id,
      data_color: this.getAttribute("data_color"),
      data_num: this.getAttribute("data_num"),
      data_fill: this.getAttribute("data_fill"),
      data_shape: this.getAttribute("data_shape")
    };
    count_choose_card++;
  }
  //ביטול
  else {
    this.classList.remove("card_active");
    cancel(this_id);
  }
  if (count_choose_card == 3) {
    if (is_set()) {
      setTimeout(replace_card, 1000);
      score=parseInt(document.getElementById("score").textContent);
      score+=10;
      document.getElementById("score").textContent=score;
    }
    else{
      if (set_cards < 81){
        setTimeout(no_set, 1000);
      }
      else{
        onTimesUp(); 
      }
     
    }
      
    count_choose_card = 0;
  }
}
//ביטול בחירת כרטיס
function cancel(id) {
  count_choose_card--;
  document.getElementById(id).classList.remove("card_active");
  three_cards = three_cards.filter(card =>
    card.id != id
  );
}
//בדיקה האם סט
function is_set() {
  let is_same = [
    { attribute: "color", status: false },
    { attribute: "num", status: false },
    { attribute: "shape", status: false },
    { attribute: "fill", status: false }];
  if ((three_cards[0].data_color == three_cards[1].data_color && three_cards[1].data_color == three_cards[2].data_color) || (three_cards[0].data_color != three_cards[1].data_color && three_cards[1].data_color != three_cards[2].data_color && three_cards[2].data_color != three_cards[0].data_color)) {
    is_same[0].status = true;
  }

  if ((three_cards[0].data_num == three_cards[1].data_num && three_cards[1].data_num == three_cards[2].data_num) || (three_cards[0].data_num != three_cards[1].data_num && three_cards[1].data_num != three_cards[2].data_num && three_cards[2].data_num != three_cards[0].data_num)) {
    is_same[1].status = true;
  }

  if ((three_cards[0].data_shape == three_cards[1].data_shape && three_cards[1].data_shape == three_cards[2].data_shape) || (three_cards[0].data_shape != three_cards[1].data_shape && three_cards[1].data_shape != three_cards[2].data_shape && three_cards[2].data_shape != three_cards[0].data_shape)) {
    is_same[2].status = true;
  }

  if ((three_cards[0].data_fill == three_cards[1].data_fill && three_cards[1].data_fill == three_cards[2].data_fill) || (three_cards[0].data_fill != three_cards[1].data_fill && three_cards[1].data_fill != three_cards[2].data_fill && three_cards[2].data_fill != three_cards[0].data_fill)) {
    is_same[3].status = true;
  }
  let flag = true;
  for (let i = 0; i < is_same.length; i++) {
    if (is_same[i].status == false)
      return false;
  }
  return true;
}
//החלפת כרטיסים לאחר שנמצא סט
function replace_card() {
  const audio = new Audio("corect.mp3");
  audio.play();
  for (let i = 0; i < 3; i++) {
    if (set_cards < 81)
      push_img(three_cards[i].id);
    else {
      document.getElementById("add_bth").setAttribute("disabled",true);
      end_cards(three_cards[i].id);
    }
  }
  const boxes = document.querySelectorAll('.card_active');
  boxes.forEach(box => {
    box.classList.remove('card_active');
  })
  three_cards = [];
  count_choose_card = 0;
}
//ביטל בחירת כרטיסים שאינם סט 
function no_set() {
  const audio = new Audio("press_card.mp3");
  audio.play();
  var elements = document.getElementsByClassName("card_active");
  const boxes = document.querySelectorAll('.card_active');
  boxes.forEach(box => {
    box.classList.remove('card_active');
  })
  three_cards = [];
  count_choose_card = 0;
}
// תובודקת אם נגמר הכרטיסים מוחקת כרטיסים מהלוח
function end_cards(id) {
  document.getElementById(id).removeEventListener("click", choose_card);
  document.getElementById(id).style.opacity = 0;
  document.getElementById(id).opacity=0;
}
//במקרה שאין לי סט
function switch_card() {
  document.getElementById("4").is_opened = false;
  document.getElementById("8").is_opened = false;
  document.getElementById("12").is_opened = false;
  push_img("4");
  push_img("8");
  push_img("12");
}

//רמז
function clue(arr) {
  let isSet = false;
  for (let i = 0; i < arr.length-2; i++) {
    for (let j = i + 1; j < arr.length-1; j++) {
      for (let k = j + 1; k <arr.length; k++) {
        three_cards[0] = {
          id: (arr[i].id),
          data_color: arr[i].getAttribute("data_color"),
          data_num: arr[i].getAttribute("data_num"),
          data_fill: arr[i].getAttribute("data_fill"),
          data_shape: arr[i].getAttribute("data_shape")
        };
        three_cards[1] = {
          id: (arr[j].id),
          data_color: arr[j].getAttribute("data_color"),
          data_num: arr[j].getAttribute("data_num"),
          data_fill: arr[j].getAttribute("data_fill"),
          data_shape: arr[j].getAttribute("data_shape")
        };
        three_cards[2] = {
          id: (arr[k].id),
          data_color: arr[k].getAttribute("data_color"),
          data_num: arr[k].getAttribute("data_num"),
          data_fill: arr[k].getAttribute("data_fill"),
          data_shape: arr[k].getAttribute("data_shape")
        };
        isSet = is_set();
        if (isSet) {
          return true;
        }

      } 
      if(isSet) 
      return true;    
    }
if(isSet)
return true;
  }
    return false;
}
let cards=new Array();
function clue_score() {
  if (!score) {
    document.getElementById("clue_bth").setAttribute("disabled", true);
    return;
  }
  else {
    cards = [...document.querySelectorAll('.card')];
    console.log(cards);
    cards = cards.filter(card => card.style.opacity!='0');
    console.log(cards);
    score -= 5;
    document.getElementById("score").textContent = score;
    let fl=clue(cards);
    if (fl==true) {
      let num = Math.floor(Math.random() * 3);
      const element = document.getElementById(three_cards[num].id);
      element.classList.add("clue_card");
      setTimeout(function () {
        element.classList.remove("clue_card");
        three_cards = [];
      }, 1000);
    }
    else {
      if (fl == false) {

        alert("change cards");
      }
    }
  }
}
//שמירת השם ב-LOCALSTORAGE
function save_data() {
  var name = document.getElementById("name_input").value;
  localStorage.setItem('name', name);
}
if (currentPage === "homepage.html") {
  home_page();
} else if (currentPage === "game.html") {
  the_game();
}
//להצגת שם המשתמש
document.getElementById("welcom_to").innerHTML = localStorage.getItem('name');
//בדיקות ולידציה לקובץ
function validation() {
  let input = document.getElementById("password");
  if (input.validity.length < 8) {
    input.setCustomValidity("The password must be at least 8 characters long.");
  } else if (!/[A-Z]/.test(input.value)) {
    input.setCustomValidity("The password must contain at least one uppercase letter.");
  } else if (!/[a-z]/.test(input.value)) {
    input.setCustomValidity("The password must contain at least one lowercase letter.");
  } else if (!/[0-9]/.test(input.value)) {
    input.setCustomValidity("The password must contain at least one number.");
  } else if (!/[!@#$%^&*()_+]/.test(input.value)) {
    input.setCustomValidity("The password must contain at least one special character.");
  } else {
    input.setCustomValidity("");
  }
}
//טימר

function timer(x) {
  let TIME_LIMIT = x;
  let FULL_DASH_ARRAY = 283;
  const WARNING_THRESHOLD = x / 2;
  const ALERT_THRESHOLD = x / 4;
  const COLOR_CODES = {
    info: {
      color: "green"
    },
    warning: {
      color: "orange",
      threshold: WARNING_THRESHOLD
    },
    alert: {
      color: "red",
      threshold: ALERT_THRESHOLD
    }
  };
  let timePassed = 0;
  let timeLeft = TIME_LIMIT;
  let timerInterval = null;
  let remainingPathColor = COLOR_CODES.info.color;
  document.getElementById("app").innerHTML = `
    <div class="base-timer">
      <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g class="base-timer__circle">
          <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
          <path
            id="base-timer-path-remaining"
            stroke-dasharray="283"
            class="base-timer__path-remaining ${remainingPathColor}"
            d="
              M 50, 50
              m -45, 0
              a 45,45 0 1,0 90,0
              a 45,45 0 1,0 -90,0
            "
          ></path>
        </g>
      </svg>
      <span id="base-timer-label" class="base-timer__label">${formatTime(
    timeLeft
  )}</span>
    </div>
    `;

  startTimer();

 

  function startTimer() {
    timerInterval = setInterval(() => {
      timePassed = timePassed += 1;
      timeLeft = TIME_LIMIT - timePassed;
      document.getElementById("base-timer-label").innerHTML = formatTime(
        timeLeft
      );
      setCircleDasharray();
      setRemainingPathColor(timeLeft);

      if (timeLeft === 0) {
        onTimesUp();
      }
    }, 1000);
  }
  function onTimesUp() {
    clearInterval(timerInterval);
    var ends = document.querySelectorAll(".end");
    for (const item of ends) {
      item.style.display = "none";
    }
    document.getElementById("gameP").innerHTML += "<button id='new_game_bth' ></button>"
    document.getElementById("gameP").classList.add("game_over");
  }

  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    return `${minutes}:${seconds}`;
  }

  function setRemainingPathColor(timeLeft) {
    const { alert, warning, info } = COLOR_CODES;
    if (timeLeft <= alert.threshold) {
      document
        .getElementById("base-timer-path-remaining")
        .classList.remove(warning.color);
      document
        .getElementById("base-timer-path-remaining")
        .classList.add(alert.color);
    } else if (timeLeft <= warning.threshold) {
      document
        .getElementById("base-timer-path-remaining")
        .classList.remove(info.color);
      document
        .getElementById("base-timer-path-remaining")
        .classList.add(warning.color);
    }
  }

  function calculateTimeFraction() {
    const rawTimeFraction = timeLeft / TIME_LIMIT;
    return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
  }

  function setCircleDasharray() {
    const circleDasharray = `${(
      calculateTimeFraction() * FULL_DASH_ARRAY
    ).toFixed(0)} 283`;
    document
      .getElementById("base-timer-path-remaining")
      .setAttribute("stroke-dasharray", circleDasharray);
  }
}