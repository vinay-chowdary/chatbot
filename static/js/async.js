import { emailForm } from "./emailForm.js";
import { getElement, msgerChat } from "./utils.js";

export async function botResponse(userMsg) {
  const res = await fetch("/botresponse", {
    body: JSON.stringify({ msg: userMsg }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });
  const data = await res.json();
  const botText = data.msg;
  removeTyping();
  return botText;
}

export const sendDetails = () =>
  new Promise(async (resolve, reject) => {
    const form = emailForm();
    console.log(form);
    msgerChat.appendChild(form);
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const email = getElement(".email-input", form).value;
      const contact = getElement(".contact-input", form).value;
      console.log("data to send = ", email, contact);
      form.remove();
      const res = await fetch("/details", {
        body: JSON.stringify({ contact: contact, email: email }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
      const data = await res.json();
      resolve(data);
    });
  });
