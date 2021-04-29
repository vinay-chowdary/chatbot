const msgerForm = get(".msger-inputarea");
const msgerInput = get(".msger-input");
const msgerChat = get(".msger-chat");
const msgTime = get(".msg-info-time");

msgTime.innerText = `${formatDate(new Date())}`;

// Icons made by Freepik from www.flaticon.com
const BOT_IMG = "https://image.flaticon.com/icons/svg/327/327779.svg";
const PERSON_IMG = "https://image.flaticon.com/icons/svg/145/145867.svg";
const BOT_NAME = "Bot";
const PERSON_NAME = "You";

msgerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const msgText = msgerInput.value;
  if (!msgText) return;

  appendMessage(PERSON_NAME, PERSON_IMG, "right", msgText);
  msgerInput.value = "";
  appendLoader();
  botResponse(msgText);
});

function appendMessage(name, img, side, text) {
  //   Simple solution for small apps
  const msgHTML = `
<div class="msg ${side}-msg">
  <div class="msg-img" style="background-image: url(${img})"></div>
  <div class="msg-bubble">
    <div class="msg-info">
      <div class="msg-info-name">${name}</div>
      <div class="msg-info-time">${formatDate(new Date())}</div>
    </div>
    <div class="msg-text">${text}</div>
  </div>
</div>
`;

  msgerChat.insertAdjacentHTML("beforeend", msgHTML);
  msgerChat.scrollTop += 500;
}

function appendLoader() {
  const loaderHTML = `
<div class="msg left-msg loader">
  <div class="msg-img" style="background-image: url(${BOT_IMG})"></div>
  <div class="msg-bubble">
  
  <div className="typing-anim">
  <div class="typing">
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  </div>
  </div>
  
  </div>
</div>
`;

  msgerChat.insertAdjacentHTML("beforeend", loaderHTML);
  msgerChat.scrollTop += 500;
}

function removeLoader() {
  var chat = get(".loader");
  chat.remove();
}

// get the Bot Response

async function botResponse(rawText) {
  const res = await fetch("/botresponse", {
    body: JSON.stringify({ msg: rawText }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });
  const data = await res.json();
  const msgText = data.msg;
  removeLoader();

  appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
}

// Utils
function get(selector, root = document) {
  return root.querySelector(selector);
}

function formatDate(date) {
  const h = "0" + date.getHours();
  const m = "0" + date.getMinutes();

  return `${h.slice(-2)}:${m.slice(-2)}`;
}
