const form = document.querySelector(".login-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {};

  const email = e.target.email.value.trim(); //витягаю почту з поля вводу
  const password = e.target.password.value.trim(); //витягаю пароль

  const isEmailEmpty = email === ""; //перевірка на відсутність вводу
  const isPasswordEmpty = password === "";

  if (isEmailEmpty || isPasswordEmpty)
    alert("All form fields must be filled in");
  else {
    data.email = email;
    data.password = password;
    console.log(data);
    e.target.reset();
  }
});
