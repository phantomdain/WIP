const questions = {
  english: [
    "What is a childhood memory that shaped who you are today?",
    "What do you think your greatest strength is in our relationship?",
    "What’s a dream you’ve never told anyone about?",
    "What’s something you want to accomplish in the next five years?",
    "What’s your biggest fear when it comes to our future?",
    "What makes you feel most loved in a relationship?",
    "How do you think we complement each other?",
    "What’s a habit of mine that makes you smile?",
    "What’s one thing you’ve learned about love from your parents?",
    "If you could relive one moment in your life, what would it be?",
    "What is something you feel you don’t express enough in our relationship?",
    "How do you like to receive support when you’re feeling down?",
    "What’s a way we can improve how we communicate?",
    "What’s your favorite memory of us together?",
    "What’s a tradition you’d like to start together?",
    "What’s something you hope we never stop doing as a couple?",
    "How do you like to celebrate milestones and achievements?",
    "What does your ideal weekend with me look like?",
    "What’s a value you think is most important for us to share?",
    "How do you feel about handling conflict in relationships?",
    "What’s something you wish I knew about you?",
    "What do you admire most about me?",
    "How do you handle stress, and how can I help?",
    "What’s a way I can make you feel more appreciated?",
    "What kind of legacy do you want to leave behind?",
    "What’s a small thing I do that means a lot to you?",
    "What’s a lesson you’ve learned from a past relationship?",
    "How do you see us growing together in the future?",
    "What’s a personal challenge you’re currently facing?",
    "How do you define a successful relationship?",
    "What’s a place you’ve always wanted to visit together?",
    "What’s a fear you’ve overcome that you’re proud of?",
    "What’s a quality you see in me that you wish you had?",
    "What’s something you’re really passionate about right now?",
    "How do you handle forgiveness in relationships?",
    "What’s a story from your life that you think I should know?",
    "How do you think our love has changed since we first met?",
    "What do you think is the key to keeping love alive?",
    "How do you imagine our lives in ten years?",
    "What’s a boundary you feel is important to maintain in our relationship?",
    "How do you want to celebrate our future anniversaries?",
    "What’s a way we can deepen our emotional connection?",
    "What do you think makes our relationship unique?",
    "What’s a mistake you’ve made in the past that you learned from?",
    "How do you recharge when you’re feeling overwhelmed?",
    "What’s something I’ve done that made you feel deeply loved?",
    "What do you think is the most romantic thing we’ve done together?",
    "What role does trust play in our relationship for you?",
    "What’s a goal we can work towards together as a team?",
    "What’s your favorite way to spend quality time with me?",
  ],
  tagalog: [
    "Ano ang isang memorya sa pagkabata mo na nakaapekto sa kung sino ka ngayon?",
    "Ano sa tingin mo ang pinakamalaking lakas mo sa relasyon natin?",
    "Ano ang pangarap na hindi mo pa naikukwento sa iba?",
    "Ano ang gusto mong maabot sa susunod na limang taon?",
    "Ano ang pinakakinakatakutan mo tungkol sa future natin?",
    "Kailan mo nararamdaman ang pinakaminamahal ka sa relasyon?",
    "Paano mo nakikita na nagko-complement tayo sa isa’t isa?",
    "Anong ugali ko ang laging nagpapangiti sa’yo?",
    "Ano ang natutunan mo tungkol sa pagmamahal mula sa magulang mo?",
    "Kung may isang moment kang mababalikan, ano ito?",
    "Ano ang isang bagay na pakiramdam mo hindi mo nasasabi nang sapat sa relasyon natin?",
    "Paano mo gustong suportahan kita kapag nalulungkot ka?",
    "Paano natin mapapaganda ang communication natin?",
    "Ano ang paborito mong memorya natin?",
    "Anong tradisyon ang gusto mong simulan natin?",
    "Ano ang isang bagay na sana hindi natin tigilan bilang mag-partner?",
    "Paano mo gustong magdiwang ng milestones at achievements?",
    "Ano ang ideal weekend mo kasama ako?",
    "Anong value ang pinaka-importante sa tingin mo na dapat nating i-share?",
    "Ano ang pananaw mo sa pag-handle ng conflict sa relasyon?",
    "Ano ang gusto mong malaman ko pa tungkol sa’yo?",
    "Ano ang hinahangaan mo sa akin?",
    "Paano mo hinahandle ang stress, at paano ako makakatulong?",
    "Paano kita mas mapaparamdam na na-aappreciate kita?",
    "Anong legacy ang gusto mong iwan?",
    "Ano ang maliit na bagay na ginagawa ko na mahalaga sa’yo?",
    "Ano ang natutunan mo mula sa past relationship mo?",
    "Paano mo nakikita na lalago tayo sa future?",
    "Ano ang personal na challenge na hinaharap mo ngayon?",
    "Paano mo dine-define ang successful relationship?",
    "Saan lugar mo gustong magpunta kasama ako?",
    "Ano ang fear na nalagpasan mo at ipinagmamalaki mo?",
    "Anong quality ko ang gusto mong meron ka rin?",
    "Ano ang bagay na passionate ka tungkol ngayon?",
    "Paano mo hinahandle ang forgiveness sa relasyon?",
    "Anong kwento mula sa buhay mo ang sa tingin mo dapat kong malaman?",
    "Paano mo nakikitang nagbago ang pagmamahal natin mula noong nagkakilala tayo?",
    "Ano ang sikreto sa pagpapanatili ng pagmamahal natin?",
    "Paano mo ini-imagine ang buhay natin after ten years?",
    "Anong boundary ang mahalagang panatilihin sa relasyon natin?",
    "Paano mo gustong i-celebrate ang future anniversaries natin?",
    "Paano natin mapapalalim ang emotional connection natin?",
    "Ano ang nagpapaka-unique ng relasyon natin?",
    "Anong pagkakamali ang nagawa mo dati na natutunan mo?",
    "Paano ka nagre-recharge kapag na-o-overwhelm ka?",
    "Ano ang isang bagay na ginawa ko na nagpaparamdam sa’yo ng malalim na pagmamahal?",
    "Ano ang pinaka-romantic na bagay na nagawa natin?",
    "Anong papel ang ginagampanan ng tiwala sa relasyon natin para sa’yo?",
    "Anong goal ang pwede nating pagtrabahuhan bilang team?",
    "Ano ang paborito mong paraan ng paggugol ng oras kasama ako?",
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
