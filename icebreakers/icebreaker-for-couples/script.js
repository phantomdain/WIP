const questions = {
  english: [
    "What is your happiest childhood memory, and why does it stand out?",
    "What’s something you’ve always wanted to do but never had the chance?",
    "What do you think is your biggest strength in a relationship?",
    "How do you define love in your own words?",
    "What’s the most important lesson your parents taught you about relationships?",
    "What are your thoughts on soulmates?",
    "What’s a song that reminds you of us and why?",
    "How do you handle disagreements in a relationship?",
    "What’s your love language, and how can I show you love better?",
    "What do you think makes a relationship last?",
    "What’s a dream or goal you’ve yet to share with me?",
    "If we could live anywhere in the world, where would it be and why?",
    "How do you think we can grow as a couple?",
    "What’s a fear you have about our future together?",
    "What’s a tradition or value you’d like us to keep as a couple?",
    "What’s the most romantic thing someone has done for you?",
    "How do you show forgiveness when someone hurts you?",
    "What is your favorite memory of us so far?",
    "What’s your ideal way to spend a weekend together?",
    "What’s something new we can try together as a couple?",
    "What’s a quality I have that you deeply appreciate?",
    "What’s something small I do that makes you happy?",
    "What’s a lesson you’ve learned from a past relationship?",
    "What’s a personal goal you’d like me to support?",
    "What’s a dream we can work on together?",
    "What do you think makes a person truly happy?",
    "What’s one way I can make you feel more appreciated?",
    "What’s your biggest fear about love?",
    "What’s a childhood dream you’ve held onto?",
    "What’s your favorite way to feel comforted?",
    "What’s a movie or book that changed your perspective on love?",
    "What’s one thing you’d like us to do more often?",
    "What do you think is your most attractive quality?",
    "What’s your favorite way to express affection?",
    "What’s a habit of mine that makes you smile?",
    "What’s something you’re proud of in our relationship?",
    "What do you think our life will look like in five years?",
    "What’s a memory you hope we create together?",
    "What’s a tradition you want us to start?",
    "What’s your idea of the perfect date night?",
    "What’s something you’ve always wanted to learn with me?",
    "What’s your favorite way to receive compliments?",
    "What’s a mistake you’ve learned the most from?",
    "What’s something you’ve always wanted to ask me but haven’t yet?",
    "What do you think is the key to staying connected in a busy life?",
    "What’s a small gesture that makes you feel loved?",
    "What’s your favorite thing about spending time together?",
    "What’s a strength you think we have as a couple?",
    "What’s something you’d like to do to celebrate our anniversary?",
    "What’s a childhood memory that shaped your view of relationships?",
    "What’s the most important quality in a partner for you?",
    "What’s a trip you’ve always wanted to take together?",
    "What’s a fear you’ve overcome, and how did you do it?",
    "What’s something you admire about other couples?",
    "What’s a challenge you’ve faced that made you stronger?",
    "What’s a skill you’d like to learn as a couple?",
    "What’s a food or dish you’d love to share with me?",
    "What’s something you’ve learned about love from a movie or book?",
    "What’s a question you’d like me to ask you more often?",
    "What’s your favorite thing about our relationship?",
    "What’s a moment when you felt most loved by me?",
    "What’s a fear you’d like to overcome with my support?",
    "What’s a value you’d like to teach our future children, if we have any?",
    "What’s a memory that always makes you smile?",
    "What’s something we can do to grow closer?",
    "What’s a lesson you’d like to share from your own life?",
    "What’s your favorite way to unwind together?",
    "What’s something you’re grateful for in our relationship?",
    "What’s a dream you’d like to achieve before you turn 50?",
    "What’s a habit you’d like us to build together?",
    "What’s a small joy in life you’d like to share with me?",
    "What’s something you’ve always wanted to say but didn’t know how?",
    "What’s a compliment you’ve never received but would love to hear?",
    "What’s your favorite thing to do on a lazy day?",
    "What’s a surprise you’d love to experience?",
    "What’s a place you’ve always wanted to show me?",
    "What’s your favorite way to show love?",
    "What’s a dream you had as a teenager?",
    "What’s a value you think we both share?",
    "What’s a childhood experience that taught you resilience?",
    "What’s something you’d like us to remember in hard times?",
    "What’s a song that makes you think of me?",
    "What’s a moment when you felt proud of us?",
    "What’s a question you’d like to ask me about my past?",
    "What’s a small change we can make to improve our relationship?",
    "What’s a story from your childhood you’d like me to know?",
    "What’s something you admire about my personality?",
    "What’s a dream you’ve never told anyone else?",
    "What’s your idea of the perfect holiday together?",
    "What’s a way you’d like me to help you feel less stressed?",
    "What’s a habit you’d like to break together?",
    "What’s a compliment you think I don’t hear enough?",
    "What’s a childhood story you’d like to pass on?",
    "What’s a place you’d love to visit together again?",
    "What’s a moment you realized you loved me?",
    "What’s your favorite memory from our early days together?",
    "What’s a mistake we’ve made as a couple that we’ve learned from?",
    "What’s your favorite kind of surprise?",
    "What’s a way we can support each other better?",
    "What’s something you’d like us to look back on and laugh about someday?",
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
    "Ano ang pinakamasayang alaala mo noong bata ka, at bakit ito tumatak sa'yo?",
    "Ano ang isang bagay na matagal mo nang gustong gawin pero wala kang pagkakataon?",
    "Ano sa tingin mo ang pinakamalaking strength mo sa isang relasyon?",
    "Paano mo ide-define ang pagmamahal sa sarili mong salita?",
    "Ano ang pinakamahalagang aral na itinuro sa'yo ng magulang mo tungkol sa relasyon?",
    "Ano ang tingin mo sa konsepto ng soulmates?",
    "Anong kanta ang nagpapaalala sa'yo ng tungkol sa atin, at bakit?",
    "Paano mo hinaharap ang mga hindi pagkakaintindihan sa relasyon?",
    "Ano ang love language mo, at paano kita mas mapaparamdam ng pagmamahal?",
    "Ano sa tingin mo ang sekreto para tumagal ang isang relasyon?",
    "Ano ang isang pangarap o layunin na hindi mo pa nasasabi sa akin?",
    "Kung pwede tayong tumira kahit saan sa mundo, saan ito at bakit?",
    "Paano tayo mas lalago bilang mag-partner?",
    "Ano ang isang kinatatakutan mo tungkol sa future natin?",
    "Anong tradisyon o value ang gusto mong panatilihin natin bilang couple?",
    "Ano ang pinakaromantikong bagay na nagawa ng isang tao para sa'yo?",
    "Paano mo ipinapakita ang pagpapatawad kapag nasaktan ka?",
    "Ano ang paborito mong alaala nating dalawa so far?",
    "Ano ang ideal na paraan mo ng paggugol ng weekend kasama ako?",
    "Ano ang bagong bagay na gusto mong subukan natin bilang mag-partner?",
    "Ano ang isang quality ko na labis mong pinahahalagahan?",
    "Ano ang isang maliit na bagay na ginagawa ko na nagpapasaya sa'yo?",
    "Ano ang isang aral na natutunan mo mula sa past relationship mo?",
    "Ano ang personal goal na gusto mong suportahan kita?",
    "Ano ang isang pangarap na pwede nating sabay na abutin?",
    "Ano sa tingin mo ang nagpapasaya talaga sa isang tao?",
    "Ano ang isang paraan para mas maramdaman mo na appreciated kita?",
    "Ano ang pinakamalaking takot mo tungkol sa pagmamahal?",
    "Ano ang pangarap mo noong bata ka na dala-dala mo pa rin ngayon?",
    "Ano ang paborito mong paraan para ma-comfort?",
    "Anong movie o libro ang nagbago ng pananaw mo tungkol sa pagmamahal?",
    "Ano ang isang bagay na gusto mong gawin natin nang mas madalas?",
    "Ano sa tingin mo ang pinaka-attractive na quality mo?",
    "Ano ang paborito mong paraan para magpakita ng affection?",
    "Ano ang habit ko na nagpapangiti sa'yo?",
    "Ano ang isang bagay na ipinagmamalaki mo sa relasyon natin?",
    "Ano sa tingin mo ang magiging itsura ng buhay natin sa limang taon?",
    "Ano ang memory na gusto mong mabuo natin together?",
    "Anong tradisyon ang gusto mong simulan natin?",
    "Ano ang idea mo ng perfect date night?",
    "Ano ang isang bagay na gusto mong matutunan natin nang magkasama?",
    "Ano ang paborito mong paraan para makatanggap ng papuri?",
    "Ano ang pinakamalaking pagkakamali na nagturo ng pinakamahalagang aral sa'yo?",
    "Ano ang isang bagay na gusto mong itanong ko pero hindi ko pa naitatanong?",
    "Ano sa tingin mo ang susi para manatiling konektado sa kabila ng busy na buhay?",
    "Ano ang maliit na gesture na nagpaparamdam sa'yo ng pagmamahal?",
    "Ano ang paborito mong bagay tungkol sa pagiging magkasama natin?",
    "Ano ang lakas na meron tayo bilang mag-partner?",
    "Ano ang gusto mong gawin natin para i-celebrate ang anniversary natin?",
    "Ano ang alaala noong bata ka na humubog sa pananaw mo tungkol sa relasyon?",
    "Ano ang pinakamahalagang quality sa isang partner para sa'yo?",
    "Ano ang isang lugar na gusto mong puntahan natin nang magkasama?",
    "Ano ang isang takot na nalampasan mo, at paano mo ito nagawa?",
    "Ano ang isang bagay na hinahangaan mo sa ibang couples?",
    "Ano ang isang challenge na pinagdaanan mo na nagpatibay sa'yo?",
    "Anong skill ang gusto mong matutunan natin bilang couple?",
    "Ano ang pagkain o ulam na gusto mong ishare sa akin?",
    "Ano ang natutunan mo tungkol sa pagmamahal mula sa isang pelikula o libro?",
    "Ano ang isang tanong na gusto mong madalas itanong ko sa'yo?",
    "Ano ang paborito mong bagay tungkol sa relasyon natin?",
    "Ano ang moment na pinaka-naramdaman mong mahal kita?",
    "Ano ang isang takot na gusto mong lampasan kasama ko?",
    "Ano ang isang value na gusto mong ituro natin sa future children natin, kung meron man?",
    "Ano ang alaala na palaging nagpapasaya sa'yo?",
    "Ano ang isang bagay na pwede nating gawin para mas maging close tayo?",
    "Ano ang isang aral mula sa buhay mo na gusto mong ishare sa akin?",
    "Ano ang paborito mong paraan para mag-relax kasama ako?",
    "Ano ang isang bagay na ipagpapasalamat mo sa relasyon natin?",
    "Ano ang pangarap mo na gusto mong maabot bago ka mag-50?",
    "Ano ang isang habit na gusto mong buuin natin together?",
    "Ano ang maliit na kasiyahan sa buhay na gusto mong ishare sa akin?",
    "Ano ang isang bagay na matagal mo nang gustong sabihin pero hindi mo alam paano?",
    "Ano ang papuri na hindi mo pa naririnig pero gusto mong marinig?",
    "Ano ang paborito mong gawin sa isang tamad na araw?",
    "Ano ang surprise na gusto mong ma-experience?",
    "Ano ang lugar na matagal mo nang gustong ipakita sa akin?",
    "Ano ang paborito mong paraan para magpakita ng pagmamahal?",
    "Ano ang pangarap mo noong teenager ka pa?",
    "Ano ang value na tingin mo ay shared natin?",
    "Ano ang karanasan mo noong bata ka na nagturo sa'yo ng tibay ng loob?",
    "Ano ang isang bagay na gusto mong tandaan natin sa mahihirap na panahon?",
    "Ano ang kanta na nagpapaalala sa'yo ng tungkol sa akin?",
    "Ano ang moment na pinaka-proud ka sa atin?",
    "Ano ang tanong na gusto mong itanong ko tungkol sa nakaraan mo?",
    "Ano ang maliit na pagbabago na pwede nating gawin para mapabuti ang relasyon natin?",
    "Ano ang kwento noong bata ka na gusto mong malaman ko?",
    "Ano ang hinahangaan mo tungkol sa personalidad ko?",
    "Ano ang pangarap na hindi mo pa nasasabi kahit kanino?",
    "Ano ang idea mo ng perfect holiday kasama ako?",
    "Ano ang paraan na gusto mong tulungan kita para mabawasan ang stress mo?",
    "Ano ang habit na gusto mong alisin natin nang magkasama?",
    "Ano ang papuri na sa tingin mo ay hindi ko pa naririnig?",
    "Ano ang kwento noong bata ka na gusto mong ipasa sa iba?",
    "Ano ang lugar na gusto mong balikan natin nang magkasama?",
    "Ano ang moment na narealize mong mahal mo ako?",
    "Ano ang paborito mong alaala mula sa early days natin?",
    "Ano ang pagkakamali natin bilang mag-partner na natutunan natin?",
    "Ano ang paborito mong klase ng sorpresa?",
    "Ano ang paraan para mas masuportahan natin ang isa't isa?",
    "Ano ang bagay na gusto mong balikan natin at pagtawanan balang araw?",
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
const totalQuestions = questions["english"].length; // Total number of questions

// Function to generate a random question from the current language
function generateRandomQuestion() {
  // Reset language to English before generating a new question
  currentLanguage = "english";

  // Check if all questions have been used
  if (usedQuestions.length === totalQuestions) {
    // Show "All questions were asked" message and hide buttons
    document.getElementById("random-question").textContent =
      "All questions were asked";
    document.getElementById("question-counter").textContent = ""; // Clear the counter
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

    // Update the counter
    document.getElementById(
      "question-counter"
    ).textContent = `Number ${usedQuestions.length} of ${totalQuestions} questions`;

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
