import { formatDate } from "./utils.js";

export const msg = (name, imageURL, side, messageText, isBotTyping = false) => {
  //create elements

  const msg = document.createElement("div");
  const msgIcon = document.createElement("div");
  const msgBubble = document.createElement("div");

  // add classes

  msg.classList.add("msg", `${side}-msg`);
  msgIcon.className = "msg-img";
  msgBubble.className = "msg-bubble";
  msgIcon.style.backgroundImage = `url(${imageURL})`;

  //create structure
  msg.appendChild(msgIcon);
  msg.appendChild(msgBubble);

  // if bot is typing append dots
  if (isBotTyping) {
    msg.classList.add("loader");
    msgBubble.insertAdjacentHTML("afterbegin", threeDots());
  } else {
    msgBubble.insertAdjacentHTML("afterbegin", msgInfo(name, messageText));
  }

  return msg;
};

//structure of bot typing div

function threeDots() {
  return `<div className="typing-anim">
      <div class="typing">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
    </div>`;
}

// structure of Bot or user msg
function msgInfo(name, text) {
  return `<div class="msg-info">
                <div class="msg-info-name">${name}</div>
                <div class="msg-info-time">
                    ${formatDate(new Date())}
                </div>
            </div>
            <div class="msg-text">${text}</div>`;
}
