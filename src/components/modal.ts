export const renderModal = (text: string, handleNewGame: () => void) => {
    const overlay = document.createElement("div");

    overlay.classList.add("overlay");

    const content = document.createElement("div");

    content.classList.add("content");
    overlay.append(content);
    content.innerHTML = text;

    const button = document.createElement("button");

    button.classList.add("button");
    button.textContent = "Начать новую игру";
    content.append(button);
    button.addEventListener("click", handleNewGame);

    return overlay;
};
