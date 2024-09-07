const switchModal = () => {
  const modal = document.querySelector(".modal");
  const actualStyle = modal.style.display;
  if (actualStyle == "block") {
    modal.style.display = "none";
  } else {
    modal.style.display = "block";
  }
};

const btn = document.querySelector(".botao-excluir");
btn.addEventListener("click", switchModal);

window.onclick = function (event) {
  const modal = document.querySelector(".modal");
  if (event.target == modal) {
    switchModal();
  }
};
