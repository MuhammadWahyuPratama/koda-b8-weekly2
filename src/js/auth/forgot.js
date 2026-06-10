const form = document.querySelector("form");
const email = document.getElementById("email");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (email.value === "") {
    alert("Masukkan Email Anda");
    return;
  }

  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    alert("Belum ada akun terdaftar");
    return;
  }

  if (email.value === user.email) {
    alert("Tautan Reset Sudah dikirim Di Email Anda");
    return;
  } else {
    alert(" Email Anda Belum Terdaftar");
  }
});
