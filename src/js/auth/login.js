const form = document.querySelector("form")
const email = document.getElementById("email")
const password = document.getElementById("password")

form.addEventListener("submit" , (e)=>{
    e.preventDefault();

    if(
        email.value == "" || password.value == ""
    ) {
        alert("Semua field wajib diisi")
        return
    }

     console.log(email.value)
    console.log(password.value)

})