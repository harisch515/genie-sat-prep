// Shared question data for Genie SAT Prep

const CS_QUESTIONS = [
  // ===== WORDS IN CONTEXT =====
  {
    n: 1, id: '359902ae', skill: 'words', skillLabel: 'Words in Context', difficulty: 'medium',
    passage: '<em>Adapted from Nathaniel Hawthorne\'s 1837 story "Dr. Heidegger\'s Experiment." A physician is rehydrating a dried flower.</em>\n\nAt first [the rose] lay lightly on the surface of the fluid, appearing to imbibe none of its moisture. Soon, however, a singular change began to be visible. The crushed and dried petals stirred and assumed a deepening tinge of crimson, as if the flower were reviving from a deathlike slumber.',
    question: 'As used in the text, what does the phrase "a singular" most nearly mean?',
    choices: [
      { letter: 'A', text: 'A lonely' },
      { letter: 'B', text: 'A disagreeable' },
      { letter: 'C', text: 'An acceptable' },
      { letter: 'D', text: 'An extraordinary' }
    ],
    correct: 'D',
    whyCorrect: 'The rose goes from "crushed and dried" to "reviving from a deathlike slumber" — that\'s an <strong>extraordinary</strong> change, not just any change. "Singular" here means remarkable, one-of-a-kind.',
    whyWrong: {
      A: 'Singular CAN mean "single," but lonely doesn\'t fit — the rose isn\'t isolated, it\'s transforming.',
      B: 'No definition of singular relates to disagreeable. The change is dramatic, not unpleasant.',
      C: '"Acceptable" is way too mild. The text is describing something striking, not barely-okay.'
    },
    hack: '<strong>Common word + secondary meaning.</strong> When you see a word you know, predict from CONTEXT before locking in. "Crushed → reviving" tells you the change is dramatic, so pick the dramatic word.'
  },
  {
    n: 2, id: '22a41819', skill: 'words', skillLabel: 'Words in Context', difficulty: 'hard',
    passage: 'Rejecting the premise that the literary magazine <em>Ebony and Topaz</em> (1927) should present a unified vision of Black American identity, editor Charles S. Johnson fostered his contributors\' diverse perspectives by promoting their authorial autonomy. Johnson\'s self-effacement diverged from the editorial stances of W.E.B. Du Bois and Alain Locke, whose decisions for their publications were more ______.',
    question: 'Which choice completes the text with the most logical and precise word or phrase?',
    choices: [
      { letter: 'A', text: 'proficient' },
      { letter: 'B', text: 'dogmatic' },
      { letter: 'C', text: 'ambiguous' },
      { letter: 'D', text: 'unpretentious' }
    ],
    correct: 'B',
    whyCorrect: 'Johnson welcomed "diverse perspectives." Du Bois and Locke "diverged" from him — meaning they did the OPPOSITE. They pushed a single "unified vision," which is exactly what <strong>dogmatic</strong> means: rigidly committed to one view.',
    whyWrong: {
      A: '"Proficient" = skilled. The contrast in the text is about STYLE (open vs rigid), not skill level.',
      C: '"Ambiguous" = unclear. That\'s the opposite of pushing a "unified vision" — it actually describes Johnson, not Du Bois/Locke.',
      D: '"Unpretentious" = humble. Doesn\'t contrast with Johnson\'s "self-effacement" — they\'d be similar, not different.'
    },
    hack: '<strong>"Diverged from" = OPPOSITE.</strong> When the blank describes a contrast, flip the established trait. Johnson = open + diverse, so the blank = closed + rigid = dogmatic.'
  },
  {
    n: 3, id: '84ece3f6', skill: 'words', skillLabel: 'Words in Context', difficulty: 'medium',
    passage: '<em>Adapted from Nathaniel Hawthorne\'s 1844 short story "Drowne\'s Wooden Image." Drowne is carving a wooden figure.</em>\n\nDay by day, the work assumed greater precision, and settled its irregular and misty outline into distincter grace and beauty. The general design was now obvious to the common eye.',
    question: 'As used in the text, what does the word "assumed" most nearly mean?',
    choices: [
      { letter: 'A', text: 'Acquired' },
      { letter: 'B', text: 'Acknowledged' },
      { letter: 'C', text: 'Imitated' },
      { letter: 'D', text: 'Speculated' }
    ],
    correct: 'A',
    whyCorrect: 'The carving went from "irregular and misty" to "distincter grace and beauty" — it gradually <strong>acquired</strong>, or came to possess, more precision. That\'s exactly what "assumed" means here.',
    whyWrong: {
      B: 'A wooden figure can\'t acknowledge anything — it\'s an inanimate object.',
      C: 'It didn\'t mimic precision; it actually became precise. There\'s no copying happening.',
      D: 'A wooden figure can\'t speculate either. Eliminate any meaning that requires a thinking subject.'
    },
    hack: '<strong>Subject test.</strong> "Assumed" has 4+ meanings, but the subject is a wooden carving. Eliminate any meaning that needs a brain (acknowledge, speculate). Only physical meanings survive.'
  },
  {
    n: 4, id: 'e386a11d', skill: 'words', skillLabel: 'Words in Context', difficulty: 'easy',
    passage: '<em>Cat and Plum Blossoms</em> is an important work of Nihonga, or classical Japanese painting. Unlike Kuroda Seiki, who adopted traditional European methods such as painting with oil on canvas, Hishida Shunsō ______ traditional Japanese approaches. For instance, Hishida produced <em>Cat and Plum Blossoms</em> by applying color pigments to a silk scroll.',
    question: 'Which choice completes the text with the most logical and precise word or phrase?',
    choices: [
      { letter: 'A', text: 'distrusted' },
      { letter: 'B', text: 'embraced' },
      { letter: 'C', text: 'released' },
      { letter: 'D', text: 'overlooked' }
    ],
    correct: 'B',
    whyCorrect: 'The "for instance" sentence shows Hishida USING a traditional Japanese technique (silk scroll painting). So he <strong>embraced</strong> tradition. The structure is: contrast Hishida with Kuroda, then prove Hishida used tradition.',
    whyWrong: {
      A: '"Distrusted" contradicts the example — you don\'t demonstrate distrust by using the technique.',
      C: '"Released" doesn\'t fit logically. You can\'t release an approach you\'re actively using.',
      D: '"Overlooked" means he ignored tradition — but he literally followed it (silk scroll). Direct contradiction.'
    },
    hack: '<strong>Read past the blank.</strong> The "for instance" sentence is a free hint — it shows the answer in action. Always check what comes after.'
  },
  {
    n: 5, id: '4974b053', skill: 'words', skillLabel: 'Words in Context', difficulty: 'medium',
    passage: 'Although science fiction was dominated mostly by white male authors when Octavia Butler, a Black woman, began writing, she did not view the genre as ______: Butler broke into the field with the publication of several short stories and her 1976 novel <em>Patternmaster</em>, and she later became the first science fiction writer to win a prestigious MacArthur Fellowship.',
    question: 'Which choice completes the text with the most logical and precise word or phrase?',
    choices: [
      { letter: 'A', text: 'legitimate' },
      { letter: 'B', text: 'impenetrable' },
      { letter: 'C', text: 'compelling' },
      { letter: 'D', text: 'indecipherable' }
    ],
    correct: 'B',
    whyCorrect: 'Butler "did NOT view the genre as ____" — and she clearly broke INTO the field. So she didn\'t see it as <strong>impenetrable</strong> (impossible to enter). The negation flips the logic: she DID see it as enterable.',
    whyWrong: {
      A: '"Legitimate" = valid/real. Nothing in the text suggests Butler questioned whether sci-fi was a real genre.',
      C: '"Compelling" = attracting attention. She chose to write it, so she WAS drawn to it. The negation makes this backwards.',
      D: '"Indecipherable" = impossible to understand. Text isn\'t about understanding the genre — it\'s about access to it.'
    },
    hack: '<strong>Watch the negation.</strong> "Did not view as ___" means you need a NEGATIVE word. The blank is what she rejected, not what she believed. Flip your prediction.'
  },

  // ===== TEXT STRUCTURE & PURPOSE =====
  {
    n: 6, id: 'ca50de52', skill: 'structure', skillLabel: 'Text Structure & Purpose', difficulty: 'hard',
    passage: '<u>"How lifelike are they?"</u> Many computer animators prioritize this question as they strive to create ever more realistic environments and lighting. Generally, while characters in computer-animated films appear highly exaggerated, environments and lighting are carefully engineered to mimic reality. But some animators, such as Pixar\'s Sanjay Patel, are focused on a different question. Rather than asking first whether the environments and lighting they\'re creating are convincingly lifelike, Patel and others are asking whether these elements reflect their films\' unique stories.',
    question: 'Which choice best describes the function of the underlined question in the text as a whole?',
    choices: [
      { letter: 'A', text: 'It reflects a primary goal that many computer animators have for certain components of the animations they produce.' },
      { letter: 'B', text: 'It represents a concern of computer animators who are more interested in creating unique backgrounds and lighting effects than realistic ones.' },
      { letter: 'C', text: 'It conveys the uncertainty among many computer animators about how to create realistic animations using current technology.' },
      { letter: 'D', text: 'It illustrates a reaction that audiences typically have to the appearance of characters created by computer animators.' }
    ],
    correct: 'A',
    whyCorrect: 'The text says "many animators prioritize this question" when making realistic environments. So the underlined question reflects what those animators are <strong>trying to achieve</strong> — a primary goal for certain components.',
    whyWrong: {
      B: 'Backwards. The question belongs to realism-seeking animators, not the unique-story animators (Patel\'s group). That group comes later as a contrast.',
      C: 'No uncertainty exists. Animators know HOW to make things realistic — the debate is whether they SHOULD.',
      D: 'The question is the animators\' perspective, not the audience\'s. Audience reactions never come up.'
    },
    hack: '<strong>Whose voice is it?</strong> When asked the function of a quote/question, identify WHO is asking it. The next sentence usually tells you. Then check if that group matches the answer.'
  },
  {
    n: 7, id: '82cb7dda', skill: 'structure', skillLabel: 'Text Structure & Purpose', difficulty: 'hard',
    passage: 'The field of study called affective neuroscience seeks instinctive, physiological causes for feelings such as pleasure or displeasure. Because these sensations are linked to a chemical component (for example, the release of the neurotransmitter dopamine in the brain when one receives or expects a reward), they can be said to have a partly physiological basis. These processes have been described in mammals, but Jingnan Huang and his colleagues have recently observed that some behaviors of honeybees (such as foraging) are also motivated by a dopamine-based signaling process.',
    question: 'What choice best describes the main purpose of the text?',
    choices: [
      { letter: 'A', text: 'It describes an experimental method of measuring the strength of physiological responses in humans.' },
      { letter: 'B', text: 'It illustrates processes by which certain insects can express how they are feeling.' },
      { letter: 'C', text: 'It summarizes a finding suggesting that some mechanisms in the brains of certain insects resemble mechanisms in mammalian brains.' },
      { letter: 'D', text: 'It presents research showing that certain insects and mammals behave similarly when there is a possibility of a reward for their actions.' }
    ],
    correct: 'C',
    whyCorrect: 'The arc of the text: dopamine drives feelings in mammals → Huang found dopamine drives behaviors in bees too. The point is that <strong>brain mechanisms</strong> are similar across species.',
    whyWrong: {
      A: 'No experiments are described. The text reports observations, not methodology.',
      B: 'Nothing suggests bees EXPRESS feelings. The text says their behaviors are MOTIVATED by dopamine — different claim.',
      D: 'Wrong direction. The point is mechanism similarity (brain chemistry), not behavior similarity. D shifts focus from inside the brain to outward action.'
    },
    hack: '<strong>What does the LAST sentence add?</strong> Main-purpose answers track the move from setup → twist. Here the move is "mammals → also bees." That\'s the whole point.'
  },
  {
    n: 8, id: 'd4732483', skill: 'structure', skillLabel: 'Text Structure & Purpose', difficulty: 'hard',
    passage: 'Studying late nineteenth- and early twentieth-century artifacts from an agricultural and domestic site in Texas, archaeologist Ayana O. Flewellen found that Black women employed as farm workers utilized hook-and-eye closures to fasten their clothes at the waist, giving themselves a silhouette similar to the one that was popular in contemporary fashion and typically achieved through more restrictive garments such as corsets. Flewellen argues that this sartorial practice shows that these women balanced hegemonic ideals of femininity with the requirements of their physically demanding occupation.',
    question: 'Which choice best states the main purpose of the text?',
    choices: [
      { letter: 'A', text: 'To describe an unexpected discovery that altered a researcher\'s view of how rapidly fashions among Black female farmworkers in late nineteenth- and early twentieth-century Texas changed during the period' },
      { letter: 'B', text: 'To discuss research that investigated the ways in which Black female farmworkers in late nineteenth- and early twentieth-century Texas used fashion practices to resist traditional gender ideals' },
      { letter: 'C', text: 'To evaluate a scholarly work that offers explanations for the impact of urban fashion ideals on Black female farmworkers in late nineteenth- and early twentieth-century Texas' },
      { letter: 'D', text: 'To summarize the findings of a study that explored factors influencing a fashion practice among Black female farmworkers in late nineteenth- and early twentieth-century Texas' }
    ],
    correct: 'D',
    whyCorrect: 'The text describes Flewellen\'s research: hook-and-eye closures let farm workers achieve a fashionable silhouette while still doing demanding work. Two factors (fashion ideals + job demands) influenced one practice. <strong>That\'s exactly what D says.</strong>',
    whyWrong: {
      A: 'Never mentions rate of change OR labels the finding "unexpected." Both are added details.',
      B: 'SAT trap: text says "balanced" with traditions, not "resisted" them. Flipped meaning.',
      C: 'Text describes, doesn\'t evaluate. Also: agricultural/domestic site, not urban fashion.'
    },
    hack: '<strong>Balanced ≠ resisted.</strong> the SAT writes traps that flip a single key word. Read the verbs in the text carefully — "balanced WITH" and "resisted" mean opposite things.'
  },
  {
    n: 9, id: 'e818241b', skill: 'structure', skillLabel: 'Text Structure & Purpose', difficulty: 'hard',
    passage: 'Astronomers are confident that the star Betelgeuse will eventually consume all the helium in its core and explode in a supernova. <u>They are much less confident, however, about when this will happen, since that depends on internal characteristics of Betelgeuse that are largely unknown.</u> Astrophysicist Sarafina El-Badry Nance and colleagues recently investigated whether acoustic waves in the star could be used to determine internal stellar states but concluded that this method could not sufficiently reveal Betelgeuse\'s internal characteristics to allow its evolutionary state to be firmly fixed.',
    question: 'Which choice best describes the function of the second sentence in the overall structure of the text?',
    choices: [
      { letter: 'A', text: 'It describes a serious limitation of the method used by Nance and colleagues.' },
      { letter: 'B', text: 'It presents the central finding reported by Nance and colleagues.' },
      { letter: 'C', text: 'It identifies the problem that Nance and colleagues attempted to solve but did not.' },
      { letter: 'D', text: 'It explains how the work of Nance and colleagues was received by others in the field.' }
    ],
    correct: 'C',
    whyCorrect: 'Map the text: <strong>Sentence 1</strong> = setup (it WILL explode). <strong>Sentence 2</strong> = problem (we don\'t know WHEN). <strong>Sentence 3</strong> = Nance tried to solve sentence 2\'s problem and failed. So sentence 2 sets up the problem.',
    whyWrong: {
      A: 'The limitation belongs to sentence 3 (their method failed). Sentence 2 hadn\'t introduced their method yet.',
      B: 'Their finding ("the method didn\'t work") is in sentence 3, not sentence 2.',
      D: 'Nothing about reception by other scientists is mentioned anywhere.'
    },
    hack: '<strong>Map before you answer.</strong> Three-sentence structure questions are mechanical once you label each sentence: setup → problem → attempted solution. Find the slot, find the answer.'
  },
  {
    n: 10, id: '5f56fdec', skill: 'structure', skillLabel: 'Text Structure & Purpose', difficulty: 'hard',
    passage: '<em>From George Marion McClellan\'s 1895 poem "Eternity."</em>\n\nMy spirit swoons, and all my senses cry\nFor Ocean\'s breast and covering of the sky.\nRock me to sleep, ye waves, and outward bound,\nJust let me drift far out from toil and care,\nWhere lapping of the waves shall be the sound,\nWhich mingled with the winds that gently bear\nMe on between a peaceful sea and sky,\nTo make my soothing slumberous lullaby.',
    question: 'Which choice best states the main purpose of the text?',
    choices: [
      { letter: 'A', text: 'To illustrate the increasing intensity of the speaker\'s desire to escape ongoing hardship by gliding on the ocean' },
      { letter: 'B', text: 'To contrast the demands of the speaker\'s everyday life with the serenity of being rocked to sleep by the ocean' },
      { letter: 'C', text: 'To convey the speaker\'s longing for the ocean to impart a sense of inner tranquility' },
      { letter: 'D', text: 'To justify the speaker\'s qualms about being transported by the ocean to a quiet destination' }
    ],
    correct: 'C',
    whyCorrect: 'The whole poem is one sustained wish: "rock me to sleep," "drift far out," "soothing slumberous lullaby." That\'s a <strong>longing for inner tranquility</strong> from the ocean. Simple as.',
    whyWrong: {
      A: '"Increasing intensity" isn\'t in the poem — it\'s one consistent feeling, not a buildup. Also, hardship is hinted, never stated.',
      B: 'No contrast happens. Daily life is barely mentioned ("toil and care"). The whole poem is about the ocean fantasy.',
      D: '"Qualms" = doubts. The speaker has zero doubts — they actively WANT this.'
    },
    hack: '<strong>Don\'t add a plot.</strong> Poetry main-purpose questions trick you into building narrative. The simplest description is usually right. The poem is a wish — keep it that simple.'
  },

  // ===== CROSS-TEXT CONNECTIONS =====
  {
    n: 11, id: 'eb89dcc8', skill: 'cross', skillLabel: 'Cross-Text Connections', difficulty: 'easy',
    passage: '<span class="text-divider">Text 1</span>Imagine you and your friend are trying to decide where to eat lunch. <u>When people try to make joint decisions like this, they often don\'t reveal their true preferences. Instead, they say they would be happy with all options because they think this response will help them appear more easygoing and likable to the other person.</u>\n<span class="text-divider">Text 2</span>Research shows that people who don\'t state their preferences when making a decision with others aren\'t more likable in the eyes of others. In fact, stating that you have no preference actually makes the decision more difficult for other people. It can also cause them to feel less happy with their ultimate decision and with you.',
    question: 'Based on the texts, what response would the author of Text 2 most likely suggest for someone in the situation described in the underlined sentence in Text 1?',
    choices: [
      { letter: 'A', text: 'Cancel the plan to have lunch together.' },
      { letter: 'B', text: 'Ask where the friend typically likes to eat.' },
      { letter: 'C', text: 'State a preference about where to eat.' },
      { letter: 'D', text: 'Change the subject to talk about something else.' }
    ],
    correct: 'C',
    whyCorrect: 'Text 2\'s argument: hiding preferences fails (you don\'t look more likable, and you make others miserable). The fix is the OPPOSITE of hiding — <strong>state a preference</strong>.',
    whyWrong: {
      A: 'Text 2 isn\'t about avoiding decisions. It\'s about HOW to make them better.',
      B: 'Asking about THEIR preference still hides YOURS. Same problem Text 2 is criticizing.',
      D: 'Avoiding the decision = the exact behavior Text 2 says is harmful.'
    },
    hack: '<strong>Apply, don\'t infer.</strong> Take Text 2\'s claim and ask: "What ACTION does this advise?" Hide preference fails → state preference. Don\'t bring in outside ideas.'
  },
  {
    n: 12, id: '97e5bf55', skill: 'cross', skillLabel: 'Cross-Text Connections', difficulty: 'hard',
    passage: '<span class="text-divider">Text 1</span>In 1916, H. Dugdale Sykes disputed claims that <em>The Two Noble Kinsmen</em> was coauthored by William Shakespeare and John Fletcher. Sykes felt Fletcher\'s contributions to the play were obvious — Fletcher had a distinct style in his other plays, so much so that lines with that style were considered sufficient evidence of Fletcher\'s authorship. But for the lines not deemed to be by Fletcher, Sykes felt that their depiction of women indicated that their author was not Shakespeare but Philip Massinger.\n<span class="text-divider">Text 2</span>Scholars have accepted <em>The Two Noble Kinsmen</em> as coauthored by Shakespeare since the 1970s: it appears in all major one-volume editions of Shakespeare\'s complete works. Though scholars disagree about who wrote what exactly, it is generally held that on the basis of style, Shakespeare wrote all of the first act and most of the last, while John Fletcher authored most of the three middle acts.',
    question: 'Based on the texts, both Sykes in Text 1 and the scholars in Text 2 would most likely agree with which statement?',
    choices: [
      { letter: 'A', text: 'John Fletcher\'s writing has a unique, readily identifiable style.' },
      { letter: 'B', text: 'The women characters in John Fletcher\'s plays are similar to the women characters in Philip Massinger\'s plays.' },
      { letter: 'C', text: 'The Two Noble Kinsmen belongs in one-volume compilations of Shakespeare\'s complete plays.' },
      { letter: 'D', text: 'Philip Massinger\'s style in the first and last acts of The Two Noble Kinsmen is an homage to Shakespeare\'s style.' }
    ],
    correct: 'A',
    whyCorrect: 'Text 1: Fletcher\'s style was "distinct" — recognizable on sight. Text 2: scholars use "the basis of style" to assign Fletcher the middle acts. Both rely on the SAME premise — <strong>Fletcher\'s style is identifiable</strong>.',
    whyWrong: {
      B: 'Neither text compares Fletcher\'s women to Massinger\'s women. Text 2 doesn\'t mention Massinger at all.',
      C: 'Sykes (Text 1) DISPUTED that Shakespeare coauthored it. He\'d disagree with this completely.',
      D: 'Text 1 doesn\'t say Massinger imitated Shakespeare. Text 2 doesn\'t mention Massinger.'
    },
    hack: '<strong>Find shared premise, not shared conclusion.</strong> Two authors can disagree about a result while agreeing on a method. Both used "style" as their evidence — that\'s the overlap.'
  },
  {
    n: 13, id: '02fd3da7', skill: 'cross', skillLabel: 'Cross-Text Connections', difficulty: 'easy',
    passage: '<span class="text-divider">Text 1</span>Public policy researcher Anthony Fowler studied the history of elections in Australia, a country that requires citizens to vote. Fowler argues that requiring citizens to vote leads to a significant increase in voters who would otherwise not have the time or motivation to vote. Thus, election results in countries that require citizens to vote better reflect the preferences of the country as a whole.\n<span class="text-divider">Text 2</span>Governments in democratic countries function better when more people vote. However, forcing people to vote may have negative consequences. Shane P. Singh and Jason Roy studied what happens when a country requires its citizens to vote. They found that when people feel forced to vote, they tend to spend less time looking for information about their choices when voting. As a result, votes from these voters may not reflect their actual preferences.',
    question: 'Based on the texts, how would Singh and Roy (Text 2) most likely respond to the research discussed in Text 1?',
    choices: [
      { letter: 'A', text: 'Only countries of a certain population size should implement mandatory voting.' },
      { letter: 'B', text: 'People who are forced to vote are likely to become politically engaged in other ways, such as volunteering or running for office.' },
      { letter: 'C', text: 'Requiring people to vote does not necessarily lead to election outcomes that better represent the preferences of the country as a whole.' },
      { letter: 'D', text: 'Countries that require voting must also make the process of voting easier for their citizens.' }
    ],
    correct: 'C',
    whyCorrect: 'Text 1: mandatory voting → results "better reflect preferences." Text 2: forced voters research less → their votes "may not reflect their actual preferences." So Text 2 <strong>directly disagrees</strong> with Text 1\'s conclusion.',
    whyWrong: {
      A: 'Population size — never mentioned in either text. Out of scope.',
      B: 'Other engagement forms — never mentioned. Pure invention.',
      D: 'Voting ease — never mentioned. Another invented topic.'
    },
    hack: '<strong>Stay inside the texts.</strong> Three of these wrong answers introduce NEW topics neither passage discusses. The right answer always lives inside the actual disagreement.'
  },
  {
    n: 14, id: '105ea6de', skill: 'cross', skillLabel: 'Cross-Text Connections', difficulty: 'hard',
    passage: '<span class="text-divider">Text 1</span>Growth in the use of novel nanohybrids — materials created from the conjugation of multiple distinct nanomaterials, such as iron oxide and gold nanomaterials conjugated for use in magnetic imaging — has outpaced studies of nanohybrids\' environmental risks. <u>Unfortunately, risk evaluations based on nanohybrids\' constituents are not reliable: conjugation may alter constituents\' physiochemical properties such that innocuous nanomaterials form a nanohybrid that is anything but.</u>\n<span class="text-divider">Text 2</span>The potential for enhanced toxicity of nanohybrids relative to the toxicity of constituent nanomaterials has drawn deserved attention, but the effects of nanomaterial conjugation vary by case. For instance, it was recently shown that a nanohybrid of silicon dioxide and zinc oxide preserved the desired optical transparency of zinc oxide nanoparticles while mitigating the nanoparticles\' potential to damage DNA.',
    question: 'Based on the texts, how would the author of Text 2 most likely respond to the assertion in the underlined portion of Text 1?',
    choices: [
      { letter: 'A', text: 'By concurring that the risk described in Text 1 should be evaluated but emphasizing that the risk is more than offset by the potential benefits of nanomaterial conjugation' },
      { letter: 'B', text: 'By arguing that the situation described in Text 1 may not be representative but conceding that the effects of nanomaterial conjugation are harder to predict than researchers had expected' },
      { letter: 'C', text: 'By denying that the circumstance described in Text 1 is likely to occur but acknowledging that many aspects of nanomaterial conjugation are still poorly understood' },
      { letter: 'D', text: 'By agreeing that the possibility described in Text 1 is a cause for concern but pointing out that nanomaterial conjugation does not inevitably produce that result' }
    ],
    correct: 'D',
    whyCorrect: 'Text 2 calls toxicity attention "deserved" (=agrees it\'s a concern), then gives a counter-example: silicon dioxide + zinc oxide REDUCED toxicity. So Text 2 says: <strong>yes it\'s a real concern, but it doesn\'t always happen</strong>.',
    whyWrong: {
      A: 'Text 2 never says benefits "more than offset" risks — just that effects vary case to case.',
      B: '"Harder to predict than expected" isn\'t in either text. Also Text 2 says the attention is "deserved" — meaning Text 1\'s situation IS representative.',
      C: 'Text 2 doesn\'t deny it occurs — its example shows the OPPOSITE outcome can occur, not that the original situation can\'t.'
    },
    hack: '<strong>Two-clause check.</strong> Each choice has two parts ("agreeing X but pointing out Y"). BOTH must be true. Many traps have one true clause and one false clause — verify both.'
  }
];

