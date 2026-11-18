import { Character } from "@/types/character";

export const CHARACTERS: Character[] = [
  {
    id: "dushmanta",
    name: "Dushmanta",
    title: "The Finance Minister",
    tagline: "Payment completed. Settlement pending. Memory unavailable.",
    description: "The instant bill payer who settles every group check on the spot, but somehow forgets to mention everyone's share until months later. Passionate movie critic, avid football enthusiast, and F1 fanatic with uncompromising tastes.",
    personality: [
      "Pays restaurant bills immediately without blinking",
      "Perpetually forgets to ask people to split the bill",
      "Picky and highly selective about food and plans",
      "Fierce movie critic and Formula 1 / football fan"
    ],
    signatureProps: [
      { name: "Endless Receipt", icon: "receipt", description: "The restaurant bill that was paid instantly." },
      { name: "Pocket Calculator", icon: "calculator", description: "Used to audit everyone else's movie taste." },
      { name: "Football & Checkered Flag", icon: "trophy", description: "Weekend match days and Grand Prix races." }
    ],
    insideJokes: ["Unsettled bills", "Khandagiri lore", "Movie rating authority"],
    relationships: [
      { targetId: "arpita", label: "Proud Adopted Son", context: "Affectionately adopted into Arpita's maternal care." },
      { targetId: "paresh", label: "Bickering Roommates", context: "Endless comedic room debates and Sunday feast partnerships." },
      { targetId: "shyamalendu", label: "Khandagiri Partners", context: "Affectionate private gang banter." }
    ],
    avatarColor: "#D9B76B",
    placeholderSvg: "dushmanta",
    image: "/avatars/dushmanta.jpg"
  },
  {
    id: "paresh",
    name: "Paresh",
    title: "The Gentleman Writer",
    tagline: "Can write a poem about dinner before dinner is even served.",
    description: "The literary heart and master chef of the group. Author of books, craftsman of heartfelt poems and quotes, and the creator of legendary Sunday room feasts.",
    personality: [
      "Published author and eloquent poet",
      "Gifted cook who brings everyone together for feasts",
      "Master of crafting poetic summaries of chaotic gang moments",
      "Dry, warm gentlemanly wit"
    ],
    signatureProps: [
      { name: "Fountain Pen & Journal", icon: "pen", description: "Documenting group moments into verse." },
      { name: "Cooking Apron & Ladle", icon: "chef", description: "The aroma of Sunday feasts in his room." },
      { name: "Hardcover Book", icon: "book", description: "His literary creations and reflections." }
    ],
    insideJokes: ["Pre-dinner poetry", "Sunday masterchef"],
    relationships: [
      { targetId: "dushmanta", label: "Bickering Roommates", context: "Room partners and culinary duo." }
    ],
    avatarColor: "#C96E59",
    placeholderSvg: "paresh",
    image: "/avatars/paresh.jpg"
  },
  {
    id: "shyamalendu",
    name: "Shyamalendu",
    nickname: "Syama",
    title: "The Angry Fufaji",
    tagline: "Before we continue, let me explain what I just explained.",
    description: "The self-appointed group explainer who ensures not a single soul is left behind—by going to extreme analytical lengths to explain jokes, movies, and explanations of explanations.",
    personality: [
      "Explains jokes until the humor is thoroughly documented",
      "Can analyze the simplest question into a multi-phase flowchart",
      "Affectionately grumbly demeanor hiding genuine care",
      "The undisputed whiteboard master"
    ],
    signatureProps: [
      { name: "Dry Erase Whiteboard", icon: "board", description: "For emergency multi-tiered diagram explanations." },
      { name: "Red & Green Markers", icon: "markers", description: "To emphasize key logical branches." }
    ],
    insideJokes: ["Explaining the explanation", "Bitter half"],
    relationships: [
      { targetId: "asutosh", label: "Bitter Half", context: "Classic comedy duo: endless explanations meeting gentle vegetable zen." }
    ],
    avatarColor: "#8199A8",
    placeholderSvg: "shyamalendu",
    image: "/avatars/shyamalendu.jpg"
  },
  {
    id: "astha",
    name: "Astha",
    title: "The Commander / Event Manager",
    tagline: "Instructions unclear. Everyone is still following her.",
    description: "The energetic powerhouse and mastermind behind every party, trip, and decorative setup. Armed with scissors, tape, and a clipboard, she commands the gang with unstoppable enthusiasm.",
    personality: [
      "Supreme craft planner and event mastermind",
      "Executes room transformations with military precision",
      "Speaks in rapid-fire instructions the gang instinctively obeys",
      "Affectionate 'Small RAM' running joke when multitasking"
    ],
    signatureProps: [
      { name: "Clip-board with Schedule", icon: "clipboard", description: "The sacred retreat itinerary." },
      { name: "Washi Tape & Scissors", icon: "scissors", description: "Tools of decorative supremacy." },
      { name: "Low-RAM Indicator", icon: "chip", description: "Subtle affectionate badge for her chaotic multitasking." }
    ],
    insideJokes: ["Maobadi Commander", "Small RAM", "Follow the leader"],
    relationships: [
      { targetId: "subhashree", label: "The 3 Musketeers (Co-Directors)", context: "The unstoppable event coordination committee." },
      { targetId: "arpita", label: "The 3 Musketeers", context: "Part of the iconic three-person trio." }
    ],
    avatarColor: "#9AA48D",
    placeholderSvg: "astha",
    image: "/avatars/astha.jpg"
  },
  {
    id: "asutosh",
    name: "Asutosh",
    title: "The Vegetable Encyclopedia",
    tagline: "Asked for an explanation. Received a vegetable.",
    description: "Calm, soft-hearted, sensitive, and deeply peaceful. Known for his legendary, zen-like response whenever someone asks for an explanation: 'That\\'s a vegetable.' Distinct person from Ashutosh.",
    personality: [
      "Gentle, calm, sensitive, and soft-spoken soul",
      "Quietly observes group chaos with supreme serenity",
      "Signature response to life's mysteries: 'That\\'s a vegetable'",
      "Can get emotionally hurt easily because he cares deeply"
    ],
    signatureProps: [
      { name: "The Sacred Eggplant / Gourd", icon: "eggplant", description: "His universal answer to all inquiries." },
      { name: "Organic Jute Bag", icon: "bag", description: "Fresh market discoveries and gentle vibes." }
    ],
    insideJokes: ["That's a vegetable", "Bitter half partner"],
    relationships: [
      { targetId: "shyamalendu", label: "Bitter Half", context: "The zen vegetable counterweight to Syama's fiery whiteboards." }
    ],
    avatarColor: "#79846C",
    placeholderSvg: "asutosh",
    image: "/avatars/asutosh.jpg"
  },
  {
    id: "ashutosh",
    name: "Ashutosh",
    title: "The Man in His Own Universe",
    tagline: "Physically here. Mentally exploring a distant tranquil galaxy.",
    description: "A kind-hearted dreamer who peacefully drifts into his own dimension while group chaos unfolds around him. Gracious host whose mother welcomed the whole gang for unforgettable home meals and colorful Holi celebrations. Distinct person from Asutosh.",
    personality: [
      "Zones out peacefully in the midst of loud debates",
      "Warm, generous host who loves bringing the gang home",
      "Deeply devoted to his family and mother",
      "Celebrated the most memorable group Holi festival"
    ],
    signatureProps: [
      { name: "Daydream Cloud", icon: "cloud", description: "His personal portal to tranquil thought realms." },
      { name: "Home Feast Thali", icon: "thali", description: "Delicious food prepared by his welcoming mother." },
      { name: "Holi Gulal Powder", icon: "colors", description: "Vibrant pink and yellow festive splashes." }
    ],
    insideJokes: ["Own Universe", "The Mom's Feast"],
    relationships: [
      { targetId: "tapan", label: "Quiet Comrades", context: "Mutual appreciation for peaceful presence." }
    ],
    avatarColor: "#D9B76B",
    placeholderSvg: "ashutosh",
    image: "/avatars/ashutosh.jpg"
  },
  {
    id: "arpita",
    name: "Arpita",
    title: "The Penguin Mom",
    tagline: "Feed everyone first, dance across the room, care forever.",
    description: "The warm, nurturing mother of the entire gang. Extraordinary cook who packs food for everyone, radiant dancer, and the beloved queen of Gopalpur's 'Operation Arpita'. Now embarking on her wedding chapter.",
    personality: [
      "Nurturing maternal warmth that anchors the group",
      "Brings home-cooked snacks and tiffins for everyone to try",
      "Loves dancing with joy and contagious energy",
      "Honored with the Gopalpur bachelorette celebration"
    ],
    signatureProps: [
      { name: "Penguin Mascot", icon: "penguin", description: "Original cute penguin symbol of maternal love." },
      { name: "Stainless Tiffin Tower", icon: "tiffin", description: "Packed with homemade food for the gang." },
      { name: "Dance Ribbons & Tiara", icon: "sparkles", description: "Bachelorette queen at Mayfair Gopalpur." }
    ],
    insideJokes: ["Penguin Mom", "Operation Arpita Queen"],
    relationships: [
      { targetId: "dushmanta", label: "Proud Adopted Son", context: "Maternal affection and teasing." },
      { targetId: "niyaz", label: "Proud Adopted Son", context: "Endless caring for the group's youngest." },
      { targetId: "astha", label: "The 3 Musketeers", context: "The core trio of sisters." },
      { targetId: "subhashree", label: "The 3 Musketeers", context: "Cherished friendship and trust." }
    ],
    quotes: [
      {
        quote: "I'll never forget how you massaged my leg when I could barely stand while trekking. ❤️ That moment will always remind me that care isn't just about words; sometimes, it's about showing up when someone needs you the most.",
        author: "Arpita",
        context: "Heartfelt tribute to Tapan during the Koraput trek."
      }
    ],
    avatarColor: "#C96E59",
    placeholderSvg: "arpita",
    image: "/avatars/arpita.jpg"
  },
  {
    id: "subhashree",
    name: "Subhashree",
    nickname: "Croco",
    title: "Croco / Deputy Director",
    tagline: "Event managed. Craft glued. Soumya thoroughly defeated.",
    description: "The mature, razor-sharp co-manager alongside Astha. Gifted at crafts, an invaluable anchor for major events, and Soumya's eternal comedic sparring partner. Nicknamed 'Croco' with affection after her hometown.",
    personality: [
      "Exceptional craft organizer and steady leader",
      "Forms the ultimate event management duo with Astha",
      "Engages in witty, playful ongoing debates with Soumya",
      "Mature, dependable, and warmly affectionate"
    ],
    signatureProps: [
      { name: "Friendly Croco Mascot", icon: "alligator", description: "Charming, friendly original doodle mascot." },
      { name: "Glue Gun & Decorative Ribbon", icon: "tape", description: "Crafting perfection." }
    ],
    insideJokes: ["Croco", "The 3 Musketeers", "Endless debate with Soumya"],
    relationships: [
      { targetId: "astha", label: "The 3 Musketeers (Co-Directors)", context: "Masterminds of decoration and logistics." },
      { targetId: "soumya", label: "Friendly Sparring Partners", context: "Endless entertaining debates on tech and life." }
    ],
    avatarColor: "#8199A8",
    placeholderSvg: "subhashree",
    image: "/avatars/subhashree.jpg"
  },
  {
    id: "soumya",
    name: "Soumya",
    title: "The Code Machine",
    tagline: "Bug fixed. Code committed. Argument with Subhashree unresolved.",
    description: "The brilliant software wizard and generous trainee mentor. Can solve impossible technical puzzles in minutes, deliver whatever the team needs, and author witty tribute poems.",
    personality: [
      "Master code crafter who lives in the terminal",
      "Dedicated mentor to younger developers and trainees",
      "Dependable problem solver with a good heart",
      "Author of the celebrated character poem about Tapan"
    ],
    signatureProps: [
      { name: "MacBook & Code Console", icon: "laptop", description: "Compiling code and fixing bugs at lightspeed." },
      { name: "Steaming Coffee Mug", icon: "coffee", description: "Fuel for late-night programming." }
    ],
    insideJokes: ["Bug fixed, argument ongoing", "Poet of Luffy"],
    relationships: [
      { targetId: "subhashree", label: "Friendly Sparring Partners", context: "Hilarious ongoing banter." },
      { targetId: "tapan", label: "The Biographer", context: "Penned the legendary poem honoring the Invisible Man." }
    ],
    quotes: [
      {
        quote: "Listening to everything, casually serious, avoiding unnecessary drama... absent, but somehow present when needed.",
        author: "Soumya",
        context: "Extract from Soumya's celebrated character poem about Tapan."
      }
    ],
    avatarColor: "#59483D",
    placeholderSvg: "soumya",
    image: "/avatars/soumya.jpg"
  },
  {
    id: "niyaz",
    name: "Niyaz",
    title: "The Delulu Romantic",
    tagline: "Somewhere between reality, romantic fantasies, and cat memes.",
    description: "The sweet, quiet daydreamer of the gang. Soft-spoken, deeply creative, writes secret poetry, adores cats, and lives in delightfully exaggerated romantic daydreams. The universally protected younger brother.",
    personality: [
      "Quiet, shy, and gentle demeanor",
      "Rich romantic imagination and lyrical writing",
      "Cat enthusiast who relates to feline energy",
      "Playfully teased for his dreamy Gen-Z romantic realm"
    ],
    signatureProps: [
      { name: "Purring Kitten", icon: "cat", description: "His constant animal companion." },
      { name: "Pink Cloud Notebook", icon: "heart-book", description: "Secret verses and daydream sketches." }
    ],
    insideJokes: ["Delulu kingdom", "Cat whisperer"],
    relationships: [
      { targetId: "arpita", label: "Proud Adopted Son", context: "Pampered younger brother of the group." }
    ],
    avatarColor: "#DF8D7A",
    placeholderSvg: "niyaz",
    image: "/avatars/niyaz.jpg"
  },
  {
    id: "jayashree",
    name: "Jayashree",
    title: "The Morning Inspector",
    tagline: "Daily lunchbox inspection has begun. What did you bring?",
    description: "The steady morning sentinel. Though quiet and sometimes looking stern, she conducts the daily 1:00 PM lunchbox inspection with genuine warmth, checking on everyone's day.",
    personality: [
      "Morning check-in specialist who keeps track of everyone",
      "Inspects what everyone brought for lunch at 1:00 PM",
      "Calm exterior with a cool, caring heart",
      "Independent and quietly observant"
    ],
    signatureProps: [
      { name: "Lunchbox Checklist", icon: "checklist", description: "Auditing everyone's meal balance." },
      { name: "Morning Tea Cup", icon: "cup", description: "Start-of-day greeting ritual." }
    ],
    insideJokes: ["Morning inspection", "Tiffin auditor"],
    relationships: [
      { targetId: "arpita", label: "Kitchen Allies", context: "Mutual food appreciation and morning check-ins." }
    ],
    avatarColor: "#9AA48D",
    placeholderSvg: "jayashree",
    image: "/avatars/jayashree.png"
  },
  {
    id: "tanu",
    name: "Tanu",
    title: "The Newest Chapter",
    tagline: "Friendship loading... 78% complete. Chaos unlocked.",
    description: "The newest member of the gang who arrived with fresh eyes and a quiet smile. Still piecing together the wild lore of Gopalpur and inside jokes, her chapter is blossoming in real time.",
    personality: [
      "Quiet, observant, and genuinely sweet",
      "Learning all the chaotic group history one story at a time",
      "Participated wholeheartedly in Gopalpur retreat prep",
      "A warm and welcome new addition to the circle"
    ],
    signatureProps: [
      { name: "Instant Camera", icon: "camera", description: "Capturing new memories as they happen." },
      { name: "Progress Bar Bookmark", icon: "loading", description: "'Friendship loading...'" }
    ],
    insideJokes: ["Friendship loading", "Learning the lore"],
    relationships: [
      { targetId: "astha", label: "Preparation Partner", context: "Worked side-by-side on Gopalpur decorations." }
    ],
    avatarColor: "#D9B76B",
    placeholderSvg: "tanu",
    image: "/avatars/tanu.jpg"
  },
  {
    id: "tapan",
    name: "Tapan",
    nickname: "Luffy",
    title: "The Invisible Man",
    tagline: "Absent in the drama. Present when you need someone most.",
    description: "Calm, observant, drama-free listener and basketball enthusiast with a legendary appetite. Known for stepping quietly into the background—yet consistently showing up with genuine care when friends need real support. (Original character; distinct from anime Luffy).",
    personality: [
      "Zen listener who avoids petty drama and keeps things grounded",
      "Calm, patient, and quietly handles problems",
      "Legendary appetite at feasts and cafeteria tables",
      "Shows care through selfless actions (e.g. Koraput trek leg massage)"
    ],
    signatureProps: [
      { name: "Basketball", icon: "basketball", description: "His favorite sport and flow state." },
      { name: "Snack Bento", icon: "bento", description: "Fueling the legendary appetite." },
      { name: "Quiet Stealth Aura", icon: "stealth", description: "Appears and disappears without a sound." }
    ],
    insideJokes: ["The Invisible Man", "Appetite champion", "Trek hero"],
    relationships: [
      { targetId: "arpita", label: "Silent Protector", context: "Tended to Arpita's leg during the grueling mountain trek." },
      { targetId: "soumya", label: "Poetic Subject", context: "Subject of Soumya's famous character poem." }
    ],
    avatarColor: "#C96E59",
    placeholderSvg: "tapan",
    image: "/avatars/luffy.jpg"
  },
  {
    id: "yash",
    name: "Yash",
    title: "The Occasional Gang Member",
    tagline: "Outside the office, inside the adventure.",
    description: "The trusted outside friend who doesn't work at the company but holds an honorary seat in the gang. Joined the adventurous Koraput mountain trek and special celebratory milestones.",
    personality: [
      "Loyal outside friend always welcomed with open arms",
      "Enthusiastic hiker and adventure companion",
      "Brings fresh perspective to group outings"
    ],
    signatureProps: [
      { name: "Hiking Backpack", icon: "backpack", description: "Trekking gear for high-altitude adventures." },
      { name: "Trail Compass", icon: "compass", description: "Navigating mountain trails." }
    ],
    insideJokes: ["Honorary member", "Koraput explorer"],
    relationships: [
      { targetId: "tapan", label: "Trek Companions", context: "Shared the Koraput mountain hike." }
    ],
    avatarColor: "#8199A8",
    placeholderSvg: "yash",
    image: "/avatars/yash.jpg"
  }
];
