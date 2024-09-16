const iconButton = document.querySelector("#iconEye");
const typePass = document.querySelector("#password");

iconButton.addEventListener("click", olhoSenha);

function olhoSenha() {
  if (typePass.type === "password") {
    typePass.setAttribute("type", "text");
    iconButton.classList.replace("bi-eye-fill", "bi-eye-slash-fill");
  } else if (typePass.type === "text") {
    typePass.setAttribute("type", "password");
    iconButton.classList.replace("bi-eye-slash-fill", "bi-eye-fill");
  }
}

function switchModal() {
  const modal = document.querySelector(".modal");
  const actualStyle = modal.style.display;
  if (actualStyle == "block") {
    modal.style.display = "none";
  } else {
    modal.style.display = "block";
  }
}

const btn = document.querySelector(".delete-button");
btn.addEventListener("click", switchModal);

window.onclick = function (event) {
  const modal = document.querySelector(".modal");
  if (event.target == modal) {
    switchModal();
  }
};

const apelido = document.getElementById("surname");
const name = document.getElementById("nome");
const lastName = document.getElementById("sobrenome");
const email = document.getElementById("email");
const password = document.getElementById("password");

function setDataUser(surname, nameUser, lastNameUser, emailUser, passwordUser) {
  apelido.value = surname;
  name.value = nameUser;
  lastName.value = lastNameUser;
  email.value = emailUser;
  password.value = passwordUser;
}

document.addEventListener("DOMContentLoaded", async function () {
  const userID = {
    _id: "66e4e9d5d51ddb637ef723bf",
  };

  try {
    const response = await fetch("http://localhost:3000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userID),
    });

    const data = await response.json();
    console.log(data.surname);

    const messageDiv = document.getElementById("message");
    if (response.ok) {
      setDataUser(
        data.surname,
        data.name,
        data.last_name,
        data.email,
        data.password
      );
    }
  } catch (error) {
    console.error("Erro na requisição:", error);
    const messageDiv = document.getElementById("message");
    messageDiv.textContent = "Erro na requisição.";
    messageDiv.style.color = "red";
  }
});

const buttonConfirm = document
  .getElementById("confirmButton")
  .addEventListener("click", async () => {
    const userUpdate = {
      _id: "66e4e9d5d51ddb637ef723bf",
      name: name.value,
      last_name: lastName.value,
      surname: apelido.value,
      email: email.value,
      password: password.value,
    };
    try {
      const response = await fetch("http://localhost:3000/user", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userUpdate),
      });
    } catch (error) {
      console.error("Erro na requisição:", error);
    }
  });
