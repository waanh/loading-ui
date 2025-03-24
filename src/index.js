document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.getElementById("loading-screen");
    const content = document.getElementById("content");

    setTimeout(() => {
        loadingScreen.classList.add("hidden");
        content.classList.remove("hidden");
    }, 3000); 
});
