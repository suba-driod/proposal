// Elements
const yesButton = document.getElementById("yes-btn");
const noButton = document.getElementById("no-btn");
const cuteThreatsSection = document.getElementById("cute-threats");
const cuteImage = document.getElementById("cute-image");
const threatImage = document.getElementById("threat-image");
const retryButton = document.getElementById("retry-btn");
const valentineQuestion = document.getElementById("valentine-question");

// Cute images to show for each "No" click
const sadCatImages = [
    'cute-sad-cat1.jpg',
    'cute-sad-cat2.jpg',
    'cute-sad-cat3.jpg'
];

// Handle "Yes" button click
yesButton.addEventListener("click", () => {
    valentineQuestion.innerHTML = `<h2>Yay! I’m so happy 💖</h2><p>You said yes!</p><img src="happy-valentine.jpg" alt="Happy Valentine Image" />`;
    cuteThreatsSection.style.display = "none"; // Hide the threats section
    cuteImage.style.display = "none"; // Hide the first image
    yesButton.style.display = "none"; // Hide the yes button
    noButton.style.display = "none"; // Hide the no button
});

// Handle "No" button click
noButton.addEventListener("click", () => {
    // Show the cute threats section
    cuteThreatsSection.style.display = "block";
    const randomCatImage = sadCatImages[Math.floor(Math.random() * sadCatImages.length)];
    threatImage.src = randomCatImage; // Change the cat image based on random choice
});

// Retry button (when the user clicks "No", it will let them retry)
retryButton.addEventListener("click", () => {
    cuteThreatsSection.style.display = "none"; // Hide the threats section again
    valentineQuestion.style.display = "block"; // Show the question again
});
