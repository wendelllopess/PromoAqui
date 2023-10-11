// script.js
const openPopupButton = document.getElementById("open-popup");
const closePopupButton = document.getElementById("close-popup");
const popup = document.getElementById("popup");

closePopupButton.addEventListener("click", () => {
    popup.style.display = "none";
}); 

openPopupButton.addEventListener("click", () => {
    popup.style.display = "block";
});


// Fechar o pop-up se o usuário clicar fora do conteúdo
window.addEventListener("click", (event) => {
    if (event.target === popup) {
        popup.style.display = "none";
    }
});





