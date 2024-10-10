
function toggleCaption(button) {
    const caption = button.previousElementSibling;

    if (caption.style.minHeight === "60px" || caption.style.minHeight === "") {
        caption.style.minHeight = caption.scrollHeight + "px"; // Expands to fit full content
        button.textContent = "less...";
    } else {
        caption.style.minHeight = "60px"; // Collapses back to initial height
        button.textContent = "more...";
    }
}
