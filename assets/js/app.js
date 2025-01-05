// Water Tracker Interactivity
document.addEventListener("DOMContentLoaded", () => {
    const progressBar = document.querySelector(".progress-bar div");
    const glassesText = document.querySelector(".progress-info p:last-child");
    const goalMessage = document.querySelector(".goal-message");
    const dailyGoal = 8; // Set your daily goal in glasses
    let currentGlasses = 4; // Start with 4 glasses

    // Update the progress bar and messages
    function updateTracker(amount) {
        currentGlasses += amount / 250; // Convert ml to glasses
        currentGlasses = Math.min(currentGlasses, dailyGoal); // Cap at daily goal

        // Update progress bar width
        const progressPercentage = (currentGlasses / dailyGoal) * 100;
        progressBar.style.width = `${progressPercentage}%`;

        // Update text
        glassesText.textContent = `${currentGlasses}/${dailyGoal} glasses`;
        goalMessage.textContent =
            currentGlasses >= dailyGoal
                ? "You've reached your daily goal! Great job!"
                : `${dailyGoal - currentGlasses} more glasses to reach your daily goal!`;
    }

    // Add event listeners to buttons
    document.querySelectorAll(".add-water-buttons button").forEach((button) => {
        button.addEventListener("click", () => {
            const amount = parseInt(button.getAttribute("data-amount"), 10);
            updateTracker(amount);
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const mealList = document.getElementById("meal-list");
    const addMealButton = document.getElementById("add-meal-button");

    // Add meal function
    addMealButton.addEventListener("click", () => {
        const mealType = document.getElementById("meal-options").value;
        const mealName = document.getElementById("meal-name").value;
        const calories = document.getElementById("calories").value;

        if (mealName && calories) {
            const newMeal = document.createElement("li");
            newMeal.textContent = `${mealType}: ${mealName} (${calories} calories)`;
            mealList.appendChild(newMeal);

            // Clear form inputs
            document.getElementById("meal-name").value = "";
            document.getElementById("calories").value = "";

            // Remove placeholder if meals are added
            if (mealList.firstChild.textContent === "No meals planned for this day") {
                mealList.removeChild(mealList.firstChild);
            }
        } else {
            alert("Please fill out all fields!");
        }
    });
});

