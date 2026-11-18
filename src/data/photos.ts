export interface AlbumPhoto {
  src: string;
  filename: string;
  folder: string;
  category: string;
  caption: string;
  subcaption?: string;
  rotation?: number;
  tapeColor?: "mustard" | "dusty-blue" | "terracotta" | "sage";
}

export const CATEGORIES_CONFIG = [
  { id: "all", label: "All Keepsakes (122)", icon: "✨" },
  { id: "bachelorette", label: "Bachelorette (19)", icon: "👑" },
  { id: "bday celebrations", label: "Birthday Celebrations (12)", icon: "🎂" },
  { id: "elevator photos", label: "Elevator Photos (5)", icon: "🛗" },
  { id: "lunch", label: "Lunch (20)", icon: "🍱" },
  { id: "outings", label: "Outings (55)", icon: "🏔️" },
  { id: "tea breaks", label: "Tea Breaks (11)", icon: "☕" },
  { id: "gopalpur", label: "Gopalpur", icon: "🌊" },
];

export const ALL_PHOTOS: AlbumPhoto[] = [
  {
    "src": "/bachelorette/IMG-20261115-WA0040.jpg",
    "filename": "IMG-20261115-WA0040.jpg",
    "folder": "bachelorette",
    "category": "bachelorette",
    "caption": "Bachelorette #1",
    "subcaption": "Bachelorette \u2022 Snapshot 1",
    "rotation": -3.6,
    "tapeColor": "mustard"
  },
  {
    "src": "/bachelorette/IMG-20261115-WA0131.jpg",
    "filename": "IMG-20261115-WA0131.jpg",
    "folder": "bachelorette",
    "category": "bachelorette",
    "caption": "Bachelorette #2",
    "subcaption": "Bachelorette \u2022 Snapshot 2",
    "rotation": -2.4,
    "tapeColor": "dusty-blue"
  },
  {
    "src": "/bachelorette/IMG-20261115-WA0172.jpg",
    "filename": "IMG-20261115-WA0172.jpg",
    "folder": "bachelorette",
    "category": "bachelorette",
    "caption": "Bachelorette #3",
    "subcaption": "Bachelorette \u2022 Snapshot 3",
    "rotation": -1.2,
    "tapeColor": "terracotta"
  },
  {
    "src": "/bachelorette/IMG-20261115-WA0455.jpg",
    "filename": "IMG-20261115-WA0455.jpg",
    "folder": "bachelorette",
    "category": "bachelorette",
    "caption": "Bachelorette #4",
    "subcaption": "Bachelorette \u2022 Snapshot 4",
    "rotation": 0.0,
    "tapeColor": "sage"
  },
  {
    "src": "/bachelorette/IMG-20261115-WA0498.jpg",
    "filename": "IMG-20261115-WA0498.jpg",
    "folder": "bachelorette",
    "category": "bachelorette",
    "caption": "Bachelorette #5",
    "subcaption": "Bachelorette \u2022 Snapshot 5",
    "rotation": 1.2,
    "tapeColor": "mustard"
  },
  {
    "src": "/bachelorette/IMG-20261115-WA0607.jpg",
    "filename": "IMG-20261115-WA0607.jpg",
    "folder": "bachelorette",
    "category": "bachelorette",
    "caption": "Bachelorette #6",
    "subcaption": "Bachelorette \u2022 Snapshot 6",
    "rotation": 2.4,
    "tapeColor": "dusty-blue"
  },
  {
    "src": "/bachelorette/IMG-20261115-WA0837.jpg",
    "filename": "IMG-20261115-WA0837.jpg",
    "folder": "bachelorette",
    "category": "bachelorette",
    "caption": "Bachelorette #7",
    "subcaption": "Bachelorette \u2022 Snapshot 7",
    "rotation": 3.6,
    "tapeColor": "terracotta"
  },
  {
    "src": "/bachelorette/IMG-20261115-WA0846.jpg",
    "filename": "IMG-20261115-WA0846.jpg",
    "folder": "bachelorette",
    "category": "bachelorette",
    "caption": "Bachelorette #8",
    "subcaption": "Bachelorette \u2022 Snapshot 8",
    "rotation": -3.6,
    "tapeColor": "sage"
  },
  {
    "src": "/bachelorette/IMG-20261115-WA1167.jpg",
    "filename": "IMG-20261115-WA1167.jpg",
    "folder": "bachelorette",
    "category": "bachelorette",
    "caption": "Bachelorette #9",
    "subcaption": "Bachelorette \u2022 Snapshot 9",
    "rotation": -2.4,
    "tapeColor": "mustard"
  },
  {
    "src": "/bachelorette/IMG-20261115-WA1321.jpg",
    "filename": "IMG-20261115-WA1321.jpg",
    "folder": "bachelorette",
    "category": "bachelorette",
    "caption": "Bachelorette #10",
    "subcaption": "Bachelorette \u2022 Snapshot 10",
    "rotation": -1.2,
    "tapeColor": "dusty-blue"
  },
  {
    "src": "/bachelorette/IMG-20261115-WA1512.jpg",
    "filename": "IMG-20261115-WA1512.jpg",
    "folder": "bachelorette",
    "category": "bachelorette",
    "caption": "Bachelorette #11",
    "subcaption": "Bachelorette \u2022 Snapshot 11",
    "rotation": 0.0,
    "tapeColor": "terracotta"
  },
  {
    "src": "/bachelorette/IMG-20261115-WA1594.jpg",
    "filename": "IMG-20261115-WA1594.jpg",
    "folder": "bachelorette",
    "category": "bachelorette",
    "caption": "Bachelorette #12",
    "subcaption": "Bachelorette \u2022 Snapshot 12",
    "rotation": 1.2,
    "tapeColor": "sage"
  },
  {
    "src": "/bachelorette/IMG-20261115-WA1667.jpg",
    "filename": "IMG-20261115-WA1667.jpg",
    "folder": "bachelorette",
    "category": "bachelorette",
    "caption": "Bachelorette #13",
    "subcaption": "Bachelorette \u2022 Snapshot 13",
    "rotation": 2.4,
    "tapeColor": "mustard"
  },
  {
    "src": "/bachelorette/IMG-20261115-WA1705.jpg",
    "filename": "IMG-20261115-WA1705.jpg",
    "folder": "bachelorette",
    "category": "bachelorette",
    "caption": "Bachelorette #14",
    "subcaption": "Bachelorette \u2022 Snapshot 14",
    "rotation": 3.6,
    "tapeColor": "dusty-blue"
  },
  {
    "src": "/bachelorette/IMG-20261115-WA1717.jpg",
    "filename": "IMG-20261115-WA1717.jpg",
    "folder": "bachelorette",
    "category": "bachelorette",
    "caption": "Bachelorette #15",
    "subcaption": "Bachelorette \u2022 Snapshot 15",
    "rotation": -3.6,
    "tapeColor": "terracotta"
  },
  {
    "src": "/bachelorette/IMG-20261115-WA1727.jpg",
    "filename": "IMG-20261115-WA1727.jpg",
    "folder": "bachelorette",
    "category": "bachelorette",
    "caption": "Bachelorette #16",
    "subcaption": "Bachelorette \u2022 Snapshot 16",
    "rotation": -2.4,
    "tapeColor": "sage"
  },
  {
    "src": "/bachelorette/IMG-20261116-WA0002.jpg",
    "filename": "IMG-20261116-WA0002.jpg",
    "folder": "bachelorette",
    "category": "bachelorette",
    "caption": "Bachelorette #17",
    "subcaption": "Bachelorette \u2022 Snapshot 17",
    "rotation": -1.2,
    "tapeColor": "mustard"
  },
  {
    "src": "/bachelorette/IMG_20261114_192152888.jpg",
    "filename": "IMG_20261114_192152888.jpg",
    "folder": "bachelorette",
    "category": "bachelorette",
    "caption": "Bachelorette #18",
    "subcaption": "Bachelorette \u2022 Memory 18",
    "rotation": 0.0,
    "tapeColor": "dusty-blue"
  },
  {
    "src": "/bachelorette/IMG_20261115_091828014.jpg",
    "filename": "IMG_20261115_091828014.jpg",
    "folder": "bachelorette",
    "category": "bachelorette",
    "caption": "Bachelorette #19",
    "subcaption": "Bachelorette \u2022 Memory 19",
    "rotation": 1.2,
    "tapeColor": "terracotta"
  },
  {
    "src": "/bday%20celebrations/IMG-20260611-WA0070.jpg",
    "filename": "IMG-20260611-WA0070.jpg",
    "folder": "bday celebrations",
    "category": "bday celebrations",
    "caption": "Birthday Celebrations #1",
    "subcaption": "Birthday Celebrations \u2022 Snapshot 1",
    "rotation": -3.6,
    "tapeColor": "mustard"
  },
  {
    "src": "/bday%20celebrations/IMG-20260619-WA0065.jpg",
    "filename": "IMG-20260619-WA0065.jpg",
    "folder": "bday celebrations",
    "category": "bday celebrations",
    "caption": "Birthday Celebrations #2",
    "subcaption": "Birthday Celebrations \u2022 Snapshot 2",
    "rotation": -2.4,
    "tapeColor": "dusty-blue"
  },
  {
    "src": "/bday%20celebrations/IMG-20260625-WA0018.jpg",
    "filename": "IMG-20260625-WA0018.jpg",
    "folder": "bday celebrations",
    "category": "bday celebrations",
    "caption": "Birthday Celebrations #3",
    "subcaption": "Birthday Celebrations \u2022 Snapshot 3",
    "rotation": -1.2,
    "tapeColor": "terracotta"
  },
  {
    "src": "/bday%20celebrations/IMG-20260625-WA0031.jpg",
    "filename": "IMG-20260625-WA0031.jpg",
    "folder": "bday celebrations",
    "category": "bday celebrations",
    "caption": "Birthday Celebrations #4",
    "subcaption": "Birthday Celebrations \u2022 Snapshot 4",
    "rotation": 0.0,
    "tapeColor": "sage"
  },
  {
    "src": "/bday%20celebrations/IMG-20260827-WA0025.jpg",
    "filename": "IMG-20260827-WA0025.jpg",
    "folder": "bday celebrations",
    "category": "bday celebrations",
    "caption": "Birthday Celebrations #5",
    "subcaption": "Birthday Celebrations \u2022 Snapshot 5",
    "rotation": 1.2,
    "tapeColor": "mustard"
  },
  {
    "src": "/bday%20celebrations/IMG-20260827-WA0027.jpg",
    "filename": "IMG-20260827-WA0027.jpg",
    "folder": "bday celebrations",
    "category": "bday celebrations",
    "caption": "Birthday Celebrations #6",
    "subcaption": "Birthday Celebrations \u2022 Snapshot 6",
    "rotation": 2.4,
    "tapeColor": "dusty-blue"
  },
  {
    "src": "/bday%20celebrations/IMG-20260924-WA0047.jpg",
    "filename": "IMG-20260924-WA0047.jpg",
    "folder": "bday celebrations",
    "category": "bday celebrations",
    "caption": "Birthday Celebrations #7",
    "subcaption": "Birthday Celebrations \u2022 Snapshot 7",
    "rotation": 3.6,
    "tapeColor": "terracotta"
  },
  {
    "src": "/bday%20celebrations/IMG-20260924-WA0050.jpg",
    "filename": "IMG-20260924-WA0050.jpg",
    "folder": "bday celebrations",
    "category": "bday celebrations",
    "caption": "Birthday Celebrations #8",
    "subcaption": "Birthday Celebrations \u2022 Snapshot 8",
    "rotation": -3.6,
    "tapeColor": "sage"
  },
  {
    "src": "/bday%20celebrations/IMG-20261007-WA0031.jpg",
    "filename": "IMG-20261007-WA0031.jpg",
    "folder": "bday celebrations",
    "category": "bday celebrations",
    "caption": "Birthday Celebrations #9",
    "subcaption": "Birthday Celebrations \u2022 Snapshot 9",
    "rotation": -2.4,
    "tapeColor": "mustard"
  },
  {
    "src": "/bday%20celebrations/IMG-20261009-WA0066.jpg",
    "filename": "IMG-20261009-WA0066.jpg",
    "folder": "bday celebrations",
    "category": "bday celebrations",
    "caption": "Birthday Celebrations #10",
    "subcaption": "Birthday Celebrations \u2022 Snapshot 10",
    "rotation": -1.2,
    "tapeColor": "dusty-blue"
  },
  {
    "src": "/bday%20celebrations/IMG-20261009-WA0092.jpg",
    "filename": "IMG-20261009-WA0092.jpg",
    "folder": "bday celebrations",
    "category": "bday celebrations",
    "caption": "Birthday Celebrations #11",
    "subcaption": "Birthday Celebrations \u2022 Snapshot 11",
    "rotation": 0.0,
    "tapeColor": "terracotta"
  },
  {
    "src": "/bday%20celebrations/OLV_20260915161913.jpg",
    "filename": "OLV_20260915161913.jpg",
    "folder": "bday celebrations",
    "category": "bday celebrations",
    "caption": "Birthday Celebrations #12",
    "subcaption": "Birthday Celebrations \u2022 Memory 12",
    "rotation": 1.2,
    "tapeColor": "sage"
  },
  {
    "src": "/elevator%20photos/IMG-20260210-WA0037.jpg",
    "filename": "IMG-20260210-WA0037.jpg",
    "folder": "elevator photos",
    "category": "elevator photos",
    "caption": "Elevator Photos #1",
    "subcaption": "Elevator Photos \u2022 Snapshot 1",
    "rotation": -3.6,
    "tapeColor": "mustard"
  },
  {
    "src": "/elevator%20photos/IMG-20261016-WA0047.jpg",
    "filename": "IMG-20261016-WA0047.jpg",
    "folder": "elevator photos",
    "category": "elevator photos",
    "caption": "Elevator Photos #2",
    "subcaption": "Elevator Photos \u2022 Snapshot 2",
    "rotation": -2.4,
    "tapeColor": "dusty-blue"
  },
  {
    "src": "/elevator%20photos/IMG-20261016-WA0083.jpg",
    "filename": "IMG-20261016-WA0083.jpg",
    "folder": "elevator photos",
    "category": "elevator photos",
    "caption": "Elevator Photos #3",
    "subcaption": "Elevator Photos \u2022 Snapshot 3",
    "rotation": -1.2,
    "tapeColor": "terracotta"
  },
  {
    "src": "/elevator%20photos/IMG-20261107-WA0205.jpg",
    "filename": "IMG-20261107-WA0205.jpg",
    "folder": "elevator photos",
    "category": "elevator photos",
    "caption": "Elevator Photos #4",
    "subcaption": "Elevator Photos \u2022 Snapshot 4",
    "rotation": 0.0,
    "tapeColor": "sage"
  },
  {
    "src": "/elevator%20photos/IMG-20261107-WA0303.jpg",
    "filename": "IMG-20261107-WA0303.jpg",
    "folder": "elevator photos",
    "category": "elevator photos",
    "caption": "Elevator Photos #5",
    "subcaption": "Elevator Photos \u2022 Snapshot 5",
    "rotation": 1.2,
    "tapeColor": "mustard"
  },
  {
    "src": "/lunch/DSC_0071.JPG",
    "filename": "DSC_0071.JPG",
    "folder": "lunch",
    "category": "lunch",
    "caption": "Lunch #1",
    "subcaption": "Lunch \u2022 Memory 1",
    "rotation": -3.6,
    "tapeColor": "mustard"
  },
  {
    "src": "/lunch/IMG-20250311-WA0013.jpg",
    "filename": "IMG-20250311-WA0013.jpg",
    "folder": "lunch",
    "category": "lunch",
    "caption": "Lunch #2",
    "subcaption": "Lunch \u2022 Snapshot 2",
    "rotation": -2.4,
    "tapeColor": "dusty-blue"
  },
  {
    "src": "/lunch/IMG-20250402-WA0001.jpg",
    "filename": "IMG-20250402-WA0001.jpg",
    "folder": "lunch",
    "category": "lunch",
    "caption": "Lunch #3",
    "subcaption": "Lunch \u2022 Snapshot 3",
    "rotation": -1.2,
    "tapeColor": "terracotta"
  },
  {
    "src": "/lunch/IMG-20250630-WA0009.jpg",
    "filename": "IMG-20250630-WA0009.jpg",
    "folder": "lunch",
    "category": "lunch",
    "caption": "Lunch #4",
    "subcaption": "Lunch \u2022 Snapshot 4",
    "rotation": 0.0,
    "tapeColor": "sage"
  },
  {
    "src": "/lunch/IMG-20250912-WA0024.jpg",
    "filename": "IMG-20250912-WA0024.jpg",
    "folder": "lunch",
    "category": "lunch",
    "caption": "Lunch #5",
    "subcaption": "Lunch \u2022 Snapshot 5",
    "rotation": 1.2,
    "tapeColor": "mustard"
  },
  {
    "src": "/lunch/IMG-20251007-WA0005.jpg",
    "filename": "IMG-20251007-WA0005.jpg",
    "folder": "lunch",
    "category": "lunch",
    "caption": "Lunch #6",
    "subcaption": "Lunch \u2022 Snapshot 6",
    "rotation": 2.4,
    "tapeColor": "dusty-blue"
  },
  {
    "src": "/lunch/IMG-20260123-WA0004.jpg",
    "filename": "IMG-20260123-WA0004.jpg",
    "folder": "lunch",
    "category": "lunch",
    "caption": "Lunch #7",
    "subcaption": "Lunch \u2022 Snapshot 7",
    "rotation": 3.6,
    "tapeColor": "terracotta"
  },
  {
    "src": "/lunch/IMG-20260503-WA0064.jpg",
    "filename": "IMG-20260503-WA0064.jpg",
    "folder": "lunch",
    "category": "lunch",
    "caption": "Lunch #8",
    "subcaption": "Lunch \u2022 Snapshot 8",
    "rotation": -3.6,
    "tapeColor": "sage"
  },
  {
    "src": "/lunch/IMG-20260627-WA0221.jpg",
    "filename": "IMG-20260627-WA0221.jpg",
    "folder": "lunch",
    "category": "lunch",
    "caption": "Lunch #9",
    "subcaption": "Lunch \u2022 Snapshot 9",
    "rotation": -2.4,
    "tapeColor": "mustard"
  },
  {
    "src": "/lunch/IMG-20260627-WA0223.jpg",
    "filename": "IMG-20260627-WA0223.jpg",
    "folder": "lunch",
    "category": "lunch",
    "caption": "Lunch #10",
    "subcaption": "Lunch \u2022 Snapshot 10",
    "rotation": -1.2,
    "tapeColor": "dusty-blue"
  },
  {
    "src": "/lunch/IMG-20260717-WA0042.jpg",
    "filename": "IMG-20260717-WA0042.jpg",
    "folder": "lunch",
    "category": "lunch",
    "caption": "Lunch #11",
    "subcaption": "Lunch \u2022 Snapshot 11",
    "rotation": 0.0,
    "tapeColor": "terracotta"
  },
  {
    "src": "/lunch/IMG-20260717-WA0046.jpg",
    "filename": "IMG-20260717-WA0046.jpg",
    "folder": "lunch",
    "category": "lunch",
    "caption": "Lunch #12",
    "subcaption": "Lunch \u2022 Snapshot 12",
    "rotation": 1.2,
    "tapeColor": "sage"
  },
  {
    "src": "/lunch/IMG-20260822-WA0189.jpg",
    "filename": "IMG-20260822-WA0189.jpg",
    "folder": "lunch",
    "category": "lunch",
    "caption": "Lunch #13",
    "subcaption": "Lunch \u2022 Snapshot 13",
    "rotation": 2.4,
    "tapeColor": "mustard"
  },
  {
    "src": "/lunch/IMG-20260822-WA0233.jpg",
    "filename": "IMG-20260822-WA0233.jpg",
    "folder": "lunch",
    "category": "lunch",
    "caption": "Lunch #14",
    "subcaption": "Lunch \u2022 Snapshot 14",
    "rotation": 3.6,
    "tapeColor": "dusty-blue"
  },
  {
    "src": "/lunch/IMG-20261002-WA0406.jpg",
    "filename": "IMG-20261002-WA0406.jpg",
    "folder": "lunch",
    "category": "lunch",
    "caption": "Lunch #15",
    "subcaption": "Lunch \u2022 Snapshot 15",
    "rotation": -3.6,
    "tapeColor": "terracotta"
  },
  {
    "src": "/lunch/IMG-20261007-WA0126.jpg",
    "filename": "IMG-20261007-WA0126.jpg",
    "folder": "lunch",
    "category": "lunch",
    "caption": "Lunch #16",
    "subcaption": "Lunch \u2022 Snapshot 16",
    "rotation": -2.4,
    "tapeColor": "sage"
  },
  {
    "src": "/lunch/IMG-20261016-WA0051.jpg",
    "filename": "IMG-20261016-WA0051.jpg",
    "folder": "lunch",
    "category": "lunch",
    "caption": "Lunch #17",
    "subcaption": "Lunch \u2022 Snapshot 17",
    "rotation": -1.2,
    "tapeColor": "mustard"
  },
  {
    "src": "/lunch/IMG_20250104_095152447.jpg",
    "filename": "IMG_20250104_095152447.jpg",
    "folder": "lunch",
    "category": "lunch",
    "caption": "Lunch #18",
    "subcaption": "Lunch \u2022 Memory 18",
    "rotation": 0.0,
    "tapeColor": "dusty-blue"
  },
  {
    "src": "/lunch/IMG_20250918_132113834.jpg",
    "filename": "IMG_20250918_132113834.jpg",
    "folder": "lunch",
    "category": "lunch",
    "caption": "Lunch #19",
    "subcaption": "Lunch \u2022 Memory 19",
    "rotation": 1.2,
    "tapeColor": "terracotta"
  },
  {
    "src": "/lunch/IMG_20260220_132922747.jpg",
    "filename": "IMG_20260220_132922747.jpg",
    "folder": "lunch",
    "category": "lunch",
    "caption": "Lunch #20",
    "subcaption": "Lunch \u2022 Memory 20",
    "rotation": 2.4,
    "tapeColor": "sage"
  },
  {
    "src": "/outings/DSC_3379-1.JPG",
    "filename": "DSC_3379-1.JPG",
    "folder": "outings",
    "category": "outings",
    "caption": "Outings #1",
    "subcaption": "Outings \u2022 Memory 1",
    "rotation": -3.6,
    "tapeColor": "mustard"
  },
  {
    "src": "/outings/IMG-20241109-WA0020.jpg",
    "filename": "IMG-20241109-WA0020.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outings #2",
    "subcaption": "Outings \u2022 Snapshot 2",
    "rotation": -2.4,
    "tapeColor": "dusty-blue"
  },
  {
    "src": "/outings/IMG-20241109-WA0064.jpg",
    "filename": "IMG-20241109-WA0064.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outings #3",
    "subcaption": "Outings \u2022 Snapshot 3",
    "rotation": -1.2,
    "tapeColor": "terracotta"
  },
  {
    "src": "/outings/IMG-20241109-WA0161.jpg",
    "filename": "IMG-20241109-WA0161.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outings #4",
    "subcaption": "Outings \u2022 Snapshot 4",
    "rotation": 0.0,
    "tapeColor": "sage"
  },
  {
    "src": "/outings/IMG-20241109-WA0167.jpg",
    "filename": "IMG-20241109-WA0167.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outings #5",
    "subcaption": "Outings \u2022 Snapshot 5",
    "rotation": 1.2,
    "tapeColor": "mustard"
  },
  {
    "src": "/outings/IMG-20250201-WA0005.jpg",
    "filename": "IMG-20250201-WA0005.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outings #6",
    "subcaption": "Outings \u2022 Snapshot 6",
    "rotation": 2.4,
    "tapeColor": "dusty-blue"
  },
  {
    "src": "/outings/IMG-20250205-WA0035.jpg",
    "filename": "IMG-20250205-WA0035.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outings #7",
    "subcaption": "Outings \u2022 Snapshot 7",
    "rotation": 3.6,
    "tapeColor": "terracotta"
  },
  {
    "src": "/outings/IMG-20250301-WA0010.jpg",
    "filename": "IMG-20250301-WA0010.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outings #8",
    "subcaption": "Outings \u2022 Snapshot 8",
    "rotation": -3.6,
    "tapeColor": "sage"
  },
  {
    "src": "/outings/IMG-20250311-WA0028.jpg",
    "filename": "IMG-20250311-WA0028.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outings #9",
    "subcaption": "Outings \u2022 Snapshot 9",
    "rotation": -2.4,
    "tapeColor": "mustard"
  },
  {
    "src": "/outings/IMG-20250613-WA0034.jpg",
    "filename": "IMG-20250613-WA0034.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outings #10",
    "subcaption": "Outings \u2022 Snapshot 10",
    "rotation": -1.2,
    "tapeColor": "dusty-blue"
  },
  {
    "src": "/outings/IMG-20250620-WA0073.jpg",
    "filename": "IMG-20250620-WA0073.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outings #11",
    "subcaption": "Outings \u2022 Snapshot 11",
    "rotation": 0.0,
    "tapeColor": "terracotta"
  },
  {
    "src": "/outings/IMG-20250718-WA0083.jpg",
    "filename": "IMG-20250718-WA0083.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outings #12",
    "subcaption": "Outings \u2022 Snapshot 12",
    "rotation": 1.2,
    "tapeColor": "sage"
  },
  {
    "src": "/outings/IMG-20250802-WA0029.jpg",
    "filename": "IMG-20250802-WA0029.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outings #13",
    "subcaption": "Outings \u2022 Snapshot 13",
    "rotation": 2.4,
    "tapeColor": "mustard"
  },
  {
    "src": "/outings/IMG-20250803-WA0300.jpg",
    "filename": "IMG-20250803-WA0300.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outings #14",
    "subcaption": "Outings \u2022 Snapshot 14",
    "rotation": 3.6,
    "tapeColor": "dusty-blue"
  },
  {
    "src": "/outings/IMG-20251020-WA0246.jpg",
    "filename": "IMG-20251020-WA0246.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outings #15",
    "subcaption": "Outings \u2022 Snapshot 15",
    "rotation": -3.6,
    "tapeColor": "terracotta"
  },
  {
    "src": "/outings/IMG-20251022-WA0123.jpg",
    "filename": "IMG-20251022-WA0123.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outings #16",
    "subcaption": "Outings \u2022 Snapshot 16",
    "rotation": -2.4,
    "tapeColor": "sage"
  },
  {
    "src": "/outings/IMG-20260111-WA0493.jpg",
    "filename": "IMG-20260111-WA0493.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outings #17",
    "subcaption": "Outings \u2022 Snapshot 17",
    "rotation": -1.2,
    "tapeColor": "mustard"
  },
  {
    "src": "/outings/IMG-20260111-WA0748.jpg",
    "filename": "IMG-20260111-WA0748.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outings #18",
    "subcaption": "Outings \u2022 Snapshot 18",
    "rotation": 0.0,
    "tapeColor": "dusty-blue"
  },
  {
    "src": "/outings/IMG-20260111-WA0807.jpg",
    "filename": "IMG-20260111-WA0807.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outings #19",
    "subcaption": "Outings \u2022 Snapshot 19",
    "rotation": 1.2,
    "tapeColor": "terracotta"
  },
  {
    "src": "/outings/IMG-20260113-WA0014.jpg",
    "filename": "IMG-20260113-WA0014.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outings #20",
    "subcaption": "Outings \u2022 Snapshot 20",
    "rotation": 2.4,
    "tapeColor": "sage"
  },
  {
    "src": "/outings/IMG-20260113-WA0028.jpg",
    "filename": "IMG-20260113-WA0028.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outings #21",
    "subcaption": "Outings \u2022 Snapshot 21",
    "rotation": 3.6,
    "tapeColor": "mustard"
  },
  {
    "src": "/outings/IMG-20260113-WA0038.jpg",
    "filename": "IMG-20260113-WA0038.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outings #22",
    "subcaption": "Outings \u2022 Snapshot 22",
    "rotation": -3.6,
    "tapeColor": "dusty-blue"
  },
  {
    "src": "/outings/IMG-20260118-WA0059.jpg",
    "filename": "IMG-20260118-WA0059.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outings #23",
    "subcaption": "Outings \u2022 Snapshot 23",
    "rotation": -2.4,
    "tapeColor": "terracotta"
  },
  {
    "src": "/outings/IMG-20260304-WA0075.jpg",
    "filename": "IMG-20260304-WA0075.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outings #24",
    "subcaption": "Outings \u2022 Snapshot 24",
    "rotation": -1.2,
    "tapeColor": "sage"
  },
  {
    "src": "/outings/IMG-20260304-WA0109.jpg",
    "filename": "IMG-20260304-WA0109.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outings #25",
    "subcaption": "Outings \u2022 Snapshot 25",
    "rotation": 0.0,
    "tapeColor": "mustard"
  },
  {
    "src": "/outings/IMG-20260309-WA0022.jpg",
    "filename": "IMG-20260309-WA0022.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outings #26",
    "subcaption": "Outings \u2022 Snapshot 26",
    "rotation": 1.2,
    "tapeColor": "dusty-blue"
  },
  {
    "src": "/outings/IMG-20260503-WA0070.jpg",
    "filename": "IMG-20260503-WA0070.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outings #27",
    "subcaption": "Outings \u2022 Snapshot 27",
    "rotation": 2.4,
    "tapeColor": "terracotta"
  },
  {
    "src": "/outings/IMG-20260627-WA0203.jpg",
    "filename": "IMG-20260627-WA0203.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outings #28",
    "subcaption": "Outings \u2022 Snapshot 28",
    "rotation": 3.6,
    "tapeColor": "sage"
  },
  {
    "src": "/outings/IMG-20260712-WA0373.jpg",
    "filename": "IMG-20260712-WA0373.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outings #29",
    "subcaption": "Outings \u2022 Snapshot 29",
    "rotation": -3.6,
    "tapeColor": "mustard"
  },
  {
    "src": "/outings/IMG-20260712-WA0702.jpg",
    "filename": "IMG-20260712-WA0702.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outings #30",
    "subcaption": "Outings \u2022 Snapshot 30",
    "rotation": -2.4,
    "tapeColor": "dusty-blue"
  },
  {
    "src": "/outings/IMG-20260717-WA0032.jpg",
    "filename": "IMG-20260717-WA0032.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outings #31",
    "subcaption": "Outings \u2022 Snapshot 31",
    "rotation": -1.2,
    "tapeColor": "terracotta"
  },
  {
    "src": "/outings/IMG-20260717-WA0046.jpg",
    "filename": "IMG-20260717-WA0046.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outings #32",
    "subcaption": "Outings \u2022 Snapshot 32",
    "rotation": 0.0,
    "tapeColor": "sage"
  },
  {
    "src": "/outings/IMG-20260803-WA0096.jpg",
    "filename": "IMG-20260803-WA0096.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outings #33",
    "subcaption": "Outings \u2022 Snapshot 33",
    "rotation": 1.2,
    "tapeColor": "mustard"
  },
  {
    "src": "/outings/IMG-20260915-WA1625.jpg",
    "filename": "IMG-20260915-WA1625.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outings #34",
    "subcaption": "Outings \u2022 Snapshot 34",
    "rotation": 2.4,
    "tapeColor": "dusty-blue"
  },
  {
    "src": "/outings/IMG-20260915-WA1794.jpg",
    "filename": "IMG-20260915-WA1794.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outings #35",
    "subcaption": "Outings \u2022 Snapshot 35",
    "rotation": 3.6,
    "tapeColor": "terracotta"
  },
  {
    "src": "/outings/IMG-20261002-WA0378.jpg",
    "filename": "IMG-20261002-WA0378.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outings #36",
    "subcaption": "Outings \u2022 Snapshot 36",
    "rotation": -3.6,
    "tapeColor": "sage"
  },
  {
    "src": "/outings/IMG-20261002-WA0448.jpg",
    "filename": "IMG-20261002-WA0448.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outings #37",
    "subcaption": "Outings \u2022 Snapshot 37",
    "rotation": -2.4,
    "tapeColor": "mustard"
  },
  {
    "src": "/outings/IMG-20261002-WA0600.jpg",
    "filename": "IMG-20261002-WA0600.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outings #38",
    "subcaption": "Outings \u2022 Snapshot 38",
    "rotation": -1.2,
    "tapeColor": "dusty-blue"
  },
  {
    "src": "/outings/IMG-20261007-WA0062.jpg",
    "filename": "IMG-20261007-WA0062.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outings #39",
    "subcaption": "Outings \u2022 Snapshot 39",
    "rotation": 0.0,
    "tapeColor": "terracotta"
  },
  {
    "src": "/outings/IMG-20261029-WA0054.jpg",
    "filename": "IMG-20261029-WA0054.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outings #40",
    "subcaption": "Outings \u2022 Snapshot 40",
    "rotation": 1.2,
    "tapeColor": "sage"
  },
  {
    "src": "/outings/IMG-20261102-WA0018.jpg",
    "filename": "IMG-20261102-WA0018.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outings #41",
    "subcaption": "Outings \u2022 Snapshot 41",
    "rotation": 2.4,
    "tapeColor": "mustard"
  },
  {
    "src": "/outings/IMG20260926141852.jpg",
    "filename": "IMG20260926141852.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outings #42",
    "subcaption": "Outings \u2022 Memory 42",
    "rotation": 3.6,
    "tapeColor": "dusty-blue"
  },
  {
    "src": "/outings/IMG_20241101_173128.jpg",
    "filename": "IMG_20241101_173128.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outings #43",
    "subcaption": "Outings \u2022 Memory 43",
    "rotation": -3.6,
    "tapeColor": "terracotta"
  },
  {
    "src": "/outings/IMG_20250111_165912299.jpg",
    "filename": "IMG_20250111_165912299.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outings #44",
    "subcaption": "Outings \u2022 Memory 44",
    "rotation": -2.4,
    "tapeColor": "sage"
  },
  {
    "src": "/outings/IMG_20250111_172143.jpg",
    "filename": "IMG_20250111_172143.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outings #45",
    "subcaption": "Outings \u2022 Memory 45",
    "rotation": -1.2,
    "tapeColor": "mustard"
  },
  {
    "src": "/outings/IMG_20250112_185850657.jpg",
    "filename": "IMG_20250112_185850657.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outings #46",
    "subcaption": "Outings \u2022 Memory 46",
    "rotation": 0.0,
    "tapeColor": "dusty-blue"
  },
  {
    "src": "/outings/IMG_20250112_231121729.jpg",
    "filename": "IMG_20250112_231121729.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outings #47",
    "subcaption": "Outings \u2022 Memory 47",
    "rotation": 1.2,
    "tapeColor": "terracotta"
  },
  {
    "src": "/outings/IMG_20250129_231905196.jpg",
    "filename": "IMG_20250129_231905196.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outings #48",
    "subcaption": "Outings \u2022 Memory 48",
    "rotation": 2.4,
    "tapeColor": "sage"
  },
  {
    "src": "/outings/IMG_20250301_215808982.jpg",
    "filename": "IMG_20250301_215808982.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outings #49",
    "subcaption": "Outings \u2022 Memory 49",
    "rotation": 3.6,
    "tapeColor": "mustard"
  },
  {
    "src": "/outings/IMG_20250322_214433.jpg",
    "filename": "IMG_20250322_214433.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outings #50",
    "subcaption": "Outings \u2022 Memory 50",
    "rotation": -3.6,
    "tapeColor": "dusty-blue"
  },
  {
    "src": "/outings/IMG_20250613_192657998.jpg",
    "filename": "IMG_20250613_192657998.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outings #51",
    "subcaption": "Outings \u2022 Memory 51",
    "rotation": -2.4,
    "tapeColor": "terracotta"
  },
  {
    "src": "/outings/IMG_20250613_202121876.jpg",
    "filename": "IMG_20250613_202121876.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outings #52",
    "subcaption": "Outings \u2022 Memory 52",
    "rotation": -1.2,
    "tapeColor": "sage"
  },
  {
    "src": "/outings/IMG_20250613_202852082.jpg",
    "filename": "IMG_20250613_202852082.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outings #53",
    "subcaption": "Outings \u2022 Memory 53",
    "rotation": 0.0,
    "tapeColor": "mustard"
  },
  {
    "src": "/outings/IMG_20260110_152308893.jpg",
    "filename": "IMG_20260110_152308893.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outings #54",
    "subcaption": "Outings \u2022 Memory 54",
    "rotation": 1.2,
    "tapeColor": "dusty-blue"
  },
  {
    "src": "/outings/IMG_20260308_221348084.jpg",
    "filename": "IMG_20260308_221348084.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outings #55",
    "subcaption": "Outings \u2022 Memory 55",
    "rotation": 2.4,
    "tapeColor": "terracotta"
  },
  {
    "src": "/tea%20breaks/IMG-20260109-WA0004.jpg",
    "filename": "IMG-20260109-WA0004.jpg",
    "folder": "tea breaks",
    "category": "tea breaks",
    "caption": "Tea Breaks #1",
    "subcaption": "Tea Breaks \u2022 Snapshot 1",
    "rotation": -3.6,
    "tapeColor": "mustard"
  },
  {
    "src": "/tea%20breaks/IMG-20260128-WA0008.jpg",
    "filename": "IMG-20260128-WA0008.jpg",
    "folder": "tea breaks",
    "category": "tea breaks",
    "caption": "Tea Breaks #2",
    "subcaption": "Tea Breaks \u2022 Snapshot 2",
    "rotation": -2.4,
    "tapeColor": "dusty-blue"
  },
  {
    "src": "/tea%20breaks/IMG-20260603-WA0033.jpg",
    "filename": "IMG-20260603-WA0033.jpg",
    "folder": "tea breaks",
    "category": "tea breaks",
    "caption": "Tea Breaks #3",
    "subcaption": "Tea Breaks \u2022 Snapshot 3",
    "rotation": -1.2,
    "tapeColor": "terracotta"
  },
  {
    "src": "/tea%20breaks/IMG-20260814-WA0031.jpg",
    "filename": "IMG-20260814-WA0031.jpg",
    "folder": "tea breaks",
    "category": "tea breaks",
    "caption": "Tea Breaks #4",
    "subcaption": "Tea Breaks \u2022 Snapshot 4",
    "rotation": 0.0,
    "tapeColor": "sage"
  },
  {
    "src": "/tea%20breaks/IMG-20261016-WA0106.jpg",
    "filename": "IMG-20261016-WA0106.jpg",
    "folder": "tea breaks",
    "category": "tea breaks",
    "caption": "Tea Breaks #5",
    "subcaption": "Tea Breaks \u2022 Snapshot 5",
    "rotation": 1.2,
    "tapeColor": "mustard"
  },
  {
    "src": "/tea%20breaks/IMG-20261116-WA0165.jpg",
    "filename": "IMG-20261116-WA0165.jpg",
    "folder": "tea breaks",
    "category": "tea breaks",
    "caption": "Tea Breaks #6",
    "subcaption": "Tea Breaks \u2022 Snapshot 6",
    "rotation": 2.4,
    "tapeColor": "dusty-blue"
  },
  {
    "src": "/tea%20breaks/IMG_20260508_172640076.jpg",
    "filename": "IMG_20260508_172640076.jpg",
    "folder": "tea breaks",
    "category": "tea breaks",
    "caption": "Tea Breaks #7",
    "subcaption": "Tea Breaks \u2022 Memory 7",
    "rotation": 3.6,
    "tapeColor": "terracotta"
  },
  {
    "src": "/tea%20breaks/IMG_20260526_171343471.jpg",
    "filename": "IMG_20260526_171343471.jpg",
    "folder": "tea breaks",
    "category": "tea breaks",
    "caption": "Tea Breaks #8",
    "subcaption": "Tea Breaks \u2022 Memory 8",
    "rotation": -3.6,
    "tapeColor": "sage"
  },
  {
    "src": "/tea%20breaks/IMG_20260605_171833822.jpg",
    "filename": "IMG_20260605_171833822.jpg",
    "folder": "tea breaks",
    "category": "tea breaks",
    "caption": "Tea Breaks #9",
    "subcaption": "Tea Breaks \u2022 Memory 9",
    "rotation": -2.4,
    "tapeColor": "mustard"
  },
  {
    "src": "/tea%20breaks/IMG_20261107_165743484.jpg",
    "filename": "IMG_20261107_165743484.jpg",
    "folder": "tea breaks",
    "category": "tea breaks",
    "caption": "Tea Breaks #10",
    "subcaption": "Tea Breaks \u2022 Memory 10",
    "rotation": -1.2,
    "tapeColor": "dusty-blue"
  },
  {
    "src": "/tea%20breaks/PhotonCamera_20260907_173935.Yellow.jpg",
    "filename": "PhotonCamera_20260907_173935.Yellow.jpg",
    "folder": "tea breaks",
    "category": "tea breaks",
    "caption": "Tea Breaks #11",
    "subcaption": "Tea Breaks \u2022 Memory 11",
    "rotation": 0.0,
    "tapeColor": "terracotta"
  }
];

