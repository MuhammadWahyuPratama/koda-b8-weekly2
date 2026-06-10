const form = document.querySelector("form");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (email.value == "" || password.value == "") {
    alert("Semua field wajib diisi");
    return;
  }

  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    alert("Akun anda belum terdaftar");
    return;
  }

  if (email.value === user.email && password.value === user.password) {
    alert("Login Berhasil!!!");
    window.location.href = "../page/index.html";
    return;
  } else {
    alert("Email atau Password salah!!");
  }
  consolelog(user)
});
