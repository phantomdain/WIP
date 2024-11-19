const questions = {
  english: [
    "Look at the person to your left, what do you think is their best feature?",
    "What was your first impression of the person sitting on your right?",
    "Ask anyone in the group: What is the most adventurous thing you've ever done?",
    "What’s one thing you admire about the person across from you?",
    "If you could switch lives with anyone here for a day, who would it be and why?",
    "Ask someone in the group: What motivates you to wake up every morning?",
    "Look at the person to your right, what do you think they are passionate about?",
    "What’s one kind thing you’ve noticed someone here doing?",
    "Ask anyone in the group: What’s your favorite childhood memory?",
    "Look at the person across from you, what’s one thing you’d guess they’re really good at?",
    "If you could spend a whole day with anyone here, who would it be and why?",
    "Ask someone in the group: If you could master one skill, what would it be?",
    "Look at the person to your left, what’s one thing you think they might need encouragement on?",
    "What’s a positive vibe you’ve picked up about the person on your right?",
    "Ask someone in the group: What is one value you live by?",
    "Look at the person across from you, what do you think they were like in high school?",
    "What’s one thing about the group that makes you feel comfortable?",
    "Ask anyone: If you could give someone in this group an award, what would it be for?",
    "Look at the person to your right, what’s one thing you think they would never do?",
    "What’s one thing you’ve learned from observing someone in this group?",
    "Ask someone: What’s your biggest goal this year?",
    "Look at the person to your left, what do you think is a hidden talent they have?",
    "If you were in a team challenge, who would you want as your partner and why?",
    "Ask anyone in the group: Who inspires you the most and why?",
    "What’s one thing that surprised you about someone here?",
    "Look at the person on your right, if you could guess their favorite hobby, what would it be?",
    "What’s one thing you think the person to your left is grateful for?",
    "Ask someone in the group: If you could travel anywhere, where would it be?",
    "What’s one unique thing you’ve noticed about someone in this group?",
    "Look at the person to your left, what do you think is their dream job?",
    "If you could ask anyone here for advice, who would it be and about what?",
    "Ask someone: What’s your biggest fear?",
    "What’s one way you think the person across from you can impact the world?",
    "Look at the person on your right, what would you guess is their guilty pleasure?",
    "Ask anyone: What’s your favorite type of vacation?",
    "What’s something you appreciate about the group dynamic?",
    "Look at the person to your left, what’s one thing you think they could teach you?",
    "If you could give advice to anyone here, who would it be and what would you say?",
    "Ask someone: If you could relive one moment in your life, what would it be?",
    "What’s one thing you find inspiring about the group as a whole?",
    "Look at the person across from you, what do you think is their go-to stress reliever?",
    "What’s one quality you think the person to your right really values in a friend?",
    "Ask anyone: If you could start a business, what would it be?",
    "Look at the person on your left, what do you think makes them laugh the most?",
    "What’s one way you’ve seen someone here show kindness?",
    "Ask someone in the group: What’s your dream home like?",
    "What’s one thing you think is challenging for the person across from you?",
    "Look at the person on your right, what’s one compliment you’d give them?",
    "Ask anyone: Who has influenced your life the most?",
    "What’s one thing you’ve observed that makes the person to your left stand out?",
    "Look at the person across from you, what’s one place you think they’d love to visit?",
    "If you had to describe someone here in one word, who would it be and what word would you use?",
    "Ask someone in the group: If you had unlimited time, what hobby would you pick up?",
    "What’s something you think the person to your left is really proud of?",
    "Look at the person on your right, what’s one thing you think they’re working towards?",
    "What’s one moment that stands out to you from this group gathering so far?",
    "Ask anyone: What’s one thing on your bucket list?",
    "Look at the person to your left, what’s one thing you’d guess they’re passionate about?",
    "What’s a fun fact you think the person across from you might have?",
    "Ask someone in the group: What’s your favorite memory from childhood?",
    "Look at the person to your right, what’s one strength you see in them?",
    "What’s something you think the person to your left is currently excited about?",
    "Ask anyone: What’s your favorite way to unwind?",
    "What’s one thing you appreciate about the person on your right?",
    "Look at the person across from you, what do you think their favorite type of food is?",
    "Ask someone: If you could instantly learn a new language, which one would it be?",
    "What’s one way someone in this group has made you smile?",
    "Look at the person to your left, what’s one challenge you think they’ve overcome?",
    "What’s one thing you’ve learned from someone here today?",
    "Ask anyone: If you could live in any time period, when would it be?",
    "Look at the person on your right, what’s one thing you’d guess they value most in life?",
    "What’s one piece of advice you think the group would benefit from?",
    "Ask someone: What’s your favorite kind of weather?",
    "What’s one thing you admire about the person across from you?",
    "Look at the person to your left, what do you think is their happiest memory?",
    "What’s one lesson you’ve learned from a challenge someone here has shared?",
    "Ask anyone: What’s your biggest dream for the next five years?",
    "Look at the person on your right, what’s one thing you think they’re really passionate about?",
    "What’s one thing you’d like to thank someone here for?",
    "Ask someone: What’s your favorite thing about weekends?",
    "What’s one thing you think makes the person to your left unique?",
    "Look at the person across from you, what’s one thing you think they’d excel at?",
    "What’s one positive word you’d use to describe the group?",
    "Ask anyone: If you could meet anyone in history, who would it be?",
    "What’s something you think the person on your right is really good at?",
    "Look at the person to your left, what’s one thing you’d like to know more about them?",
    "What’s one way you think this group could make a difference in the world?",
    "Ask someone: What’s your go-to way to cheer yourself up?",
    "Look at the person across from you, what’s one thing you think they value most?",
    "What’s one quality you think everyone in this group shares?",
    "Ask anyone: What’s your biggest life lesson so far?",
    "What’s something you’ve appreciated about someone in this group today?",
    "Look at the person on your right, what do you think is their biggest dream?",
    "What’s one thing you think the person to your left could teach you?",
    "Ask anyone: What’s your dream career?",
    "What’s one thing you think everyone in this group is good at?",
    "Look at the person across from you, what’s one thing you’d want to say to inspire them?",
    "What’s one moment in your life you think the group would find inspiring?",
    "Ask someone: What’s your favorite way to spend a holiday?",
    "Look at the person on your right, what’s one thing you’d thank them for?",
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
    "Tingnan ang tao sa kaliwa mo, ano sa tingin mo ang pinakamagandang katangian nila?",
    "Ano ang unang impresyon mo sa taong nasa kanan mo?",
    "Pwede kang magtanong sa kahit sino: Ano ang pinaka-adventurous na bagay na nagawa mo?",
    "Ano ang isang bagay na hinahangaan mo sa taong kaharap mo?",
    "Kung pwede kang makipagpalit ng buhay sa kahit sino dito sa loob ng isang araw, sino at bakit?",
    "Pwede kang magtanong sa kahit sino: Ano ang nagmo-motivate sa'yo na bumangon tuwing umaga?",
    "Tingnan ang tao sa kanan mo, ano sa tingin mo ang passion nila?",
    "Ano ang isang mabait na ginawa ng kahit sino dito na napansin mo?",
    "Pwede kang magtanong sa kahit sino: Ano ang paborito mong alaala noong bata ka?",
    "Tingnan ang tao sa harap mo, ano ang hula mong talagang magaling sila?",
    "Kung pwede kang gumugol ng isang araw kasama ang kahit sino dito, sino iyon at bakit?",
    "Pwede kang magtanong sa kahit sino: Kung may isang skill kang pwedeng ma-master, ano ito?",
    "Tingnan ang tao sa kaliwa mo, ano ang sa tingin mo kailangan nilang suporta?",
    "Ano ang positibong vibe na nakuha mo sa tao sa kanan mo?",
    "Pwede kang magtanong sa kahit sino: Ano ang isang value na pinanghahawakan mo?",
    "Tingnan ang tao sa harap mo, ano sa tingin mo ang ugali nila noong high school?",
    "Ano ang isang bagay tungkol sa grupong ito na nagpapakomportable sa'yo?",
    "Pwede kang magtanong: Kung pwede kang magbigay ng award sa kahit sino dito, ano at para saan ito?",
    "Tingnan ang tao sa kanan mo, ano ang isang bagay na sa tingin mo hindi nila gagawin?",
    "Ano ang isang bagay na natutunan mo mula sa pagmamasid sa kahit sino dito?",
    "Pwede kang magtanong: Ano ang biggest goal mo ngayong taon?",
    "Tingnan ang tao sa kaliwa mo, ano ang hula mong hidden talent nila?",
    "Kung merong team challenge, sino ang gusto mong maging partner at bakit?",
    "Pwede kang magtanong: Sino ang inspirasyon mo at bakit?",
    "Ano ang isang bagay na nagulat ka tungkol sa kahit sino dito?",
    "Tingnan ang tao sa kanan mo, ano ang hula mong paboritong hobby nila?",
    "Ano ang isang bagay na sa tingin mo ipinagpapasalamat ng tao sa kaliwa mo?",
    "Pwede kang magtanong: Kung pwede kang mag-travel kahit saan, saan ito?",
    "Ano ang isang unique na bagay na napansin mo tungkol sa kahit sino dito?",
    "Tingnan ang tao sa kaliwa mo, ano ang hula mong dream job nila?",
    "Kung may hihingiin kang advice sa kahit sino dito, sino at tungkol saan ito?",
    "Pwede kang magtanong: Ano ang biggest fear mo?",
    "Ano ang isang bagay na sa tingin mo kayang baguhin ng taong kaharap mo sa mundo?",
    "Tingnan ang tao sa kanan mo, ano ang hula mong guilty pleasure nila?",
    "Pwede kang magtanong: Ano ang paborito mong klase ng bakasyon?",
    "Ano ang isang bagay na pinapahalagahan mo sa grupo bilang kabuuan?",
    "Tingnan ang tao sa kaliwa mo, ano ang isang bagay na sa tingin mo kaya nilang ituro sa'yo?",
    "Kung pwede kang magbigay ng advice sa kahit sino dito, sino at ano ito?",
    "Pwede kang magtanong: Kung pwede mong ulitin ang isang moment sa buhay mo, ano ito?",
    "Ano ang isang bagay na nakakainspire sa'yo tungkol sa grupong ito?",
    "Tingnan ang tao sa harap mo, ano ang hula mong paraan nila para ma-relax?",
    "Ano ang isang bagay na sa tingin mo pinahahalagahan ng tao sa kanan mo sa kaibigan?",
    "Pwede kang magtanong: Kung pwede kang magtayo ng negosyo, ano ito?",
    "Tingnan ang tao sa kaliwa mo, ano ang hula mong nagpapatawa sa kanila ng sobra?",
    "Ano ang isang mabait na ginawa ng kahit sino dito na napansin mo?",
    "Pwede kang magtanong: Ano ang dream home mo?",
    "Ano ang isang bagay na sa tingin mo mahirap para sa taong kaharap mo?",
    "Tingnan ang tao sa kanan mo, ano ang isang bagay na gusto mong i-compliment sa kanila?",
    "Pwede kang magtanong: Sino ang pinakamalaking nag-influence sa buhay mo?",
    "Ano ang isang bagay na napansin mo na nagpapa-stand out sa tao sa kaliwa mo?",
    "Kung pwede kang pumili ng kahit anong superpower, ano ito at bakit?",
    "Tingnan ang tao sa kaliwa mo, ano sa tingin mo ang pinaka-memorable na bagay tungkol sa kanila?",
    "Pwede kang magtanong: Ano ang favorite movie mo na hindi mo kayang magsawa?",
    "Kung may soundtrack ang buhay mo, ano ang theme song mo?",
    "Ano ang pinaka-exciting na bagay na gusto mong mangyari ngayong taon?",
    "Tingnan ang tao sa harap mo, anong vibe ang nakuha mo sa kanila noong una mo silang nakita?",
    "Pwede kang magtanong: Kung makakapag-dinner ka sa kahit sinong sikat, sino ito at bakit?",
    "Kung magla-launch tayo ng app bilang group, ano ang magiging theme o purpose nito?",
    "Ano ang pinaka-crazy na bagay na nasa bucket list mo?",
    "Tingnan ang tao sa kanan mo, ano ang hula mong top 3 values nila?",
    "Pwede kang magtanong: Ano ang first impression mo sa akin?",
    "Kung magiging bida ka sa isang movie, anong genre ito?",
    "Tingnan ang tao sa kaliwa mo, ano sa tingin mo ang favorite childhood toy nila?",
    "Ano ang pinaka-importanteng bagay na natutunan mo mula sa mga magulang mo?",
    "Pwede kang magtanong: Anong bagay ang pinaka-proud ka?",
    "Kung magpapalit ka ng pangalan, ano ang gusto mong itawag sa'yo?",
    "Ano ang pinaka-weird na pagkain na natikman mo na?",
    "Tingnan ang tao sa kanan mo, ano ang hula mong favorite childhood memory nila?",
    "Pwede kang magtanong: Ano ang pinaka-masayang moment ng buhay mo so far?",
    "Kung bigla kang nanalo ng PHP 1M bukas, paano mo ito gagastusin?",
    "Ano ang isang bagay na nasa bucket list mo pero sobrang takot kang gawin?",
    "Tingnan ang tao sa kaliwa mo, ano sa tingin mo ang paborito nilang color at bakit?",
    "Pwede kang magtanong: Ano ang comfort food mo?",
    "Kung magiging mascot ka ng kahit ano, ano ito at bakit?",
    "Ano ang pinaka-random na bagay na nasa bag mo ngayon?",
    "Tingnan ang tao sa harap mo, ano ang sa tingin mo hilig nilang pakinggan sa Spotify?",
    "Pwede kang magtanong: Ano ang pinaka-funny na memory mo noong bata ka?",
    "Kung bigla kang naging magaling sa isang sport, ano ito at bakit?",
    "Kung may time machine, babalik ka ba sa past o pupunta sa future? Bakit?",
    "Tingnan ang tao sa kanan mo, ano sa tingin mo ang pinaka-proud moment nila?",
    "Pwede kang magtanong: Kung bibigyan ka ng extra day na walang trabaho, paano mo ito gagamitin?",
    "Ano ang pinaka-weird na compliment na natanggap mo na?",
    "Kung gagawa ka ng sarili mong festival, ano ang theme nito?",
    "Tingnan ang tao sa kaliwa mo, ano ang isang bagay na feeling mo kaya nilang gawin pero hindi mo kaya?",
    "Pwede kang magtanong: Ano ang pinaka-funny na bagay na nangyari sa'yo lately?",
    "Kung pwede kang mag-teleport kahit saan ngayon, saan ito?",
    "Ano ang isang bagay na nakaka-relax sa'yo no matter what?",
    "Tingnan ang tao sa harap mo, ano ang hula mong pinaka-importanteng bagay sa kanila?",
    "Pwede kang magtanong: Ano ang pinaka-random na bagay na gusto mong matutunan?",
    "Kung magpapatayo ka ng bahay, anong dream feature nito?",
    "Ano ang pinaka-strange na panaginip na naaalala mo?",
    "Tingnan ang tao sa kanan mo, ano ang feeling mo pinaka-wild dream nila?",
    "Pwede kang magtanong: Ano ang pinaka-memorable na lugar na napuntahan mo na?",
    "Kung magiging isang breed ka ng hayop, ano ka at bakit?",
    "Ano ang isang bagay na gusto mong ma-try pero hindi mo pa kaya gawin?",
    "Tingnan ang tao sa kaliwa mo, ano ang hula mong pinaka-paborito nilang bagay sa buhay?",
    "Pwede kang magtanong: Ano ang pinaka-nakaka-inspire na advice na natanggap mo?",
    "Kung magiging part ka ng isang reality show, anong show ito at bakit?",
    "Kung may isang libro o pelikula na makakapag-describe ng buhay mo, ano ito?",
    "Tingnan ang grupo, ano ang pinaka-nakakatuwa sa energy nila ngayon?",
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
