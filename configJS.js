function switchModal() {
  const modal = document.querySelector(".modal");
  const actualStyle = modal.style.display;
  if (actualStyle == "block") {
    modal.style.display = "none";
  } else {
    modal.style.display = "block";
  }
}

const btn = document.querySelector(".botao-excluir");
btn.addEventListener("click", switchModal);

window.onclick = function (event) {
  const modal = document.querySelector(".modal");
  if (event.target == modal) {
    switchModal();
  }
};

const iconButton = document.querySelector("#iconOlho");
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

const switchModalConfirmar = () => {
  const modalConfirmar = document.querySelector(".modalConfirmar");
  const actualStyleConfirmar = modalConfirmar.style.display;
  if (actualStyleConfirmar == "block") {
    modalConfirmar.style.display = "none";
  } else {
    modalConfirmar.style.display = "block";
  }
};

const btnConfirmar = document.querySelector(".botao-confirmar");
btnConfirmar.addEventListener("click", switchModalConfirmar);

window.onclick = function (event) {
  const modalConfirmar = document.querySelector(".modalConfirmar");
  if (event.target == modalConfirmar) {
    switchModalConfirmar();
  }
};
