import { msg } from "./msg.js";
import { BOT_IMG, BOT_NAME, getElement, msgerChat } from "./utils.js";

export function addTyping() {
  const typingMsg = msg(BOT_NAME, BOT_IMG, "left", "", true);
  msgerChat.insertAdjacentElement("beforeend", typingMsg);
  msgerChat.scrollTop += 500;
}

export function removeTyping() {
  var chat = getElement(".loader");
  chat.remove();
}
