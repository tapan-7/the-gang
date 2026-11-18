export interface AlbumPhoto {
  src: string;
  caption: string;
  subcaption?: string;
  category: "tea-breaks" | "lunch" | "bachelorette" | "bday" | "elevator" | "outings";
  rotation?: number;
  tapeColor?: "mustard" | "dusty-blue" | "terracotta" | "sage";
}

export const PHOTO_ALBUMS = {
  teaBreaks: [
    {
      src: "/tea%20breaks/IMG_20260526_171343471.jpg",
      caption: "4:30 PM Chai Break ☕",
      subcaption: "Roadside tea stall ritual",
      category: "tea-breaks" as const,
      rotation: -2,
      tapeColor: "terracotta" as const,
    },
    {
      src: "/tea%20breaks/IMG_20260605_171833822.jpg",
      caption: "Cutting Chai & Laughter 🫖",
      subcaption: "Evening gang walk",
      category: "tea-breaks" as const,
      rotation: 1.5,
      tapeColor: "mustard" as const,
    },
    {
      src: "/tea%20breaks/IMG-20260814-WA0031.jpg",
      caption: "Biscuits & Office Escapes 🍪",
      subcaption: "Fresh air with the squad",
      category: "tea-breaks" as const,
      rotation: -1,
      tapeColor: "sage" as const,
    },
    {
      src: "/tea%20breaks/IMG_20261107_165743484.jpg",
      caption: "Sunset at the Tea Stall 🌇",
      subcaption: "Daily sacred tradition",
      category: "tea-breaks" as const,
      rotation: 2,
      tapeColor: "dusty-blue" as const,
    },
  ],

  lunch: [
    {
      src: "/lunch/IMG_20260220_132922747.jpg",
      caption: "1:00 PM The Table Merger 🍱",
      subcaption: "Two tables pushed together",
      category: "lunch" as const,
      rotation: -2.5,
      tapeColor: "mustard" as const,
    },
    {
      src: "/lunch/DSC_0071.JPG",
      caption: "Jayashree's Lunch Inspection 🔍",
      subcaption: "Tiffins passed around",
      category: "lunch" as const,
      rotation: 1.5,
      tapeColor: "dusty-blue" as const,
    },
    {
      src: "/lunch/IMG-20260822-WA0189.jpg",
      caption: "Sunday Room Feasts 🍛",
      subcaption: "Paresh & Dushmanta's kitchen",
      category: "lunch" as const,
      rotation: -1.5,
      tapeColor: "terracotta" as const,
    },
    {
      src: "/lunch/IMG-20260627-WA0221.jpg",
      caption: "Full Stomachs, Loud Debates 🍲",
      subcaption: "The 14-person lunch army",
      category: "lunch" as const,
      rotation: 2,
      tapeColor: "sage" as const,
    },
  ],

  bachelorette: [
    {
      src: "/bachelorette/IMG_20261114_192152888.jpg",
      caption: "Operation Arpita Begins 🎈",
      subcaption: "Mayfair Palm Beach Resort",
      category: "bachelorette" as const,
      rotation: -2,
      tapeColor: "mustard" as const,
    },
    {
      src: "/bachelorette/IMG_20261115_091828014.jpg",
      caption: "Pool Party & The 5 PM Lunch! 🏊‍♀️",
      subcaption: "Mayfair Pool • Nov 2026",
      category: "bachelorette" as const,
      rotation: 2.5,
      tapeColor: "terracotta" as const,
    },
    {
      src: "/bachelorette/IMG-20261115-WA0846.jpg",
      caption: "Fairy Lights & Speeches ✨",
      subcaption: "Toasts for our Penguin Mom",
      category: "bachelorette" as const,
      rotation: -1.5,
      tapeColor: "dusty-blue" as const,
    },
    {
      src: "/bachelorette/IMG-20261115-WA1167.jpg",
      caption: "The Queen of the Night 👑",
      subcaption: "Arpita's bachelorette milestone",
      category: "bachelorette" as const,
      rotation: 1.8,
      tapeColor: "sage" as const,
    },
    {
      src: "/bachelorette/IMG-20261115-WA1727.jpg",
      caption: "Living Room Photoshoot 📸",
      subcaption: "Final clue uncovered!",
      category: "bachelorette" as const,
      rotation: -2,
      tapeColor: "mustard" as const,
    },
    {
      src: "/bachelorette/IMG-20261116-WA0002.jpg",
      caption: "Gopalpur Sunrise • UNO-2026 🌅",
      subcaption: "The morning after the magic",
      category: "bachelorette" as const,
      rotation: 2,
      tapeColor: "terracotta" as const,
    },
  ],

  birthdays: [
    {
      src: "/bday%20celebrations/IMG-20260619-WA0065.jpg",
      caption: "Cake Cutting Celebrations 🎂",
      subcaption: "Another year of chaos",
      category: "bday" as const,
      rotation: -2,
      tapeColor: "mustard" as const,
    },
    {
      src: "/bday%20celebrations/IMG-20261009-WA0092.jpg",
      caption: "Birthday Confetti & Hugs 🎉",
      subcaption: "Family at work",
      category: "bday" as const,
      rotation: 2,
      tapeColor: "terracotta" as const,
    },
    {
      src: "/bday%20celebrations/OLV_20260915161913.jpg",
      caption: "Sweet Moments & Candles 🕯️",
      subcaption: "Office traditions",
      category: "bday" as const,
      rotation: -1.5,
      tapeColor: "dusty-blue" as const,
    },
  ],

  elevator: [
    {
      src: "/elevator%20photos/IMG-20261016-WA0083.jpg",
      caption: "Crammed in the Lift 🛗",
      subcaption: "14 people, 1 elevator",
      category: "elevator" as const,
      rotation: -2,
      tapeColor: "dusty-blue" as const,
    },
    {
      src: "/elevator%20photos/IMG-20261107-WA0303.jpg",
      caption: "Daily Elevator Squeeze 🤳",
      subcaption: "Mirror selfies after lunch",
      category: "elevator" as const,
      rotation: 2,
      tapeColor: "mustard" as const,
    },
  ],

  outings: [
    {
      src: "/outings/DSC_3379-1.JPG",
      caption: "Adventures in the Wild 🏞️",
      subcaption: "Koraput & Hill Trails",
      category: "outings" as const,
      rotation: -2,
      tapeColor: "sage" as const,
    },
    {
      src: "/outings/IMG-20260717-WA0046.jpg",
      caption: "Weekend Gatherings 🌊",
      subcaption: "Beyond office walls",
      category: "outings" as const,
      rotation: 2,
      tapeColor: "mustard" as const,
    },
    {
      src: "/outings/IMG-20261002-WA0600.jpg",
      caption: "Movie Nights & Feasts 🍿",
      subcaption: "Dushmanta's reviews",
      category: "outings" as const,
      rotation: -1.5,
      tapeColor: "terracotta" as const,
    },
    {
      src: "/outings/IMG_20250111_165912299.jpg",
      caption: "The Early Outings 🍃",
      subcaption: "Where it all began",
      category: "outings" as const,
      rotation: 1.8,
      tapeColor: "dusty-blue" as const,
    },
  ],
};

