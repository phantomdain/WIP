const questions = {
  english: [
    "What is your favorite childhood memory with our family?",
    "Who in the family has influenced you the most and why?",
    "What is one family tradition you love the most?",
    "What was the most fun trip or vacation we ever took together?",
    "What is something you always wanted to ask a family member but never did?",
    "What family meal brings back the best memories?",
    "What was the funniest moment you've ever had with the family?",
    "What’s one thing you’ve learned from each family member?",
    "What is the best piece of advice you received from a family member?",
    "If you could relive any family event, what would it be and why?",
    "What’s one thing about our family you wish more people knew?",
    "What’s one skill or talent in the family you admire the most?",
    "What’s one way we can spend more time together as a family?",
    "What family tradition do you want to pass on to future generations?",
    "What’s the most challenging experience you’ve faced with the family?",
    "What is your proudest moment as part of this family?",
    "Who in the family do you turn to when you need advice or comfort?",
    "What is one word you would use to describe our family?",
    "What’s one thing you’ve never shared with the family but always wanted to?",
    "What is the best holiday celebration we've ever had together?",
    "If you could give one piece of advice to the youngest family member, what would it be?",
    "What do you think is the best quality of our family as a whole?",
    "What’s one family story you think we should always remember?",
    "What is a moment when the family worked together and achieved something amazing?",
    "What’s a lesson you learned from watching how our family handles challenges?",
    "What’s a tradition you’d like to add to our family?",
    "What do you think is the funniest story about someone in the family?",
    "If you could thank one family member for something, who would it be and for what?",
    "What’s one thing you love about spending time with the family?",
    "What’s one goal or dream you have for the family in the future?",
    "What’s one thing about our family that makes you proud?",
    "What is your earliest memory of spending time with the family?",
    "Who is the most adventurous family member, and why?",
    "What’s a family recipe or dish you think we should never forget?",
    "What’s the most meaningful gift you’ve ever received from a family member?",
    "What’s one family moment that made you laugh the hardest?",
    "If you could plan a perfect family day, what would it look like?",
    "What’s a holiday or event you’d love for the family to celebrate together?",
    "What’s one thing you think the family could improve on?",
    "What’s the most surprising thing you’ve learned about a family member?",
    "Who in the family do you think is the best storyteller?",
    "What’s a piece of advice from a family member that changed your life?",
    "What’s one moment when the family made you feel really supported?",
    "If you could bring back a past family member for a day, who would it be and why?",
    "What’s a quality you’ve inherited from someone in the family?",
    "What’s a family tradition you think we should stop or change?",
    "What’s one thing you love about the way our family celebrates birthdays?",
    "What’s the most meaningful conversation you’ve had with a family member?",
    "What’s one family heirloom or keepsake that you cherish?",
    "What’s one funny nickname someone in the family has, and where did it come from?",
    "What’s the most emotional family event you’ve been part of?",
    "What’s a family value you hold closest to your heart?",
    "What’s the best advice you’ve ever given to a family member?",
    "Who in the family do you think has the best sense of humor?",
    "What’s one thing you’ve noticed about how the family has changed over the years?",
    "What’s your favorite family story to tell to friends or others?",
    "What’s a song or music that reminds you of the family?",
    "What’s a dream you think someone in the family is working hard to achieve?",
    "What’s one quality you admire in our parents or grandparents?",
    "What do you think is the most important lesson we’ve learned as a family?",
    "What’s one way we can show more love and appreciation to each other?",
    "What’s your favorite family game or activity we’ve ever played together?",
    "Who in the family is the best at giving advice, and why?",
    "What’s a funny family habit or quirk that you’ve noticed?",
    "If the family wrote a book about our story, what would the title be?",
    "What’s one memory of a family pet or animal you’ll never forget?",
    "What’s the most exciting family adventure or outing you’ve been on?",
    "What’s one life lesson you learned from a sibling or cousin?",
    "What’s something a family member does that always makes you smile?",
    "What’s one way we can make more family memories in the future?",
    "What’s a skill or hobby you learned from someone in the family?",
    "What’s one thing about our family you hope never changes?",
    "What’s your favorite family movie or TV show to watch together?",
    "What’s a family inside joke that always makes you laugh?",
    "What’s a special place or spot that’s meaningful to the family?",
    "What’s a time when the family came together to overcome something difficult?",
    "What’s one thing you think we should do together as a family more often?",
    "Who in the family is the most creative, and why?",
    "What’s a family tradition or celebration you look forward to every year?",
    "What’s a story about an ancestor or relative you think is inspiring?",
    "What’s a quality you wish the family would develop or work on?",
    "What’s one way the family has helped you grow as a person?",
    "Who in the family is the best cook or baker, and what’s their best dish?",
    "What’s something about our family that’s unique or different from others?",
    "What’s a moment you felt the most loved by the family?",
    "What’s one thing you’d like to learn about our family history?",
    "What’s your favorite memory of spending time with your grandparents?",
    "What’s something you’ve taught another family member?",
    "What’s a dream vacation you’d love to take with the family?",
    "What’s one funny or embarrassing story you’ll always remember about a family member?",
    "What’s a song or movie that always reminds you of the family?",
    "What’s a talent or skill you think runs in the family?",
    "What’s a piece of advice you’d give to the next generation in our family?",
    "What’s a holiday or event you wish we celebrated more often?",
    "What’s a memory of a family gathering that stands out to you?",
    "What’s something you think we can all do to make the family stronger?",
    "What’s a family value you think is most important to hold on to?",
    "What’s a way we can stay connected even if we live far apart?",
    "What’s a childhood memory of home that brings you comfort?",
    "What’s one thing you think makes our family special?",
    "What’s a funny or unusual habit someone in the family has?",
    "What’s the most memorable birthday celebration you’ve had with the family?",
    "If we had a family mascot, what would it be and why?",
    "What’s one thing you’ve learned from watching how our family handles disagreements?",
    "What’s a hidden talent or skill someone in the family has that others might not know about?",
    "What’s one moment you wish we had captured in a photo or video?",
    "What’s the best family gift exchange or surprise you’ve ever experienced?",
    "What’s a family game or activity you’d love to try together?",
    "What’s the most creative or thoughtful thing a family member has done for you?",
    "What’s one way our family has changed for the better over time?",
    "What’s a piece of family history or ancestry you’d love to explore further?",
    "What’s a quality in our family that helps us stay close during tough times?",
    "What’s the funniest or most unexpected thing that ever happened during a family meal?",
    "What’s one story or anecdote about a family member you think we should pass down?",
    "What’s a lesson you learned from watching how our parents or grandparents lived their lives?",
    "What’s one family tradition you’ve grown to appreciate more as you got older?",
    "Who in the family inspires you the most, and why?",
    "What’s a memory of a family holiday or celebration that stands out to you?",
    "What’s something about the family that always makes you feel safe and loved?",
    "What’s one way we can make our family gatherings more special?",
    "What’s a small moment with the family that has stayed with you over the years?",
    "What’s a childhood game or activity you miss doing with the family?",
    "What’s one thing you’d like to thank the family for?",
    "What’s the best compliment you’ve received from a family member?",
    "What’s one way the family has helped you during a difficult time?",
    "If you could bring back one tradition from the past, what would it be?",
    "What’s something you’ve always wanted to try doing as a family?",
    "What’s a movie or book that reminds you of our family?",
    "What’s one moment you were really proud of the family?",
    "What’s one family trip or vacation destination you’d love to revisit?",
    "What’s something about our family home that makes it feel special?",
    "What’s a funny or embarrassing story from your childhood involving the family?",
    "What’s a family recipe or dish you’d love to learn how to make?",
    "What’s one story about our parents or grandparents that inspires you?",
    "What’s a memory of a family celebration that you’ll never forget?",
    "What’s a quality you admire in your siblings or cousins?",
    "What’s one tradition you’d love to create with the family?",
    "What’s a moment when you felt really proud to be part of this family?",
    "What’s a family joke or saying that always makes you laugh?",
    "What’s one thing about your childhood with the family that you’re grateful for?",
    "What’s a song or playlist you think represents our family?",
    "What’s the best story you’ve ever heard from an older family member?",
    "What’s one thing you admire about how the family supports each other?",
    "What’s one memory of our family helping someone outside the family?",
    "What’s something about our family culture or background that makes you proud?",
    "What’s a time when the family surprised you in a positive way?",
    "What’s a family holiday or tradition you’d love to make bigger or more festive?",
    "What’s one way the family has influenced your career or life choices?",
    "What’s one word or phrase you associate with our family?",
    "What’s a dream or goal you’d love to see the family achieve together?",
  ],
  tagalog: [
    "Ano ang paborito mong alaala noong bata ka kasama ang pamilya natin?",
    "Sino sa pamilya ang pinakanakaimpluwensya sa'yo at bakit?",
    "Ano ang isang family tradition na pinakamamahal mo?",
    "Ano ang pinaka-masayang trip o bakasyon na ginawa natin bilang pamilya?",
    "Ano ang isang tanong na gusto mong itanong sa isang miyembro ng pamilya pero hindi mo pa nagawa?",
    "Anong family meal ang nagdadala ng pinakamasasayang alaala para sa'yo?",
    "Ano ang pinaka-nakakatawang moment na naranasan mo kasama ang pamilya?",
    "Ano ang isang bagay na natutunan mo mula sa bawat miyembro ng pamilya?",
    "Ano ang pinakamagandang payo na natanggap mo mula sa isang miyembro ng pamilya?",
    "Kung pwede mong ulitin ang isang family event, ano ito at bakit?",
    "Ano ang isang bagay tungkol sa pamilya natin na sana mas maraming tao ang nakakaalam?",
    "Ano ang isang talent o skill sa pamilya na hinahangaan mo?",
    "Ano ang isang paraan para mas makapag-spend tayo ng oras bilang pamilya?",
    "Anong family tradition ang gusto mong ipasa sa susunod na henerasyon?",
    "Ano ang pinaka-challenging na karanasan na hinarap mo kasama ang pamilya?",
    "Ano ang pinaka-proud moment mo bilang bahagi ng pamilyang ito?",
    "Sino sa pamilya ang nilalapitan mo kapag kailangan mo ng payo o comfort?",
    "Ano ang isang salita na maglalarawan sa pamilya natin?",
    "Ano ang isang bagay na hindi mo pa nasasabi sa pamilya pero gusto mong sabihin?",
    "Ano ang pinaka-memorable na holiday celebration na ginawa natin bilang pamilya?",
    "Kung pwede kang magbigay ng isang payo sa pinakabata sa pamilya, ano ito?",
    "Ano ang sa tingin mo ay pinakamagandang katangian ng pamilya natin bilang buo?",
    "Ano ang isang family story na sa tingin mo ay dapat laging maalala?",
    "Ano ang isang moment kung saan nagtulungan ang pamilya at may na-achieve na maganda?",
    "Ano ang aral na natutunan mo mula sa kung paano hinaharap ng pamilya ang mga hamon?",
    "Anong tradisyon ang gusto mong idagdag sa pamilya natin?",
    "Ano ang sa tingin mo ay pinaka-nakakatawang kwento tungkol sa isang miyembro ng pamilya?",
    "Kung pwede mong pasalamatan ang isang miyembro ng pamilya, sino ito at bakit?",
    "Ano ang isang bagay na gusto mo sa pag-spend ng oras kasama ang pamilya?",
    "Ano ang isang goal o pangarap mo para sa pamilya sa hinaharap?",
    "Ano ang isang bagay tungkol sa pamilya natin na ipinagmamalaki mo?",
    "Ano ang una mong alaala ng pag-spend ng oras kasama ang pamilya?",
    "Sino ang pinaka-adventurous na miyembro ng pamilya at bakit?",
    "Anong family recipe o dish ang sa tingin mo hindi dapat makalimutan?",
    "Ano ang pinaka-meaningful na regalo na natanggap mo mula sa isang miyembro ng pamilya?",
    "Ano ang isang family moment na talagang napatawa ka nang sobra?",
    "Kung pwede kang magplano ng perfect family day, ano ang hitsura nito?",
    "Anong holiday o event ang gusto mong i-celebrate nating lahat bilang pamilya?",
    "Ano ang isang bagay na sa tingin mo kailangan pang i-improve ng pamilya?",
    "Ano ang pinaka-nakakagulat na natutunan mo tungkol sa isang miyembro ng pamilya?",
    "Sino sa pamilya ang sa tingin mo ay pinakamahusay magkuwento?",
    "Anong payo mula sa isang miyembro ng pamilya ang nagbago ng buhay mo?",
    "Ano ang isang moment kung saan talagang naramdaman mo ang suporta ng pamilya?",
    "Kung pwede mong ibalik ang isang yumaong miyembro ng pamilya sa isang araw, sino ito at bakit?",
    "Anong katangian ang sa tingin mo ay namana mo mula sa isang miyembro ng pamilya?",
    "Anong family tradition ang sa tingin mo dapat tigilan o baguhin?",
    "Ano ang isang bagay na gusto mo sa paraan ng pagdiriwang natin ng mga birthday?",
    "Ano ang pinaka-meaningful na pag-uusap na nagkaroon ka sa isang miyembro ng pamilya?",
    "Ano ang isang family heirloom o keepsake na pinahahalagahan mo?",
    "Ano ang nakakatawang palayaw ng isang miyembro ng pamilya at saan ito nanggaling?",
    "Ano ang pinaka-emotional na family event na naranasan mo?",
    "Anong family value ang pinakaminamahal mo?",
    "Ano ang pinakamagandang payo na naibigay mo sa isang miyembro ng pamilya?",
    "Sino sa pamilya ang sa tingin mo ay may pinakamagandang sense of humor?",
    "Ano ang isang bagay na napansin mo kung paano nagbago ang pamilya sa mga nakaraang taon?",
    "Ano ang paborito mong family story na ikinukuwento mo sa mga kaibigan o iba?",
    "Anong kanta o musika ang nagpapaalala sa'yo ng pamilya?",
    "Anong pangarap ang sa tingin mo ay pinaghihirapan ng isang miyembro ng pamilya?",
    "Anong katangian ang hinahangaan mo sa ating mga magulang o lolo’t lola?",
    "Ano ang pinaka-mahalagang aral na natutunan natin bilang isang pamilya?",
    "Ano ang isang paraan para maipakita natin ang higit na pagmamahal at pasasalamat sa isa’t isa?",
    "Ano ang paborito mong family game o activity na ginawa nating magkakasama?",
    "Sino sa pamilya ang pinakamahusay magbigay ng payo at bakit?",
    "Ano ang nakakatawang habit o quirk ng pamilya na napansin mo?",
    "Kung ang pamilya natin ay gagawa ng libro tungkol sa kwento natin, ano ang magiging title nito?",
    "Ano ang isang memorya tungkol sa isang alagang hayop ng pamilya na hindi mo malilimutan?",
    "Ano ang pinaka-exciting na family adventure o outing na napuntahan mo?",
    "Ano ang isang life lesson na natutunan mo mula sa kapatid o pinsan mo?",
    "Ano ang isang bagay na ginagawa ng isang miyembro ng pamilya na laging nagpapangiti sa’yo?",
    "Ano ang isang paraan para makagawa tayo ng mas maraming family memories sa hinaharap?",
    "Anong skill o hobby ang natutunan mo mula sa isang miyembro ng pamilya?",
    "Ano ang isang bagay tungkol sa pamilya natin na sana hindi magbago?",
    "Ano ang paborito mong family movie o TV show na pinapanood nating magkakasama?",
    "Ano ang family inside joke na laging nagpapatawa sa’yo?",
    "Ano ang espesyal na lugar o spot na may kahulugan para sa pamilya?",
    "Ano ang isang pagkakataon kung saan nagkaisa ang pamilya para malampasan ang isang mahirap na sitwasyon?",
    "Ano ang isang bagay na sa tingin mo dapat nating gawin nang mas madalas bilang pamilya?",
    "Sino sa pamilya ang pinaka-creative at bakit?",
    "Anong family tradition o celebration ang palaging inaabangan mo taon-taon?",
    "Ano ang isang kwento tungkol sa isang ninuno o kamag-anak na nakaka-inspire para sa'yo?",
    "Anong katangian ang sa tingin mo kailangan pang ma-develop ng pamilya?",
    "Ano ang isang paraan kung paano nakatulong ang pamilya sa personal na paglago mo?",
    "Sino sa pamilya ang pinakamahusay magluto o mag-bake at ano ang pinakamagaling nilang dish?",
    "Ano ang isang bagay tungkol sa pamilya natin na kakaiba o naiiba sa iba?",
    "Ano ang isang moment kung kailan naramdaman mo ang pinakamalaking pagmamahal mula sa pamilya?",
    "Ano ang isang bagay na gusto mong matutunan tungkol sa kasaysayan ng pamilya natin?",
    "Ano ang paborito mong memorya sa pag-spend ng oras kasama ang lolo’t lola mo?",
    "Ano ang isang bagay na naituro mo sa isang miyembro ng pamilya?",
    "Anong dream vacation ang gusto mong gawin kasama ang pamilya?",
    "Ano ang isang nakakatawa o nakakahiya na kwento tungkol sa isang miyembro ng pamilya na hindi mo malilimutan?",
    "Anong kanta o pelikula ang laging nagpapaalala sa'yo ng pamilya?",
    "Anong talent o skill ang sa tingin mo ay tumatakbo sa pamilya natin?",
    "Ano ang isang payo na ibibigay mo sa susunod na henerasyon sa pamilya natin?",
    "Anong holiday o event ang sana mas madalas nating i-celebrate?",
    "Ano ang isang memorya ng family gathering na talagang tumatak sa'yo?",
    "Ano ang isang bagay na sa tingin mo ay pwede nating gawin para mas maging matatag ang pamilya natin?",
    "Anong family value ang sa tingin mo pinaka-importanteng mapanatili?",
    "Ano ang isang paraan para manatili tayong konektado kahit magkakalayo tayo?",
    "Ano ang isang alaala noong bata ka sa bahay na nagbibigay sa'yo ng comfort?",
    "Ano ang isang bagay na sa tingin mo ay nagpapaspecial sa pamilya natin?",
    "Sino sa pamilya ang pinaka-maalaga at bakit?",
    "Anong paborito mong pagkain na laging inihahanda kapag may family gatherings?",
    "Ano ang isang kwento tungkol sa pamilya na palagi mong gustong ikuwento sa iba?",
    "Ano ang pinaka-masayang alaala mo sa paglalaro kasama ang mga pinsan mo?",
    "Kung pwede kang mag-host ng isang family reunion, saan mo ito gagawin at bakit?",
    "Ano ang isang aral na natutunan mo mula sa pagkakamali ng pamilya?",
    "Anong bagay ang palaging nagpapaalala sa'yo ng tahanan?",
    "Sino sa pamilya ang sa tingin mo ay laging may kakaibang ideya?",
    "Ano ang isang family bonding moment na hindi mo makakalimutan?",
    "Kung pwede kang magtanong ng isang bagay sa isang ninuno natin, ano ito?",
    "Anong paboritong laro ang nilalaro mo kasama ang pamilya?",
    "Sino sa pamilya ang sa tingin mo ay pinaka-organisado at bakit?",
    "Ano ang isang bagay na gusto mong gawin para mas mapalapit pa sa pamilya?",
    "Sino sa pamilya ang sa tingin mo ay may pinakamatibay na pananampalataya o paniniwala?",
    "Ano ang paborito mong oras ng taon na kasama ang pamilya?",
    "Kung pwede kang magbigay ng award sa isang miyembro ng pamilya, ano ito at kanino mo ibibigay?",
    "Anong paboritong kanta ng pamilya na palaging kinakanta o pinapatugtog?",
    "Ano ang isang bagay na sa tingin mo ay nagpapalakas sa samahan ng pamilya natin?",
    "Anong event sa buhay mo ang sa tingin mo ay pinakanasuportahan ka ng pamilya?",
    "Kung may motto ang pamilya natin, ano ito?",
    "Anong family photo ang pinaka-paborito mo at bakit?",
    "Sino sa pamilya ang sa tingin mo ay may pinakamatibay na loob at bakit?",
    "Ano ang isang bagay na ginagawa ng pamilya na nagpapagaan ng araw mo?",
    "Kung pwede kang magbigay ng time capsule para sa susunod na henerasyon ng pamilya, ano ang ilalagay mo?",
    "Ano ang paborito mong kwento mula sa pagkabata mo na kasama ang pamilya?",
    "Sino sa pamilya ang palaging handang tumulong sa oras ng pangangailangan?",
    "Anong paboritong holiday activity ang palaging ginagawa ng pamilya?",
    "Ano ang isang bagay na gusto mong maranasan kasama ang pamilya sa hinaharap?",
    "Kung pwede kang gumawa ng family playlist, anong mga kanta ang isasama mo?",
    "Ano ang isang salita na maglalarawan sa pamilya natin?",
    "Ano ang nakakatawa o kakaibang habit ng isa sa mga miyembro ng pamilya?",
    "Ano ang pinakanatatandaan mong birthday celebration kasama ang pamilya?",
    "Kung magkakaroon tayo ng family mascot, ano ‘yon at bakit?",
    "Ano ang natutunan mo mula sa kung paano inaayos ng pamilya ang mga hindi pagkakaintindihan?",
    "Ano ang hidden talent o skill ng isang miyembro ng pamilya na baka hindi alam ng iba?",
    "Ano ang isang moment na sana na-capture natin sa photo o video?",
    "Ano ang pinaka-memorable na family gift exchange o surprise na naranasan mo?",
    "Ano ang family game o activity na gusto mong subukan nating lahat?",
    "Ano ang pinaka-creative o thoughtful na ginawa ng isang miyembro ng pamilya para sa’yo?",
    "Ano ang isang paraan kung paano nagbago ang pamilya natin sa mas mabuting paraan?",
    "Ano ang bahagi ng family history o ancestry na gusto mong pag-aralan nang mas malalim?",
    "Ano ang isang kalidad ng pamilya na tumutulong para manatili tayong close kahit may mga problema?",
    "Ano ang pinaka-nakakatawa o pinaka-unexpected na nangyari sa isang family meal?",
    "Ano ang isang kwento tungkol sa isang miyembro ng pamilya na dapat nating ipasa sa susunod na henerasyon?",
    "Ano ang aral na natutunan mo mula sa pamumuhay ng ating mga magulang o lolo’t lola?",
    "Ano ang family tradition na mas na-appreciate mo habang tumatanda ka?",
    "Sino ang pinaka-inspiring na miyembro ng pamilya para sa’yo at bakit?",
    "Ano ang memory ng isang family holiday o celebration na hindi mo makakalimutan?",
    "Ano ang isang bagay tungkol sa pamilya na lagi kang pinaparamdam na ligtas at mahalaga?",
    "Ano ang isang paraan para gawing mas espesyal ang ating mga family gatherings?",
    "Ano ang maliit na moment kasama ang pamilya na tumatak sa’yo sa paglipas ng panahon?",
    "Ano ang isang childhood game o activity na nami-miss mong gawin kasama ang pamilya?",
    "Ano ang isang bagay na gusto mong pasalamatan ang pamilya?",
    "Ano ang pinaka-magandang papuri na natanggap mo mula sa isang miyembro ng pamilya?",
    "Ano ang isang paraan na natulungan ka ng pamilya sa mahirap na panahon?",
    "Kung mababalik mo ang isang tradisyon mula noon, ano ito?",
    "Ano ang isang bagay na matagal mo nang gustong gawin bilang pamilya?",
    "Ano ang pelikula o libro na nagpapakilala sa ating pamilya?",
    "Ano ang isang moment na sobrang proud ka sa pamilya natin?",
    "Ano ang isang family trip o vacation destination na gusto mong balikan?",
    "Ano ang isang bagay tungkol sa bahay natin na nagpaparamdam ng pagiging espesyal nito?",
    "Ano ang pinaka-nakakatawa o nakakahiya mong kwento mula sa kabataan mo kasama ang pamilya?",
    "Ano ang family recipe o dish na gusto mong matutunan lutuin?",
    "Ano ang isang kwento tungkol sa ating mga magulang o lolo’t lola na nagbibigay inspirasyon sa’yo?",
    "Ano ang memory ng family celebration na hinding-hindi mo malilimutan?",
    "Ano ang kalidad na hinahangaan mo sa mga kapatid o pinsan mo?",
    "Ano ang isang tradisyon na gusto mong simulan kasama ang pamilya?",
    "Ano ang isang moment na naramdaman mong sobrang proud maging bahagi ng pamilya na ito?",
    "Ano ang family joke o kasabihan na lagi kang pinapatawa?",
    "Ano ang isang bagay sa pagkabata mo kasama ang pamilya na sobrang thankful ka?",
    "Ano ang kanta o playlist na sa tingin mo ay nagre-represent sa pamilya natin?",
    "Ano ang pinaka-magandang kwento na narinig mo mula sa mas nakatatandang miyembro ng pamilya?",
    "Ano ang isang bagay na hinahangaan mo kung paano tayo nagtutulungan bilang pamilya?",
    "Ano ang memory ng ating pamilya na tumulong sa ibang tao na tumatak sa’yo?",
    "Ano ang isang bagay tungkol sa ating family culture o background na ipinagmamalaki mo?",
    "Ano ang isang pagkakataon na nagulat ka sa positibong paraan dahil sa pamilya natin?",
    "Ano ang holiday o family tradition na gusto mong gawing mas engrande?",
    "Ano ang isang paraan na naimpluwensyahan ng pamilya ang iyong career o buhay?",
    "Ano ang isang salita o parirala na sa tingin mo ay naglalarawan sa ating pamilya?",
    "Ano ang isang pangarap o goal na gusto mong marating natin bilang pamilya?",
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
