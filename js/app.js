// Dynamic Section Loading
function loadSection(sectionId, url) {
    fetch(url)
        .then((response) => response.text())
        .then((html) => {
            document.getElementById(sectionId).innerHTML = html;
        })
        .catch((error) => console.error('Error loading section:', error));
}

// Update Water Tracker Progress
function updateWaterTracker(amount) {
    const progressBar = document.querySelector(".progress div");
    const currentWidth = parseInt(progressBar.style.width);
    const newWidth = Math.min(currentWidth + amount, 100);
    progressBar.style.width = `${newWidth}%`;

    const waterText = document.querySelector(".water-intake p");
    const consumed = Math.round((newWidth / 100) * 8); // Assume 8 glasses goal
    waterText.innerText = `${consumed}/8 glasses consumed`;
}

// Quick-Add Buttons
document.addEventListener("click", (event) => {
    if (event.target.matches(".quick-add button")) {
        const amount = parseInt(event.target.dataset.amount); // Example: data-amount="25"
        updateWaterTracker(amount);
    }
});