const EOI_QUESTIONS = [
  // ===== TRANSITIONS =====
  {
    n: 1, id: '2b08f514', skill: 'trans', skillLabel: 'Transitions', difficulty: 'hard',
    type: 'transition',
    passage: 'The prime meridian, the global indicator of zero degrees longitude established in 1884, was originally determined using astronomically derived coordinates. <span class="blank">_______</span> as decades passed, new calculations would reveal increasingly precise coordinates, yet the prime meridian remained unchanged; it wasn\'t until the 1980s that, spurred by improved geodetic data, the prime meridian was officially moved — roughly one hundred meters east.',
    question: 'Which choice completes the text with the most logical transition?',
    choices: [
      { letter: 'A', text: 'Specifically,' },
      { letter: 'B', text: 'To that end,' },
      { letter: 'C', text: 'Again and again,' },
      { letter: 'D', text: 'Granted,' }
    ],
    correct: 'C',
    whyCorrect: '"<strong>Again and again</strong>" signals events that happened MULTIPLE times — exactly what "as decades passed, new calculations would reveal increasingly precise coordinates" describes. Recurring action across decades.',
    whyWrong: {
      A: '"Specifically" would mean elaborating on the prime meridian\'s establishment — but the next sentence describes new events over time, not details of the original event.',
      B: '"To that end" signals a goal-action relationship. No goal was set up in the first sentence.',
      D: '"Granted" signals concession/contrast. The two sentences aren\'t in opposition — sentence 2 just describes what happened next.'
    },
    hack: '<strong>Watch for repetition language.</strong> "Decades passed," "increasingly," "would reveal" — all signal recurring action. Look for transitions that signal frequency: "again and again," "repeatedly," "time after time."'
  },
  {
    n: 2, id: 'e0bd4f8a', skill: 'trans', skillLabel: 'Transitions', difficulty: 'easy',
    type: 'transition',
    passage: 'In 1942, the 1,500-mile Alaska Highway was constructed in under nine months, largely due to the skilled work of nearly 4,000 African American soldiers from US Army engineering regiments. The soldiers\' contribution was overlooked for decades. <span class="blank">_______</span> in 2017, lawmakers declared October 25 a day of recognition — "Alaska Highway Day" — for the troops who helped build this critical roadway.',
    question: 'Which choice completes the text with the most logical transition?',
    choices: [
      { letter: 'A', text: 'Lastly,' },
      { letter: 'B', text: 'Then,' },
      { letter: 'C', text: 'Similarly,' },
      { letter: 'D', text: 'For example,' }
    ],
    correct: 'B',
    whyCorrect: '"<strong>Then</strong>" signals chronological sequence. Decades of being overlooked → and THEN in 2017, recognition came. Pure timeline.',
    whyWrong: {
      A: '"Lastly" implies the last in a series of points or reasons. This isn\'t a list — it\'s a sequence of events.',
      C: 'The 2017 recognition is the OPPOSITE of being overlooked, not similar to it.',
      D: 'Recognition isn\'t an example of being overlooked — it\'s what came after.'
    },
    hack: '<strong>Specific dates = sequence transition.</strong> When you see years or decades shifting between sentences, you almost always need a time word: "then," "next," "later," "finally."'
  },
  {
    n: 3, id: '660d50dc', skill: 'trans', skillLabel: 'Transitions', difficulty: 'easy',
    type: 'transition',
    passage: 'Samuel Coleridge-Taylor was a prominent classical music composer from England who toured the US three times in the early 1900s. The child of a West African father and an English mother, Coleridge-Taylor emphasized his mixed-race ancestry. For example, he referred to himself as Anglo-African. <span class="blank">_______</span> he incorporated the sounds of traditional African music into his classical music compositions.',
    question: 'Which choice completes the text with the most logical transition?',
    choices: [
      { letter: 'A', text: 'In addition,' },
      { letter: 'B', text: 'Actually,' },
      { letter: 'C', text: 'However,' },
      { letter: 'D', text: 'Regardless,' }
    ],
    correct: 'A',
    whyCorrect: '"<strong>In addition</strong>" signals adding another item to a list. Sentence 2 said he emphasized his ancestry; the previous gave one example (the name); now we get a SECOND example (the music).',
    whyWrong: {
      B: '"Actually" signals surprise or correction — but adding African music to compositions isn\'t surprising given everything else.',
      C: '"However" signals contrast — but using African music doesn\'t contrast with calling himself Anglo-African. They reinforce each other.',
      D: '"Regardless" signals "true despite" — there\'s nothing to be despite.'
    },
    hack: '<strong>Two examples of the same idea = ADDITION.</strong> When sentence 1 gives one example and sentence 2 gives another example of the same overall claim, you need "in addition," "also," or "moreover."'
  },
  {
    n: 4, id: '4d2736f0', skill: 'trans', skillLabel: 'Transitions', difficulty: 'hard',
    type: 'transition',
    passage: 'In her poetry collection <em>Thomas and Beulah</em>, Rita Dove interweaves the titular characters\' personal stories with broader historical narratives. She places Thomas\'s journey from the American South to the Midwest in the early 1900s within the larger context of the Great Migration. <span class="blank">_______</span> Dove sets events from Beulah\'s personal life against the backdrop of the US Civil Rights Movement.',
    question: 'Which choice completes the text with the most logical transition?',
    choices: [
      { letter: 'A', text: 'Specifically,' },
      { letter: 'B', text: 'Thus,' },
      { letter: 'C', text: 'Regardless,' },
      { letter: 'D', text: 'Similarly,' }
    ],
    correct: 'D',
    whyCorrect: '"<strong>Similarly</strong>" signals parallel examples. The first sentence sets up the pattern (personal + historical). Then we get Thomas+Great Migration AND Beulah+Civil Rights — same pattern, two times.',
    whyWrong: {
      A: '"Specifically" would mean Beulah info elaborates on Thomas info. But Beulah is a separate parallel example.',
      B: '"Thus" signals a result. Beulah\'s story isn\'t a result of Thomas\'s.',
      C: '"Regardless" signals "true despite" — no opposition exists.'
    },
    hack: '<strong>Two parallel examples = SIMILARITY.</strong> If sentence 1 establishes a pattern and the next sentences each give one example of that pattern, "similarly" or "likewise" is your move.'
  },
  {
    n: 5, id: 'd3b7d7a3', skill: 'trans', skillLabel: 'Transitions', difficulty: 'hard',
    type: 'transition',
    passage: 'Many historical accounts of the 1930s focus on the widespread movement of people from dust bowl–ravaged Great Plains states to faraway California. However, a 2016 study of 1940 census data complicates this popular narrative; <span class="blank">_______</span> researchers determined, migrants in states hardest hit by prolonged droughts and dust storms — Colorado, Kansas, Oklahoma, and Texas — merely relocated within the region.',
    question: 'Which choice completes the text with the most logical transition?',
    choices: [
      { letter: 'A', text: 'for this reason,' },
      { letter: 'B', text: 'more often,' },
      { letter: 'C', text: 'additionally,' },
      { letter: 'D', text: 'nevertheless,' }
    ],
    correct: 'B',
    whyCorrect: '"<strong>More often</strong>" signals frequency comparison. The popular narrative says people moved to California; the study found regional relocation was the MORE COMMON pattern. That\'s a frequency contrast.',
    whyWrong: {
      A: '"For this reason" needs a cause. Regional relocation wasn\'t caused by the popular narrative or the study.',
      C: '"Additionally" would just add another point. But this isn\'t adding info — it\'s correcting/replacing the popular narrative.',
      D: '"Nevertheless" creates ambiguity — does it contrast with the narrative or with the study? Confusing in this exact spot.'
    },
    hack: '<strong>"Complicates the narrative" = setup for contrast.</strong> When a study challenges a popular belief by saying something is MORE common than thought, "more often" / "in fact" / "rather" all work.'
  },
  {
    n: 6, id: 'a819d8b6', skill: 'trans', skillLabel: 'Transitions', difficulty: 'medium',
    type: 'transition',
    passage: 'In 1873, Spanish scientist Santiago Ramón y Cajal observed that brain fibers have distinct boundaries with clear end points, a finding that went against earlier assumptions about the brain. <span class="blank">_______</span> scientists had assumed that the brain was a continuous web of fused fibers, not a vast network of distinct, individual cells.',
    question: 'Which choice completes the text with the most logical transition?',
    choices: [
      { letter: 'A', text: 'However,' },
      { letter: 'B', text: 'Previously,' },
      { letter: 'C', text: 'As a result,' },
      { letter: 'D', text: 'Likewise,' }
    ],
    correct: 'B',
    whyCorrect: '"<strong>Previously</strong>" signals what came BEFORE Cajal\'s discovery. Sentence 1 ends saying his finding "went against earlier assumptions" — sentence 2 explains those earlier assumptions. Pure chronology.',
    whyWrong: {
      A: '"However" is the trap. The contrast was already stated in sentence 1 ("went against earlier assumptions") — adding "however" is redundant and illogical.',
      C: '"As a result" would mean the old theory was caused by Cajal\'s discovery. Backwards in time.',
      D: '"Likewise" signals similarity, but the old theory was the OPPOSITE of Cajal\'s finding.'
    },
    hack: '<strong>"Had assumed" = past perfect = needs "previously."</strong> When sentence 2 uses past perfect tense ("had thought," "had believed"), it\'s describing what came before. Reach for time transitions.'
  },
  {
    n: 7, id: 'c78620ba', skill: 'trans', skillLabel: 'Transitions', difficulty: 'easy',
    type: 'transition',
    passage: 'In 1968, US Congressman John Conyers introduced a bill to establish a national holiday in honor of Dr. Martin Luther King Jr. The bill didn\'t make it to a vote, but Conyers was determined. He teamed up with Shirley Chisholm, the first Black woman to be elected to Congress, and they resubmitted the bill every session for the next fifteen years. <span class="blank">_______</span> in 1983, the bill passed.',
    question: 'Which choice completes the text with the most logical transition?',
    choices: [
      { letter: 'A', text: 'Instead,' },
      { letter: 'B', text: 'Likewise,' },
      { letter: 'C', text: 'Finally,' },
      { letter: 'D', text: 'Additionally,' }
    ],
    correct: 'C',
    whyCorrect: '"<strong>Finally</strong>" signals the climactic end of a long sequence. After 15 years of repeated attempts (1968 → resubmitted every session), the bill passing in 1983 is the conclusion of that arc.',
    whyWrong: {
      A: '"Instead" signals an alternative. The bill passing isn\'t an alternative to anything — it\'s the goal achieved.',
      B: '"Likewise" signals similarity. The success isn\'t similar to the previous failures — it\'s opposite.',
      D: '"Additionally" makes it just another event. This is THE final event, not just one more.'
    },
    hack: '<strong>Long buildup → "finally."</strong> When a passage describes years of effort or repeated attempts followed by success, the climax word is "finally" or "at last."'
  },
  {
    n: 8, id: '20733eac', skill: 'trans', skillLabel: 'Transitions', difficulty: 'easy',
    type: 'transition',
    passage: 'It has long been thought that humans first crossed a land bridge into the Americas approximately 13,000 years ago. <span class="blank">_______</span> based on radiocarbon dating of samples uncovered in Mexico, a research team recently suggested that humans may have arrived more than 30,000 years ago — much earlier than previously thought.',
    question: 'Which choice completes the text with the most logical transition?',
    choices: [
      { letter: 'A', text: 'As a result,' },
      { letter: 'B', text: 'Similarly,' },
      { letter: 'C', text: 'However,' },
      { letter: 'D', text: 'In conclusion,' }
    ],
    correct: 'C',
    whyCorrect: '"<strong>However</strong>" signals direct contrast. Old theory: 13,000 years. New theory: 30,000+ years. The text even ends "much earlier than previously thought" — that\'s the contrast spelled out.',
    whyWrong: {
      A: '"As a result" needs a cause-effect chain. The new theory isn\'t caused by the old one.',
      B: '"Similarly" signals same-direction. These dates are wildly different — opposite directions.',
      D: '"In conclusion" wraps up an argument. This isn\'t a conclusion, it\'s a counter-claim.'
    },
    hack: '<strong>"Long thought" / "previously believed" = setup for contrast.</strong> Whenever the first sentence describes an established belief, expect the next sentence to challenge it. "However" is your default.'
  },
  {
    n: 9, id: 'f07570bb', skill: 'trans', skillLabel: 'Transitions', difficulty: 'easy',
    type: 'transition',
    passage: 'Researchers believe that pieces of hull found off Oregon\'s coast are from a Spanish cargo ship that was lost in 1697. Stories passed down among the area\'s Confederated Tribes of Siletz Indians support this belief. <span class="blank">_______</span> Siletz stories describe how blocks of beeswax, an item the ship had been carrying, began washing ashore after the ship was lost.',
    question: 'Which choice completes the text with the most logical transition?',
    choices: [
      { letter: 'A', text: 'For this reason,' },
      { letter: 'B', text: 'For example,' },
      { letter: 'C', text: 'However,' },
      { letter: 'D', text: 'Likewise,' }
    ],
    correct: 'B',
    whyCorrect: '"<strong>For example</strong>" signals a specific instance of a general claim. Sentence 2 said Siletz stories support the belief — sentence 3 gives a specific example (beeswax stories).',
    whyWrong: {
      A: '"For this reason" needs cause-effect. The beeswax stories aren\'t caused by the previous claim.',
      C: '"However" needs contrast. The beeswax stories support the claim, not contradict it.',
      D: '"Likewise" needs similarity. The beeswax stories ARE the support — they\'re not similar to support, they\'re an example of it.'
    },
    hack: '<strong>General claim → specific instance = "for example."</strong> When sentence 1 makes a broad statement and sentence 2 gives a concrete case, "for example" or "for instance" wins.'
  },
  {
    n: 10, id: 'a965c6ed', skill: 'trans', skillLabel: 'Transitions', difficulty: 'hard',
    type: 'transition',
    passage: 'A turtle shell appears external to the animal, protecting its body like armor. <span class="blank">_______</span> the shell is often incorrectly assumed to be an exoskeleton, a rigid outer casing like that of a crustacean or an insect, when in fact it is an endoskeleton, a part of the turtle\'s internal bone structure, more akin to a spine or a pair of ribs.',
    question: 'Which choice completes the text with the most logical transition?',
    choices: [
      { letter: 'A', text: 'That being said,' },
      { letter: 'B', text: 'However,' },
      { letter: 'C', text: 'For instance,' },
      { letter: 'D', text: 'Hence,' }
    ],
    correct: 'D',
    whyCorrect: '"<strong>Hence</strong>" signals consequence. BECAUSE the shell looks external (sentence 1), it\'s incorrectly assumed to be an exoskeleton (sentence 2). The misperception is a direct result of the appearance.',
    whyWrong: {
      A: '"That being said" signals contrast/qualification. But sentence 2 isn\'t contradicting sentence 1 — it\'s explaining what sentence 1 leads to.',
      B: '"However" signals contrast. No contrast: the misperception flows from the appearance.',
      C: '"For instance" needs an example of the appearance. But the misperception isn\'t an example of looking external — it\'s a result of it.'
    },
    hack: '<strong>Cause → consequence = "hence" / "thus" / "therefore."</strong> When sentence 1 describes how something LOOKS or APPEARS, and sentence 2 describes a misperception or reaction, that\'s effect-of-appearance — use a consequence transition.'
  },
  {
    n: 11, id: '97e2e364', skill: 'trans', skillLabel: 'Transitions', difficulty: 'medium',
    type: 'transition',
    passage: 'Okot p\'Bitek\'s poem <em>Song of Lawino</em> (1966) explores postcolonial Ugandan life through the eyes of a woman living in a rural village. With its vibrant imagery, bitingly satiric tone, and dexterous use of traditional Acholi song and phraseology, the poem inspired a generation of East African writers. <span class="blank">_______</span> those who adopted its style are often referred to as Okot School poets.',
    question: 'Which choice completes the text with the most logical transition?',
    choices: [
      { letter: 'A', text: 'Nevertheless,' },
      { letter: 'B', text: 'Fittingly,' },
      { letter: 'C', text: 'By comparison,' },
      { letter: 'D', text: 'Instead,' }
    ],
    correct: 'B',
    whyCorrect: '"<strong>Fittingly</strong>" means appropriately/suitably. It\'s appropriate that writers who copied Okot\'s style would be named after him — that just makes sense.',
    whyWrong: {
      A: '"Nevertheless" signals contrast. The naming doesn\'t contrast with anything.',
      C: '"By comparison" signals comparison. Nothing is being compared here.',
      D: '"Instead" signals an alternative. The naming isn\'t replacing some other option.'
    },
    hack: '<strong>"Fittingly" is the niche transition.</strong> Reach for it when sentence 2 describes an outcome that LOGICALLY FOLLOWS or feels APPROPRIATE given sentence 1. Many students never use it — that\'s why it shows up.'
  },
  {
    n: 12, id: '080a7b51', skill: 'trans', skillLabel: 'Transitions', difficulty: 'medium',
    type: 'transition',
    passage: 'Imagine a magazine that a reader has thrown away. This magazine is post-consumer waste, as it became waste after reaching the consumer. <span class="blank">_______</span> the paper scraps left over from printing the magazine are pre-consumer waste, as they became waste before reaching the consumer.',
    question: 'Which choice completes the text with the most logical transition?',
    choices: [
      { letter: 'A', text: 'By contrast,' },
      { letter: 'B', text: 'For example,' },
      { letter: 'C', text: 'As a result,' },
      { letter: 'D', text: 'Specifically,' }
    ],
    correct: 'A',
    whyCorrect: '"<strong>By contrast</strong>" signals direct opposition. Post-consumer (after reaching consumer) vs pre-consumer (before reaching consumer). Textbook contrast.',
    whyWrong: {
      B: '"For example" needs the second item to be a case of the first. Pre-consumer isn\'t an example of post-consumer — it\'s the opposite.',
      C: '"As a result" needs cause-effect. Pre-consumer waste isn\'t caused by post-consumer waste.',
      D: '"Specifically" needs the second item to elaborate on the first. Pre-consumer isn\'t a specific type of post-consumer.'
    },
    hack: '<strong>"X = type 1. ___ Y = type 2." → "by contrast."</strong> Anytime you see a pattern of defining two opposite categories, contrast transitions win every time.'
  },
  {
    n: 13, id: '8112b7e3', skill: 'trans', skillLabel: 'Transitions', difficulty: 'hard',
    type: 'transition',
    passage: 'Ugandan American professor Peter Nazareth believed that Elvis Presley\'s music is best understood not as a homogeneous collection but as an anthology (because Elvis showcased the contributions of a wide range of gospel, blues, and rock artists). <span class="blank">_______</span> Nazareth entitled his college course on Elvis and his music, which focused on Elvis\'s many musical influences, "Elvis as Anthology."',
    question: 'Which choice completes the text with the most logical transition?',
    choices: [
      { letter: 'A', text: 'To that end,' },
      { letter: 'B', text: 'In sum,' },
      { letter: 'C', text: 'That is,' },
      { letter: 'D', text: 'In addition,' }
    ],
    correct: 'A',
    whyCorrect: '"<strong>To that end</strong>" signals an action taken to advance a goal. Nazareth\'s belief = the goal. Naming his course "Elvis as Anthology" = the action that promotes that view.',
    whyWrong: {
      B: '"In sum" signals a summary. The course title isn\'t summarizing his belief — it\'s acting on it.',
      C: '"That is" signals clarification. The course title isn\'t clarifying his belief — it\'s a separate action.',
      D: '"In addition" makes it just another fact. But it\'s not random additional info — it\'s purposeful action toward his stated view.'
    },
    hack: '<strong>"To that end" = goal + action.</strong> When sentence 1 establishes a belief or aim and sentence 2 describes an action taken to promote it, this is the transition. Many students skip it — don\'t.'
  },
  {
    n: 14, id: '0d3ebdce', skill: 'trans', skillLabel: 'Transitions', difficulty: 'easy',
    type: 'transition',
    passage: 'Neuroscientist Karen Konkoly wanted to determine whether individuals can understand and respond to questions during REM sleep. She first taught volunteers eye movements they would use to respond to basic math problems while asleep (a single left-right eye movement indicated the number one). <span class="blank">_______</span> she attached electrodes to the volunteers\' faces to record their eye movements during sleep.',
    question: 'Which choice completes the text with the most logical transition?',
    choices: [
      { letter: 'A', text: 'Specifically,' },
      { letter: 'B', text: 'Next,' },
      { letter: 'C', text: 'For instance,' },
      { letter: 'D', text: 'In sum,' }
    ],
    correct: 'B',
    whyCorrect: '"<strong>Next</strong>" signals the next step in a process. The word "first" in sentence 2 already tipped you off — "first" needs a "next" or "then" to follow.',
    whyWrong: {
      A: '"Specifically" would mean elaborating on the teaching. But attaching electrodes is a different step.',
      C: '"For instance" would make the electrodes an example of teaching eye movements. They\'re not.',
      D: '"In sum" would summarize the teaching step. The electrodes are a NEW step, not a summary.'
    },
    hack: '<strong>"First" → "next."</strong> If sentence 2 starts with "first" or describes step one of an experiment, the transition to sentence 3 is almost always "next" or "then."'
  },

  // ===== RHETORICAL SYNTHESIS =====
  {
    n: 15, id: 'afec1a70', skill: 'syn', skillLabel: 'Rhetorical Synthesis', difficulty: 'hard',
    type: 'synthesis',
    notesIntro: 'While researching a topic, a student has taken the following notes:',
    notes: [
      'As engineered structures, many bird nests are uniquely flexible yet cohesive.',
      'A research team led by Yashraj Bhosale wanted to better understand the mechanics behind these structural properties.',
      'Bhosale\'s team used laboratory models that simulated the arrangement of flexible sticks into nest-like structures.',
      'The researchers analyzed the points where sticks touched one another.',
      'When pressure was applied to the model nests, the number of contact points between the sticks increased, making the structures stiffer.'
    ],
    question: 'The student wants to <strong>present the primary aim of the research study</strong>. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: [
      { letter: 'A', text: 'Bhosale\'s team wanted to better understand the mechanics behind bird nests\' uniquely flexible yet cohesive structural properties.' },
      { letter: 'B', text: 'The researchers used laboratory models that simulated the arrangement of flexible sticks and analyzed the points where sticks touched one another.' },
      { letter: 'C', text: 'After analyzing the points where sticks touched, the researchers found that the structures became stiffer when pressure was applied.' },
      { letter: 'D', text: 'As analyzed by Bhosale\'s team, bird nests are uniquely flexible yet cohesive engineered structures.' }
    ],
    correct: 'A',
    whyCorrect: 'The aim = WHY they did the study. A literally states the team\'s goal: "wanted to better understand the mechanics behind..." That\'s the purpose, in their words.',
    whyWrong: {
      B: 'Describes HOW they did it (their method) — that\'s not the aim.',
      C: 'Describes a RESULT of the experiment — that\'s the finding, not the aim.',
      D: 'Describes properties of bird nests — not the study\'s aim at all.'
    },
    hack: '<strong>"Aim" / "purpose" / "primary goal" = the WHY.</strong> Wrong answers describe the WHAT (subject), HOW (method), or what they FOUND (result). Only the right answer answers WHY they did it.'
  },
  {
    n: 16, id: '39ccb463', skill: 'syn', skillLabel: 'Rhetorical Synthesis', difficulty: 'hard',
    type: 'synthesis',
    notesIntro: 'While researching a topic, a student has taken the following notes:',
    notes: [
      'The Atlantic Monthly magazine was first published in 1857.',
      'The magazine focused on politics, art, and literature.',
      'In 2019, historian Cathryn Halverson published the book Faraway Women and the "Atlantic Monthly."',
      'Its subject is female authors whose autobiographies appeared in the magazine in the early 1900s.',
      'One of the authors discussed is Juanita Harrison.'
    ],
    question: 'The student wants to <strong>introduce Cathryn Halverson\'s book to an audience already familiar with the Atlantic Monthly</strong>. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: [
      { letter: 'A', text: 'Cathryn Halverson\'s Faraway Women and the "Atlantic Monthly" discusses female authors whose autobiographies appeared in the magazine in the early 1900s.' },
      { letter: 'B', text: 'A magazine called the Atlantic Monthly, referred to in Cathryn Halverson\'s book title, was first published in 1857.' },
      { letter: 'C', text: 'Faraway Women and the "Atlantic Monthly" features contributors to the Atlantic Monthly, first published in 1857 as a magazine focusing on politics, art, and literature.' },
      { letter: 'D', text: 'An author discussed by Cathryn Halverson is Juanita Harrison, whose autobiography appeared in the Atlantic Monthly in the early 1900s.' }
    ],
    correct: 'A',
    whyCorrect: 'A introduces the book by name + content (female authors\' autobiographies). It SKIPS background on Atlantic Monthly — perfect for an audience that already knows the magazine.',
    whyWrong: {
      B: 'Introduces the MAGAZINE, not the book. Audience already knows the magazine.',
      C: 'Wastes space on Atlantic Monthly background ("first published in 1857... politics, art, literature") that the audience already has.',
      D: 'Mentions one author from the book — doesn\'t introduce the book itself.'
    },
    hack: '<strong>"Already familiar" = SKIP the background.</strong> If the audience knows X, the right answer doesn\'t define X. It assumes X and goes straight to what\'s new.'
  },
  {
    n: 17, id: 'af76771f', skill: 'syn', skillLabel: 'Rhetorical Synthesis', difficulty: 'easy',
    type: 'synthesis',
    notesIntro: 'While researching a topic, a student has taken the following notes:',
    notes: [
      'Sue is the nickname of a dinosaur fossil specimen housed at the Field Museum of Natural History.',
      'The Field Museum of Natural History is located in Chicago, Illinois.',
      'Sue is a member of the genus Tyrannosaurus.',
      'Big Mike is the nickname of a dinosaur fossil specimen housed at the Museum of the Rockies.',
      'The Museum of the Rockies is located in Bozeman, Montana.',
      'Big Mike is a member of the genus Tyrannosaurus.'
    ],
    question: 'The student wants to <strong>emphasize a similarity between the two specimens</strong>. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: [
      { letter: 'A', text: 'The Field Museum of Natural History, where Sue is housed, is located in Chicago, Illinois.' },
      { letter: 'B', text: 'Big Mike is the nickname of a Tyrannosaurus fossil specimen housed at the Museum of the Rockies in Bozeman, Montana.' },
      { letter: 'C', text: 'The dinosaur fossil specimens Sue and Big Mike are both members of the genus Tyrannosaurus.' },
      { letter: 'D', text: 'While Sue is housed at the Field Museum of Natural History, Big Mike is housed at the Museum of the Rockies.' }
    ],
    correct: 'C',
    whyCorrect: 'C names BOTH specimens AND the shared trait — they\'re both Tyrannosaurus. That\'s a similarity, fully stated.',
    whyWrong: {
      A: 'Only describes Sue. Can\'t emphasize a similarity by mentioning one item.',
      B: 'Only describes Big Mike. Same problem.',
      D: 'Mentions both, but it\'s a CONTRAST (different museums), not a similarity.'
    },
    hack: '<strong>"Similarity" needs BOTH items + the shared trait.</strong> Eliminate any choice that only mentions one. Then eliminate any that contrasts. What\'s left should be your answer.'
  },
  {
    n: 18, id: '064c8999', skill: 'syn', skillLabel: 'Rhetorical Synthesis', difficulty: 'easy',
    type: 'synthesis',
    notesIntro: 'While researching a topic, a student has taken the following notes:',
    notes: [
      'The Haber-Bosch process is an industrial process used to manufacture ammonia (NH₃).',
      'It was invented by chemists Fritz Haber and Carl Bosch in 1910.',
      'The process\'s primary reaction combines nitrogen (N₂) from the air with hydrogen (H₂).',
      'It requires an iron catalyst and high temperatures and pressures.',
      'Most of the ammonia produced by this process is used in fertilizers.'
    ],
    question: 'The student wants to <strong>provide an overview of the Haber-Bosch process</strong>. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: [
      { letter: 'A', text: 'The Haber-Bosch process needs nitrogen, hydrogen, and an iron catalyst.' },
      { letter: 'B', text: 'The Haber-Bosch process uses an iron catalyst along with high temperatures and pressures to manufacture ammonia from nitrogen and hydrogen.' },
      { letter: 'C', text: 'Chemists Fritz Haber and Carl Bosch invented an industrial process to manufacture ammonia to be used in fertilizers.' },
      { letter: 'D', text: 'In 1910, chemists Fritz Haber and Carl Bosch invented the Haber-Bosch process, which requires high temperatures and pressures.' }
    ],
    correct: 'B',
    whyCorrect: 'B covers the MOST pieces: WHAT it does (manufactures ammonia), INPUTS (nitrogen + hydrogen), CONDITIONS (catalyst, heat, pressure). That\'s a real overview.',
    whyWrong: {
      A: 'Missing what it does (manufacture ammonia) and the conditions (heat, pressure). Incomplete.',
      C: 'Missing the inputs (nitrogen, hydrogen) and conditions. Talks about inventors and use, not the process itself.',
      D: 'Missing what it does (manufactures ammonia) and the inputs.'
    },
    hack: '<strong>"Overview" = the MOST COMPLETE choice.</strong> Count how many of the notes\' key facts each choice covers. The one that hits the most relevant facts wins.'
  },
  {
    n: 19, id: 'b46e0c8a', skill: 'syn', skillLabel: 'Rhetorical Synthesis', difficulty: 'medium',
    type: 'synthesis',
    notesIntro: 'While researching a topic, a student has taken the following notes:',
    notes: [
      'Organisms release cellular material into their environment by shedding substances such as hair or skin.',
      'The DNA in these substances is known as environmental DNA, or eDNA.',
      'Researchers collect and analyze eDNA to detect the presence of species that are difficult to observe.',
      'Geneticist Sara Oyler-McCance\'s research team analyzed eDNA in water samples from the Florida Everglades to detect invasive constrictor snake species in the area.',
      'The study determined a 91% probability of detecting Burmese python eDNA in a given location.'
    ],
    question: 'The student wants to <strong>present the study to an audience already familiar with environmental DNA</strong>. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: [
      { letter: 'A', text: 'Sara Oyler-McCance\'s researchers analyzed eDNA in water samples from the Florida Everglades for evidence of invasive constrictor snakes, which are difficult to observe.' },
      { letter: 'B', text: 'An analysis of eDNA can detect the presence of invasive species that are difficult to observe, such as constrictor snakes.' },
      { letter: 'C', text: 'Researchers found Burmese python eDNA, or environmental DNA, in water samples; eDNA is the DNA in released cellular materials, such as shed skin cells.' },
      { letter: 'D', text: 'Sara Oyler-McCance\'s researchers analyzed environmental DNA (eDNA) — that is, DNA from cellular materials released by organisms — in water samples from the Florida Everglades.' }
    ],
    correct: 'A',
    whyCorrect: 'A presents the study (researchers, location, target snakes) WITHOUT defining eDNA. Audience already knows the term.',
    whyWrong: {
      B: 'States a general fact about eDNA — doesn\'t present THIS study.',
      C: 'Defines eDNA ("or environmental DNA... released cellular materials") for an audience that already knows it.',
      D: 'Defines eDNA in detail ("that is, DNA from cellular materials...") — wasted on a familiar audience.'
    },
    hack: '<strong>Same hack as Q16: "already familiar" = no definitions.</strong> Strike out any choice that explains the term the audience knows. The remaining choice gets straight to the new info.'
  },
  {
    n: 20, id: '84e108cf', skill: 'syn', skillLabel: 'Rhetorical Synthesis', difficulty: 'medium',
    type: 'synthesis',
    notesIntro: 'While researching a topic, a student has taken the following notes:',
    notes: [
      'Platinum is a rare and expensive metal.',
      'It is used as a catalyst for chemical reactions.',
      'Platinum catalysts typically require a large amount of platinum to be effective.',
      'Researcher Jianbo Tang and his colleagues created a platinum catalyst that combines platinum with liquid gallium.',
      'Their catalyst was highly effective and required only trace amounts of platinum (0.0001% of the atoms in the mixture).'
    ],
    question: 'The student wants to <strong>explain an advantage of the new platinum catalyst</strong> developed by Jianbo Tang and his colleagues. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: [
      { letter: 'A', text: 'Researcher Jianbo Tang and his colleagues created a platinum catalyst that combines platinum, a rare and expensive metal, with liquid gallium.' },
      { letter: 'B', text: 'Like other platinum catalysts, the new platinum catalyst requires a particular amount of the metal to be effective.' },
      { letter: 'C', text: 'Platinum is a rare and expensive metal that is used as a catalyst for chemical reactions; however, platinum catalysts typically require a large amount of platinum to be effective.' },
      { letter: 'D', text: 'While still highly effective, the new platinum catalyst requires far less of the rare and expensive metal than do other platinum catalysts.' }
    ],
    correct: 'D',
    whyCorrect: 'D explicitly compares the new catalyst to old ones ("far less... than do other platinum catalysts"). That comparison IS the advantage — uses way less of an expensive metal.',
    whyWrong: {
      A: 'Just describes what the catalyst is. No advantage stated, no comparison.',
      B: 'Says it\'s LIKE other catalysts — that\'s a similarity, not an advantage.',
      C: 'Background on platinum and existing catalysts — never mentions Tang\'s catalyst.'
    },
    hack: '<strong>"Advantage" = COMPARISON.</strong> An advantage requires "less than," "more than," "faster than," "cheaper than." Choices that just describe the new thing without comparing it to alternatives are wrong.'
  },
  {
    n: 21, id: 'ca4ff52d', skill: 'syn', skillLabel: 'Rhetorical Synthesis', difficulty: 'easy',
    type: 'synthesis',
    notesIntro: 'While researching a topic, a student has taken the following notes:',
    notes: [
      'Muslins are woven cotton fabrics with a variety of uses.',
      'Dhaka muslin is a handmade fabric produced in Dhaka, Bangladesh.',
      'It has an extremely fine weave and is primarily used to make luxury clothing.',
      'Sheeting muslin is a machine-made fabric produced in factories.',
      'It has a coarse weave and is primarily used to upholster furniture and create backdrops for theater sets.'
    ],
    question: 'The student wants to <strong>emphasize a difference between the two muslins</strong>. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: [
      { letter: 'A', text: 'Dhaka muslin is a handmade fabric with an extremely fine weave, while sheeting muslin is machine made with a coarse weave.' },
      { letter: 'B', text: 'Dhaka muslin and sheeting muslin are two different types of woven cotton fabrics.' },
      { letter: 'C', text: 'Muslins can be used in a variety of ways, from making luxury clothing to upholstering furniture and creating backdrops for theater sets.' },
      { letter: 'D', text: 'Sheeting muslin is machine made, has a coarse weave, and is used for furniture and theater sets.' }
    ],
    correct: 'A',
    whyCorrect: 'A names BOTH muslins AND specifies the difference: handmade/fine vs machine/coarse. The "while" structure does the contrasting work.',
    whyWrong: {
      B: 'Says they\'re different but doesn\'t SAY HOW. Vague.',
      C: 'Talks about uses of muslin in general — doesn\'t emphasize a difference between the two.',
      D: 'Only describes sheeting muslin. Can\'t emphasize a difference with one item.'
    },
    hack: '<strong>"Difference" needs BOTH items + the specific contrast.</strong> Vague choices ("they\'re different") and single-item choices both fail. Look for "while X, Y" or "but Y" structure.'
  },
  {
    n: 22, id: '7298633c', skill: 'syn', skillLabel: 'Rhetorical Synthesis', difficulty: 'medium',
    type: 'synthesis',
    notesIntro: 'While researching a topic, a student has taken the following notes:',
    notes: [
      'Grimanesa Amoros is a Peruvian American artist well known for her LED light sculptures.',
      'Her sculpture Uros Island is made of smooth multicolored LED domes.',
      'It occupies 335 cubic feet of space.',
      'Her sculpture Fortuna is made of entangled blue and white LED tubes.',
      'It occupies 19,950 cubic feet of space.'
    ],
    question: 'The student wants to <strong>emphasize a similarity between Uros Island and Fortuna</strong>. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: [
      { letter: 'A', text: 'The smooth LED domes of Grimanesa Amoros\'s Uros Island stand in contrast to the tangled LED tubes of Fortuna.' },
      { letter: 'B', text: 'At 19,950 cubic feet in size, Grimanesa Amoros\'s Fortuna cuts a larger figure than the 335-cubic-foot Uros Island.' },
      { letter: 'C', text: 'Grimanesa Amoros is the artist behind Uros Island — a sculpture made of smooth multicolored LED domes.' },
      { letter: 'D', text: 'Uros Island is an LED light sculpture made by Grimanesa Amoros, as is Fortuna.' }
    ],
    correct: 'D',
    whyCorrect: 'D names BOTH AND identifies what they share: both are LED sculptures by Amoros. That\'s a similarity, simply stated.',
    whyWrong: {
      A: 'Smooth domes vs tangled tubes = a CONTRAST. Wrong direction.',
      B: 'Larger vs smaller = a CONTRAST. Wrong direction.',
      C: 'Only describes Uros Island. Can\'t emphasize a similarity with one item.'
    },
    hack: '<strong>Read the goal verb FIRST.</strong> Three of these choices contrast the sculptures because that feels more interesting. But the question said SIMILARITY. Always go back to the verb in the goal.'
  },
  {
    n: 23, id: '441f0505', skill: 'syn', skillLabel: 'Rhetorical Synthesis', difficulty: 'medium',
    type: 'synthesis',
    notesIntro: 'While researching a topic, a student has taken the following notes:',
    notes: [
      'A lever is a simple machine consisting of a rigid beam and a fulcrum.',
      'The fulcrum is the point about which the beam pivots.',
      'The input force (effort) is the force applied to the lever.',
      'The output force (load) is the force that the lever exerts on another object.',
      'In first-class levers, the fulcrum is located between the effort and the load.',
      'In second-class levers, the load is located between the effort and the fulcrum.'
    ],
    question: 'The student wants to <strong>contrast first-class levers and second-class levers</strong>. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: [
      { letter: 'A', text: 'In levers, the effort is the force applied to the lever; the load, in contrast, is the force that the lever exerts on another object.' },
      { letter: 'B', text: 'In first-class and second-class levers, the fulcrum and the load are in different locations.' },
      { letter: 'C', text: 'First-class levers are simple machines consisting of a rigid beam and a fulcrum, but then again, the same is true of second-class levers.' },
      { letter: 'D', text: 'In first-class levers, the fulcrum is located between the effort and the load, but in second-class levers, the load is located between the effort and the fulcrum.' }
    ],
    correct: 'D',
    whyCorrect: 'D specifies BOTH placements: first-class = fulcrum in middle, second-class = load in middle. The "but" makes the contrast crystal clear.',
    whyWrong: {
      A: 'Contrasts effort vs load (vocab terms), not the two LEVER TYPES asked about.',
      B: 'Too vague — "in different locations" doesn\'t SAY where. Almost looks like a similarity.',
      C: 'Says "the same is true" — that\'s a SIMILARITY, not a contrast.'
    },
    hack: '<strong>Vague contrast = wrong contrast.</strong> "X and Y are different" without saying HOW they\'re different is a trap. The right answer specifies BOTH sides of the contrast in detail.'
  },
  {
    n: 24, id: '4b99b481', skill: 'syn', skillLabel: 'Rhetorical Synthesis', difficulty: 'medium',
    type: 'synthesis',
    notesIntro: 'While researching a topic, a student has taken the following notes:',
    notes: [
      'Scientists have developed a "freeze-thaw" battery that can retain 92% of its charge after twelve weeks.',
      'The battery contains molten salt (a type of salt that liquifies when heated and solidifies at room temperature).',
      'When the salt is in a liquid state, energy flows through the battery.',
      'When the salt is in a solid state, energy stops flowing and is stored in the battery.',
      'The stored (frozen) energy can be used by reheating (thawing) the battery.'
    ],
    question: 'The student wants to <strong>specify how the salt enables energy storage</strong>. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: [
      { letter: 'A', text: 'Scientists have developed a freeze-thaw battery that contains molten salt, which liquifies when heated and solidifies at room temperature.' },
      { letter: 'B', text: 'The stored energy in a freeze-thaw battery, which contains molten salt, can be used by reheating the battery.' },
      { letter: 'C', text: 'When the molten salt in a freeze-thaw battery solidifies at room temperature, energy stops flowing and can be stored in the battery.' },
      { letter: 'D', text: 'Molten salt allows a freeze-thaw battery to retain 92% of its charge after twelve weeks.' }
    ],
    correct: 'C',
    whyCorrect: 'C states the MECHANISM: salt solidifies → energy stops flowing → energy gets stored. That\'s the cause-effect chain the question asks for.',
    whyWrong: {
      A: 'Describes properties of the salt but never explains the storage mechanism.',
      B: 'Explains how to USE stored energy (reheating) — that\'s the opposite direction.',
      D: 'States the result (92% retention) but doesn\'t explain HOW it happens.'
    },
    hack: '<strong>"Specify how" = need a MECHANISM.</strong> Look for cause→effect language ("when X happens, Y results"). Properties, results, and reverse processes are all traps.'
  },
  {
    n: 25, id: '7d5c32e6', skill: 'syn', skillLabel: 'Rhetorical Synthesis', difficulty: 'hard',
    type: 'synthesis',
    notesIntro: 'While researching a topic, a student has taken the following notes:',
    notes: [
      'The fifth Solvay Conference on Physics was held in 1927.',
      'It brought together twenty-nine of the era\'s preeminent scientists to discuss the emerging field of quantum theory.',
      'The conference famously featured a debate between physicists Albert Einstein and Niels Bohr.',
      'Bohr proposed that subatomic entities like electrons had only probable realities until they were observed.',
      'Einstein argued that subatomic entities like electrons had a reality independent of observation.',
      'Bohr\'s position, later called the Copenhagen interpretation, remains the most widely accepted theory of quantum mechanics.'
    ],
    question: 'The student wants to <strong>place Einstein\'s argument within its historical context</strong>. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: [
      { letter: 'A', text: 'During the dawn of quantum theory, Einstein maintained the independent reality of some subatomic entities, although Bohr\'s opposing interpretation would become the widely accepted view.' },
      { letter: 'B', text: 'At the 1927 Solvay Conference on Physics, Einstein disagreed with Bohr\'s argument that subatomic entities like electrons had a reality independent of observation.' },
      { letter: 'C', text: 'The attendees of the 1927 Solvay Conference were among the preeminent scientists of their era, including Einstein, who opposed Bohr\'s proposal.' },
      { letter: 'D', text: 'In 1927, Einstein and Bohr engaged in a famous debate; Bohr\'s argument, later called the Copenhagen interpretation, would remain popular decades after.' }
    ],
    correct: 'A',
    whyCorrect: 'A places Einstein\'s argument in time ("dawn of quantum theory") AND traces what happened afterward ("Bohr\'s opposing interpretation would become the widely accepted view"). That\'s historical context.',
    whyWrong: {
      B: 'CRITICAL trap: misrepresents Einstein. The note says EINSTEIN argued for independent reality — B says Einstein DISAGREED with that. Flipped.',
      C: 'Notes Einstein attended the conference but doesn\'t state his actual argument or place it in context.',
      D: 'Describes the debate and Bohr\'s legacy — but doesn\'t identify Einstein\'s argument or place it in context.'
    },
    hack: '<strong>"Historical context" = TIMELINE.</strong> The right answer needs to situate the moment in time — what came before, during, AND/OR after. Watch for traps that swap the actual claim each scientist made.'
  },
  {
    n: 26, id: '74149724', skill: 'syn', skillLabel: 'Rhetorical Synthesis', difficulty: 'medium',
    type: 'synthesis',
    notesIntro: 'While researching a topic, a student has taken the following notes:',
    notes: [
      'John Carver was one of the 41 signatories of the Mayflower Compact.',
      'The Mayflower Compact was a legal agreement among the pilgrims that immigrated to Plymouth Colony.',
      'It was created in 1620 to establish a common government.',
      'It states that the pilgrims who signed it wanted to "plant the first colony in the northern parts of Virginia" under King James.',
      'Carver became the first governor of Plymouth Colony.'
    ],
    question: 'The student wants to <strong>specify the reason the Mayflower Compact was created</strong>. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: [
      { letter: 'A', text: 'Stating that its signatories wanted to "plant the first colony in the northern parts of Virginia," the Mayflower Compact was a legal agreement among the pilgrims that immigrated to Plymouth Colony.' },
      { letter: 'B', text: 'Created in 1620, the Mayflower Compact states that the pilgrims wanted to "plant the first colony in the northern parts of Virginia."' },
      { letter: 'C', text: 'The Mayflower Compact was created to establish a common government among the pilgrims that immigrated to Plymouth Colony.' },
      { letter: 'D', text: 'The Mayflower Compact had 41 signatories, including John Carver, the first governor of Plymouth Colony.' }
    ],
    correct: 'C',
    whyCorrect: 'C explicitly states the reason: "to establish a common government." That phrase ("to establish") is the goal/reason, full stop.',
    whyWrong: {
      A: 'States what the signatories wanted ("plant the first colony") — that\'s their colonial goal, not the Compact\'s purpose.',
      B: 'Same trap as A — quotes their goal for the colony, not the reason for the document.',
      D: 'Notes the signatories, not the reason the document was created.'
    },
    hack: '<strong>"Reason ___ was created" = look for "to + verb."</strong> The correct answer often contains the literal phrase "to ___" stating the purpose. Background facts and unrelated quotes are traps.'
  },
  {
    n: 27, id: '964c6055', skill: 'syn', skillLabel: 'Rhetorical Synthesis', difficulty: 'hard',
    type: 'synthesis',
    notesIntro: 'While researching a topic, a student has taken the following notes:',
    notes: [
      'Two opposing theories of vision divided scholars for many centuries.',
      'The ancient Greek mathematician Euclid (circa 300 BCE) supported the extramission theory.',
      'This theory held that the eyes emit a form of radiation that illuminates objects in its range.',
      'The ancient Greek philosopher Aristotle (384–322 BCE) supported the intromission theory.',
      'This theory held that objects emit a form of radiation that reaches the eyes.',
      'In the eleventh century, Arab mathematician Ibn al-Haytham (965–1040 CE) largely settled the debate with the first conclusive experiments supporting intromission.'
    ],
    question: 'The student wants to <strong>provide a historical overview of the two theories</strong>. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: [
      { letter: 'A', text: 'Scholars were divided between the extramission and intromission theories of vision until Ibn al-Haytham\'s eleventh-century experiments largely settled the debate in support of intromission.' },
      { letter: 'B', text: 'Through two opposing theories of vision — extramission and intromission — Euclid, Aristotle, and Ibn al-Haytham held that a form of radiation is emitted either from objects or from the eyes.' },
      { letter: 'C', text: 'While Ibn al-Haytham largely settled the debate in the eleventh century, Aristotle supported the theory of intromission centuries before.' },
      { letter: 'D', text: 'Before the eleventh century, the ancient Greek philosopher Aristotle supported the intromission theory, which held that objects emit a form of radiation that reaches the eyes.' }
    ],
    correct: 'A',
    whyCorrect: 'A covers BOTH theories AND the resolution AND the timeline (centuries-long debate → eleventh-century resolution). That\'s a true historical overview.',
    whyWrong: {
      B: 'Names the theories and scholars but no historical narrative — no resolution, no timeline of how the debate played out.',
      C: 'Mentions the resolution and Aristotle, but never mentions extramission. Half the overview is missing.',
      D: 'Only covers intromission and Aristotle — completely skips extramission.'
    },
    hack: '<strong>"Historical overview" needs the FULL ARC: beginning → middle → end.</strong> If a choice omits one of the major theories or skips the resolution, it\'s incomplete. The right answer covers the whole story.'
  },
  {
    n: 28, id: 'dd11e5ab', skill: 'syn', skillLabel: 'Rhetorical Synthesis', difficulty: 'medium',
    type: 'synthesis',
    notesIntro: 'While researching a topic, a student has taken the following notes:',
    notes: [
      'Muckrakers were journalists who sought to expose corruption in US institutions during the Progressive Era (1897–1920).',
      'Ida Tarbell was a muckraker who investigated the Standard Oil Company.',
      'She interviewed Standard Oil Company executives, oil industry workers, and public officials.',
      'She examined thousands of pages of the company\'s internal communications, including letters and financial records.',
      'Her book The History of the Standard Oil Company (1904) exposed the company\'s unfair business practices.'
    ],
    question: 'The student wants to <strong>emphasize the thoroughness of Ida Tarbell\'s investigation</strong> of the Standard Oil Company. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: [
      { letter: 'A', text: 'Ida Tarbell not only interviewed Standard Oil executives, oil industry workers, and public officials but also examined thousands of pages of the company\'s internal communications.' },
      { letter: 'B', text: 'Ida Tarbell, who investigated the Standard Oil Company, was a muckraker (a journalist who sought to expose corruption in US institutions during the Progressive Era, 1897–1920).' },
      { letter: 'C', text: 'As part of her investigation of the Standard Oil Company, muckraker Ida Tarbell conducted interviews.' },
      { letter: 'D', text: 'Published in 1904, muckraker Ida Tarbell\'s book The History of the Standard Oil Company exposed the company\'s unfair business practices.' }
    ],
    correct: 'A',
    whyCorrect: 'A shows the SCALE of her work: multiple groups of interviewees PLUS thousands of pages of records. The "not only... but also" stacks evidence — that IS thoroughness.',
    whyWrong: {
      B: 'Biographical sketch (defines muckraker) — doesn\'t describe her investigation at all.',
      C: 'Says she "conducted interviews" — true, but only ONE part of her work. Underrepresents her thoroughness.',
      D: 'Describes the book and its impact — doesn\'t describe her investigation method.'
    },
    hack: '<strong>"Thoroughness" = STACK methods.</strong> The right answer accumulates ("not only... but also," "in addition to," multiple specific actions). Single-method or summary choices fail to show the breadth.'
  }
];

