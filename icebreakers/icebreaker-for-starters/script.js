const questions = {
  english: [
    "What’s a decision you’re proud of making?",
    "What’s a belief you hold that’s uncommon?",
    "What makes you feel at peace?",
    "What’s your favorite memory with your family?",
    "If you could learn the answer to one question about your future, what would it be?",
    "What’s the biggest risk you’ve taken?",
    "How do you define happiness?",
    "What’s something that’s currently bringing you a lot of joy?",
    "Who in your life do you admire most?",
    "What’s a favorite family tradition?",
    "If you could be known for one trait, what would it be?",
    "What’s something you wish you were better at?",
    "How do you recharge when you’re feeling drained?",
    "What’s the biggest lesson you learned last year?",
    "What’s a recent act of kindness you witnessed?",
    "What’s your biggest dream?",
    "What are you most afraid of losing?",
    "What’s a time in your life you felt truly fulfilled?",
    "Who’s someone who has shaped who you are today?",
    "What’s the best trip you’ve ever taken?",
    "What’s your favorite way to connect with people?",
    "What do you consider a good life?",
    "What’s a major turning point in your life?",
    "If you had to give a TED talk, what would it be about?",
    "What are you proudest of about yourself?",
    "What’s something you wish you did more of?",
    "What’s a recent moment you felt truly alive?",
    "What are you most looking forward to?",
    "What makes you laugh the most?",
    "If you could be a fictional character, who would you be?",
    "What’s the best decision you made in the last five years?",
    "What’s something that inspires you?",
    "What do you love most about where you live?",
    "What’s something you’ve done that you never thought you’d do?",
    "Who’s someone you can always rely on?",
    "What’s a moment you knew you’d remember forever?",
    "What’s one thing you’re really glad you tried?",
    "What’s a quote that resonates with you?",
    "How do you define beauty?",
    "What’s a guilty pleasure you enjoy?",
    "What’s a cause you care deeply about?",
    "What’s something you hope never changes?",
    "What’s a skill you wish you had?",
    "If you could relive one day of your life, what would it be?",
    "What’s a goal you’re working on right now?",
    "What’s a personality trait you love about yourself?",
    "What’s something people often misunderstand about you?",
    "What’s something you want to do this year that scares you?",
    "What’s the best advice you’ve given?",
    "What’s a hidden talent you have?",
    "What’s a song that means a lot to you?",
    "What’s something you’re currently trying to change?",
    "What’s a book you think everyone should read?",
    "What’s something you wish you could go back and undo?",
    "What do you want to be remembered for?",
    "What’s a moment that changed your life forever?",
    "If you could change the world in one way, what would it be?",
    "Who’s someone you would like to reconnect with?",
    "What’s something you’re naturally good at?",
    "What’s a movie or book that impacted you?",
    "What’s something you want to pass down to future generations?",
    "What’s a place you feel most at home?",
    "What’s something that makes you unique?",
    "What do you want to learn more about?",
    "What’s your biggest hope for the future?",
    "What’s a feeling you wish you could experience again?",
    "If you had the power to solve one global problem, what would it be?",
    "What’s the biggest compliment someone could give you?",
    "What’s the best thing about being you?",
    "What’s a challenge you overcame that you’re proud of?",
    "What’s the most interesting conversation you’ve had recently?",
    "What’s something you want to teach others?",
    "What’s a goal you feel is out of reach but would love to achieve?",
    "What’s your favorite way to unwind?",
    "If you had no fears, what would you do?",
    "What’s a recent goal you achieved?",
    "What’s a tradition you want to start?",
    "What’s something you find challenging but rewarding?",
    "What are you most excited for in the coming months?",
    "What’s a recent experience that made you grow?",
    "What’s something you’re grateful you failed at?",
    "What’s a song lyric that resonates with you?",
    "Who do you turn to for advice?",
    "What’s something you find beautiful that others overlook?",
    "What’s a quality you admire in others?",
    "What’s your favorite memory of last year?",
    "What’s the most important promise you’ve kept?",
    "If you could see the future, what would you want to know?",
    "What’s a decision you made that completely changed your life?",
    "What’s a goal you have for the next five years?",
    "What are three words that describe you best?",
    "What’s a fear you’ve conquered?",
    "What’s something you learned about yourself recently?",
    "What’s the best piece of advice you’d give someone else?",
    "What’s one thing you’d like to improve about the world?",
    "What’s the most daring thing you’ve done?",
    "What’s a compliment you’ve received that stuck with you?",
    "If you could change one thing about today, what would it be?",
  ],
  tagalog: [
    "Anong desisyon ang maipagmamalaki mong ginawa?",
    "Anong yung paniniwala mo na hindi pangkaraniwan?",
    "Ano ang nagpapakalma sa'yo?",
    "Ano ang paborito mong alaala kasama ang iyong pamilya?",
    "Kung maaari mong malaman ang sagot sa isang tanong tungkol sa iyong hinaharap, ano ito?",
    "Ano ang pinakamalaking panganib na iyong sinugalan?",
    "Paano mo dini-define ang kaligayahan?",
    "Ano ang kasalukuyang nagpapasaya sa'yo?",
    "Sino sa buhay mo ang pinaka-hinahangaan mo?",
    "Ano ang paborito mong tradisyon ng pamilya mo?",
    "Kung makikilala ka sa isang katangian, ano ito?",
    "Ano ang isang bagay na nais mong maging magaling?",
    "Paano ka nagre-recharge kapag pagod ka na?",
    "Ano ang pinakamalaking aral na natutunan mo noong nakaraang taon?",
    "Ano ang isang kabutihang nakita mo kamakailan lang?",
    "Ano ang pinakamalaking mong pangarap?",
    "Ano ang pinakakinatatakutan mong mawala?",
    "Kailan mo naramdaman na ikaw ay tunay na buo/kuntento?",
    "Sino sa iyong buhay ang humulma sa kung sino ka ngayon?",
    "Ano ang pinakamagandang biyahe na nagawa mo?",
    "Ano ang paborito mong paraan para kumonekta sa ibang tao?",
    "Ano itinuturing mong magandang buhay?",
    "Ano ang isa sa pinakamalaking pagbabago sa buhay mo?",
    "Kung ikaw ay magbibigay ng TED talk, tungkol saan ito?",
    "Ano ang maipagmamalaki mo sa iyong sarili?",
    "Ano ang isang bagay na sana ay mas madalas mong ginagawa?",
    "Ano ang isang kamakailang karanasan na nagpasaya sa'yo?",
    "Ano ang pinakamalaking bagay na inaasahan mo?",
    "Ano ang isang bagay na nakakapagpatawa sa'yo?",
    "Kung maaari kang maging isang fictional na karakter, sino ka?",
    "Ano ang pinakamagandang desisyon na ginawa mo sa nakaraang limang taon?",
    "Ano ang isang bagay na nakakapukaw ng iyong inspirasyon?",
    "Ano ang pinakagusto mo sa lugar kung saan ka nakatira?",
    "Ano ang isang bagay na nagawa mong hindi mo akalain na magagawa mo?",
    "Sino ang maaari mong laging maasahan?",
    "Ano ang isang pagkakataon sa iyong buhay na alam mong hindi mo makakalimutan?",
    "Ano ang isang bagay na buti nasubukan mo?",
    "Ano ang kasabihan na tumatak sa'yo?",
    "Ano ang 'kagandahan' para sayo?",
    "Anong isang 'guilty pleasure' na nagpapasaya sa'yo?",
    "Ano ang isang layunin ang pinapahalagahan mo?",
    "Ano ang isang bagay para sayo na sana hindi magbago?",
    "Ano ang isang skill na gusto mong matutunan?",
    "Kung maaari mong balikan ang isang araw sa iyong buhay, anong araw iyon?",
    "Ano ang isang goal na sinusubukan mong maabot ngayon?",
    "Ano ang isang trait sa iyong personalidad na mahal mo?",
    "Ano ang isang bagay na karaniwang mali ang pagkaintindi sa iyo?",
    "Ano ang isang bagay na gusto mong gawin sa taon na ito na nakakakaba sa'yo?",
    "Ano ang pinakamahusay na advice na ibinigay mo?",
    "Ano ang isang bagay na hindi alam ng karamihan tungkol sa'yo?",
    "Ano ang isang karanasan na nagpadama sa'yo ng buhay?",
    "Ano ang isang halaga na nais mong ipasa sa susunod na henerasyon?",
    "Anong libro and tingin mong dapat binabasa ng lahat?",
    "Ano yung bagay na sana hindi mo ginawa?",
    "Paano mo gustong maalala?",
    "Ano ang isang sandali na nagbago ng iyong buhay magpakailanman?",
    "Kung maaari mong baguhin ang mundo sa isang paraan, ano ito?",
    "Sino ang isang tao na nais mong muling makipag-ugnayan?",
    "Ano ang isang bagay na natural kang magaling?",
    "Ano ang pelikula o libro na naka-apekto sa iyo?",
    "Ano ang isang bagay na nais mong ipamana sa mga susunod na henerasyon?",
    "Ano ang lugar na pinakaramdam mong nasa bahay ka?",
    "Ano ang isang bagay na nagpapalakas ng iyong uniqueness?",
    "Ano ang nais mong matutunan pa?",
    "Ano ang pinakamalaking pag-asa mo para sa hinaharap?",
    "Ano ang isang pakiramdam na nais mong muling maranasan?",
    "Kung ikaw ay may kapangyarihang lutasin ang isang pandaigdigang problema, ano ito?",
    "Ano ang pinakamalaking papuri na maibibigay sa iyo ng isang tao?",
    "Ano ang pinakamagandang bagay tungkol sa pagiging ikaw?",
    "Ano ang isang hamon na nalampasan mo na ipinagmamalaki mo?",
    "Ano ang pinaka-interesanteng pag-uusap na naganap kamakailan?",
    "Ano ang isang bagay na nais mong ituro sa iba?",
    "Ano ang isang layunin na nararamdaman mong mahirap maabot ngunit nais mong makamit?",
    "Ano ang iyong paboritong paraan upang magpahinga?",
    "Kung wala kang takot, ano ang gagawin mo?",
    "Ano ang isang kamakailang layunin na iyong naabot?",
    "Ano ang isang tradisyon na nais mong simulan?",
    "Ano ang isang bagay na nahirapan ka ngunit nagbunga?",
    "Ano ang pinaka-nasisiyahan ka sa mga darating na buwan?",
    "Ano ang isang kamakailang karanasan na nagpatibay sa iyo?",
    "Ano ang isang bagay na ikinalulugod mong nabigo ka?",
    "Ano ang liriko ng kanta na tumutugma sa iyo?",
    "Kanino ka humihingi ng payo?",
    "Ano ang isang bagay na natutunan mong maganda ngunit madalas hindi napapansin ng iba?",
    "Ano ang isang katangian na hinahangaan mo sa iba?",
    "Ano ang iyong paboritong alaala mula sa nakaraang taon?",
    "Ano ang pinakamahalagang pangako na natupad mo?",
    "Kung maaari mong makita ang hinaharap, ano ang nais mong malaman?",
    "Ano ang isang desisyon na ginawa mo na ganap na nagbago ng iyong buhay?",
    "Ano ang isang layunin na mayroon ka para sa susunod na limang taon?",
    "Ano ang tatlong salitang pinakamahusay na naglalarawan sa iyo?",
    "Ano ang isang takot na iyong nalampasan?",
    "Ano ang isang bagay na natutunan mo tungkol sa iyong sarili kamakailan?",
    "Ano ang pinakamagandang payo na maaari mong ibigay sa iba?",
    "Ano ang isang bagay na nais mong baguhin sa mundo?",
    "Ano ang pinaka-makitid na bagay na nagawa mo?",
    "Ano ang isang papuri na natanggap mo na hindi mo malilimutan?",
    "Kung maaari mong baguhin ang isang bagay sa araw na ito, ano ito?",
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
