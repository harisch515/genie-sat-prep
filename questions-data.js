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
];;

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
];;

const SEC_QUESTIONS = [
  // ============ FORM, STRUCTURE & SENSE ============
  {
    n: 1, id: '96c720af', skill: 'form', skillLabel: 'Form, Structure & Sense', difficulty: 'easy',
    type: 'sec',
    passage: 'Atoms in a synchrotron, a type of circular particle accelerator, travel faster and faster until they <span class="blank">_______</span> a desired energy level, at which point they are diverted to collide with a target, smashing the atoms.',
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: [
      { letter: 'A', text: 'will reach' },
      { letter: 'B', text: 'reach' },
      { letter: 'C', text: 'had reached' },
      { letter: 'D', text: 'are reaching' }
    ],
    correct: 'B',
    whyCorrect: 'The other verbs in the sentence are <strong>present tense</strong> ("travel," "are diverted"). Match them: "reach" (present) is the only option that fits.',
    whyWrong: {
      A: '"Will reach" is future tense — clashes with the present tense verbs around it.',
      C: '"Had reached" is past perfect — clashes with present tense around it.',
      D: '"Are reaching" suggests an action <em>currently in progress</em>. The other verbs describe general behavior, not an in-progress event.'
    },
    hack: '<strong>Match the tenses around the blank.</strong> Find the other verbs in the sentence. If they\'re present, your answer is present. If past, past. Simple as that.'
  },
  {
    n: 2, id: 'e6f2dba6', skill: 'form', skillLabel: 'Form, Structure & Sense', difficulty: 'easy',
    type: 'sec',
    passage: 'According to the traditional RYB (red-yellow-blue) color model, yellow is a complementary color to purple. However, yellow <span class="blank">_______</span> considered complementary to blue in modern color theory.',
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: [
      { letter: 'A', text: 'is' },
      { letter: 'B', text: 'having been' },
      { letter: 'C', text: 'to be' },
      { letter: 'D', text: 'being' }
    ],
    correct: 'A',
    whyCorrect: '"Is considered" supplies the main verb the sentence needs. Without "is," the sentence has no working verb at all.',
    whyWrong: {
      B: '"Having been considered" is a participle, not a working verb. Sentence has no verb → broken sentence.',
      C: '"To be considered" is an infinitive, not a working verb. Sentence has no verb → broken sentence.',
      D: '"Being considered" is a participle, not a working verb. Sentence has no verb → broken sentence.'
    },
    hack: '<strong>Every sentence needs a real, working verb.</strong> If the choices include weird forms like "being," "to be," "having been" — those aren\'t real verbs. Pick the plain one (is, was, has, etc.).'
  },
  {
    n: 3, id: 'fced396a', skill: 'form', skillLabel: 'Form, Structure & Sense', difficulty: 'hard',
    type: 'sec',
    passage: 'The Herfindahl-Hirschman Index (HHI), a commonly used measure of competition between companies in a particular market, ranges from a score of zero to 10,000 points. Compared with that of a highly concentrated market — that is, a market controlled by very few companies — <span class="blank">_______</span>',
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: [
      { letter: 'A', text: 'a market that is less concentrated will have a much lower HHI score.' },
      { letter: 'B', text: 'the HHI score of a less concentrated market will be much lower.' },
      { letter: 'C', text: 'when a market is less concentrated, its HHI score will be much lower.' },
      { letter: 'D', text: 'a less concentrated market will have an HHI score that is much lower.' }
    ],
    correct: 'B',
    whyCorrect: 'The opening says "Compared with <strong>that</strong> [the HHI score] of a highly concentrated market." What follows must be the <strong>other HHI score</strong> being compared. Only choice B starts with "the HHI score..." — direct match.',
    whyWrong: {
      A: 'Starts with "a market." But we\'re comparing HHI <strong>scores</strong>, not markets. Dangling modifier.',
      C: 'Adds "when a market is less concentrated" — confusing and creates an ambiguous "its."',
      D: 'Starts with "a less concentrated market." Same problem as A — we\'re comparing scores, not markets.'
    },
    hack: '<strong>What follows "Compared with X" must equal X.</strong> If "Compared with [the HHI score]" opens, the next thing must be ANOTHER score. Not a market. Not a person. A score.'
  },
  {
    n: 4, id: 'd47bb0a4', skill: 'form', skillLabel: 'Form, Structure & Sense', difficulty: 'easy',
    type: 'sec',
    passage: 'Objects ranging from the Kikkoman soy sauce bottle to the Yamaha VMAX motorcycle to the Komachi bullet train <span class="blank">_______</span> designed by twentieth-century industrial designer Kenji Ekuan.',
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: [
      { letter: 'A', text: 'was' },
      { letter: 'B', text: 'is' },
      { letter: 'C', text: 'has been' },
      { letter: 'D', text: 'were' }
    ],
    correct: 'D',
    whyCorrect: 'Subject is "<strong>Objects</strong>" (plural). The verb must be plural: "were."',
    whyWrong: {
      A: '"Was" is singular — doesn\'t match plural "objects."',
      B: '"Is" is singular — doesn\'t match plural "objects."',
      C: '"Has been" is singular — doesn\'t match plural "objects."'
    },
    hack: '<strong>Find the real subject first.</strong> Don\'t get fooled by stuff between the subject and verb. The subject here is "objects" (plural), not "bottle" or "motorcycle" or "train" (singular distractions sandwiched in).'
  },
  {
    n: 5, id: 'e3b72630', skill: 'form', skillLabel: 'Form, Structure & Sense', difficulty: 'easy',
    type: 'sec',
    passage: 'In the historical novel <em>The Surrender Tree</em>, Cuban American author Margarita Engle uses poetry rather than prose <span class="blank">_______</span> the true story of Cuban folk hero Rosa La Bayamesa.',
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: [
      { letter: 'A', text: 'tells' },
      { letter: 'B', text: 'told' },
      { letter: 'C', text: 'is telling' },
      { letter: 'D', text: 'to tell' }
    ],
    correct: 'D',
    whyCorrect: 'Engle uses poetry <strong>in order to</strong> tell the story. "To tell" expresses the purpose. Standard infinitive construction.',
    whyWrong: {
      A: '"Tells" would need to be a new verb on its own — illogical here. Engle already uses poetry; "tells" doubles up.',
      B: '"Told" makes the verb past tense — clashes with present "uses."',
      C: '"Is telling" has the same problem as "tells" — doubled verb.'
    },
    hack: '<strong>"To + verb" = purpose / reason.</strong> When a sentence is explaining WHY something happens, the infinitive ("to tell," "to make," "to show") is usually the answer.'
  },
  {
    n: 6, id: 'd2b81427', skill: 'form', skillLabel: 'Form, Structure & Sense', difficulty: 'hard',
    type: 'sec',
    passage: 'In assessing the films of Japanese director Akira Kurosawa, <span class="blank">_______</span> have missed his equally deep engagement with Japanese artistic traditions such as Noh theater.',
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: [
      { letter: 'A', text: 'many critics have focused on Kurosawa\'s use of Western literary sources but' },
      { letter: 'B', text: 'Kurosawa\'s use of Western literary sources has been the focus of many critics, who' },
      { letter: 'C', text: 'there are many critics who have focused on Kurosawa\'s use of Western literary sources, but they' },
      { letter: 'D', text: 'the focus of many critics has been on Kurosawa\'s use of Western literary sources; they' }
    ],
    correct: 'A',
    whyCorrect: '"In assessing the films of Kurosawa" must be done by a <strong>person</strong>. Choice A puts "many critics" right after the modifier. Critics do the assessing — makes sense.',
    whyWrong: {
      B: 'Puts "Kurosawa\'s use of Western sources" after the modifier — implying his SOURCES did the assessing. Nonsense.',
      C: 'Puts "there" after the modifier — "there" can\'t assess anything.',
      D: 'Puts "the focus" after the modifier — focuses can\'t assess films.'
    },
    hack: '<strong>Who/what is doing the action in the opening phrase?</strong> Whatever comes right after the comma must be THAT person/thing. "In assessing films" — a person assesses, so a person noun must follow.'
  },
  {
    n: 7, id: '512f0ac9', skill: 'form', skillLabel: 'Form, Structure & Sense', difficulty: 'hard',
    type: 'sec',
    passage: 'Working from an earlier discovery of Charpentier\'s, chemists Emmanuelle Charpentier and Jennifer Doudna — winners of the 2020 Nobel Prize in Chemistry — re-created and then reprogrammed the so-called "genetic scissors" of a species of DNA-cleaving bacteria <span class="blank">_______</span> a tool that is revolutionizing the field of gene technology.',
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: [
      { letter: 'A', text: 'to forge' },
      { letter: 'B', text: 'forging' },
      { letter: 'C', text: 'forged' },
      { letter: 'D', text: 'and forging' }
    ],
    correct: 'A',
    whyCorrect: 'The chemists re-created the scissors <strong>in order to</strong> forge a tool. "To forge" expresses the purpose.',
    whyWrong: {
      B: 'Without a comma, "forging" attaches to the nearest noun ("bacteria") — implying the BACTERIA are forging. Illogical.',
      C: '"Forged" would need an "and" before it to be parallel to the other past-tense verbs. Without it, the sentence breaks.',
      D: '"Forging" is present progressive — clashes with the past-tense verbs ("re-created," "reprogrammed").'
    },
    hack: '<strong>"To + verb" = the WHY.</strong> Same rule as before. Chemists did X "to forge" a tool. The infinitive explains the reason.'
  },
  {
    n: 8, id: '20ea68b7', skill: 'form', skillLabel: 'Form, Structure & Sense', difficulty: 'medium',
    type: 'sec',
    passage: 'It can take time for proposed amendments to the US Constitution to become law. For example, the Twenty-Second Amendment, which limits the number of <span class="blank">_______</span> can serve, was first proposed in 1947 but wasn\'t approved by the required three-fourths majority of state legislatures until 1951.',
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: [
      { letter: 'A', text: 'terms presidents' },
      { letter: 'B', text: 'term\'s presidents' },
      { letter: 'C', text: 'term\'s president\'s' },
      { letter: 'D', text: 'terms president\'s' }
    ],
    correct: 'A',
    whyCorrect: 'The amendment limits the number of <strong>terms</strong> that <strong>presidents</strong> can serve. Both plural. No possession involved.',
    whyWrong: {
      B: '"Term\'s" = singular possessive (one term\'s something). Wrong — we mean multiple terms.',
      C: 'Both possessives. Wrong on both counts — no ownership here.',
      D: '"President\'s" = singular possessive. Wrong — applies to presidents in general.'
    },
    hack: '<strong>Apostrophe = possession.</strong> If the noun isn\'t OWNING something, no apostrophe. Read it: "number of terms presidents can serve" — terms aren\'t owning anything, presidents aren\'t owning anything. Just plurals.'
  },
  {
    n: 9, id: 'eeb14722', skill: 'form', skillLabel: 'Form, Structure & Sense', difficulty: 'medium',
    type: 'sec',
    passage: 'The soundtrack to Mira Nair\'s 1991 film <em>Mississippi Masala</em> expressively captures the clashing of cultures that happens when <span class="blank">_______</span> (a young Indian woman from Uganda and a young African American man from Mississippi) meet.',
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: [
      { letter: 'A', text: 'it\'s two protagonists' },
      { letter: 'B', text: 'its two protagonist\'s' },
      { letter: 'C', text: 'it\'s two protagonist\'s' },
      { letter: 'D', text: 'its two protagonists' }
    ],
    correct: 'D',
    whyCorrect: '"<strong>Its</strong>" = possessive (the film\'s protagonists). "<strong>Protagonists</strong>" = plural (there are two). Both correct.',
    whyWrong: {
      A: '"It\'s" means "it is" (contraction), not "belonging to it."',
      B: '"Protagonist\'s" = singular possessive. But the sentence says there are <em>two</em> protagonists.',
      C: 'Both errors — wrong "it\'s" AND wrong "protagonist\'s."'
    },
    hack: '<strong>"It\'s" = "it is." "Its" = belongs to it.</strong> Try replacing "it\'s" with "it is" in the sentence — if it doesn\'t make sense, use "its."'
  },
  {
    n: 10, id: 'dc645172', skill: 'form', skillLabel: 'Form, Structure & Sense', difficulty: 'hard',
    type: 'sec',
    passage: 'The artistic talents of Barbara Chase-Riboud, most known for her 1979 historical novel <em>Sally Hemings</em> and the conversation it inspired, <span class="blank">_______</span> limited to the realm of prose: she first excelled in sculpture, where her affinity for bronze — a material she described as "timeless" due to its use across eras and cultures — became part of her artistic identity.',
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: [
      { letter: 'A', text: 'hasn\'t been' },
      { letter: 'B', text: 'wasn\'t' },
      { letter: 'C', text: 'isn\'t' },
      { letter: 'D', text: 'aren\'t' }
    ],
    correct: 'D',
    whyCorrect: 'Subject is "<strong>talents</strong>" (plural). Verb must be plural: "aren\'t."',
    whyWrong: {
      A: '"Hasn\'t been" is singular.',
      B: '"Wasn\'t" is singular.',
      C: '"Isn\'t" is singular.'
    },
    hack: '<strong>Cross out everything between the subject and verb.</strong> "The artistic talents [of Barbara Chase-Riboud, most known for her 1979 novel...] aren\'t limited." Ignore the middle. Subject = "talents" (plural). Verb = plural.'
  },
  {
    n: 11, id: '57998dd3', skill: 'form', skillLabel: 'Form, Structure & Sense', difficulty: 'easy',
    type: 'sec',
    passage: 'Obsidian is a kind of volcanic glass formed when lava cools so quickly that the atoms inside it cannot arrange themselves in a crystalline structure. You <span class="blank">_______</span> more about obsidian\'s structure, which is classified as amorphous, in a later chapter.',
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: [
      { letter: 'A', text: 'had learned' },
      { letter: 'B', text: 'had been learning' },
      { letter: 'C', text: 'will learn' },
      { letter: 'D', text: 'have learned' }
    ],
    correct: 'C',
    whyCorrect: '"In a later chapter" = the future. Verb must be future tense: "will learn."',
    whyWrong: {
      A: '"Had learned" = past perfect (something completed in the past). Wrong direction.',
      B: '"Had been learning" = past — wrong direction.',
      D: '"Have learned" = present perfect (already done). But the reader hasn\'t learned it yet — it\'s coming up.'
    },
    hack: '<strong>Time markers tell you the tense.</strong> "In a later chapter" = future. "Yesterday" = past. "Currently" = present. Find the time word, match the verb.'
  },

  // ============ BOUNDARIES ============
  {
    n: 12, id: '4dcedc31', skill: 'bound', skillLabel: 'Boundaries', difficulty: 'hard',
    type: 'sec',
    passage: 'For scientists to produce new iron nanoparticles of a specific size or strength, they must first be able to monitor reactions between oxygen and existing iron nanoparticles at a near-atomic level of detail. Fortunately, chemistry <span class="blank">_______</span> and his colleagues at Temple University recently developed a new approach that does just that.',
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: [
      { letter: 'A', text: 'professor Yugang Sun' },
      { letter: 'B', text: 'professor Yugang Sun,' },
      { letter: 'C', text: 'professor, Yugang Sun,' },
      { letter: 'D', text: 'professor, Yugang Sun' }
    ],
    correct: 'A',
    whyCorrect: 'No punctuation needed. "<strong>Chemistry professor Yugang Sun</strong>" is one tight phrase (title + name). Then "Yugang Sun and his colleagues" is the joint subject — no comma between them either.',
    whyWrong: {
      B: 'A comma between "Yugang Sun" and "and his colleagues" wrongly cuts off the joint subject.',
      C: 'Commas around "Yugang Sun" would imply his name is optional and removable — it isn\'t.',
      D: 'A comma between "chemistry professor" and "Yugang Sun" wrongly separates the title from the name.'
    },
    hack: '<strong>Title + name = no punctuation.</strong> "Chemistry professor Yugang Sun" is one unit, like "Doctor Strange" or "President Lincoln." Don\'t break it apart with commas.'
  },
  {
    n: 13, id: 'a1e0c981', skill: 'bound', skillLabel: 'Boundaries', difficulty: 'easy',
    type: 'sec',
    passage: 'In her book <em>The Woman Warrior: Memoirs of a Girlhood Among Ghosts</em>, author Maxine Hong Kingston examines themes <span class="blank">_______</span> childhood, womanhood, and Chinese American identity by intertwining autobiography and mythology.',
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: [
      { letter: 'A', text: 'of:' },
      { letter: 'B', text: 'of' },
      { letter: 'C', text: 'of—' },
      { letter: 'D', text: 'of,' }
    ],
    correct: 'B',
    whyCorrect: '"Themes of" is the start of a phrase that needs to flow into "childhood, womanhood..." No punctuation between "of" and its objects. Read it: "themes of childhood, [themes of] womanhood, [themes of] identity."',
    whyWrong: {
      A: 'A colon needs a complete sentence before it. "In her book...themes of" isn\'t complete.',
      C: 'A dash also needs a complete sentence before it. Same problem.',
      D: 'A comma after "of" awkwardly cuts off the phrase mid-thought.'
    },
    hack: '<strong>Don\'t break up tight phrases.</strong> If the choices add punctuation in a spot where the words naturally flow together ("themes of ___"), the answer is usually NO punctuation.'
  },
  {
    n: 14, id: 'b35cefb7', skill: 'bound', skillLabel: 'Boundaries', difficulty: 'easy',
    type: 'sec',
    passage: 'The fine, powdery substance that covers the Moon\'s surface is called regolith. Because regolith is both readily available and high in oxygen <span class="blank">_______</span> scientists have wondered whether it could be used as a potential source of oxygen for future lunar settlements.',
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: [
      { letter: 'A', text: 'content and' },
      { letter: 'B', text: 'content,' },
      { letter: 'C', text: 'content' },
      { letter: 'D', text: 'content, and' }
    ],
    correct: 'B',
    whyCorrect: 'Sentence starts with "<strong>Because</strong>..." (subordinate clause). When that finishes and the main clause begins, you need a comma.',
    whyWrong: {
      A: '"And" makes both clauses subordinate — the sentence ends up with no main clause at all.',
      C: 'No punctuation = subordinate clause runs into main clause without a break.',
      D: 'Same problem as A — adding "and" breaks the main clause structure.'
    },
    hack: '<strong>Subordinate clause first → comma after.</strong> If a sentence starts with "Because," "Although," "When," "If," "Since" — put a comma where the subordinate clause ends and the main clause begins.'
  },
  {
    n: 15, id: 'e76e74e8', skill: 'bound', skillLabel: 'Boundaries', difficulty: 'hard',
    type: 'sec',
    passage: 'Over twenty years ago, in a landmark experiment in the psychology of choice, professor Sheena Iyengar set up a jam-tasting booth at a grocery store. The number of jams available for tasting <span class="blank">_______</span> some shoppers had twenty-four different options, others only six. Interestingly, the shoppers with fewer jams to choose from purchased more jam.',
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: [
      { letter: 'A', text: 'varied:' },
      { letter: 'B', text: 'varied,' },
      { letter: 'C', text: 'varied, while' },
      { letter: 'D', text: 'varied while' }
    ],
    correct: 'A',
    whyCorrect: '"The number...varied" is a complete sentence. "Some shoppers had 24, others 6" explains HOW it varied. The <strong>colon</strong> properly introduces this explanation.',
    whyWrong: {
      B: 'A comma between two complete sentences = comma splice.',
      C: '"While" suggests the variation happened DURING the time some had 24 options — which doesn\'t fit.',
      D: 'Same "while" problem.'
    },
    hack: '<strong>Colon = explanation coming.</strong> If the first part is a complete sentence and the second part EXPLAINS or LISTS something about it, use a colon.'
  },
  {
    n: 16, id: 'a9e5b788', skill: 'bound', skillLabel: 'Boundaries', difficulty: 'hard',
    type: 'sec',
    passage: 'In discussing Mary Shelley\'s 1818 epistolary novel <em>Frankenstein</em>, literary theorist Gayatri Spivak directs the reader\'s attention to the character of Margaret Saville. As Spivak points out, Saville is not the protagonist of Shelley\'s <span class="blank">_______</span> as the recipient of the letters that frame the book\'s narrative, she\'s the "occasion" of it.',
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: [
      { letter: 'A', text: 'novel' },
      { letter: 'B', text: 'novel,' },
      { letter: 'C', text: 'novel; rather,' },
      { letter: 'D', text: 'novel, rather,' }
    ],
    correct: 'C',
    whyCorrect: 'Two complete sentences: "Saville is not the protagonist..." AND "she\'s the occasion of it." A semicolon joins them. "Rather" adds the contrast.',
    whyWrong: {
      A: 'No punctuation = run-on (two sentences fused).',
      B: 'Comma alone between two sentences = comma splice.',
      D: 'Same problem — a comma alone (even with "rather") can\'t join two complete sentences.'
    },
    hack: '<strong>Two complete sentences? Use semicolon, period, OR comma + conjunction.</strong> Never just a comma — that\'s a comma splice every time.'
  },
  {
    n: 17, id: 'a153ad6a', skill: 'bound', skillLabel: 'Boundaries', difficulty: 'medium',
    type: 'sec',
    passage: 'While light is known as one of the fastest-moving substances, it slows down when passing through some types of matter. One such type of matter is a form of cooled, condensed gas called a Bose-Einstein condensate <span class="blank">_______</span> Dutch physicist Lene Hau famously used a BEC to slow a beam of light to a complete halt.',
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: [
      { letter: 'A', text: '(BEC),' },
      { letter: 'B', text: '(BEC) and' },
      { letter: 'C', text: '(BEC);' },
      { letter: 'D', text: '(BEC)' }
    ],
    correct: 'C',
    whyCorrect: 'Two complete sentences: "One such type of matter is a Bose-Einstein condensate (BEC)" AND "Dutch physicist Lene Hau used a BEC to slow light." A semicolon joins them.',
    whyWrong: {
      A: 'Comma alone between two complete sentences = comma splice.',
      B: '"And" without a comma between two complete sentences = run-on.',
      D: 'No punctuation = run-on.'
    },
    hack: '<strong>Test the two parts: are they each complete sentences?</strong> If yes, you need semicolon, period, or comma + conjunction. Never just a comma or just "and."'
  },
  {
    n: 18, id: '59a246dc', skill: 'bound', skillLabel: 'Boundaries', difficulty: 'hard',
    type: 'sec',
    passage: 'When external forces are applied to common glass made from silicates, energy builds up around minuscule defects in the material, resulting in fractures. Recently, engineer Erkka Frankberg of Tampere University in Finland used the chemical <span class="blank">_______</span> to make a glassy solid that can withstand higher strain than silicate glass can before fracturing.',
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: [
      { letter: 'A', text: 'compound, aluminum oxide' },
      { letter: 'B', text: 'compound aluminum oxide,' },
      { letter: 'C', text: 'compound, aluminum oxide,' },
      { letter: 'D', text: 'compound aluminum oxide' }
    ],
    correct: 'D',
    whyCorrect: '"Aluminum oxide" tells you WHICH chemical compound. It\'s essential information (a <strong>restrictive appositive</strong>). Don\'t set off essential info with commas.',
    whyWrong: {
      A: 'A comma after "compound" suggests "aluminum oxide" is optional info. It isn\'t — without it, we don\'t know which compound.',
      B: 'The comma after "aluminum oxide" wrongly breaks the sentence flow before "to make."',
      C: 'Commas around "aluminum oxide" say it\'s optional. It isn\'t.'
    },
    hack: '<strong>Can you remove the info and still have a clear sentence?</strong> If YES — commas around it (optional). If NO — no commas (essential). "The chemical compound" alone doesn\'t say which compound, so "aluminum oxide" is essential.'
  },
  {
    n: 19, id: '6fece68e', skill: 'bound', skillLabel: 'Boundaries', difficulty: 'easy',
    type: 'sec',
    passage: 'Emperor Ashoka ruled the Maurya Empire in South Asia from roughly 270 to 232 BCE. He is known for enforcing a moral code called the Law of Piety, which established the sanctity of animal <span class="blank">_______</span> the just treatment of the elderly, and the abolition of the slave trade.',
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: [
      { letter: 'A', text: 'life' },
      { letter: 'B', text: 'life;' },
      { letter: 'C', text: 'life:' },
      { letter: 'D', text: 'life,' }
    ],
    correct: 'D',
    whyCorrect: 'Three things in a list: sanctity of animal life, just treatment of elderly, abolition of slave trade. Items in a list = separated by <strong>commas</strong>.',
    whyWrong: {
      A: 'No punctuation runs the items together.',
      B: 'Semicolons in a list are only used when items themselves contain commas. Not here.',
      C: 'Colons introduce lists — they don\'t separate items within.'
    },
    hack: '<strong>Lists use commas, all the way through.</strong> "A, B, and C" — commas separate. Even when items are long like here, still commas.'
  },
  {
    n: 20, id: '155239cf', skill: 'bound', skillLabel: 'Boundaries', difficulty: 'easy',
    type: 'sec',
    passage: 'By analyzing ice cores from Greenland and Antarctica, a research team at Sweden\'s Lund University discovered evidence of a solar storm that occurred 9,200 years ago. Scientists had previously thought the Sun to be in a relatively "quiet" phase at that <span class="blank">_______</span> the Lund team\'s finding suggests otherwise.',
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: [
      { letter: 'A', text: 'time but' },
      { letter: 'B', text: 'time, but' },
      { letter: 'C', text: 'time,' },
      { letter: 'D', text: 'time' }
    ],
    correct: 'B',
    whyCorrect: 'Two complete sentences. The standard join: <strong>comma + "but"</strong> (a coordinating conjunction).',
    whyWrong: {
      A: 'Long sentences joined with just "but" (no comma) come off as a run-on.',
      C: 'Comma alone between two sentences = comma splice.',
      D: 'No punctuation = run-on.'
    },
    hack: '<strong>Comma + FANBOYS</strong> (For, And, Nor, But, Or, Yet, So). When two complete sentences need to join, comma + one of these conjunctions does it cleanly.'
  }
];;
