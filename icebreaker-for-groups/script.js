const questions = {
  english: [
    "Look at the person to your left; what do you think is their best feature?",
    "What is one positive thing you’ve learned from someone in this group?",
    "Who in this group do you think would make a great leader, and why?",
    "If you could swap lives with someone here for a day, who would it be and why?",
    "Look at the person to your right; what do you think is their hidden talent?",
    "Who in this group do you think is the most adventurous, and why?",
    "What is a compliment you’ve been meaning to give to someone here?",
    "Who in this group do you think has the best sense of humor?",
    "Look at the person across from you; what do you think their dream job is?",
    "Who in this group do you think is the most patient, and why?",
    "If you could plan an ideal vacation with someone here, who would it be and where?",
    "What’s something you admire about someone sitting near you?",
    "Who in this group do you think is the best problem solver?",
    "Look at the person to your left; what do you think their superpower would be?",
    "Who in this group do you think is the most creative, and why?",
    "What’s one quality you wish you had that someone here already has?",
    "If you were in a survival situation, who here would you want by your side?",
    "Look at the person to your right; what kind of music do you think they love?",
    "Who in this group do you think has the most unique perspective?",
    "What is one thing you’ve noticed about someone here that stands out to you?",
    "Who in this group do you think is the most organized?",
    "Look at the person across from you; what do you think their favorite hobby is?",
    "If this group had to form a band, who would play what role?",
    "Who in this group do you think is the most caring, and why?",
    "What’s a kind gesture someone here has done that you’ll never forget?",
    "Look at the person to your left; what do you think is their happiest memory?",
    "Who in this group do you think is the most ambitious?",
    "If someone here were to write a book, who do you think it would be and why?",
    "Who in this group do you think would excel in a cooking competition?",
    "What’s one word you’d use to describe someone sitting near you?",
    "Who in this group do you think is the best at giving advice?",
    "Look at the person to your right; what do you think their ideal weekend looks like?",
    "Who in this group do you think is the most optimistic?",
    "If you had to pick a mentor from this group, who would it be?",
    "Who in this group do you think is the most spontaneous?",
    "Look at the person across from you; what do you think their favorite food is?",
    "Who in this group do you think would make the best travel companion?",
    "What’s a skill someone here has that you wish you could learn?",
    "Who in this group do you think has the most interesting life story?",
    "Look at the person to your left; what do you think they’re most passionate about?",
    "Who in this group do you think is the most reliable?",
    "What’s one thing someone in this group has said that really inspired you?",
    "Look at the person to your right; what do you think their dream vacation is?",
    "Who in this group do you think is the best listener?",
    "What’s a unique trait someone here has that you appreciate?",
    "Who in this group do you think is the most supportive?",
    "Look at the person across from you; what do you think their secret to happiness is?",
    "Who in this group do you think would excel in public speaking?",
    "What’s a moment with someone here that made you laugh the hardest?",
    "Who in this group do you think would make the best teammate in a challenge?",
  ],
  tagalog: [
    "Tingnan ang tao sa kaliwa mo; ano sa tingin mo ang kanilang pinakamagandang katangian?",
    "Ano ang isang positibong bagay na natutunan mo mula sa isang tao sa grupong ito?",
    "Sino sa grupong ito ang sa tingin mo ay magiging mahusay na leader, at bakit?",
    "Kung maaari kang makipagpalit ng buhay sa kahit sino dito, sino iyon at bakit?",
    "Tingnan ang tao sa kanan mo; ano sa tingin mo ang kanilang nakatagong talento?",
    "Sino sa grupong ito ang sa tingin mo ay pinaka-adventurous, at bakit?",
    "Ano ang isang papuri na matagal mo nang gustong ibigay sa isang tao dito?",
    "Sino sa grupong ito ang may pinakamagandang sense of humor?",
    "Tingnan ang tao sa harap mo; ano sa tingin mo ang dream job nila?",
    "Sino sa grupong ito ang pinaka-pasensyoso, at bakit?",
    "Kung magpaplano ka ng ideal vacation, sino dito ang gusto mong isama at saan?",
    "Ano ang isang bagay na hinahangaan mo tungkol sa isang tao malapit sa’yo?",
    "Sino sa grupong ito ang pinaka-magaling mag-solve ng problema?",
    "Tingnan ang tao sa kaliwa mo; ano sa tingin mo ang magiging superpower nila?",
    "Sino sa grupong ito ang pinaka-creative, at bakit?",
    "Ano ang isang katangian na gusto mong magkaroon na meron na ang isang tao dito?",
    "Kung nasa survival situation ka, sino ang gusto mong kasama dito?",
    "Tingnan ang tao sa kanan mo; anong klase ng music sa tingin mo ang gusto nila?",
    "Sino sa grupong ito ang may pinaka-unique na pananaw?",
    "Ano ang isang bagay na napansin mo tungkol sa isang tao dito na tumatak sa’yo?",
    "Sino sa grupong ito ang pinaka-organized?",
    "Tingnan ang tao sa harap mo; ano sa tingin mo ang paborito nilang hobby?",
    "Kung ang grupong ito ay bubuo ng banda, sino ang gagampan ng anong role?",
    "Sino sa grupong ito ang pinaka-caring, at bakit?",
    "Ano ang isang mabait na gesture na ginawa ng isang tao dito na di mo makakalimutan?",
    "Tingnan ang tao sa kaliwa mo; ano sa tingin mo ang pinakamasayang memory nila?",
    "Sino sa grupong ito ang pinaka-ambisyoso?",
    "Kung may magsusulat ng libro dito, sino iyon at bakit?",
    "Sino sa grupong ito ang magaling sa cooking competition?",
    "Ano ang isang salita na gagamitin mo para ilarawan ang isang tao malapit sa’yo?",
    "Sino sa grupong ito ang magaling magbigay ng advice?",
    "Tingnan ang tao sa kanan mo; ano sa tingin mo ang ideal weekend nila?",
    "Sino sa grupong ito ang pinaka-optimistic?",
    "Kung pipili ka ng mentor mula sa grupong ito, sino iyon?",
    "Sino sa grupong ito ang pinaka-spontaneous?",
    "Tingnan ang tao sa harap mo; ano sa tingin mo ang paborito nilang pagkain?",
    "Sino sa grupong ito ang pinaka-magiging masayang travel companion?",
    "Ano ang isang skill na meron ang isang tao dito na gusto mong matutunan?",
    "Sino sa grupong ito ang may pinaka-interesanteng kwento ng buhay?",
    "Tingnan ang tao sa kaliwa mo; ano sa tingin mo ang passion nila?",
    "Sino sa grupong ito ang pinaka-maaasahan?",
    "Ano ang isang bagay na sinabi ng isang tao dito na nag-inspire sa’yo?",
    "Tingnan ang tao sa kanan mo; ano sa tingin mo ang dream vacation nila?",
    "Sino sa grupong ito ang pinakamahusay makinig?",
    "Ano ang unique na katangian ng isang tao dito na pinapahalagahan mo?",
    "Sino sa grupong ito ang pinaka-supportive?",
    "Tingnan ang tao sa harap mo; ano sa tingin mo ang sikreto nila sa kasiyahan?",
    "Sino sa grupong ito ang pinaka-magaling sa public speaking?",
    "Ano ang isang moment kasama ang isang tao dito na pinaka-pinatawa ka?",
    "Sino sa grupong ito ang magiging pinakamahusay na teammate sa isang challenge?",
  ],
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
