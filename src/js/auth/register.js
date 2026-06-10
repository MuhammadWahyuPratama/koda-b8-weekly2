const form = document.getElementById("register-form");
const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (
    fullname.value == "" ||
    email.value == "" ||
    password.value == "" ||
    confirm-password.value == ""
  ) {
    alert("Semua field wajib diisi");
    return;
  }

  if (password.value !== confirmPassword.value) {
    alert("Password tidak cocok");
    return;
  }

  const user = {
    fullname: fullname.value,
    email: email.value,
    password: password.value
};

localStorage.setItem("user",JSON.stringify(user))
});

