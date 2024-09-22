const iconButton = document.querySelector("#iconEye");
const typePass = document.querySelector("#password");
const deleteButton = document.querySelector(".delete-button");
const modalDelete = document.querySelector(".modal-delete");
const modalConfirm = document.querySelector(".modal-confirm");
const cancelButton = document.querySelector("#cancel-button");
const confirmButton = document.querySelector(".confirm-button");
const confirmModalButton = document.querySelector("#confirm-modal-button");

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

deleteButton.onclick = function () {
  modalDelete.showModal();
};

cancelButton.onclick = function () {
  modalDelete.close();
};

confirmButton.onclick = function () {
  modalConfirm.showModal();
};

confirmModalButton.onclick = function () {
  modalConfirm.close();
};
