document.addEventListener("DOMContentLoaded", () => {
    const heroButton =
        document.querySelector(",hero-button");

    heroButton.addEventListener("mouseover", () => {
        heroButton.style.boxShdow = "0px 4px 15px rgba(240,84,84,0.5)";
    });

    heroButton.addEventListener("mouseout", () => {
        heroButton.style.boxShdow = "none";
    });
});