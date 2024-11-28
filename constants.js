// Prompt categories with keywords
const prompts = [
  { keywords: ["football", "soccer", "soccer ball", "football boots"], category: "football" },
  { keywords: ["basketball", "basketball shoes", "basketball accessories"], category: "basketball" },
  { keywords: ["cricket", "cricket bat", "cricket ball", "cricket gear"], category: "cricket" },
  { keywords: ["tennis", "tennis racket", "tennis ball", "tennis gear"], category: "tennis" },
  { keywords: ["running", "running shoes", "track shoes"], category: "running" },
  { keywords: ["gym", "gym accessories", "fitness equipment", "dumbbells"], category: "gym" },
  { keywords: ["cycling", "bicycle accessories", "cycling gear"], category: "cycling" },
  { keywords: ["swimming", "swimming goggles", "swim cap", "swimwear"], category: "swimming" },
  { keywords: ["badminton", "badminton racket", "shuttlecock"], category: "badminton" },
  { keywords: ["hockey", "hockey stick", "hockey gear"], category: "hockey" },
  { keywords: ["equipment", "sports gear", "accessories", "sports equipment"], category: "equipment" },
  { keywords: ["recommend", "suggest", "help me choose", "what do I need"], category: "recommend" },
  { keywords: ["thank you", "thanks"], category: "thanks" },
  { keywords: ["bye", "goodbye", "see you later"], category: "bye" },
  { keywords: ["hello", "hi", "hey"], category: "hello" },
  { keywords: ["who are you", "what is this", "tell me about yourself"], category: "whoAreYou" },
  { keywords: ["okay", "fine", "alright", "sure", "yes", "no problem"], category: "common" },
  { keywords: ["what?", "huh?", "i don't understand", "help", "sorry"], category: "error" }
];

// Gear-related replies for each sport
const replies = {
  football: [
    "We have premium footballs, boots, and kits. Anything specific you're looking for?",
    "Adidas footballs include models like Tango and Predator, priced between $20 to $50.",
    "Nike football boots include Mercurial and Phantom models, priced from $70 to $250.",
    "We also have goalkeeping gloves from Adidas and Puma, ranging from $30 to $100."
  ],
  basketball: [
    "Check out our high-quality basketballs, shoes, and jerseys!",
    "Spalding basketballs, including the NBA official size, range from $25 to $70.",
    "Basketball shoes like Air Jordan and Nike Lebron are available, priced from $100 to $300.",
    "We also offer portable basketball hoops starting at $150."
  ],
  cricket: [
    "Our cricket bats, balls, and protective gear are top-notch. Need recommendations?",
    "We have a variety of cricket bats available from top brands, priced between $50 to $300.",
    "Cricket balls, including test and club quality, are priced from $8 to $25 each.",
    "Our cricket kits include pads, gloves, helmets, and bags, with full kits ranging from $150 to $600."
  ],
  tennis: [
    "We offer top-brand tennis rackets, balls, and accessories!",
    "Wilson tennis rackets like Blade and Clash models are priced between $80 and $250.",
    "Tennis balls from Penn and Wilson start at $10 per pack.",
    "Tennis bags for carrying rackets and accessories range from $50 to $150."
  ],
  running: [
    "Running shoes designed for performance and comfort are available. Want to know more?",
    "Nike Pegasus and Adidas Ultraboost running shoes range from $100 to $200.",
    "Compression gear like running socks and shorts starts at $20.",
    "Fitness trackers and smartwatches for running are priced from $100 upwards."
  ],
  gym: [
    "Explore our gym accessories, including dumbbells, mats, and more for your fitness needs!",
    "We offer weight plates, resistance bands, yoga mats, and more to help with your workouts.",
    "For strength training, our dumbbells, kettlebells, and barbells range from $20 to $500."
  ],
  cycling: [
    "Cycling gear and bike accessories are available. Let us know what you need!",
    "Cycling helmets, gloves, bike locks, and reflective jackets are available to keep you safe.",
    "We offer bikes of all types, including road bikes, mountain bikes, and more."
  ],
  swimming: [
    "We have swimwear, goggles, and caps to make your swimming sessions perfect.",
    "Swim goggles from Speedo and Arena range from $15 to $50.",
    "We offer swimwear for all needs, including training suits and competition suits."
  ],
  badminton: [
    "Our badminton rackets and shuttlecocks are ideal for your next match.",
    "Yonex and Li-Ning rackets are available, with prices starting at $25.",
    "We have both feathered and nylon shuttlecocks, available in packs."
  ],
  hockey: [
    "Hockey sticks, balls, and protective gear are available. Need assistance?",
    "We offer field and ice hockey gear, including sticks, pads, and helmets.",
    "Protective gear like gloves and shin guards is available for both field and ice hockey players."
  ],
  equipment: [
    "We have a wide range of sports equipment and accessories. What do you have in mind?",
    "From cricket bats to tennis rackets, we provide a variety of high-quality sports gear."
  ],
  recommend: [
    "Sure! Tell me the sport or activity, and I’ll recommend the best gear.",
    "I'd be happy to suggest some great sports gear. What are you looking for?"
  ],
  thanks: [
    "You're welcome! Let me know if you need more help.",
    "Glad I could help! Feel free to ask anything else."
  ],
  bye: [
    "Goodbye! Have a great day!",
    "See you later! Come back anytime for more sports gear assistance."
  ],
  hello: [
    "Hello! Welcome to SportMate. How can I assist you with your sports gear?",
    "Hi! How can I help you with finding the perfect sports gear today?"
  ],
  whoAreYou: [
    "I’m SportMate, your personal sports accessories assistant. How can I help you today?",
    "I'm SportMate, here to help you find the best sports gear. Let me know what you need!"
  ],
  common: [
    "Sure! How can I help you further?",
    "Okay, what can I assist you with next?",
    "Alright, feel free to ask me about any gear you need!"
  ],
  error: [
    "Sorry, I didn’t quite catch that. Could you please rephrase?",
    "I'm not sure what you're asking. Can you clarify?",
    "I didn’t understand that. Could you provide more details or ask differently?"
  ]
};

// Alternative replies for fallback scenarios
const alternativeReplies = [
  "Can you tell me more about what you need?",
  "That's interesting! Could you specify the sport or activity?",
  "Let me know if I can assist you further.",
  "I’m here to help with your sports gear needs!"
];
