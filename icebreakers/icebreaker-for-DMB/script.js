const questions = {
  english: [
    "What’s one piece of advice you’d give to someone starting in your field?",
    "If you could pick any fictional character to be your mentor at work, who would it be?",
    "What was your dream job when you were a kid, and how has it changed?",
    "If you could switch jobs with anyone for a week, what role would you choose?",
    "What’s your go-to productivity hack for busy days at work?",
    "If our team had a theme song, what would it be?",
    "What’s your favorite way to unwind after a long workday?",
    "If you could master any new musical instrument instantly, what would it be?",
    "If our team was stranded on a deserted island, who would you want to take charge?",
    "If our team could only communicate through sounds, what sound would best represent your personality?",
    "If you could take any famous person to a team meeting, who would it be and why?",
    "What’s one thing you think our team could improve to work better together?",
    "If you had to pick a team mascot to represent us, what would it be?",
    "Do you have any “coworkers” (partners, roommates, siblings, parents, pets)?",
    "What’s your best WFH accessory?",
    "What’s your go-to WFH beverage? Do you prefer coffee? Tea?",
    "Is there a spot in your house where you feel most productive?",
    "If you could have any upgrade to your WFH setup, what would it be?",
    "What’s your morning routine?",
    "How often do you work in your PJs?",
  ],
  tagalog: [],
};

let currentLanguage = "english"; // Default language
let usedQuestions = []; // To keep track of asked questions

// Function to generate a random question from the current language
function generateRandomQuestion() {
  // Reset language to English before generating a new question
  currentLanguage = "english";

  // Check if all questions have been used
  if (usedQuestions.length === questions["english"].length) {
    // Show "All questions were asked" message and hide buttons
    document.getElementById("random-question").textContent =
      "All questions were asked";
    document.getElementById("generate-button").style.display = "none";
    document.getElementById("language-toggle").style.display = "none";
    return; // Stop further execution
  }

  // Filter out the questions that have already been asked
  const availableQuestions = questions[currentLanguage].filter(
    (question) => !usedQuestions.includes(question)
  );

  // Select a random question from the available ones
  const randomIndex = Math.floor(Math.random() * availableQuestions.length);
  const randomQuestion = availableQuestions[randomIndex];

  // Add fade-out effect before changing the question
  const questionElement = document.getElementById("random-question");
  questionElement.classList.add("fade-out");

  // Delay displaying the new question to allow fade-out effect
  setTimeout(() => {
    // Add the selected question to usedQuestions
    usedQuestions.push(randomQuestion);

    // Display the question
    questionElement.textContent = randomQuestion;

    // Reset language toggle to show "Translate to Tagalog"
    document.getElementById("language-toggle").textContent =
      "Translate to Tagalog";

    // Apply fade-in effect
    questionElement.classList.remove("fade-out");
    questionElement.classList.add("fade-in");

    // Remove the fade-in class after the animation completes
    setTimeout(() => {
      questionElement.classList.remove("fade-in");
    }, 500); // Matches the transition duration in CSS
  }, 500); // Matches the transition duration in CSS
}

// Function to translate the current question to the other language
function translateQuestion() {
  const currentQuestion =
    document.getElementById("random-question").textContent;

  // Find the current question index
  const currentIndex = questions[currentLanguage].indexOf(currentQuestion);

  if (currentIndex !== -1) {
    // Toggle language
    currentLanguage = currentLanguage === "english" ? "tagalog" : "english";

    // Update the question to the translated one
    document.getElementById("random-question").textContent =
      questions[currentLanguage][currentIndex];
  }
}

// Toggle language function
function toggleLanguage() {
  translateQuestion();

  // Update the toggle button text based on the current language
  document.getElementById("language-toggle").textContent = `Translate to ${
    currentLanguage === "english" ? "Tagalog" : "English"
  }`;
}

// Initialize the app by generating a random English question
generateRandomQuestion();

// Check if the user has already seen the lightbox in this session
if (!sessionStorage.getItem("visited")) {
  // Show the welcome lightbox with a fade-in effect
  const lightbox = document.getElementById("welcome-lightbox");
  lightbox.classList.add("show"); // Add "show" class to display the lightbox
  sessionStorage.setItem("visited", "true"); // Mark that the user has visited
}

// Close lightbox when the user clicks the close button
document
  .getElementById("close-lightbox")
  .addEventListener("click", function () {
    const lightbox = document.getElementById("welcome-lightbox");
    lightbox.classList.remove("show"); // Remove the "show" class to hide it
  });