export const ALBUMS_BY_FOLDER: Record<string, AlbumPhoto[]> = {
  "bachelorette": [
    {
      "src": "/bachelorette/IMG-20261115-WA0040.jpg",
      "filename": "IMG-20261115-WA0040.jpg",
      "folder": "bachelorette",
      "category": "bachelorette",
      "caption": "Bachelorette #1",
      "subcaption": "Bachelorette \u2022 Snapshot 1",
      "rotation": -3.6,
      "tapeColor": "mustard"
    },
    {
      "src": "/bachelorette/IMG-20261115-WA0131.jpg",
      "filename": "IMG-20261115-WA0131.jpg",
      "folder": "bachelorette",
      "category": "bachelorette",
      "caption": "Bachelorette #2",
      "subcaption": "Bachelorette \u2022 Snapshot 2",
      "rotation": -2.4,
      "tapeColor": "dusty-blue"
    },
    {
      "src": "/bachelorette/IMG-20261115-WA0172.jpg",
      "filename": "IMG-20261115-WA0172.jpg",
      "folder": "bachelorette",
      "category": "bachelorette",
      "caption": "Bachelorette #3",
      "subcaption": "Bachelorette \u2022 Snapshot 3",
      "rotation": -1.2,
      "tapeColor": "terracotta"
    },
    {
      "src": "/bachelorette/IMG-20261115-WA0455.jpg",
      "filename": "IMG-20261115-WA0455.jpg",
      "folder": "bachelorette",
      "category": "bachelorette",
      "caption": "Bachelorette #4",
      "subcaption": "Bachelorette \u2022 Snapshot 4",
      "rotation": 0.0,
      "tapeColor": "sage"
    },
    {
      "src": "/bachelorette/IMG-20261115-WA0498.jpg",
      "filename": "IMG-20261115-WA0498.jpg",
      "folder": "bachelorette",
      "category": "bachelorette",
      "caption": "Bachelorette #5",
      "subcaption": "Bachelorette \u2022 Snapshot 5",
      "rotation": 1.2,
      "tapeColor": "mustard"
    },
    {
      "src": "/bachelorette/IMG-20261115-WA0607.jpg",
      "filename": "IMG-20261115-WA0607.jpg",
      "folder": "bachelorette",
      "category": "bachelorette",
      "caption": "Bachelorette #6",
      "subcaption": "Bachelorette \u2022 Snapshot 6",
      "rotation": 2.4,
      "tapeColor": "dusty-blue"
    },
    {
      "src": "/bachelorette/IMG-20261115-WA0837.jpg",
      "filename": "IMG-20261115-WA0837.jpg",
      "folder": "bachelorette",
      "category": "bachelorette",
      "caption": "Bachelorette #7",
      "subcaption": "Bachelorette \u2022 Snapshot 7",
      "rotation": 3.6,
      "tapeColor": "terracotta"
    },
    {
      "src": "/bachelorette/IMG-20261115-WA0846.jpg",
      "filename": "IMG-20261115-WA0846.jpg",
      "folder": "bachelorette",
      "category": "bachelorette",
      "caption": "Bachelorette #8",
      "subcaption": "Bachelorette \u2022 Snapshot 8",
      "rotation": -3.6,
      "tapeColor": "sage"
    },
    {
      "src": "/bachelorette/IMG-20261115-WA1167.jpg",
      "filename": "IMG-20261115-WA1167.jpg",
      "folder": "bachelorette",
      "category": "bachelorette",
      "caption": "Bachelorette #9",
      "subcaption": "Bachelorette \u2022 Snapshot 9",
      "rotation": -2.4,
      "tapeColor": "mustard"
    },
    {
      "src": "/bachelorette/IMG-20261115-WA1321.jpg",
      "filename": "IMG-20261115-WA1321.jpg",
      "folder": "bachelorette",
      "category": "bachelorette",
      "caption": "Bachelorette #10",
      "subcaption": "Bachelorette \u2022 Snapshot 10",
      "rotation": -1.2,
      "tapeColor": "dusty-blue"
    },
    {
      "src": "/bachelorette/IMG-20261115-WA1512.jpg",
      "filename": "IMG-20261115-WA1512.jpg",
      "folder": "bachelorette",
      "category": "bachelorette",
      "caption": "Bachelorette #11",
      "subcaption": "Bachelorette \u2022 Snapshot 11",
      "rotation": 0.0,
      "tapeColor": "terracotta"
    },
    {
      "src": "/bachelorette/IMG-20261115-WA1594.jpg",
      "filename": "IMG-20261115-WA1594.jpg",
      "folder": "bachelorette",
      "category": "bachelorette",
      "caption": "Bachelorette #12",
      "subcaption": "Bachelorette \u2022 Snapshot 12",
      "rotation": 1.2,
      "tapeColor": "sage"
    },
    {
      "src": "/bachelorette/IMG-20261115-WA1667.jpg",
      "filename": "IMG-20261115-WA1667.jpg",
      "folder": "bachelorette",
      "category": "bachelorette",
      "caption": "Bachelorette #13",
      "subcaption": "Bachelorette \u2022 Snapshot 13",
      "rotation": 2.4,
      "tapeColor": "mustard"
    },
    {
      "src": "/bachelorette/IMG-20261115-WA1705.jpg",
      "filename": "IMG-20261115-WA1705.jpg",
      "folder": "bachelorette",
      "category": "bachelorette",
      "caption": "Bachelorette #14",
      "subcaption": "Bachelorette \u2022 Snapshot 14",
      "rotation": 3.6,
      "tapeColor": "dusty-blue"
    },
    {
      "src": "/bachelorette/IMG-20261115-WA1717.jpg",
      "filename": "IMG-20261115-WA1717.jpg",
      "folder": "bachelorette",
      "category": "bachelorette",
      "caption": "Bachelorette #15",
      "subcaption": "Bachelorette \u2022 Snapshot 15",
      "rotation": -3.6,
      "tapeColor": "terracotta"
    },
    {
      "src": "/bachelorette/IMG-20261115-WA1727.jpg",
      "filename": "IMG-20261115-WA1727.jpg",
      "folder": "bachelorette",
      "category": "bachelorette",
      "caption": "Bachelorette #16",
      "subcaption": "Bachelorette \u2022 Snapshot 16",
      "rotation": -2.4,
      "tapeColor": "sage"
    },
    {
      "src": "/bachelorette/IMG-20261116-WA0002.jpg",
      "filename": "IMG-20261116-WA0002.jpg",
      "folder": "bachelorette",
      "category": "bachelorette",
      "caption": "Bachelorette #17",
      "subcaption": "Bachelorette \u2022 Snapshot 17",
      "rotation": -1.2,
      "tapeColor": "mustard"
    },
    {
      "src": "/bachelorette/IMG_20261114_192152888.jpg",
      "filename": "IMG_20261114_192152888.jpg",
      "folder": "bachelorette",
      "category": "bachelorette",
      "caption": "Bachelorette #18",
      "subcaption": "Bachelorette \u2022 Memory 18",
      "rotation": 0.0,
      "tapeColor": "dusty-blue"
    },
    {
      "src": "/bachelorette/IMG_20261115_091828014.jpg",
      "filename": "IMG_20261115_091828014.jpg",
      "folder": "bachelorette",
      "category": "bachelorette",
      "caption": "Bachelorette #19",
      "subcaption": "Bachelorette \u2022 Memory 19",
      "rotation": 1.2,
      "tapeColor": "terracotta"
    }
  ],
  "bday celebrations": [
    {
      "src": "/bday%20celebrations/IMG-20260611-WA0070.jpg",
      "filename": "IMG-20260611-WA0070.jpg",
      "folder": "bday celebrations",
      "category": "bday celebrations",
      "caption": "Birthday Celebrations #1",
      "subcaption": "Birthday Celebrations \u2022 Snapshot 1",
      "rotation": -3.6,
      "tapeColor": "mustard"
    },
    {
      "src": "/bday%20celebrations/IMG-20260619-WA0065.jpg",
      "filename": "IMG-20260619-WA0065.jpg",
      "folder": "bday celebrations",
      "category": "bday celebrations",
      "caption": "Birthday Celebrations #2",
      "subcaption": "Birthday Celebrations \u2022 Snapshot 2",
      "rotation": -2.4,
      "tapeColor": "dusty-blue"
    },
    {
      "src": "/bday%20celebrations/IMG-20260625-WA0018.jpg",
      "filename": "IMG-20260625-WA0018.jpg",
      "folder": "bday celebrations",
      "category": "bday celebrations",
      "caption": "Birthday Celebrations #3",
      "subcaption": "Birthday Celebrations \u2022 Snapshot 3",
      "rotation": -1.2,
      "tapeColor": "terracotta"
    },
    {
      "src": "/bday%20celebrations/IMG-20260625-WA0031.jpg",
      "filename": "IMG-20260625-WA0031.jpg",
      "folder": "bday celebrations",
      "category": "bday celebrations",
      "caption": "Birthday Celebrations #4",
      "subcaption": "Birthday Celebrations \u2022 Snapshot 4",
      "rotation": 0.0,
      "tapeColor": "sage"
    },
    {
      "src": "/bday%20celebrations/IMG-20260827-WA0025.jpg",
      "filename": "IMG-20260827-WA0025.jpg",
      "folder": "bday celebrations",
      "category": "bday celebrations",
      "caption": "Birthday Celebrations #5",
      "subcaption": "Birthday Celebrations \u2022 Snapshot 5",
      "rotation": 1.2,
      "tapeColor": "mustard"
    },
    {
      "src": "/bday%20celebrations/IMG-20260827-WA0027.jpg",
      "filename": "IMG-20260827-WA0027.jpg",
      "folder": "bday celebrations",
      "category": "bday celebrations",
      "caption": "Birthday Celebrations #6",
      "subcaption": "Birthday Celebrations \u2022 Snapshot 6",
      "rotation": 2.4,
      "tapeColor": "dusty-blue"
    },
    {
      "src": "/bday%20celebrations/IMG-20260924-WA0047.jpg",
      "filename": "IMG-20260924-WA0047.jpg",
      "folder": "bday celebrations",
      "category": "bday celebrations",
      "caption": "Birthday Celebrations #7",
      "subcaption": "Birthday Celebrations \u2022 Snapshot 7",
      "rotation": 3.6,
      "tapeColor": "terracotta"
    },
    {
      "src": "/bday%20celebrations/IMG-20260924-WA0050.jpg",
      "filename": "IMG-20260924-WA0050.jpg",
      "folder": "bday celebrations",
      "category": "bday celebrations",
      "caption": "Birthday Celebrations #8",
      "subcaption": "Birthday Celebrations \u2022 Snapshot 8",
      "rotation": -3.6,
      "tapeColor": "sage"
    },
    {
      "src": "/bday%20celebrations/IMG-20261007-WA0031.jpg",
      "filename": "IMG-20261007-WA0031.jpg",
      "folder": "bday celebrations",
      "category": "bday celebrations",
      "caption": "Birthday Celebrations #9",
      "subcaption": "Birthday Celebrations \u2022 Snapshot 9",
      "rotation": -2.4,
      "tapeColor": "mustard"
    },
    {
      "src": "/bday%20celebrations/IMG-20261009-WA0066.jpg",
      "filename": "IMG-20261009-WA0066.jpg",
      "folder": "bday celebrations",
      "category": "bday celebrations",
      "caption": "Birthday Celebrations #10",
      "subcaption": "Birthday Celebrations \u2022 Snapshot 10",
      "rotation": -1.2,
      "tapeColor": "dusty-blue"
    },
    {
      "src": "/bday%20celebrations/IMG-20261009-WA0092.jpg",
      "filename": "IMG-20261009-WA0092.jpg",
      "folder": "bday celebrations",
      "category": "bday celebrations",
      "caption": "Birthday Celebrations #11",
      "subcaption": "Birthday Celebrations \u2022 Snapshot 11",
      "rotation": 0.0,
      "tapeColor": "terracotta"
    },
    {
      "src": "/bday%20celebrations/OLV_20260915161913.jpg",
      "filename": "OLV_20260915161913.jpg",
      "folder": "bday celebrations",
      "category": "bday celebrations",
      "caption": "Birthday Celebrations #12",
      "subcaption": "Birthday Celebrations \u2022 Memory 12",
      "rotation": 1.2,
      "tapeColor": "sage"
    }
  ],
  "elevator photos": [
    {
      "src": "/elevator%20photos/IMG-20260210-WA0037.jpg",
      "filename": "IMG-20260210-WA0037.jpg",
      "folder": "elevator photos",
      "category": "elevator photos",
      "caption": "Elevator Photos #1",
      "subcaption": "Elevator Photos \u2022 Snapshot 1",
      "rotation": -3.6,
      "tapeColor": "mustard"
    },
    {
      "src": "/elevator%20photos/IMG-20261016-WA0047.jpg",
      "filename": "IMG-20261016-WA0047.jpg",
      "folder": "elevator photos",
      "category": "elevator photos",
      "caption": "Elevator Photos #2",
      "subcaption": "Elevator Photos \u2022 Snapshot 2",
      "rotation": -2.4,
      "tapeColor": "dusty-blue"
    },
    {
      "src": "/elevator%20photos/IMG-20261016-WA0083.jpg",
      "filename": "IMG-20261016-WA0083.jpg",
      "folder": "elevator photos",
      "category": "elevator photos",
      "caption": "Elevator Photos #3",
      "subcaption": "Elevator Photos \u2022 Snapshot 3",
      "rotation": -1.2,
      "tapeColor": "terracotta"
    },
    {
      "src": "/elevator%20photos/IMG-20261107-WA0205.jpg",
      "filename": "IMG-20261107-WA0205.jpg",
      "folder": "elevator photos",
      "category": "elevator photos",
      "caption": "Elevator Photos #4",
      "subcaption": "Elevator Photos \u2022 Snapshot 4",
      "rotation": 0.0,
      "tapeColor": "sage"
    },
    {
      "src": "/elevator%20photos/IMG-20261107-WA0303.jpg",
      "filename": "IMG-20261107-WA0303.jpg",
      "folder": "elevator photos",
      "category": "elevator photos",
      "caption": "Elevator Photos #5",
      "subcaption": "Elevator Photos \u2022 Snapshot 5",
      "rotation": 1.2,
      "tapeColor": "mustard"
    }
  ],
  "lunch": [
    {
      "src": "/lunch/DSC_0071.JPG",
      "filename": "DSC_0071.JPG",
      "folder": "lunch",
      "category": "lunch",
      "caption": "Lunch #1",
      "subcaption": "Lunch \u2022 Memory 1",
      "rotation": -3.6,
      "tapeColor": "mustard"
    },
    {
      "src": "/lunch/IMG-20250311-WA0013.jpg",
      "filename": "IMG-20250311-WA0013.jpg",
      "folder": "lunch",
      "category": "lunch",
      "caption": "Lunch #2",
      "subcaption": "Lunch \u2022 Snapshot 2",
      "rotation": -2.4,
      "tapeColor": "dusty-blue"
    },
    {
      "src": "/lunch/IMG-20250402-WA0001.jpg",
      "filename": "IMG-20250402-WA0001.jpg",
      "folder": "lunch",
      "category": "lunch",
      "caption": "Lunch #3",
      "subcaption": "Lunch \u2022 Snapshot 3",
      "rotation": -1.2,
      "tapeColor": "terracotta"
    },
    {
      "src": "/lunch/IMG-20250630-WA0009.jpg",
      "filename": "IMG-20250630-WA0009.jpg",
      "folder": "lunch",
      "category": "lunch",
      "caption": "Lunch #4",
      "subcaption": "Lunch \u2022 Snapshot 4",
      "rotation": 0.0,
      "tapeColor": "sage"
    },
    {
      "src": "/lunch/IMG-20250912-WA0024.jpg",
      "filename": "IMG-20250912-WA0024.jpg",
      "folder": "lunch",
      "category": "lunch",
      "caption": "Lunch #5",
      "subcaption": "Lunch \u2022 Snapshot 5",
      "rotation": 1.2,
      "tapeColor": "mustard"
    },
    {
      "src": "/lunch/IMG-20251007-WA0005.jpg",
      "filename": "IMG-20251007-WA0005.jpg",
      "folder": "lunch",
      "category": "lunch",
      "caption": "Lunch #6",
      "subcaption": "Lunch \u2022 Snapshot 6",
      "rotation": 2.4,
      "tapeColor": "dusty-blue"
    },
    {
      "src": "/lunch/IMG-20260123-WA0004.jpg",
      "filename": "IMG-20260123-WA0004.jpg",
      "folder": "lunch",
      "category": "lunch",
      "caption": "Lunch #7",
      "subcaption": "Lunch \u2022 Snapshot 7",
      "rotation": 3.6,
      "tapeColor": "terracotta"
    },
    {
      "src": "/lunch/IMG-20260503-WA0064.jpg",
      "filename": "IMG-20260503-WA0064.jpg",
      "folder": "lunch",
      "category": "lunch",
      "caption": "Lunch #8",
      "subcaption": "Lunch \u2022 Snapshot 8",
      "rotation": -3.6,
      "tapeColor": "sage"
    },
    {
      "src": "/lunch/IMG-20260627-WA0221.jpg",
      "filename": "IMG-20260627-WA0221.jpg",
      "folder": "lunch",
      "category": "lunch",
      "caption": "Lunch #9",
      "subcaption": "Lunch \u2022 Snapshot 9",
      "rotation": -2.4,
      "tapeColor": "mustard"
    },
    {
      "src": "/lunch/IMG-20260627-WA0223.jpg",
      "filename": "IMG-20260627-WA0223.jpg",
      "folder": "lunch",
      "category": "lunch",
      "caption": "Lunch #10",
      "subcaption": "Lunch \u2022 Snapshot 10",
      "rotation": -1.2,
      "tapeColor": "dusty-blue"
    },
    {
      "src": "/lunch/IMG-20260717-WA0042.jpg",
      "filename": "IMG-20260717-WA0042.jpg",
      "folder": "lunch",
      "category": "lunch",
      "caption": "Lunch #11",
      "subcaption": "Lunch \u2022 Snapshot 11",
      "rotation": 0.0,
      "tapeColor": "terracotta"
    },
    {
      "src": "/lunch/IMG-20260717-WA0046.jpg",
      "filename": "IMG-20260717-WA0046.jpg",
      "folder": "lunch",
      "category": "lunch",
      "caption": "Lunch #12",
      "subcaption": "Lunch \u2022 Snapshot 12",
      "rotation": 1.2,
      "tapeColor": "sage"
    },
    {
      "src": "/lunch/IMG-20260822-WA0189.jpg",
      "filename": "IMG-20260822-WA0189.jpg",
      "folder": "lunch",
      "category": "lunch",
      "caption": "Lunch #13",
      "subcaption": "Lunch \u2022 Snapshot 13",
      "rotation": 2.4,
      "tapeColor": "mustard"
    },
    {
      "src": "/lunch/IMG-20260822-WA0233.jpg",
      "filename": "IMG-20260822-WA0233.jpg",
      "folder": "lunch",
      "category": "lunch",
      "caption": "Lunch #14",
      "subcaption": "Lunch \u2022 Snapshot 14",
      "rotation": 3.6,
      "tapeColor": "dusty-blue"
    },
    {
      "src": "/lunch/IMG-20261002-WA0406.jpg",
      "filename": "IMG-20261002-WA0406.jpg",
      "folder": "lunch",
      "category": "lunch",
      "caption": "Lunch #15",
      "subcaption": "Lunch \u2022 Snapshot 15",
      "rotation": -3.6,
      "tapeColor": "terracotta"
    },
    {
      "src": "/lunch/IMG-20261007-WA0126.jpg",
      "filename": "IMG-20261007-WA0126.jpg",
      "folder": "lunch",
      "category": "lunch",
      "caption": "Lunch #16",
      "subcaption": "Lunch \u2022 Snapshot 16",
      "rotation": -2.4,
      "tapeColor": "sage"
    },
    {
      "src": "/lunch/IMG-20261016-WA0051.jpg",
      "filename": "IMG-20261016-WA0051.jpg",
      "folder": "lunch",
      "category": "lunch",
      "caption": "Lunch #17",
      "subcaption": "Lunch \u2022 Snapshot 17",
      "rotation": -1.2,
      "tapeColor": "mustard"
    },
    {
      "src": "/lunch/IMG_20250104_095152447.jpg",
      "filename": "IMG_20250104_095152447.jpg",
      "folder": "lunch",
      "category": "lunch",
      "caption": "Lunch #18",
      "subcaption": "Lunch \u2022 Memory 18",
      "rotation": 0.0,
      "tapeColor": "dusty-blue"
    },
    {
      "src": "/lunch/IMG_20250918_132113834.jpg",
      "filename": "IMG_20250918_132113834.jpg",
      "folder": "lunch",
      "category": "lunch",
      "caption": "Lunch #19",
      "subcaption": "Lunch \u2022 Memory 19",
      "rotation": 1.2,
      "tapeColor": "terracotta"
    },
    {
      "src": "/lunch/IMG_20260220_132922747.jpg",
      "filename": "IMG_20260220_132922747.jpg",
      "folder": "lunch",
      "category": "lunch",
      "caption": "Lunch #20",
      "subcaption": "Lunch \u2022 Memory 20",
      "rotation": 2.4,
      "tapeColor": "sage"
    }
  ],
  "outings": [
    {
      "src": "/outings/DSC_3379-1.JPG",
      "filename": "DSC_3379-1.JPG",
      "folder": "outings",
      "category": "outings",
      "caption": "Outings #1",
      "subcaption": "Outings \u2022 Memory 1",
      "rotation": -3.6,
      "tapeColor": "mustard"
    },
    {
      "src": "/outings/IMG-20241109-WA0020.jpg",
      "filename": "IMG-20241109-WA0020.jpg",
      "folder": "outings",
      "category": "outings",
      "caption": "Outings #2",
      "subcaption": "Outings \u2022 Snapshot 2",
      "rotation": -2.4,
      "tapeColor": "dusty-blue"
    },
    {
      "src": "/outings/IMG-20241109-WA0064.jpg",
      "filename": "IMG-20241109-WA0064.jpg",
      "folder": "outings",
      "category": "outings",
      "caption": "Outings #3",
      "subcaption": "Outings \u2022 Snapshot 3",
      "rotation": -1.2,
      "tapeColor": "terracotta"
    },
    {
      "src": "/outings/IMG-20241109-WA0161.jpg",
      "filename": "IMG-20241109-WA0161.jpg",
      "folder": "outings",
      "category": "outings",
      "caption": "Outings #4",
      "subcaption": "Outings \u2022 Snapshot 4",
      "rotation": 0.0,
      "tapeColor": "sage"
    },
    {
      "src": "/outings/IMG-20241109-WA0167.jpg",
      "filename": "IMG-20241109-WA0167.jpg",
      "folder": "outings",
      "category": "outings",
      "caption": "Outings #5",
      "subcaption": "Outings \u2022 Snapshot 5",
      "rotation": 1.2,
      "tapeColor": "mustard"
    },
    {
      "src": "/outings/IMG-20250201-WA0005.jpg",
      "filename": "IMG-20250201-WA0005.jpg",
      "folder": "outings",
      "category": "outings",
      "caption": "Outings #6",
      "subcaption": "Outings \u2022 Snapshot 6",
      "rotation": 2.4,
      "tapeColor": "dusty-blue"
    },
    {
      "src": "/outings/IMG-20250205-WA0035.jpg",
      "filename": "IMG-20250205-WA0035.jpg",
      "folder": "outings",
      "category": "outings",
      "caption": "Outings #7",
      "subcaption": "Outings \u2022 Snapshot 7",
      "rotation": 3.6,
      "tapeColor": "terracotta"
    },
    {
      "src": "/outings/IMG-20250301-WA0010.jpg",
      "filename": "IMG-20250301-WA0010.jpg",
      "folder": "outings",
      "category": "outings",
      "caption": "Outings #8",
      "subcaption": "Outings \u2022 Snapshot 8",
      "rotation": -3.6,
      "tapeColor": "sage"
    },
    {
      "src": "/outings/IMG-20250311-WA0028.jpg",
      "filename": "IMG-20250311-WA0028.jpg",
      "folder": "outings",
      "category": "outings",
      "caption": "Outings #9",
      "subcaption": "Outings \u2022 Snapshot 9",
      "rotation": -2.4,
      "tapeColor": "mustard"
    },
    {
      "src": "/outings/IMG-20250613-WA0034.jpg",
      "filename": "IMG-20250613-WA0034.jpg",
      "folder": "outings",
      "category": "outings",
      "caption": "Outings #10",
      "subcaption": "Outings \u2022 Snapshot 10",
      "rotation": -1.2,
      "tapeColor": "dusty-blue"
    },
    {
      "src": "/outings/IMG-20250620-WA0073.jpg",
      "filename": "IMG-20250620-WA0073.jpg",
      "folder": "outings",
      "category": "outings",
      "caption": "Outings #11",
      "subcaption": "Outings \u2022 Snapshot 11",
      "rotation": 0.0,
      "tapeColor": "terracotta"
    },
    {
      "src": "/outings/IMG-20250718-WA0083.jpg",
      "filename": "IMG-20250718-WA0083.jpg",
      "folder": "outings",
      "category": "outings",
      "caption": "Outings #12",
      "subcaption": "Outings \u2022 Snapshot 12",
      "rotation": 1.2,
      "tapeColor": "sage"
    },
    {
      "src": "/outings/IMG-20250802-WA0029.jpg",
      "filename": "IMG-20250802-WA0029.jpg",
      "folder": "outings",
      "category": "outings",
      "caption": "Outings #13",
      "subcaption": "Outings \u2022 Snapshot 13",
      "rotation": 2.4,
      "tapeColor": "mustard"
    },
    {
      "src": "/outings/IMG-20250803-WA0300.jpg",
      "filename": "IMG-20250803-WA0300.jpg",
      "folder": "outings",
      "category": "outings",
      "caption": "Outings #14",
      "subcaption": "Outings \u2022 Snapshot 14",
      "rotation": 3.6,
      "tapeColor": "dusty-blue"
    },
    {
      "src": "/outings/IMG-20251020-WA0246.jpg",
      "filename": "IMG-20251020-WA0246.jpg",
      "folder": "outings",
      "category": "outings",
      "caption": "Outings #15",
      "subcaption": "Outings \u2022 Snapshot 15",
      "rotation": -3.6,
      "tapeColor": "terracotta"
    },
    {
      "src": "/outings/IMG-20251022-WA0123.jpg",
      "filename": "IMG-20251022-WA0123.jpg",
      "folder": "outings",
      "category": "outings",
      "caption": "Outings #16",
      "subcaption": "Outings \u2022 Snapshot 16",
      "rotation": -2.4,
      "tapeColor": "sage"
    },
    {
      "src": "/outings/IMG-20260111-WA0493.jpg",
      "filename": "IMG-20260111-WA0493.jpg",
      "folder": "outings",
      "category": "outings",
      "caption": "Outings #17",
      "subcaption": "Outings \u2022 Snapshot 17",
      "rotation": -1.2,
      "tapeColor": "mustard"
    },
    {
      "src": "/outings/IMG-20260111-WA0748.jpg",
      "filename": "IMG-20260111-WA0748.jpg",
      "folder": "outings",
      "category": "outings",
      "caption": "Outings #18",
      "subcaption": "Outings \u2022 Snapshot 18",
      "rotation": 0.0,
      "tapeColor": "dusty-blue"
    },
    {
      "src": "/outings/IMG-20260111-WA0807.jpg",
      "filename": "IMG-20260111-WA0807.jpg",
      "folder": "outings",
      "category": "outings",
      "caption": "Outings #19",
      "subcaption": "Outings \u2022 Snapshot 19",
      "rotation": 1.2,
      "tapeColor": "terracotta"
    },
    {
      "src": "/outings/IMG-20260113-WA0014.jpg",
      "filename": "IMG-20260113-WA0014.jpg",
      "folder": "outings",
      "category": "outings",
      "caption": "Outings #20",
      "subcaption": "Outings \u2022 Snapshot 20",
      "rotation": 2.4,
      "tapeColor": "sage"
    },
    {
      "src": "/outings/IMG-20260113-WA0028.jpg",
      "filename": "IMG-20260113-WA0028.jpg",
      "folder": "outings",
      "category": "outings",
      "caption": "Outings #21",
      "subcaption": "Outings \u2022 Snapshot 21",
      "rotation": 3.6,
      "tapeColor": "mustard"
    },
    {
      "src": "/outings/IMG-20260113-WA0038.jpg",
      "filename": "IMG-20260113-WA0038.jpg",
      "folder": "outings",
      "category": "outings",
      "caption": "Outings #22",
      "subcaption": "Outings \u2022 Snapshot 22",
      "rotation": -3.6,
      "tapeColor": "dusty-blue"
    },
    {
      "src": "/outings/IMG-20260118-WA0059.jpg",
      "filename": "IMG-20260118-WA0059.jpg",
      "folder": "outings",
      "category": "outings",
      "caption": "Outings #23",
      "subcaption": "Outings \u2022 Snapshot 23",
      "rotation": -2.4,
      "tapeColor": "terracotta"
    },
    {
      "src": "/outings/IMG-20260304-WA0075.jpg",
      "filename": "IMG-20260304-WA0075.jpg",
      "folder": "outings",
      "category": "outings",
      "caption": "Outings #24",
      "subcaption": "Outings \u2022 Snapshot 24",
      "rotation": -1.2,
      "tapeColor": "sage"
    },
    {
      "src": "/outings/IMG-20260304-WA0109.jpg",
      "filename": "IMG-20260304-WA0109.jpg",
      "folder": "outings",
      "category": "outings",
      "caption": "Outings #25",
      "subcaption": "Outings \u2022 Snapshot 25",
      "rotation": 0.0,
      "tapeColor": "mustard"
    },
    {
      "src": "/outings/IMG-20260309-WA0022.jpg",
      "filename": "IMG-20260309-WA0022.jpg",
      "folder": "outings",
      "category": "outings",
      "caption": "Outings #26",
      "subcaption": "Outings \u2022 Snapshot 26",
      "rotation": 1.2,
      "tapeColor": "dusty-blue"
    },
    {
      "src": "/outings/IMG-20260503-WA0070.jpg",
      "filename": "IMG-20260503-WA0070.jpg",
      "folder": "outings",
      "category": "outings",
      "caption": "Outings #27",
      "subcaption": "Outings \u2022 Snapshot 27",
      "rotation": 2.4,
      "tapeColor": "terracotta"
    },
    {
      "src": "/outings/IMG-20260627-WA0203.jpg",
      "filename": "IMG-20260627-WA0203.jpg",
      "folder": "outings",
      "category": "outings",
      "caption": "Outings #28",
      "subcaption": "Outings \u2022 Snapshot 28",
      "rotation": 3.6,
      "tapeColor": "sage"
    },
    {
      "src": "/outings/IMG-20260712-WA0373.jpg",
      "filename": "IMG-20260712-WA0373.jpg",
      "folder": "outings",
      "category": "outings",
      "caption": "Outings #29",
      "subcaption": "Outings \u2022 Snapshot 29",
      "rotation": -3.6,
      "tapeColor": "mustard"
    },
    {
      "src": "/outings/IMG-20260712-WA0702.jpg",
      "filename": "IMG-20260712-WA0702.jpg",
      "folder": "outings",
      "category": "outings",
      "caption": "Outings #30",
      "subcaption": "Outings \u2022 Snapshot 30",
      "rotation": -2.4,
      "tapeColor": "dusty-blue"
    },
    {
      "src": "/outings/IMG-20260717-WA0032.jpg",
      "filename": "IMG-20260717-WA0032.jpg",
      "folder": "outings",
      "category": "outings",
      "caption": "Outings #31",
      "subcaption": "Outings \u2022 Snapshot 31",
      "rotation": -1.2,
      "tapeColor": "terracotta"
    },
    {
      "src": "/outings/IMG-20260717-WA0046.jpg",
      "filename": "IMG-20260717-WA0046.jpg",
      "folder": "outings",
      "category": "outings",
      "caption": "Outings #32",
      "subcaption": "Outings \u2022 Snapshot 32",
      "rotation": 0.0,
      "tapeColor": "sage"
    },
    {
      "src": "/outings/IMG-20260803-WA0096.jpg",
      "filename": "IMG-20260803-WA0096.jpg",
      "folder": "outings",
      "category": "outings",
      "caption": "Outings #33",
      "subcaption": "Outings \u2022 Snapshot 33",
      "rotation": 1.2,
      "tapeColor": "mustard"
    },
    {
      "src": "/outings/IMG-20260915-WA1625.jpg",
      "filename": "IMG-20260915-WA1625.jpg",
      "folder": "outings",
      "category": "outings",
      "caption": "Outings #34",
      "subcaption": "Outings \u2022 Snapshot 34",
      "rotation": 2.4,
      "tapeColor": "dusty-blue"
    },
    {
      "src": "/outings/IMG-20260915-WA1794.jpg",
      "filename": "IMG-20260915-WA1794.jpg",
      "folder": "outings",
      "category": "outings",
      "caption": "Outings #35",
      "subcaption": "Outings \u2022 Snapshot 35",
      "rotation": 3.6,
      "tapeColor": "terracotta"
    },
    {
      "src": "/outings/IMG-20261002-WA0378.jpg",
      "filename": "IMG-20261002-WA0378.jpg",
      "folder": "outings",
      "category": "outings",
      "caption": "Outings #36",
      "subcaption": "Outings \u2022 Snapshot 36",
      "rotation": -3.6,
      "tapeColor": "sage"
    },
    {
      "src": "/outings/IMG-20261002-WA0448.jpg",
      "filename": "IMG-20261002-WA0448.jpg",
      "folder": "outings",
      "category": "outings",
      "caption": "Outings #37",
      "subcaption": "Outings \u2022 Snapshot 37",
      "rotation": -2.4,
      "tapeColor": "mustard"
    },
    {
      "src": "/outings/IMG-20261002-WA0600.jpg",
      "filename": "IMG-20261002-WA0600.jpg",
      "folder": "outings",
      "category": "outings",
      "caption": "Outings #38",
      "subcaption": "Outings \u2022 Snapshot 38",
      "rotation": -1.2,
      "tapeColor": "dusty-blue"
    },
    {
      "src": "/outings/IMG-20261007-WA0062.jpg",
      "filename": "IMG-20261007-WA0062.jpg",
      "folder": "outings",
      "category": "outings",
      "caption": "Outings #39",
      "subcaption": "Outings \u2022 Snapshot 39",
      "rotation": 0.0,
      "tapeColor": "terracotta"
    },
    {
      "src": "/outings/IMG-20261029-WA0054.jpg",
      "filename": "IMG-20261029-WA0054.jpg",
      "folder": "outings",
      "category": "outings",
      "caption": "Outings #40",
      "subcaption": "Outings \u2022 Snapshot 40",
      "rotation": 1.2,
      "tapeColor": "sage"
    },
    {
      "src": "/outings/IMG-20261102-WA0018.jpg",
      "filename": "IMG-20261102-WA0018.jpg",
      "folder": "outings",
      "category": "outings",
      "caption": "Outings #41",
      "subcaption": "Outings \u2022 Snapshot 41",
      "rotation": 2.4,
      "tapeColor": "mustard"
    },
    {
      "src": "/outings/IMG20260926141852.jpg",
      "filename": "IMG20260926141852.jpg",
      "folder": "outings",
      "category": "outings",
      "caption": "Outings #42",
      "subcaption": "Outings \u2022 Memory 42",
      "rotation": 3.6,
      "tapeColor": "dusty-blue"
    },
    {
      "src": "/outings/IMG_20241101_173128.jpg",
      "filename": "IMG_20241101_173128.jpg",
      "folder": "outings",
      "category": "outings",
      "caption": "Outings #43",
      "subcaption": "Outings \u2022 Memory 43",
      "rotation": -3.6,
      "tapeColor": "terracotta"
    },
    {
      "src": "/outings/IMG_20250111_165912299.jpg",
      "filename": "IMG_20250111_165912299.jpg",
      "folder": "outings",
      "category": "outings",
      "caption": "Outings #44",
      "subcaption": "Outings \u2022 Memory 44",
      "rotation": -2.4,
      "tapeColor": "sage"
    },
    {
      "src": "/outings/IMG_20250111_172143.jpg",
      "filename": "IMG_20250111_172143.jpg",
      "folder": "outings",
      "category": "outings",
      "caption": "Outings #45",
      "subcaption": "Outings \u2022 Memory 45",
      "rotation": -1.2,
      "tapeColor": "mustard"
    },
    {
      "src": "/outings/IMG_20250112_185850657.jpg",
      "filename": "IMG_20250112_185850657.jpg",
      "folder": "outings",
      "category": "outings",
      "caption": "Outings #46",
      "subcaption": "Outings \u2022 Memory 46",
      "rotation": 0.0,
      "tapeColor": "dusty-blue"
    },
    {
      "src": "/outings/IMG_20250112_231121729.jpg",
      "filename": "IMG_20250112_231121729.jpg",
      "folder": "outings",
      "category": "outings",
      "caption": "Outings #47",
      "subcaption": "Outings \u2022 Memory 47",
      "rotation": 1.2,
      "tapeColor": "terracotta"
    },
    {
      "src": "/outings/IMG_20250129_231905196.jpg",
      "filename": "IMG_20250129_231905196.jpg",
      "folder": "outings",
      "category": "outings",
      "caption": "Outings #48",
      "subcaption": "Outings \u2022 Memory 48",
      "rotation": 2.4,
      "tapeColor": "sage"
    },
    {
      "src": "/outings/IMG_20250301_215808982.jpg",
      "filename": "IMG_20250301_215808982.jpg",
      "folder": "outings",
      "category": "outings",
      "caption": "Outings #49",
      "subcaption": "Outings \u2022 Memory 49",
      "rotation": 3.6,
      "tapeColor": "mustard"
    },
    {
      "src": "/outings/IMG_20250322_214433.jpg",
      "filename": "IMG_20250322_214433.jpg",
      "folder": "outings",
      "category": "outings",
      "caption": "Outings #50",
      "subcaption": "Outings \u2022 Memory 50",
      "rotation": -3.6,
      "tapeColor": "dusty-blue"
    },
    {
      "src": "/outings/IMG_20250613_192657998.jpg",
      "filename": "IMG_20250613_192657998.jpg",
      "folder": "outings",
      "category": "outings",
      "caption": "Outings #51",
      "subcaption": "Outings \u2022 Memory 51",
      "rotation": -2.4,
      "tapeColor": "terracotta"
    },
    {
      "src": "/outings/IMG_20250613_202121876.jpg",
      "filename": "IMG_20250613_202121876.jpg",
      "folder": "outings",
      "category": "outings",
      "caption": "Outings #52",
      "subcaption": "Outings \u2022 Memory 52",
      "rotation": -1.2,
      "tapeColor": "sage"
    },
    {
      "src": "/outings/IMG_20250613_202852082.jpg",
      "filename": "IMG_20250613_202852082.jpg",
      "folder": "outings",
      "category": "outings",
      "caption": "Outings #53",
      "subcaption": "Outings \u2022 Memory 53",
      "rotation": 0.0,
      "tapeColor": "mustard"
    },
    {
      "src": "/outings/IMG_20260110_152308893.jpg",
      "filename": "IMG_20260110_152308893.jpg",
      "folder": "outings",
      "category": "outings",
      "caption": "Outings #54",
      "subcaption": "Outings \u2022 Memory 54",
      "rotation": 1.2,
      "tapeColor": "dusty-blue"
    },
    {
      "src": "/outings/IMG_20260308_221348084.jpg",
      "filename": "IMG_20260308_221348084.jpg",
      "folder": "outings",
      "category": "outings",
      "caption": "Outings #55",
      "subcaption": "Outings \u2022 Memory 55",
      "rotation": 2.4,
      "tapeColor": "terracotta"
    }
  ],
  "tea breaks": [
    {
      "src": "/tea%20breaks/IMG-20260109-WA0004.jpg",
      "filename": "IMG-20260109-WA0004.jpg",
      "folder": "tea breaks",
      "category": "tea breaks",
      "caption": "Tea Breaks #1",
      "subcaption": "Tea Breaks \u2022 Snapshot 1",
      "rotation": -3.6,
      "tapeColor": "mustard"
    },
    {
      "src": "/tea%20breaks/IMG-20260128-WA0008.jpg",
      "filename": "IMG-20260128-WA0008.jpg",
      "folder": "tea breaks",
      "category": "tea breaks",
      "caption": "Tea Breaks #2",
      "subcaption": "Tea Breaks \u2022 Snapshot 2",
      "rotation": -2.4,
      "tapeColor": "dusty-blue"
    },
    {
      "src": "/tea%20breaks/IMG-20260603-WA0033.jpg",
      "filename": "IMG-20260603-WA0033.jpg",
      "folder": "tea breaks",
      "category": "tea breaks",
      "caption": "Tea Breaks #3",
      "subcaption": "Tea Breaks \u2022 Snapshot 3",
      "rotation": -1.2,
      "tapeColor": "terracotta"
    },
    {
      "src": "/tea%20breaks/IMG-20260814-WA0031.jpg",
      "filename": "IMG-20260814-WA0031.jpg",
      "folder": "tea breaks",
      "category": "tea breaks",
      "caption": "Tea Breaks #4",
      "subcaption": "Tea Breaks \u2022 Snapshot 4",
      "rotation": 0.0,
      "tapeColor": "sage"
    },
    {
      "src": "/tea%20breaks/IMG-20261016-WA0106.jpg",
      "filename": "IMG-20261016-WA0106.jpg",
      "folder": "tea breaks",
      "category": "tea breaks",
      "caption": "Tea Breaks #5",
      "subcaption": "Tea Breaks \u2022 Snapshot 5",
      "rotation": 1.2,
      "tapeColor": "mustard"
    },
    {
      "src": "/tea%20breaks/IMG-20261116-WA0165.jpg",
      "filename": "IMG-20261116-WA0165.jpg",
      "folder": "tea breaks",
      "category": "tea breaks",
      "caption": "Tea Breaks #6",
      "subcaption": "Tea Breaks \u2022 Snapshot 6",
      "rotation": 2.4,
      "tapeColor": "dusty-blue"
    },
    {
      "src": "/tea%20breaks/IMG_20260508_172640076.jpg",
      "filename": "IMG_20260508_172640076.jpg",
      "folder": "tea breaks",
      "category": "tea breaks",
      "caption": "Tea Breaks #7",
      "subcaption": "Tea Breaks \u2022 Memory 7",
      "rotation": 3.6,
      "tapeColor": "terracotta"
    },
    {
      "src": "/tea%20breaks/IMG_20260526_171343471.jpg",
      "filename": "IMG_20260526_171343471.jpg",
      "folder": "tea breaks",
      "category": "tea breaks",
      "caption": "Tea Breaks #8",
      "subcaption": "Tea Breaks \u2022 Memory 8",
      "rotation": -3.6,
      "tapeColor": "sage"
    },
    {
      "src": "/tea%20breaks/IMG_20260605_171833822.jpg",
      "filename": "IMG_20260605_171833822.jpg",
      "folder": "tea breaks",
      "category": "tea breaks",
      "caption": "Tea Breaks #9",
      "subcaption": "Tea Breaks \u2022 Memory 9",
      "rotation": -2.4,
      "tapeColor": "mustard"
    },
    {
      "src": "/tea%20breaks/IMG_20261107_165743484.jpg",
      "filename": "IMG_20261107_165743484.jpg",
      "folder": "tea breaks",
      "category": "tea breaks",
      "caption": "Tea Breaks #10",
      "subcaption": "Tea Breaks \u2022 Memory 10",
      "rotation": -1.2,
      "tapeColor": "dusty-blue"
    },
    {
      "src": "/tea%20breaks/PhotonCamera_20260907_173935.Yellow.jpg",
      "filename": "PhotonCamera_20260907_173935.Yellow.jpg",
      "folder": "tea breaks",
      "category": "tea breaks",
      "caption": "Tea Breaks #11",
      "subcaption": "Tea Breaks \u2022 Memory 11",
      "rotation": 0.0,
      "tapeColor": "terracotta"
    }
  ]
};
