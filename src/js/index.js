const linkDoVideo = "https://www.youtube.com/embed/Cb4WV4aXBpk"
const video = document.getElementById("video");
const botaoTrailer = document.querySelector(".botao-trailer");
const modal = document.querySelector(".modal");
const botaoFecharModal = document.querySelector(".fechar-modal");

botaoTrailer.addEventListener("click", () => {
    modal.classList.add("aberto")
    video.setAttribute("src", linkDoVideo)
});

botaoFecharModal.addEventListener("click", () => {
    modal.classList.remove("aberto")
    video.setAttribute("src", "")
    });