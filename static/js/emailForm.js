export const emailForm = () => {
  const form = document.createElement("form");
  form.className = "mail-form";
  const div = document.createElement("div");
  form.id = new Date().getTime();
  div.insertAdjacentHTML(
    "afterbegin",
    "<p class='form-heading'>Please Enter details to continue further</p>"
  );
  const contactDiv = document.createElement("div");
  contactDiv.className = "contact-div";
  const contactInput = document.createElement("input");
  contactInput.placeholder = "Mobile Number 10 digits";
  contactInput.type = "tel";
  contactInput.pattern = "[0-9]{10}";
  contactInput.required = "true";
  contactInput.className = "contact-input";
  contactDiv.appendChild(contactInput);

  const emailDiv = document.createElement("div");
  emailDiv.className = "email-div";
  const emailInput = document.createElement("input");
  emailInput.className = "email-input";

  emailInput.placeholder = "example@email.com";
  emailInput.type = "email";
  emailInput.required = "true";
  emailDiv.appendChild(emailInput);

  const submitButton = document.createElement("button");
  submitButton.innerText = "send";
  submitButton.className = "submit-details";

  div.appendChild(contactDiv);
  div.appendChild(emailDiv);
  div.appendChild(submitButton);
  form.appendChild(div);

  return form;
};
