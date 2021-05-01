const siteHamburger = document.querySelector(".site__nav-hamburger");
const siteMenuList = document.querySelector(".site__nav-list");
const siteNavLinks = document.querySelectorAll(".site__nav-link");

const toggleSiteMenu = (e) => {
  siteHamburger.classList.toggle("site__nav-hamburger--open");
  siteMenuList.classList.toggle("site__nav-list--open");
};
const selectNavLink = (e) => {
  document
    .querySelector(".site__nav-link--selected")
    .classList.remove("site__nav-link--selected");
  e.target.classList.add("site__nav-link--selected");
};

siteHamburger.addEventListener("click", toggleSiteMenu);
siteNavLinks.forEach((link) => {
  link.addEventListener("click", selectNavLink);
});

const signupForm = document.querySelector(".signup__form");
const signupFields = document.querySelectorAll(".signup__field");

const validateForm = (e) => {
  e.preventDefault();
  removeErrorMessages();

  signupFields.forEach((field) => {
    if (
      field.value.trim().length === 0 &&
      ![`contact`, `address2`, `shirtSize`].includes(field.name)
    )
      field.classList.add("signup__field--error");

    if ([`firstName`, `lastName`].includes(field.name)) {
      if (field.value.length < 2 || field.value.length < 2) {
        field.classList.add("signup__field--error");
        insertErrorMessageBefore(
          signupForm,
          `${field.placeholder} should be at least 2-characters long`
        );
      }
    }

    if (field.name === "email" && !isValidEmail(field.value.trim()))
      insertErrorMessageBefore(
        signupForm,
        `${field.placeholder} should be in this format: sampleemail@abc.xyz`
      );
  });

  if (!document.querySelector("[name='terms']").checked) {
    insertErrorMessageBefore(
      signupForm,
      `You must agree to our Terms and Conditions in order to sign up`
    );
  } else {
    if (document.querySelectorAll(".err-msg").length === 0) {
      signupForm.submit();
    }
  }
};

signupForm.addEventListener("submit", validateForm);
signupFields.forEach((field) => {
  field.addEventListener("input", (e) => {
    field.classList.remove("signup__field--error");
  });
});

function removeErrorMessages() {
  document.querySelectorAll(".err-msg").forEach((field) => {
    field.remove();
  });
}

function showFieldError(field, errorMessage) {
  field.classList.add("signup__field--error");
  field.nextSibling.classList.add("err-msg--visible");
  field.nextSibling.innerText = errorMessage;
}

function insertErrorMessageBefore(target, errorMessage) {
  const errorCont = document.createElement("SMALL");
  errorCont.classList.add("err-msg");
  errorCont.innerText = `* ${errorMessage}`;
  target.insertAdjacentElement("beforebegin", errorCont);
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
