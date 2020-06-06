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

//

const elHtml =
    document.querySelector(".elHtml");
const modalContainerHtml =
    document.querySelector(".modalContainerHtml");

elHtml.onclick = () => {
    modalContainerHtml.style.display = "block";
}

elHtml.onclick = () => {
    if (mmodalContainerHtml.style.display == "block") {
        modalContainerHtml.style.display = "none";
    } else {
        modalContainerHtml.style.display = "block";
    }
}

