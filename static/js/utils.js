// Utils

export const msgerForm = getElement(".msger-form");
export const msgerChat = getElement(".msger-chat");
export const msgTime = getElement(".msg-info-time");
export const inputField = getElement(".msger-input");
export const BOT_IMG = "https://image.flaticon.com/icons/svg/327/327779.svg";
export const PERSON_IMG = "https://image.flaticon.com/icons/svg/145/145867.svg";
export const BOT_NAME = "Bot";
export const PERSON_NAME = "You";

// Utils Functions

export function getElement(selector, root = document) {
  return root.querySelector(selector);
}

export function formatDate(date) {
  const h = "0" + date.getHours();
  const m = "0" + date.getMinutes();

  return `${h.slice(-2)}:${m.slice(-2)}`;
}