const IAI_QUESTIONS = [
  // ============ CENTRAL IDEAS & DETAILS ============
  {
    n: 1, id: 'e677fa6c', skill: 'central', skillLabel: 'Central Ideas & Details', difficulty: 'medium',
    type: 'iai-main',
    passage: '<em>The following text is adapted from Edgar Allan Poe\'s 1849 story "Landor\'s Cottage."</em><br><br>During a pedestrian trip last summer, through one or two of the river counties of New York, I found myself, as the day declined, somewhat embarrassed about the road I was pursuing. The land undulated very remarkably; and my path, for the last hour, had wound about and about so confusedly, in its effort to keep in the valleys, that I no longer knew in what direction lay the sweet village of B——, where I had determined to stop for the night.',
    question: 'Which choice best states the main idea of the text?',
    choices: [
      { letter: 'A', text: 'The narrator remembers a trip he took and admits to getting lost.' },
      { letter: 'B', text: 'The narrator recalls fond memories of a journey that he took through some beautiful river counties.' },
      { letter: 'C', text: 'The narrator describes what he saw during a long trip through a frequently visited location.' },
      { letter: 'D', text: 'The narrator explains the difficulties he encountered on a trip and how he overcame them.' }
    ],
    correct: 'A',
    whyCorrect: 'The narrator is "embarrassed" about the route he took — a polite way of saying he got <strong>lost</strong>. He no longer knew which direction to go. That\'s the whole point of the passage.',
    whyWrong: {
      B: 'Wrong feeling — he\'s "embarrassed," not fond. And he never describes the place as beautiful.',
      C: 'No evidence he\'s visited this place before. He doesn\'t know where the village is.',
      D: 'He never says he overcame the difficulty — the passage ends with him still lost.'
    },
    hack: '<strong>Main idea = what the WHOLE passage is about.</strong> Don\'t pick choices that only cover part of it, or that add details the passage never mentioned.'
  },
  {
    n: 2, id: '11c68ded', skill: 'central', skillLabel: 'Central Ideas & Details', difficulty: 'medium',
    type: 'iai-main',
    passage: 'A contraction of "you all," the pronoun "y\'all" has long been used as a plural version of "you" in the South and in Black communities around the US. In recent decades, most other English-speaking communities in the US have begun to use "y\'all." What explains its rise in popularity? Many varieties of English have no pronoun that specifically addresses more than one person and instead must use "you" to address both one person and more than one. But "y\'all" always refers to two or more people. As a result, it conveys the speaker\'s meaning more precisely than "you" can.',
    question: 'Which question does the text most directly attempt to answer?',
    choices: [
      { letter: 'A', text: 'How many other plural versions of the pronoun "you" are there in English, besides "y\'all"?' },
      { letter: 'B', text: 'Why has the pronoun "y\'all" become more widely used in the US?' },
      { letter: 'C', text: 'When was the first recorded use of the pronoun "y\'all" in the English language?' },
      { letter: 'D', text: 'Is "y\'all" commonly used in English-speaking regions of the world besides the US?' }
    ],
    correct: 'B',
    whyCorrect: 'The text literally asks: <em>"What explains its rise in popularity?"</em> Then it answers that question. Choice B = same question, rephrased.',
    whyWrong: {
      A: 'Text doesn\'t list other plural pronouns.',
      C: 'Text never gives a first recorded date.',
      D: 'Text only discusses the US, not other English-speaking regions.'
    },
    hack: '<strong>Look for the literal question in the text.</strong> Often it\'s right there ("What explains...?" / "Why does...?"). Find it, then pick the choice that matches.'
  },
  {
    n: 3, id: '66c47028', skill: 'central', skillLabel: 'Central Ideas & Details', difficulty: 'medium',
    type: 'iai-main',
    passage: 'In 1934 physicist Eugene Wigner posited the existence of a crystal consisting entirely of electrons in a honeycomb-like structure. The so-called Wigner crystal remained largely conjecture, however, until Feng Wang and colleagues announced in 2021 that they had captured an image of one. The researchers trapped electrons between two semiconductors and then cooled the apparatus, causing the electrons to settle into a crystalline structure. By inserting an ultrathin sheet of graphene above the crystal, the researchers obtained an impression — the first visual confirmation of the Wigner crystal.',
    question: 'Which choice best states the main idea of the text?',
    choices: [
      { letter: 'A', text: 'Researchers have obtained the most definitive evidence to date of the existence of the Wigner crystal.' },
      { letter: 'B', text: 'Researchers have identified an innovative new method for working with unusual crystalline structures.' },
      { letter: 'C', text: 'Graphene is the most important of the components required to capture an image of a Wigner crystal.' },
      { letter: 'D', text: 'It\'s difficult to acquire an image of a Wigner crystal because of the crystal\'s honeycomb structure.' }
    ],
    correct: 'A',
    whyCorrect: 'The whole text is about how a theoretical crystal (Wigner crystal) was finally CONFIRMED to exist via the first image. That\'s the main point.',
    whyWrong: {
      B: 'Too broad. Text is about ONE specific crystal, not crystalline structures in general.',
      C: 'Graphene is mentioned but text doesn\'t say it\'s "the most important" component.',
      D: 'Text never says the honeycomb structure is what made it hard to image.'
    },
    hack: '<strong>"Main idea" = the BIG point, not a detail.</strong> If a choice focuses on one specific component or sub-fact, it\'s probably not the main idea.'
  },
  {
    n: 4, id: '1a2b29c9', skill: 'central', skillLabel: 'Central Ideas & Details', difficulty: 'hard',
    type: 'iai-main',
    passage: '<em>The following text is adapted from María Cristina Mena\'s 1914 short story "The Vine-Leaf."</em><br><br>It is a saying in the capital of Mexico that Dr. Malsufrido carries more family secrets under his hat than any archbishop. The doctor\'s hat is, appropriately enough, uncommonly capacious, rising very high, and sinking so low that it seems to be supported by his ears and eyebrows, and it has a furry look, as if it had been brushed the wrong way, which is perhaps what happens to it if it is ever brushed at all. When the doctor takes it off, the family secrets do not fly out like a flock of parrots, but remain nicely bottled up beneath a dome of old and highly polished ivory.',
    question: 'Based on the text, how do people in the capital of Mexico most likely regard Dr. Malsufrido?',
    choices: [
      { letter: 'A', text: 'Many have come to tolerate him despite his disheveled appearance.' },
      { letter: 'B', text: 'Few feel concerned that he will divulge their confidences.' },
      { letter: 'C', text: 'Some dislike how freely he discusses his own family.' },
      { letter: 'D', text: 'Most would be unimpressed by him were it not for his professional expertise.' }
    ],
    correct: 'B',
    whyCorrect: 'The saying compares him to an archbishop (someone famous for keeping secrets). And the secrets "remain nicely bottled up" — meaning he doesn\'t share them. People <strong>trust him to keep quiet</strong>.',
    whyWrong: {
      A: 'Hat description is whimsical, not negative. He\'s not portrayed as disheveled — and there\'s no "tolerating" tone.',
      C: 'Opposite of the text. He keeps secrets, including his own family\'s.',
      D: 'Professional expertise isn\'t mentioned at all.'
    },
    hack: '<strong>Match the choice to the LITERAL text.</strong> The passage says secrets stay "bottled up" — meaning he keeps them. Don\'t add ideas the text doesn\'t mention.'
  },
  {
    n: 5, id: '2fdfe002', skill: 'central', skillLabel: 'Central Ideas & Details', difficulty: 'hard',
    type: 'iai-main',
    passage: '<em>The following text is adapted from Countee Cullen\'s 1926 poem "Thoughts in a Zoo."</em><br><br>They in their cruel traps, and we in ours,<br>Survey each other\'s rage, and pass the hours<br>Commiserating each the other\'s woe,<br>To mitigate his own pain\'s fiery glow.<br>Man could but little proffer in exchange<br>Save that his cages have a larger range.<br>That lion with his lordly, untamed heart<br>Has in some man his human counterpart,<br>Some lofty soul in dreams and visions wrapped,<br>But in the stifling flesh securely trapped.',
    question: 'Based on the text, what challenge do humans sometimes experience?',
    choices: [
      { letter: 'A', text: 'They cannot effectively tame certain wild animals because of a lack of compassion.' },
      { letter: 'B', text: 'They cannot focus on setting attainable goals because of a lack of motivation.' },
      { letter: 'C', text: 'They quickly become frustrated when faced with difficult tasks because of a lack of self-control.' },
      { letter: 'D', text: 'They have aspirations that cannot be fulfilled because of certain limitations.' }
    ],
    correct: 'D',
    whyCorrect: 'The poem says humans are "in dreams and visions wrapped" (have aspirations) but "in the stifling flesh securely trapped" (can\'t fulfill them due to physical/mental limits). Aspirations + limitations.',
    whyWrong: {
      A: 'Poem doesn\'t discuss taming animals.',
      B: 'No mention of motivation or attainable goals.',
      C: 'No mention of self-control or frustration with tasks.'
    },
    hack: '<strong>Poetry traps: each wrong choice adds a CONCEPT the poem never names.</strong> Stay strict — only the idea that matches words actually in the poem.'
  },
  {
    n: 6, id: '0d81b7d9', skill: 'central', skillLabel: 'Central Ideas & Details', difficulty: 'medium',
    type: 'iai-main',
    passage: 'Paleontologist Alan Tennyson and colleagues studied fossil bones found in New Zealand that are more than 55 million years old. The researchers determined that the fossil bones belonged to two previously unknown species of prehistoric penguins. Moreover, they estimated that one of the two penguin species was more than three times the size of the emperor penguin, which is the largest penguin species that exists today.',
    question: 'Based on the text, which choice best describes the two previously unknown penguin species?',
    choices: [
      { letter: 'A', text: 'They are frequently studied by paleontologists.' },
      { letter: 'B', text: 'They are no longer living species.' },
      { letter: 'C', text: 'They were smaller than penguin species that exist today.' },
      { letter: 'D', text: 'They spent little of their lives in water.' }
    ],
    correct: 'B',
    whyCorrect: 'The species are <strong>prehistoric</strong>, from fossils 55 million years old. And one was three times bigger than the LARGEST penguin alive today — meaning these species aren\'t alive anymore.',
    whyWrong: {
      A: 'They were "previously unknown" — opposite of frequently studied.',
      C: 'Text says one was three times BIGGER than current penguins, not smaller.',
      D: 'No mention of where they spent their lives.'
    },
    hack: '<strong>Use only what the text says directly.</strong> "Prehistoric" + "55 million years ago" = extinct. The clue is right there.'
  },

  // ============ COMMAND OF EVIDENCE ============
  {
    n: 7, id: 'd83c3d54', skill: 'evidence', skillLabel: 'Command of Evidence', difficulty: 'medium',
    type: 'iai-quant',
    passage: 'The Jordanelle Dam was built on the Provo River in Utah in 1992. Earth scientist Adriana E. Martinez and colleagues tracked changes to the environment on the banks of the river downstream of the dam, including how much grass and forest cover were present. They concluded that the dam changed the flow of the river in ways that <strong>benefited grass plants but didn\'t benefit trees.</strong>',
    chart: {
      title: 'Characteristics of the Banks of the Provo River Downstream of the Jordanelle Dam',
      ylabel: 'Area (square meters)',
      xlabel: 'Year',
      groups: ['1987', '1993', '2006'],
      series: [
        { name: 'grass cover', color: '#5a8a3a', values: [58000, 90000, 130000] },
        { name: 'bare soil', color: '#b8965a', values: [70000, 50000, 45000] },
        { name: 'forest cover', color: '#2a6b3a', values: [75000, 65000, 60000] }
      ]
    },
    question: 'Which choice best describes data from the graph that support Martinez and colleagues\' conclusion?',
    choices: [
      { letter: 'A', text: 'The lowest amount of grass cover was approximately 58,000 square meters, and the highest amount of forest cover was approximately 75,000 square meters.' },
      { letter: 'B', text: 'There was more grass cover than forest cover in 1987, and this difference increased dramatically in 1993 and again in 2006.' },
      { letter: 'C', text: 'There was less grass cover than bare soil in 1987 but more grass cover than bare soil in 1993 and 2006, whereas there was more forest cover than bare soil in all three years.' },
      { letter: 'D', text: 'Grass cover increased from 1987 to 1993 and from 1993 to 2006, whereas forest cover decreased in those periods.' }
    ],
    correct: 'D',
    whyCorrect: 'The claim: dam <strong>helped grass, hurt trees.</strong> Choice D shows exactly that — grass up, forest down, over both periods. Direct support.',
    whyWrong: {
      A: 'Both data points are from 1987 — BEFORE the dam was built in 1992. Can\'t support a conclusion about what the dam did.',
      B: 'Factually wrong — in 1987 there was MORE forest cover than grass cover, not less.',
      C: 'The comparisons to bare soil don\'t prove the dam helped grass or hurt trees. Tangential data.'
    },
    hack: '<strong>Match the data to the EXACT claim.</strong> Claim says grass helped + trees hurt. Look for grass UP and forest DOWN. Skip anything else.'
  },
  {
    n: 8, id: '98d0a5d7', skill: 'evidence', skillLabel: 'Command of Evidence', difficulty: 'hard',
    type: 'iai-text',
    passage: 'Almost all works of fiction contain references to the progression of time, including the time of day when events in a story take place. In a 2020 study, Allen Kim, Charuta Pethe, and Steven Skiena claim that <strong>an observable pattern in such references reflects a shift in human behavior prompted by the spread of electric lighting in the late nineteenth century.</strong> The researchers drew this conclusion from an analysis of more than 50,000 novels spanning many centuries and cultures, using software to recognize and tally both specific time references — that is, clock phrases, such as 7 a.m. or 2:30 p.m. — and implied ones, such as mentions of meals typically associated with a particular time of day.',
    question: 'Which finding from the study, if true, would most directly support the researchers\' conclusion?',
    choices: [
      { letter: 'A', text: 'Novels published after the year 1800 include the clock phrase 10 a.m. less often than novels published before the year 1800 do.' },
      { letter: 'B', text: 'Novels published after 1880 contain significantly more references to activities occurring after 10 p.m. than do novels from earlier periods.' },
      { letter: 'C', text: 'Among novels published in the nineteenth century, implied time references become steadily more common than clock phrases as publication dates approach 1900.' },
      { letter: 'D', text: 'The time references of noon (12 p.m.) and midnight (12 a.m.) are used with roughly the same frequency in the novels.' }
    ],
    correct: 'B',
    whyCorrect: 'The claim: electric lighting (late 1800s) changed human behavior. If novels after 1880 mention more <strong>late-night activities</strong> than older ones, that\'s exactly the behavior shift you\'d expect from people having light at night. Direct match.',
    whyWrong: {
      A: '10 a.m. is morning (daylight). Electric lighting wouldn\'t change morning behavior.',
      C: 'About phrasing style, not behavior change. Off-topic.',
      D: 'Equal frequency = NO change. Contradicts the claim.'
    },
    hack: '<strong>Find the claim\'s key word, then match data to it.</strong> Claim says lighting changed behavior. Behavior = activities. Lighting affects night. So look for: "more night activities after lighting existed." That\'s B.'
  },
  {
    n: 9, id: '3091f805', skill: 'evidence', skillLabel: 'Command of Evidence', difficulty: 'easy',
    type: 'iai-text',
    passage: 'Ochre sea stars live in tidal pools along the shoreline of the Pacific Ocean. At night, they move to higher shore levels in search of prey. But scientists Corey Garza and Carlos Robles noticed that ochre sea stars stayed at lower levels at night after heavy rains. Garza and Robles <strong>hypothesized that a layer of fresh water formed by rainfall was a barrier to the sea stars.</strong> To test their hypothesis, the scientists did an experiment. They placed some sea stars in a climbable tank of seawater and other sea stars in a similar tank of seawater with a layer of fresh water on top. Then, the scientists watched the sea stars\' behavior at night.',
    question: 'Which finding from the experiment, if true, would most directly support Garza and Robles\'s hypothesis?',
    choices: [
      { letter: 'A', text: 'None of the sea stars climbed to the tops of the tanks, but sea stars in the tank with only seawater moved around the bottom of the tank more than sea stars in the other tank did.' },
      { letter: 'B', text: 'Sea stars in the tank with only seawater climbed to the top of the tank, but sea stars in the other tank stopped climbing just below the layer of fresh water.' },
      { letter: 'C', text: 'Both groups of sea stars climbed to the tops of the tanks, but sea stars in the tank with only seawater climbed more slowly than sea stars in the other tank did.' },
      { letter: 'D', text: 'Sea stars in the tank with only seawater mostly stayed near the bottom of the tank, but sea stars in the other tank climbed into the layer of fresh water.' }
    ],
    correct: 'B',
    whyCorrect: 'Hypothesis: fresh water = barrier. Choice B shows seawater-only stars climbed normally, but the others STOPPED at the fresh water. The fresh water acted as a barrier. Direct support.',
    whyWrong: {
      A: 'Neither group climbed. Tells you nothing about fresh water as a barrier.',
      C: 'Both groups climbed to the top — fresh water wasn\'t a barrier. Contradicts.',
      D: 'Other group climbed INTO the fresh water. Wasn\'t a barrier. Contradicts.'
    },
    hack: '<strong>Find the result that shows the hypothesis is TRUE.</strong> Hypothesis = "fresh water blocks them." Look for: "they stopped at the fresh water." Don\'t pick anything where they crossed it.'
  },
  {
    n: 10, id: '94c54577', skill: 'evidence', skillLabel: 'Command of Evidence', difficulty: 'hard',
    type: 'iai-text',
    passage: 'While attending school in New York City in the 1980s, Okwui Enwezor encountered few works by African artists in exhibitions, despite New York\'s reputation as one of the best places to view contemporary art from around the world. According to an arts journalist, later in his career as a renowned curator and art historian, <strong>Enwezor sought to remedy this deficiency, not by focusing solely on modern African artists, but by showing how their work fits into the larger context of global modern art and art history.</strong>',
    question: 'Which finding, if true, would most directly support the journalist\'s claim?',
    choices: [
      { letter: 'A', text: 'Enwezor organized a retrospective of Ghanaian sculptor El Anatsui\'s work entitled El Anatsui: Triumphant Scale, one of the largest art exhibitions devoted to a Black artist in Europe\'s history.' },
      { letter: 'B', text: 'In the exhibition Postwar: Art Between the Pacific and the Atlantic, 1945–1965, Enwezor and cocurator Katy Siegel brought works by African artists such as Malangatana Ngwenya together with pieces by major figures from other countries, like US artist Andy Warhol and Mexico\'s David Siqueiros.' },
      { letter: 'C', text: 'Enwezor\'s 2001 exhibition The Short Century showed how African movements for independence from European colonial powers profoundly influenced work by African artists of the period.' },
      { letter: 'D', text: 'Enwezor organized the exhibition In/sight: African Photographers, 1940 to the Present to demonstrate the broad range of ways in which African artists have approached the medium of photography.' }
    ],
    correct: 'B',
    whyCorrect: 'Claim: showed African artists <strong>alongside global modern art.</strong> Choice B: an exhibition with African artists + Andy Warhol (US) + Siqueiros (Mexico). Exactly the "global context" the claim describes.',
    whyWrong: {
      A: 'Solo retrospective of ONE African artist. The claim was "not solely on African artists."',
      C: 'Showed African artists in POLITICAL context, not global ARTISTIC context.',
      D: 'Showed African artists alone (photography exhibition). No global integration.'
    },
    hack: '<strong>Match the EXACT claim wording.</strong> The claim said "global context of modern art." Only B shows African + global artists together. The others only show African artists.'
  },
  {
    n: 11, id: '60c6b64d', skill: 'evidence', skillLabel: 'Command of Evidence', difficulty: 'medium',
    type: 'iai-text',
    passage: 'Male túngara frogs make complex calls to attract mates, but their calls also attract frog-biting midges, insects that feed on the frogs\' blood. Researchers Ximena Bernal and Priyanka de Silva wondered if the calls alone are sufficient for midges to locate the frogs or if midges use carbon dioxide emitted by frogs as an additional cue to their prey\'s whereabouts, like mosquitoes do. In an experiment, the researchers placed two midge traps in a túngara frog breeding area. One trap played recordings of túngara frog calls and the other released carbon dioxide along with playing the calls. <strong>Bernal and de Silva concluded that carbon dioxide does not serve as an additional cue to frog-biting midges.</strong>',
    question: 'Which finding from the experiment, if true, would most directly support Bernal and de Silva\'s conclusion?',
    choices: [
      { letter: 'A', text: 'Only a small number of midges were found in the traps, though the majority were found in the trap that played calls and released carbon dioxide.' },
      { letter: 'B', text: 'Midges entered the trap that released carbon dioxide and played calls only during or immediately after periods of carbon dioxide release.' },
      { letter: 'C', text: 'More midges were found in the trap that only played calls than in the trap that played calls and released carbon dioxide.' },
      { letter: 'D', text: 'The trap that released carbon dioxide and played calls attracted few midges when carbon dioxide concentrations were low but attracted many midges when carbon dioxide concentrations were high.' }
    ],
    correct: 'C',
    whyCorrect: 'Conclusion: CO₂ does NOT help midges find frogs. If the calls-only trap got MORE midges than calls+CO₂, then CO₂ definitely isn\'t helping (it might even be hurting). Calls alone are enough.',
    whyWrong: {
      A: 'Most midges in the CO₂ trap → CO₂ IS attracting them. Contradicts the conclusion.',
      B: 'Midges came only when CO₂ was being released → CO₂ IS the cue. Contradicts.',
      D: 'More midges when CO₂ was higher → CO₂ IS attracting them. Contradicts.'
    },
    hack: '<strong>"Does NOT" claims need data showing the thing doesn\'t matter.</strong> If conclusion says X doesn\'t help, pick the result where X didn\'t make a difference — or made things worse.'
  },
  {
    n: 12, id: '1f3be847', skill: 'evidence', skillLabel: 'Command of Evidence', difficulty: 'medium',
    type: 'iai-text',
    passage: '"Loon Point" is a 1912 poem by Amy Lowell. In the poem, which presents a nighttime scene on a body of water, <strong>Lowell describes an element of nature as an active participant in the experience</strong>, writing, ______',
    question: 'Which quotation from "Loon Point" most effectively illustrates the claim?',
    choices: [
      { letter: 'A', text: '"Through the water the moon writes her legends / In light, on the smooth, wet sand."' },
      { letter: 'B', text: '"Softly the water ripples / Against the canoe\'s curving side."' },
      { letter: 'C', text: '"Or like the snow-white petals / Which drop from an overblown rose."' },
      { letter: 'D', text: '"But the moon in her wayward beauty / Is ever and always the same."' }
    ],
    correct: 'A',
    whyCorrect: 'Claim: nature as an <strong>active participant.</strong> Choice A: the moon "writes her legends" — that\'s a human-like ACTIVE action. The moon is doing something, not just being.',
    whyWrong: {
      B: 'Water ripples — passive. That\'s just what water does, not "actively participating."',
      C: 'About petals/roses — not a nighttime water scene.',
      D: 'The moon is described as "ever and always the same" — static, not active.'
    },
    hack: '<strong>Active = doing something human-like.</strong> Look for verbs that suggest agency: "writes," "speaks," "watches." Passive verbs like "ripples," "is," "drops" don\'t count.'
  },

  // ============ INFERENCES ============
  {
    n: 13, id: 'f9bd4e61', skill: 'inferences', skillLabel: 'Inferences', difficulty: 'hard',
    type: 'iai-inf',
    passage: 'German theater practitioner Bertolt Brecht (1898–1956) believed that theater should elicit an intellectual rather than an emotional response from audiences, provoking them to consider social and political realities that extend beyond the characters and events depicted onstage. Brecht\'s influence can be seen in English playwright Caryl Churchill\'s 1979 play <em>Cloud 9</em>: although the play sometimes invites empathetic reactions, it primarily works to engage audiences in an interrogation of patriarchy and colonialism, which it does by placing audiences at a distance, thereby encouraging them to <span class="blank">_______</span>',
    question: 'Which choice most logically completes the text?',
    choices: [
      { letter: 'A', text: 'focus on the characters\' beliefs about social and political issues as revealed by the characters\' actions.' },
      { letter: 'B', text: 'reflect on social and political phenomena not directly related to patriarchy and colonialism.' },
      { letter: 'C', text: 'recognize pertinent social and political parallels between Germany during Brecht\'s time and England at the time when Churchill was writing Cloud 9.' },
      { letter: 'D', text: 'be dispassionate as they think critically about the social and political questions raised by the play.' }
    ],
    correct: 'D',
    whyCorrect: 'Brecht\'s whole philosophy = <strong>intellectual, not emotional</strong>. Churchill follows it by putting audiences "at a distance." Distance + intellectual = "dispassionate critical thinking." Direct match.',
    whyWrong: {
      A: '"Focus on characters\' beliefs" is the OPPOSITE — Brecht wanted attention BEYOND the characters.',
      B: 'But the play IS about patriarchy and colonialism. Reflecting on unrelated stuff contradicts.',
      C: 'No mention of Germany during Brecht\'s time vs England — fabricated parallel.'
    },
    hack: '<strong>The blank must connect back to the SETUP.</strong> Setup said: intellectual, not emotional. Distance from characters. Match those exact ideas. "Dispassionate" = unemotional. Match.'
  },
  {
    n: 14, id: '4889580c', skill: 'inferences', skillLabel: 'Inferences', difficulty: 'hard',
    type: 'iai-inf',
    passage: 'Archaeologists and historians used to believe that the Maya civilization during its Classic period (roughly 250–900) lacked agricultural marketplaces. One reason for this belief was that these scholars misunderstood the ecology of the regions the Maya inhabited. Marketplaces typically emerge because different individuals or groups want to trade resources they control for resources they don\'t control. Scholars seriously underestimated the ecological diversity of the Maya landscape and thus assumed that <span class="blank">_______</span>',
    question: 'Which choice most logically completes the text?',
    choices: [
      { letter: 'A', text: 'marketplaces likely would not have attracted many traders from outside the regions controlled by the Maya.' },
      { letter: 'B', text: 'farming practices would have been largely the same throughout Maya lands even if the crops people produced varied significantly.' },
      { letter: 'C', text: 'marketplaces would not have enabled Maya people to acquire many products different from those they already produced.' },
      { letter: 'D', text: 'farmers would trade agricultural products only if they had already produced enough to meet their own needs.' }
    ],
    correct: 'C',
    whyCorrect: 'Logic chain: marketplaces exist to trade for things you don\'t have → scholars thought Maya land had LOW diversity → so they assumed everyone had the same stuff → so they assumed marketplaces couldn\'t give people anything NEW. Match.',
    whyWrong: {
      A: 'About outside traders — passage never discusses external trade.',
      B: 'Contradictory — if crops "varied significantly" there\'d be a REASON for marketplaces.',
      D: 'About farmers\' personal needs — passage never discusses that condition.'
    },
    hack: '<strong>Follow the chain of logic in the passage.</strong> Each sentence builds on the last. The blank must complete the chain. Scholars thought X → Y → so they assumed Z. Find Z.'
  },
  {
    n: 15, id: '4ba0695d', skill: 'inferences', skillLabel: 'Inferences', difficulty: 'hard',
    type: 'iai-inf',
    passage: 'The alpaca was domesticated by Indigenous peoples in the Andes about 7,000 years ago. But which wild species did it descend from, the vicuña or guanaco? A research team led by Ruiwen Fan may have solved the mystery, concluding that the alpaca is the domesticated form of the vicuña but that the modern alpaca gets only 64 percent of its genetic material from its wild ancestor. The rest comes from the domesticated llama. The llama, meanwhile, gets 95.5 percent of its genetic material from its own wild ancestor, the guanaco, and the rest from the alpaca. The llama and alpaca apparently interbred widely for only a handful of generations between 400 and 600 years ago. Assuming that the findings of Fan\'s team are valid, it can be inferred that <span class="blank">_______</span>',
    question: 'Which choice most logically completes the text?',
    choices: [
      { letter: 'A', text: 'modern llama populations have a greater degree of genetic diversity, on average, than modern alpaca populations do.' },
      { letter: 'B', text: 'the domestication process of the alpaca may have involved some introduction of genetic material from the llama.' },
      { letter: 'C', text: 'the period of interbreeding resulted in a greater genetic difference between alpacas and their wild ancestors than between llamas and their wild ancestors.' },
      { letter: 'D', text: 'if they were subjected to genetic testing, modern populations of guanacos and vicuñas would likely show traces of ancient interbreeding as well.' }
    ],
    correct: 'C',
    whyCorrect: 'Math check: alpacas got 36% of genes from interbreeding. Llamas got only 4.5%. Interbreeding affected alpacas WAY more — pushing them further from their wild ancestor (vicuña) than llamas are from theirs (guanaco). Direct logical conclusion.',
    whyWrong: {
      A: 'Genetic diversity within a species ≠ what the passage discusses. Off-topic.',
      B: 'Domestication = 7,000 years ago. Interbreeding = 400-600 years ago. Wrong timeline.',
      D: 'Passage gives no info about modern wild guanacos/vicuñas. Can\'t infer.'
    },
    hack: '<strong>Inferences must follow from passage MATH or LOGIC.</strong> Here it\'s percentages — 36% vs 4.5% means alpacas drifted more. Stay close to the numbers.'
  },
  {
    n: 16, id: 'd95a0bb8', skill: 'inferences', skillLabel: 'Inferences', difficulty: 'hard',
    type: 'iai-inf',
    passage: 'The ratio of methane to other atmospheric constituents — represented by a measure called the methane mole fraction — influences a variety of meteorological phenomena, notably precipitation and humidity. For Titan, Saturn\'s largest moon, the observational data that exist are too sparse and discrepant to fully constrain the range of the methane mole fraction at various atmospheric levels. Juan Lora and colleagues point out that outputs of the IPSL atmospheric model of Titan, which track closely to observations in some respects, reflect how the model\'s developers responded to this challenge: by prescribing a uniform methane mole fraction for the lowest level of the atmosphere. It is therefore important to note that <span class="blank">_______</span>',
    question: 'Which choice most logically completes the text?',
    choices: [
      { letter: 'A', text: 'some disagreements between the model\'s simulations of Titan\'s precipitation and humidity and the moon\'s actual precipitation and humidity are to be expected.' },
      { letter: 'B', text: 'further observations of Titan may clarify the moon\'s methane mole fraction sufficiently for the model to employ a single value rather than a range.' },
      { letter: 'C', text: 'even though the model\'s outputs sometimes agree with observational data, Titan\'s real methane mole fraction is likely higher than the methane mole fraction used in the model.' },
      { letter: 'D', text: 'inconsistencies across the model\'s simulations of Titan\'s precipitation and humidity could be attributable to variations in the moon\'s methane mole fraction.' }
    ],
    correct: 'A',
    whyCorrect: 'Logic: methane affects precipitation/humidity. Model uses a SINGLE uniform value for methane (a simplification). Reality is more complex. So model predictions won\'t perfectly match reality → <strong>disagreements expected</strong>.',
    whyWrong: {
      B: 'Model already uses a single value. Backwards.',
      C: 'No evidence whether the real value is higher or lower than the model\'s value.',
      D: 'Model uses ONE value (no variation), so can\'t blame inconsistencies on variations within the model.'
    },
    hack: '<strong>Simplification = imperfect predictions.</strong> When a model "simplifies" reality, expect "predictions won\'t perfectly match." That\'s the inference.'
  },
  {
    n: 17, id: '3cc2eacc', skill: 'inferences', skillLabel: 'Inferences', difficulty: 'medium',
    type: 'iai-inf',
    passage: 'In a study of the mechanisms underlying associative memory — or the ability to learn and remember connections between inherently unrelated things — neuroscientists Kei Igarashi, Jasmine Chavez, and others presented mice with memory tests. The team discovered that fan cells, a type of cell found in the medial temporal lobe of the brain, are necessary for the acquisition of new associative memories. They also found that fan cell activity requires dopamine, a chemical the brain produces in response to pleasure and rewards. Consequently, receiving a reward should likely help to <span class="blank">_______</span>',
    question: 'Which choice most logically completes the text?',
    choices: [
      { letter: 'A', text: 'decrease an individual\'s capacity to utilize dopamine.' },
      { letter: 'B', text: 'increase an individual\'s capacity to recognize differences between unrelated things.' },
      { letter: 'C', text: 'increase an individual\'s capacity to form associative memories.' },
      { letter: 'D', text: 'decrease an individual\'s capacity to create fan cells.' }
    ],
    correct: 'C',
    whyCorrect: 'Chain: rewards → produce dopamine → enables fan cells → enables associative memory. So <strong>rewards → better associative memory</strong>.',
    whyWrong: {
      A: 'Rewards PRODUCE dopamine, not decrease its use. Backwards.',
      B: 'Associative memory = recognizing CONNECTIONS, not differences. Wrong concept.',
      D: 'Passage never says rewards affect creation of fan cells.'
    },
    hack: '<strong>Follow the cause-and-effect chain.</strong> If A→B→C, then A→C. Reward → dopamine → fan cells → memory. So reward → memory.'
  },
  {
    n: 18, id: '54057e3f', skill: 'inferences', skillLabel: 'Inferences', difficulty: 'medium',
    type: 'iai-inf',
    passage: 'Although military veterans make up a small proportion of the total population of the United States, they occupy a significantly higher proportion of the jobs in the civilian government. One possible explanation for this disproportionate representation is that military service familiarizes people with certain organizational structures that are also reflected in the civilian government bureaucracy, and this familiarity thus <span class="blank">_______</span>',
    question: 'Which choice most logically completes the text?',
    choices: [
      { letter: 'A', text: 'makes civilian government jobs especially appealing to military veterans.' },
      { letter: 'B', text: 'alters the typical relationship between military service and subsequent career preferences.' },
      { letter: 'C', text: 'encourages nonveterans applying for civilian government jobs to consider military service instead.' },
      { letter: 'D', text: 'increases the number of civilian government jobs that require some amount of military experience to perform.' }
    ],
    correct: 'A',
    whyCorrect: 'Setup: veterans are overrepresented in civilian government jobs because of similar org structures. Familiarity → comfort → <strong>appeal</strong>. Logical conclusion.',
    whyWrong: {
      B: 'No "typical relationship" was ever defined. Off-topic.',
      C: 'About nonveterans. Passage focuses on why veterans take those jobs.',
      D: 'Says jobs require military experience. Passage says veterans choose them, not that jobs require military.'
    },
    hack: '<strong>"Familiarity makes ___ appealing" is the standard logic.</strong> When something is familiar, people are drawn to it. Match.'
  },
  {
    n: 19, id: 'aaddd60f', skill: 'inferences', skillLabel: 'Inferences', difficulty: 'hard',
    type: 'iai-inf',
    passage: 'Scientists studying Mars long thought the history of its crust was relatively simple. One reason for this is that geologic and climate data collected by a spacecraft showed that the crust was largely composed of basalt, likely as a result of intense volcanic activity that brought about a magma ocean, which then cooled to form the planet\'s surface. A study led by Valerie Payré focused on additional information — further analysis of data collected by the spacecraft and infrared wavelengths detected from Mars\'s surface — that revealed the presence of surprisingly high concentrations of silica in certain regions on Mars. Since a planetary surface that formed in a mostly basaltic environment would be unlikely to contain large amounts of silica, Payré concluded that <span class="blank">_______</span>',
    question: 'Which choice most logically completes the text?',
    choices: [
      { letter: 'A', text: 'the information about silica concentrations collected by the spacecraft is likely more reliable than the silica information gleaned from infrared wavelengths detected from Mars\'s surface.' },
      { letter: 'B', text: 'high silica concentrations on Mars likely formed from a different process than that which formed the crusts of other planets.' },
      { letter: 'C', text: 'having a clearer understanding of the composition of Mars\'s crust and the processes by which it formed will provide more insight into how Earth\'s crust formed.' },
      { letter: 'D', text: 'Mars\'s crust likely formed as a result of other major geological events in addition to the cooling of a magma ocean.' }
    ],
    correct: 'D',
    whyCorrect: 'Cooling magma = basalt. Basaltic surface ≠ high silica. But Mars HAS high silica in places. So basalt alone can\'t explain everything → <strong>OTHER geological events must have happened too</strong>.',
    whyWrong: {
      A: 'Passage doesn\'t compare data sources for reliability.',
      B: 'Other planets aren\'t mentioned at all.',
      C: 'Earth\'s crust never mentioned.'
    },
    hack: '<strong>If the data CONTRADICTS the simple theory, the inference is "there\'s more going on."</strong> Mars had simple-magma theory + complex-silica data. Conclusion: more processes involved.'
  },
  {
    n: 20, id: 'c4d43991', skill: 'inferences', skillLabel: 'Inferences', difficulty: 'easy',
    type: 'iai-inf',
    passage: 'Archaeologists have been debating the origin of a rare form of lead found in Shang dynasty (1766–1046 BCE) bronze artifacts since its presence was discovered in China in the 1990s. Different researchers have proposed theories on which regions of the world would have had the raw materials containing the specific lead in these artifacts, but no conclusive evidence has been presented. What is intriguing is that bronze artifacts from China dated after the Shang dynasty do not contain this form of lead, suggesting that <span class="blank">_______</span>',
    question: 'Which choice most logically completes the text?',
    choices: [
      { letter: 'A', text: 'Shang dynasty bronze pieces are rare and therefore more valuable than those from other time periods.' },
      { letter: 'B', text: 'the source of some of the raw materials used to make bronze was exploited only until the end of the Shang dynasty.' },
      { letter: 'C', text: 'bronze was used for a short time during the Shang dynasty before different metals were used to make artifacts.' },
      { letter: 'D', text: 'methods used to analyze bronze artifacts are not useful on pieces that are dated after the Shang dynasty.' }
    ],
    correct: 'B',
    whyCorrect: 'Shang artifacts have the rare lead. Post-Shang artifacts DON\'T. The simplest explanation: whatever <strong>source</strong> of that lead was used during Shang, it stopped being used after.',
    whyWrong: {
      A: 'Passage doesn\'t discuss value or rarity of the artifacts themselves.',
      C: 'Passage explicitly mentions "bronze artifacts from China dated after the Shang dynasty" — so bronze kept being used.',
      D: 'Passage never mentions analysis methods.'
    },
    hack: '<strong>If something stopped appearing, the source stopped being used.</strong> Lead appears in Shang but not after = the lead source was abandoned after Shang.'
  },
  {
    n: 21, id: '123bd312', skill: 'inferences', skillLabel: 'Inferences', difficulty: 'medium',
    type: 'iai-inf',
    passage: 'Herbivorous sauropod dinosaurs could grow more than 100 feet long and weigh up to 80 tons, and some researchers have attributed the evolution of sauropods to such massive sizes to increased plant production resulting from high levels of atmospheric carbon dioxide during the Mesozoic era. However, there is no evidence of significant spikes in carbon dioxide levels coinciding with relevant periods in sauropod evolution, such as when the first large sauropods appeared, when several sauropod lineages underwent further evolution toward gigantism, or when sauropods reached their maximum known sizes, suggesting that <span class="blank">_______</span>',
    question: 'Which choice most logically completes the text?',
    choices: [
      { letter: 'A', text: 'fluctuations in atmospheric carbon dioxide affected different sauropod lineages differently.' },
      { letter: 'B', text: 'the evolution of larger body sizes in sauropods did not depend on increased atmospheric carbon dioxide.' },
      { letter: 'C', text: 'atmospheric carbon dioxide was higher when the largest known sauropods lived than it was when the first sauropods appeared.' },
      { letter: 'D', text: 'sauropods probably would not have evolved to such immense sizes if atmospheric carbon dioxide had been even slightly higher.' }
    ],
    correct: 'B',
    whyCorrect: 'Theory: big sauropods came from high CO₂. Reality: no CO₂ spikes at key evolutionary moments. So <strong>CO₂ wasn\'t the cause</strong>.',
    whyWrong: {
      A: 'Passage doesn\'t discuss fluctuations affecting different lineages.',
      C: 'Passage says NO significant spikes ever — not that levels were higher at one time.',
      D: 'Passage doesn\'t discuss what would happen with slightly higher CO₂.'
    },
    hack: '<strong>Theory + contradicting evidence = theory is wrong.</strong> If a study finds NO support for a proposed cause, the inference is: that cause doesn\'t explain the thing.'
  },
  {
    n: 22, id: '08395130', skill: 'inferences', skillLabel: 'Inferences', difficulty: 'hard',
    type: 'iai-inf',
    passage: 'The Hubble Space Telescope (HST) is projected to maintain operation until at least 2030, but it has already revolutionized high-resolution imaging of solar-system bodies in visible and ultraviolet (UV) light wavelengths, notwithstanding that only about 6% of the bodies imaged by the HST are within the solar system. NASA researcher Cindy L. Young and colleagues assert that a new space telescope dedicated exclusively to solar-system observations would permit an extensive survey of minor solar-system bodies and long-term UV observation to discern how solar-system bodies change over time. Young and colleagues\' recommendation therefore implies that the HST <span class="blank">_______</span>',
    question: 'Which choice most logically completes the text?',
    choices: [
      { letter: 'A', text: 'will likely continue to be used primarily to observe objects outside the solar system.' },
      { letter: 'B', text: 'will no longer be used to observe solar system objects if the telescope recommended by Young and colleagues is deployed.' },
      { letter: 'C', text: 'can be modified to observe the features of solar system objects that are of interest to Young and colleagues.' },
      { letter: 'D', text: 'lacks the sensors to observe the wavelengths of light needed to discern how solar system bodies change over time.' }
    ],
    correct: 'A',
    whyCorrect: 'HST only spends 6% of time on solar-system bodies — so 94% on stuff OUTSIDE the solar system. If a new telescope handles solar-system work, HST keeps doing what it\'s mostly doing already: <strong>looking outside the solar system</strong>.',
    whyWrong: {
      B: 'Too strong. Recommendation doesn\'t mean HST stops solar-system work entirely.',
      C: 'Passage never mentions modifying HST. Fabricated.',
      D: 'Passage says HST already does UV observations. Can\'t infer it lacks sensors.'
    },
    hack: '<strong>Watch for "too strong" wrong answers.</strong> "Will no longer be used" / "lacks all sensors" — extreme claims are usually wrong. The right answer is usually moderate.'
  }
];
