const elModal =
    document.querySelector(".elModal");
const modalContainer =
    document.querySelector(".modalContainer");

elModal.onclick = () => {
    modalContainer.style.display = "block";
}

elModal.onclick = () => {
    if (modalContainer.style.display == "block") {
        modalContainer.style.display = "none";
    } else {
        modalContainer.style.display = "block";
    }
}