// All imports

import {
  msgerForm,
  msgTime,
  inputField,
  BOT_IMG,
  PERSON_IMG,
  BOT_NAME,
  PERSON_NAME,
  formatDate,
  msgerChat,
} from "./utils.js";
import { createNav } from "./nav.js";
import { choices, noEvent } from "./data.js";
import { search } from "./search.js";
import { addTyping, removeTyping } from "./botTyping.js";
import { msg } from "./msg.js";
import { botResponse, sendDetails } from "./async.js";

const linkElements = {};
localStorage.setItem("dataSent", "");
msgTime.innerText = `${formatDate(new Date())}`;

// msgerChat.appendChild(emailForm());
msgerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const msgText = inputField.value;
  if (!msgText) return;

  appendMessage(PERSON_NAME, PERSON_IMG, "right", msgText);
  const userName = inputField.value;
  const greeting = `Hello ${userName},<br>good to see you here. May I know what are you lookingfor ?`;
  inputField.value = "";
  addTyping();
  inputField.placeholder = "Type your answer here...";
  setTimeout(() => {
    // when name is entered
    if (inputField.name == "name") {
      // const { value: get_choices } = search(choices, choices);

      respondToChoice(choices, greeting);
      inputField.name = "";
      updateDom();
      removeTyping();
    } else {
      const botMsg = botResponse(msgText);
      appendMessage(BOT_NAME, BOT_IMG, "left", botMsg);
    }
  }, 1000);
});

function updateDom() {
  const options = Array.from(document.querySelectorAll(".menu-link"));
  const newOptions = options.filter(
    (option) => !linkElements.hasOwnProperty(option.id)
  );
  newOptions.forEach((newOption) => {
    if (noEvent.includes(newOption.innerText)) {
      newOption.style.cursor = "default";
    } else {
      newOption.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("e", e.target);
        // if (e.target.href) {
        //   appendMessage(PERSON_NAME, PERSON_IMG, "right", e.target.href);
        //   e.target.style.background = "red";
        // }
        appendMessage(PERSON_NAME, PERSON_IMG, "right", e.target.innerText);
        respondToChoice(e.target.innerText);
      });
    }
    linkElements[newOption.id] = newOption;
  });
}

async function respondToChoice(
  selectedChoice,
  message = "Please select from the options"
) {
  const { value: options, reqMail, description, links } = search(
    choices,
    selectedChoice
  );
  if (reqMail && !Boolean(localStorage.getItem("dataSent"))) {
    const res = await sendDetails();
    localStorage.setItem("dataSent", "data has sent");
    console.log("abcdef", res);
  }
  const get_choices = options;
  let template = undefined;
  if (Array.isArray(get_choices)) {
    template = createNav(get_choices, links);
    if (get_choices.length) {
      appendMessage(
        BOT_NAME,
        BOT_IMG,
        "left",
        description || message,
        template
      );
    }
  } else {
    // template = createNav(Object.keys(brochure));
    appendMessage(
      BOT_NAME,
      BOT_IMG,
      "left",
      `${get_choices.bold()}<br>What are u looking for?`,
      template
    );
  }
  updateDom();
}

function appendMessage(name, imageURL, side, text, options = "") {
  const message = msg(name, imageURL, side, text, false);
  msgerChat.insertAdjacentElement("beforeend", message);
  options && msgerChat.insertAdjacentElement("beforeEnd", options);
  msgerChat.scrollTop += 500;
  msgerChat.scrollTo(0, msgerChat.scrollHeight);
}
