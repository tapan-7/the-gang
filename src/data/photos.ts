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
  {
    "id": "all",
    "label": "All Keepsakes (141)",
    "icon": "\u2728"
  },
  {
    "id": "gopalpur",
    "label": "Gopalpur: The Origin (19)",
    "icon": "\ud83c\udf0a"
  },
  {
    "id": "lunch",
    "label": "1:00 PM Office Lunch (20)",
    "icon": "\ud83c\udf71"
  },
  {
    "id": "tea breaks",
    "label": "4:30 PM Tea Breaks (11)",
    "icon": "\u2615"
  },
  {
    "id": "elevator photos",
    "label": "Elevator Gatherings (5)",
    "icon": "\ud83d\uded7"
  },
  {
    "id": "bday celebrations",
    "label": "Birthday Celebrations (12)",
    "icon": "\ud83c\udf82"
  },
  {
    "id": "outings",
    "label": "Outings Together (55)",
    "icon": "\ud83c\udfd4\ufe0f"
  },
  {
    "id": "bachelorette",
    "label": "Arpita's Bachelorette (19)",
    "icon": "\ud83d\udc51"
  }
];

export const ALL_PHOTOS: AlbumPhoto[] = [
  {
    "src": "/gopalpur/IMG-20260110-WA0015.jpg",
    "filename": "IMG-20260110-WA0015.jpg",
    "folder": "gopalpur",
    "category": "gopalpur",
    "caption": "Gopalpur Origin #1",
    "subcaption": "Where the Gang Started \u2022 Snapshot 1",
    "rotation": -3.6,
    "tapeColor": "mustard"
  },
  {
    "src": "/gopalpur/IMG-20260111-WA0320.jpg",
    "filename": "IMG-20260111-WA0320.jpg",
    "folder": "gopalpur",
    "category": "gopalpur",
    "caption": "Gopalpur Origin #2",
    "subcaption": "Where the Gang Started \u2022 Snapshot 2",
    "rotation": -2.4,
    "tapeColor": "dusty-blue"
  },
  {
    "src": "/gopalpur/IMG-20260111-WA0335.jpg",
    "filename": "IMG-20260111-WA0335.jpg",
    "folder": "gopalpur",
    "category": "gopalpur",
    "caption": "Gopalpur Origin #3",
    "subcaption": "Where the Gang Started \u2022 Snapshot 3",
    "rotation": -1.2,
    "tapeColor": "terracotta"
  },
  {
    "src": "/gopalpur/IMG-20260111-WA0470.jpg",
    "filename": "IMG-20260111-WA0470.jpg",
    "folder": "gopalpur",
    "category": "gopalpur",
    "caption": "Gopalpur Origin #4",
    "subcaption": "Where the Gang Started \u2022 Snapshot 4",
    "rotation": 0.0,
    "tapeColor": "sage"
  },
  {
    "src": "/gopalpur/IMG-20260111-WA0491.jpg",
    "filename": "IMG-20260111-WA0491.jpg",
    "folder": "gopalpur",
    "category": "gopalpur",
    "caption": "Gopalpur Origin #5",
    "subcaption": "Where the Gang Started \u2022 Snapshot 5",
    "rotation": 1.2,
    "tapeColor": "mustard"
  },
  {
    "src": "/gopalpur/IMG-20260111-WA0497.jpg",
    "filename": "IMG-20260111-WA0497.jpg",
    "folder": "gopalpur",
    "category": "gopalpur",
    "caption": "Gopalpur Origin #6",
    "subcaption": "Where the Gang Started \u2022 Snapshot 6",
    "rotation": 2.4,
    "tapeColor": "dusty-blue"
  },
  {
    "src": "/gopalpur/IMG-20260111-WA0555.jpg",
    "filename": "IMG-20260111-WA0555.jpg",
    "folder": "gopalpur",
    "category": "gopalpur",
    "caption": "Gopalpur Origin #7",
    "subcaption": "Where the Gang Started \u2022 Snapshot 7",
    "rotation": 3.6,
    "tapeColor": "terracotta"
  },
  {
    "src": "/gopalpur/IMG-20260111-WA0609.jpg",
    "filename": "IMG-20260111-WA0609.jpg",
    "folder": "gopalpur",
    "category": "gopalpur",
    "caption": "Gopalpur Origin #8",
    "subcaption": "Where the Gang Started \u2022 Snapshot 8",
    "rotation": -3.6,
    "tapeColor": "sage"
  },
  {
    "src": "/gopalpur/IMG-20260111-WA0639.jpg",
    "filename": "IMG-20260111-WA0639.jpg",
    "folder": "gopalpur",
    "category": "gopalpur",
    "caption": "Gopalpur Origin #9",
    "subcaption": "Where the Gang Started \u2022 Snapshot 9",
    "rotation": -2.4,
    "tapeColor": "mustard"
  },
  {
    "src": "/gopalpur/IMG-20260111-WA0666.jpg",
    "filename": "IMG-20260111-WA0666.jpg",
    "folder": "gopalpur",
    "category": "gopalpur",
    "caption": "Gopalpur Origin #10",
    "subcaption": "Where the Gang Started \u2022 Snapshot 10",
    "rotation": -1.2,
    "tapeColor": "dusty-blue"
  },
  {
    "src": "/gopalpur/IMG-20260111-WA0684.jpg",
    "filename": "IMG-20260111-WA0684.jpg",
    "folder": "gopalpur",
    "category": "gopalpur",
    "caption": "Gopalpur Origin #11",
    "subcaption": "Where the Gang Started \u2022 Snapshot 11",
    "rotation": 0.0,
    "tapeColor": "terracotta"
  },
  {
    "src": "/gopalpur/IMG-20260111-WA0731.jpg",
    "filename": "IMG-20260111-WA0731.jpg",
    "folder": "gopalpur",
    "category": "gopalpur",
    "caption": "Gopalpur Origin #12",
    "subcaption": "Where the Gang Started \u2022 Snapshot 12",
    "rotation": 1.2,
    "tapeColor": "sage"
  },
  {
    "src": "/gopalpur/IMG-20260111-WA0737.jpg",
    "filename": "IMG-20260111-WA0737.jpg",
    "folder": "gopalpur",
    "category": "gopalpur",
    "caption": "Gopalpur Origin #13",
    "subcaption": "Where the Gang Started \u2022 Snapshot 13",
    "rotation": 2.4,
    "tapeColor": "mustard"
  },
  {
    "src": "/gopalpur/IMG-20260111-WA0746.jpg",
    "filename": "IMG-20260111-WA0746.jpg",
    "folder": "gopalpur",
    "category": "gopalpur",
    "caption": "Gopalpur Origin #14",
    "subcaption": "Where the Gang Started \u2022 Snapshot 14",
    "rotation": 3.6,
    "tapeColor": "dusty-blue"
  },
  {
    "src": "/gopalpur/IMG-20260111-WA0870.jpg",
    "filename": "IMG-20260111-WA0870.jpg",
    "folder": "gopalpur",
    "category": "gopalpur",
    "caption": "Gopalpur Origin #15",
    "subcaption": "Where the Gang Started \u2022 Snapshot 15",
    "rotation": -3.6,
    "tapeColor": "terracotta"
  },
  {
    "src": "/gopalpur/IMG-20260113-WA0038.jpg",
    "filename": "IMG-20260113-WA0038.jpg",
    "folder": "gopalpur",
    "category": "gopalpur",
    "caption": "Gopalpur Origin #16",
    "subcaption": "Where the Gang Started \u2022 Snapshot 16",
    "rotation": -2.4,
    "tapeColor": "sage"
  },
  {
    "src": "/gopalpur/IMG_20260110_152308893.jpg",
    "filename": "IMG_20260110_152308893.jpg",
    "folder": "gopalpur",
    "category": "gopalpur",
    "caption": "Gopalpur Origin #17",
    "subcaption": "Where the Gang Started \u2022 Snapshot 17",
    "rotation": -1.2,
    "tapeColor": "mustard"
  },
  {
    "src": "/gopalpur/IMG_20260111_105112376.jpg",
    "filename": "IMG_20260111_105112376.jpg",
    "folder": "gopalpur",
    "category": "gopalpur",
    "caption": "Gopalpur Origin #18",
    "subcaption": "Where the Gang Started \u2022 Snapshot 18",
    "rotation": 0.0,
    "tapeColor": "dusty-blue"
  },
  {
    "src": "/gopalpur/IMG_20260111_124627558.jpg",
    "filename": "IMG_20260111_124627558.jpg",
    "folder": "gopalpur",
    "category": "gopalpur",
    "caption": "Gopalpur Origin #19",
    "subcaption": "Where the Gang Started \u2022 Snapshot 19",
    "rotation": 1.2,
    "tapeColor": "terracotta"
  },
  {
    "src": "/lunch/DSC_0071.JPG",
    "filename": "DSC_0071.JPG",
    "folder": "lunch",
    "category": "lunch",
    "caption": "Office Lunch #1",
    "subcaption": "Daily 1:00 PM Cafeteria Table Merger \u2022 Memory 1",
    "rotation": -3.6,
    "tapeColor": "mustard"
  },
  {
    "src": "/lunch/IMG-20250311-WA0013.jpg",
    "filename": "IMG-20250311-WA0013.jpg",
    "folder": "lunch",
    "category": "lunch",
    "caption": "Office Lunch #2",
    "subcaption": "Daily 1:00 PM Cafeteria Table Merger \u2022 Memory 2",
    "rotation": -2.4,
    "tapeColor": "dusty-blue"
  },
  {
    "src": "/lunch/IMG-20250402-WA0001.jpg",
    "filename": "IMG-20250402-WA0001.jpg",
    "folder": "lunch",
    "category": "lunch",
    "caption": "Office Lunch #3",
    "subcaption": "Daily 1:00 PM Cafeteria Table Merger \u2022 Memory 3",
    "rotation": -1.2,
    "tapeColor": "terracotta"
  },
  {
    "src": "/lunch/IMG-20250630-WA0009.jpg",
    "filename": "IMG-20250630-WA0009.jpg",
    "folder": "lunch",
    "category": "lunch",
    "caption": "Office Lunch #4",
    "subcaption": "Daily 1:00 PM Cafeteria Table Merger \u2022 Memory 4",
    "rotation": 0.0,
    "tapeColor": "sage"
  },
  {
    "src": "/lunch/IMG-20250912-WA0024.jpg",
    "filename": "IMG-20250912-WA0024.jpg",
    "folder": "lunch",
    "category": "lunch",
    "caption": "Office Lunch #5",
    "subcaption": "Daily 1:00 PM Cafeteria Table Merger \u2022 Memory 5",
    "rotation": 1.2,
    "tapeColor": "mustard"
  },
  {
    "src": "/lunch/IMG-20251007-WA0005.jpg",
    "filename": "IMG-20251007-WA0005.jpg",
    "folder": "lunch",
    "category": "lunch",
    "caption": "Office Lunch #6",
    "subcaption": "Daily 1:00 PM Cafeteria Table Merger \u2022 Memory 6",
    "rotation": 2.4,
    "tapeColor": "dusty-blue"
  },
  {
    "src": "/lunch/IMG-20260123-WA0004.jpg",
    "filename": "IMG-20260123-WA0004.jpg",
    "folder": "lunch",
    "category": "lunch",
    "caption": "Office Lunch #7",
    "subcaption": "Daily 1:00 PM Cafeteria Table Merger \u2022 Memory 7",
    "rotation": 3.6,
    "tapeColor": "terracotta"
  },
  {
    "src": "/lunch/IMG-20260503-WA0064.jpg",
    "filename": "IMG-20260503-WA0064.jpg",
    "folder": "lunch",
    "category": "lunch",
    "caption": "Office Lunch #8",
    "subcaption": "Daily 1:00 PM Cafeteria Table Merger \u2022 Memory 8",
    "rotation": -3.6,
    "tapeColor": "sage"
  },
  {
    "src": "/lunch/IMG-20260627-WA0221.jpg",
    "filename": "IMG-20260627-WA0221.jpg",
    "folder": "lunch",
    "category": "lunch",
    "caption": "Office Lunch #9",
    "subcaption": "Daily 1:00 PM Cafeteria Table Merger \u2022 Memory 9",
    "rotation": -2.4,
    "tapeColor": "mustard"
  },
  {
    "src": "/lunch/IMG-20260627-WA0223.jpg",
    "filename": "IMG-20260627-WA0223.jpg",
    "folder": "lunch",
    "category": "lunch",
    "caption": "Office Lunch #10",
    "subcaption": "Daily 1:00 PM Cafeteria Table Merger \u2022 Memory 10",
    "rotation": -1.2,
    "tapeColor": "dusty-blue"
  },
  {
    "src": "/lunch/IMG-20260717-WA0042.jpg",
    "filename": "IMG-20260717-WA0042.jpg",
    "folder": "lunch",
    "category": "lunch",
    "caption": "Office Lunch #11",
    "subcaption": "Daily 1:00 PM Cafeteria Table Merger \u2022 Memory 11",
    "rotation": 0.0,
    "tapeColor": "terracotta"
  },
  {
    "src": "/lunch/IMG-20260717-WA0046.jpg",
    "filename": "IMG-20260717-WA0046.jpg",
    "folder": "lunch",
    "category": "lunch",
    "caption": "Office Lunch #12",
    "subcaption": "Daily 1:00 PM Cafeteria Table Merger \u2022 Memory 12",
    "rotation": 1.2,
    "tapeColor": "sage"
  },
  {
    "src": "/lunch/IMG-20260822-WA0189.jpg",
    "filename": "IMG-20260822-WA0189.jpg",
    "folder": "lunch",
    "category": "lunch",
    "caption": "Office Lunch #13",
    "subcaption": "Daily 1:00 PM Cafeteria Table Merger \u2022 Memory 13",
    "rotation": 2.4,
    "tapeColor": "mustard"
  },
  {
    "src": "/lunch/IMG-20260822-WA0233.jpg",
    "filename": "IMG-20260822-WA0233.jpg",
    "folder": "lunch",
    "category": "lunch",
    "caption": "Office Lunch #14",
    "subcaption": "Daily 1:00 PM Cafeteria Table Merger \u2022 Memory 14",
    "rotation": 3.6,
    "tapeColor": "dusty-blue"
  },
  {
    "src": "/lunch/IMG-20261002-WA0406.jpg",
    "filename": "IMG-20261002-WA0406.jpg",
    "folder": "lunch",
    "category": "lunch",
    "caption": "Office Lunch #15",
    "subcaption": "Daily 1:00 PM Cafeteria Table Merger \u2022 Memory 15",
    "rotation": -3.6,
    "tapeColor": "terracotta"
  },
  {
    "src": "/lunch/IMG-20261007-WA0126.jpg",
    "filename": "IMG-20261007-WA0126.jpg",
    "folder": "lunch",
    "category": "lunch",
    "caption": "Office Lunch #16",
    "subcaption": "Daily 1:00 PM Cafeteria Table Merger \u2022 Memory 16",
    "rotation": -2.4,
    "tapeColor": "sage"
  },
  {
    "src": "/lunch/IMG-20261016-WA0051.jpg",
    "filename": "IMG-20261016-WA0051.jpg",
    "folder": "lunch",
    "category": "lunch",
    "caption": "Office Lunch #17",
    "subcaption": "Daily 1:00 PM Cafeteria Table Merger \u2022 Memory 17",
    "rotation": -1.2,
    "tapeColor": "mustard"
  },
  {
    "src": "/lunch/IMG_20250104_095152447.jpg",
    "filename": "IMG_20250104_095152447.jpg",
    "folder": "lunch",
    "category": "lunch",
    "caption": "Office Lunch #18",
    "subcaption": "Daily 1:00 PM Cafeteria Table Merger \u2022 Memory 18",
    "rotation": 0.0,
    "tapeColor": "dusty-blue"
  },
  {
    "src": "/lunch/IMG_20250918_132113834.jpg",
    "filename": "IMG_20250918_132113834.jpg",
    "folder": "lunch",
    "category": "lunch",
    "caption": "Office Lunch #19",
    "subcaption": "Daily 1:00 PM Cafeteria Table Merger \u2022 Memory 19",
    "rotation": 1.2,
    "tapeColor": "terracotta"
  },
  {
    "src": "/lunch/IMG_20260220_132922747.jpg",
    "filename": "IMG_20260220_132922747.jpg",
    "folder": "lunch",
    "category": "lunch",
    "caption": "Office Lunch #20",
    "subcaption": "Daily 1:00 PM Cafeteria Table Merger \u2022 Memory 20",
    "rotation": 2.4,
    "tapeColor": "sage"
  },
  {
    "src": "/tea%20breaks/IMG-20260109-WA0004.jpg",
    "filename": "IMG-20260109-WA0004.jpg",
    "folder": "tea breaks",
    "category": "tea breaks",
    "caption": "Tea Break Walk #1",
    "subcaption": "Daily 4:30 PM Roadside Chai Walk \u2022 Memory 1",
    "rotation": -3.6,
    "tapeColor": "mustard"
  },
  {
    "src": "/tea%20breaks/IMG-20260128-WA0008.jpg",
    "filename": "IMG-20260128-WA0008.jpg",
    "folder": "tea breaks",
    "category": "tea breaks",
    "caption": "Tea Break Walk #2",
    "subcaption": "Daily 4:30 PM Roadside Chai Walk \u2022 Memory 2",
    "rotation": -2.4,
    "tapeColor": "dusty-blue"
  },
  {
    "src": "/tea%20breaks/IMG-20260603-WA0033.jpg",
    "filename": "IMG-20260603-WA0033.jpg",
    "folder": "tea breaks",
    "category": "tea breaks",
    "caption": "Tea Break Walk #3",
    "subcaption": "Daily 4:30 PM Roadside Chai Walk \u2022 Memory 3",
    "rotation": -1.2,
    "tapeColor": "terracotta"
  },
  {
    "src": "/tea%20breaks/IMG-20260814-WA0031.jpg",
    "filename": "IMG-20260814-WA0031.jpg",
    "folder": "tea breaks",
    "category": "tea breaks",
    "caption": "Tea Break Walk #4",
    "subcaption": "Daily 4:30 PM Roadside Chai Walk \u2022 Memory 4",
    "rotation": 0.0,
    "tapeColor": "sage"
  },
  {
    "src": "/tea%20breaks/IMG-20261016-WA0106.jpg",
    "filename": "IMG-20261016-WA0106.jpg",
    "folder": "tea breaks",
    "category": "tea breaks",
    "caption": "Tea Break Walk #5",
    "subcaption": "Daily 4:30 PM Roadside Chai Walk \u2022 Memory 5",
    "rotation": 1.2,
    "tapeColor": "mustard"
  },
  {
    "src": "/tea%20breaks/IMG-20261116-WA0165.jpg",
    "filename": "IMG-20261116-WA0165.jpg",
    "folder": "tea breaks",
    "category": "tea breaks",
    "caption": "Tea Break Walk #6",
    "subcaption": "Daily 4:30 PM Roadside Chai Walk \u2022 Memory 6",
    "rotation": 2.4,
    "tapeColor": "dusty-blue"
  },
  {
    "src": "/tea%20breaks/IMG_20260508_172640076.jpg",
    "filename": "IMG_20260508_172640076.jpg",
    "folder": "tea breaks",
    "category": "tea breaks",
    "caption": "Tea Break Walk #7",
    "subcaption": "Daily 4:30 PM Roadside Chai Walk \u2022 Memory 7",
    "rotation": 3.6,
    "tapeColor": "terracotta"
  },
  {
    "src": "/tea%20breaks/IMG_20260526_171343471.jpg",
    "filename": "IMG_20260526_171343471.jpg",
    "folder": "tea breaks",
    "category": "tea breaks",
    "caption": "Tea Break Walk #8",
    "subcaption": "Daily 4:30 PM Roadside Chai Walk \u2022 Memory 8",
    "rotation": -3.6,
    "tapeColor": "sage"
  },
  {
    "src": "/tea%20breaks/IMG_20260605_171833822.jpg",
    "filename": "IMG_20260605_171833822.jpg",
    "folder": "tea breaks",
    "category": "tea breaks",
    "caption": "Tea Break Walk #9",
    "subcaption": "Daily 4:30 PM Roadside Chai Walk \u2022 Memory 9",
    "rotation": -2.4,
    "tapeColor": "mustard"
  },
  {
    "src": "/tea%20breaks/IMG_20261107_165743484.jpg",
    "filename": "IMG_20261107_165743484.jpg",
    "folder": "tea breaks",
    "category": "tea breaks",
    "caption": "Tea Break Walk #10",
    "subcaption": "Daily 4:30 PM Roadside Chai Walk \u2022 Memory 10",
    "rotation": -1.2,
    "tapeColor": "dusty-blue"
  },
  {
    "src": "/tea%20breaks/PhotonCamera_20260907_173935.Yellow.jpg",
    "filename": "PhotonCamera_20260907_173935.Yellow.jpg",
    "folder": "tea breaks",
    "category": "tea breaks",
    "caption": "Tea Break Walk #11",
    "subcaption": "Daily 4:30 PM Roadside Chai Walk \u2022 Memory 11",
    "rotation": 0.0,
    "tapeColor": "terracotta"
  },
  {
    "src": "/elevator%20photos/IMG-20260210-WA0037.jpg",
    "filename": "IMG-20260210-WA0037.jpg",
    "folder": "elevator photos",
    "category": "elevator photos",
    "caption": "Elevator Selfie #1",
    "subcaption": "Daily Elevator Cram \u2022 Shot 1",
    "rotation": -3.6,
    "tapeColor": "mustard"
  },
  {
    "src": "/elevator%20photos/IMG-20261016-WA0047.jpg",
    "filename": "IMG-20261016-WA0047.jpg",
    "folder": "elevator photos",
    "category": "elevator photos",
    "caption": "Elevator Selfie #2",
    "subcaption": "Daily Elevator Cram \u2022 Shot 2",
    "rotation": -2.4,
    "tapeColor": "dusty-blue"
  },
  {
    "src": "/elevator%20photos/IMG-20261016-WA0083.jpg",
    "filename": "IMG-20261016-WA0083.jpg",
    "folder": "elevator photos",
    "category": "elevator photos",
    "caption": "Elevator Selfie #3",
    "subcaption": "Daily Elevator Cram \u2022 Shot 3",
    "rotation": -1.2,
    "tapeColor": "terracotta"
  },
  {
    "src": "/elevator%20photos/IMG-20261107-WA0205.jpg",
    "filename": "IMG-20261107-WA0205.jpg",
    "folder": "elevator photos",
    "category": "elevator photos",
    "caption": "Elevator Selfie #4",
    "subcaption": "Daily Elevator Cram \u2022 Shot 4",
    "rotation": 0.0,
    "tapeColor": "sage"
  },
  {
    "src": "/elevator%20photos/IMG-20261107-WA0303.jpg",
    "filename": "IMG-20261107-WA0303.jpg",
    "folder": "elevator photos",
    "category": "elevator photos",
    "caption": "Elevator Selfie #5",
    "subcaption": "Daily Elevator Cram \u2022 Shot 5",
    "rotation": 1.2,
    "tapeColor": "mustard"
  },
  {
    "src": "/bday%20celebrations/IMG-20260611-WA0070.jpg",
    "filename": "IMG-20260611-WA0070.jpg",
    "folder": "bday celebrations",
    "category": "bday celebrations",
    "caption": "Birthday Celebration #1",
    "subcaption": "Office Birthday Bash & Cake \u2022 Celebration 1",
    "rotation": -3.6,
    "tapeColor": "mustard"
  },
  {
    "src": "/bday%20celebrations/IMG-20260619-WA0065.jpg",
    "filename": "IMG-20260619-WA0065.jpg",
    "folder": "bday celebrations",
    "category": "bday celebrations",
    "caption": "Birthday Celebration #2",
    "subcaption": "Office Birthday Bash & Cake \u2022 Celebration 2",
    "rotation": -2.4,
    "tapeColor": "dusty-blue"
  },
  {
    "src": "/bday%20celebrations/IMG-20260625-WA0018.jpg",
    "filename": "IMG-20260625-WA0018.jpg",
    "folder": "bday celebrations",
    "category": "bday celebrations",
    "caption": "Birthday Celebration #3",
    "subcaption": "Office Birthday Bash & Cake \u2022 Celebration 3",
    "rotation": -1.2,
    "tapeColor": "terracotta"
  },
  {
    "src": "/bday%20celebrations/IMG-20260625-WA0031.jpg",
    "filename": "IMG-20260625-WA0031.jpg",
    "folder": "bday celebrations",
    "category": "bday celebrations",
    "caption": "Birthday Celebration #4",
    "subcaption": "Office Birthday Bash & Cake \u2022 Celebration 4",
    "rotation": 0.0,
    "tapeColor": "sage"
  },
  {
    "src": "/bday%20celebrations/IMG-20260827-WA0025.jpg",
    "filename": "IMG-20260827-WA0025.jpg",
    "folder": "bday celebrations",
    "category": "bday celebrations",
    "caption": "Birthday Celebration #5",
    "subcaption": "Office Birthday Bash & Cake \u2022 Celebration 5",
    "rotation": 1.2,
    "tapeColor": "mustard"
  },
  {
    "src": "/bday%20celebrations/IMG-20260827-WA0027.jpg",
    "filename": "IMG-20260827-WA0027.jpg",
    "folder": "bday celebrations",
    "category": "bday celebrations",
    "caption": "Birthday Celebration #6",
    "subcaption": "Office Birthday Bash & Cake \u2022 Celebration 6",
    "rotation": 2.4,
    "tapeColor": "dusty-blue"
  },
  {
    "src": "/bday%20celebrations/IMG-20260924-WA0047.jpg",
    "filename": "IMG-20260924-WA0047.jpg",
    "folder": "bday celebrations",
    "category": "bday celebrations",
    "caption": "Birthday Celebration #7",
    "subcaption": "Office Birthday Bash & Cake \u2022 Celebration 7",
    "rotation": 3.6,
    "tapeColor": "terracotta"
  },
  {
    "src": "/bday%20celebrations/IMG-20260924-WA0050.jpg",
    "filename": "IMG-20260924-WA0050.jpg",
    "folder": "bday celebrations",
    "category": "bday celebrations",
    "caption": "Birthday Celebration #8",
    "subcaption": "Office Birthday Bash & Cake \u2022 Celebration 8",
    "rotation": -3.6,
    "tapeColor": "sage"
  },
  {
    "src": "/bday%20celebrations/IMG-20261007-WA0031.jpg",
    "filename": "IMG-20261007-WA0031.jpg",
    "folder": "bday celebrations",
    "category": "bday celebrations",
    "caption": "Birthday Celebration #9",
    "subcaption": "Office Birthday Bash & Cake \u2022 Celebration 9",
    "rotation": -2.4,
    "tapeColor": "mustard"
  },
  {
    "src": "/bday%20celebrations/IMG-20261009-WA0066.jpg",
    "filename": "IMG-20261009-WA0066.jpg",
    "folder": "bday celebrations",
    "category": "bday celebrations",
    "caption": "Birthday Celebration #10",
    "subcaption": "Office Birthday Bash & Cake \u2022 Celebration 10",
    "rotation": -1.2,
    "tapeColor": "dusty-blue"
  },
  {
    "src": "/bday%20celebrations/IMG-20261009-WA0092.jpg",
    "filename": "IMG-20261009-WA0092.jpg",
    "folder": "bday celebrations",
    "category": "bday celebrations",
    "caption": "Birthday Celebration #11",
    "subcaption": "Office Birthday Bash & Cake \u2022 Celebration 11",
    "rotation": 0.0,
    "tapeColor": "terracotta"
  },
  {
    "src": "/bday%20celebrations/OLV_20260915161913.jpg",
    "filename": "OLV_20260915161913.jpg",
    "folder": "bday celebrations",
    "category": "bday celebrations",
    "caption": "Birthday Celebration #12",
    "subcaption": "Office Birthday Bash & Cake \u2022 Celebration 12",
    "rotation": 1.2,
    "tapeColor": "sage"
  },
  {
    "src": "/outings/DSC_3379-1.JPG",
    "filename": "DSC_3379-1.JPG",
    "folder": "outings",
    "category": "outings",
    "caption": "Outing Memory #1",
    "subcaption": "Trip & Outing Together \u2022 Snapshot 1",
    "rotation": -3.6,
    "tapeColor": "mustard"
  },
  {
    "src": "/outings/IMG-20241109-WA0020.jpg",
    "filename": "IMG-20241109-WA0020.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outing Memory #2",
    "subcaption": "Trip & Outing Together \u2022 Snapshot 2",
    "rotation": -2.4,
    "tapeColor": "dusty-blue"
  },
  {
    "src": "/outings/IMG-20241109-WA0064.jpg",
    "filename": "IMG-20241109-WA0064.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outing Memory #3",
    "subcaption": "Trip & Outing Together \u2022 Snapshot 3",
    "rotation": -1.2,
    "tapeColor": "terracotta"
  },
  {
    "src": "/outings/IMG-20241109-WA0161.jpg",
    "filename": "IMG-20241109-WA0161.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outing Memory #4",
    "subcaption": "Trip & Outing Together \u2022 Snapshot 4",
    "rotation": 0.0,
    "tapeColor": "sage"
  },
  {
    "src": "/outings/IMG-20241109-WA0167.jpg",
    "filename": "IMG-20241109-WA0167.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outing Memory #5",
    "subcaption": "Trip & Outing Together \u2022 Snapshot 5",
    "rotation": 1.2,
    "tapeColor": "mustard"
  },
  {
    "src": "/outings/IMG-20250201-WA0005.jpg",
    "filename": "IMG-20250201-WA0005.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outing Memory #6",
    "subcaption": "Trip & Outing Together \u2022 Snapshot 6",
    "rotation": 2.4,
    "tapeColor": "dusty-blue"
  },
  {
    "src": "/outings/IMG-20250205-WA0035.jpg",
    "filename": "IMG-20250205-WA0035.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outing Memory #7",
    "subcaption": "Trip & Outing Together \u2022 Snapshot 7",
    "rotation": 3.6,
    "tapeColor": "terracotta"
  },
  {
    "src": "/outings/IMG-20250301-WA0010.jpg",
    "filename": "IMG-20250301-WA0010.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outing Memory #8",
    "subcaption": "Trip & Outing Together \u2022 Snapshot 8",
    "rotation": -3.6,
    "tapeColor": "sage"
  },
  {
    "src": "/outings/IMG-20250311-WA0028.jpg",
    "filename": "IMG-20250311-WA0028.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outing Memory #9",
    "subcaption": "Trip & Outing Together \u2022 Snapshot 9",
    "rotation": -2.4,
    "tapeColor": "mustard"
  },
  {
    "src": "/outings/IMG-20250613-WA0034.jpg",
    "filename": "IMG-20250613-WA0034.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outing Memory #10",
    "subcaption": "Trip & Outing Together \u2022 Snapshot 10",
    "rotation": -1.2,
    "tapeColor": "dusty-blue"
  },
  {
    "src": "/outings/IMG-20250620-WA0073.jpg",
    "filename": "IMG-20250620-WA0073.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outing Memory #11",
    "subcaption": "Trip & Outing Together \u2022 Snapshot 11",
    "rotation": 0.0,
    "tapeColor": "terracotta"
  },
  {
    "src": "/outings/IMG-20250718-WA0083.jpg",
    "filename": "IMG-20250718-WA0083.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outing Memory #12",
    "subcaption": "Trip & Outing Together \u2022 Snapshot 12",
    "rotation": 1.2,
    "tapeColor": "sage"
  },
  {
    "src": "/outings/IMG-20250802-WA0029.jpg",
    "filename": "IMG-20250802-WA0029.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outing Memory #13",
    "subcaption": "Trip & Outing Together \u2022 Snapshot 13",
    "rotation": 2.4,
    "tapeColor": "mustard"
  },
  {
    "src": "/outings/IMG-20250803-WA0300.jpg",
    "filename": "IMG-20250803-WA0300.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outing Memory #14",
    "subcaption": "Trip & Outing Together \u2022 Snapshot 14",
    "rotation": 3.6,
    "tapeColor": "dusty-blue"
  },
  {
    "src": "/outings/IMG-20251020-WA0246.jpg",
    "filename": "IMG-20251020-WA0246.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outing Memory #15",
    "subcaption": "Trip & Outing Together \u2022 Snapshot 15",
    "rotation": -3.6,
    "tapeColor": "terracotta"
  },
  {
    "src": "/outings/IMG-20251022-WA0123.jpg",
    "filename": "IMG-20251022-WA0123.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outing Memory #16",
    "subcaption": "Trip & Outing Together \u2022 Snapshot 16",
    "rotation": -2.4,
    "tapeColor": "sage"
  },
  {
    "src": "/outings/IMG-20260111-WA0493.jpg",
    "filename": "IMG-20260111-WA0493.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outing Memory #17",
    "subcaption": "Trip & Outing Together \u2022 Snapshot 17",
    "rotation": -1.2,
    "tapeColor": "mustard"
  },
  {
    "src": "/outings/IMG-20260111-WA0748.jpg",
    "filename": "IMG-20260111-WA0748.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outing Memory #18",
    "subcaption": "Trip & Outing Together \u2022 Snapshot 18",
    "rotation": 0.0,
    "tapeColor": "dusty-blue"
  },
  {
    "src": "/outings/IMG-20260111-WA0807.jpg",
    "filename": "IMG-20260111-WA0807.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outing Memory #19",
    "subcaption": "Trip & Outing Together \u2022 Snapshot 19",
    "rotation": 1.2,
    "tapeColor": "terracotta"
  },
  {
    "src": "/outings/IMG-20260113-WA0014.jpg",
    "filename": "IMG-20260113-WA0014.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outing Memory #20",
    "subcaption": "Trip & Outing Together \u2022 Snapshot 20",
    "rotation": 2.4,
    "tapeColor": "sage"
  },
  {
    "src": "/outings/IMG-20260113-WA0028.jpg",
    "filename": "IMG-20260113-WA0028.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outing Memory #21",
    "subcaption": "Trip & Outing Together \u2022 Snapshot 21",
    "rotation": 3.6,
    "tapeColor": "mustard"
  },
  {
    "src": "/outings/IMG-20260113-WA0038.jpg",
    "filename": "IMG-20260113-WA0038.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outing Memory #22",
    "subcaption": "Trip & Outing Together \u2022 Snapshot 22",
    "rotation": -3.6,
    "tapeColor": "dusty-blue"
  },
  {
    "src": "/outings/IMG-20260118-WA0059.jpg",
    "filename": "IMG-20260118-WA0059.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outing Memory #23",
    "subcaption": "Trip & Outing Together \u2022 Snapshot 23",
    "rotation": -2.4,
    "tapeColor": "terracotta"
  },
  {
    "src": "/outings/IMG-20260304-WA0075.jpg",
    "filename": "IMG-20260304-WA0075.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outing Memory #24",
    "subcaption": "Trip & Outing Together \u2022 Snapshot 24",
    "rotation": -1.2,
    "tapeColor": "sage"
  },
  {
    "src": "/outings/IMG-20260304-WA0109.jpg",
    "filename": "IMG-20260304-WA0109.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outing Memory #25",
    "subcaption": "Trip & Outing Together \u2022 Snapshot 25",
    "rotation": 0.0,
    "tapeColor": "mustard"
  },
  {
    "src": "/outings/IMG-20260309-WA0022.jpg",
    "filename": "IMG-20260309-WA0022.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outing Memory #26",
    "subcaption": "Trip & Outing Together \u2022 Snapshot 26",
    "rotation": 1.2,
    "tapeColor": "dusty-blue"
  },
  {
    "src": "/outings/IMG-20260503-WA0070.jpg",
    "filename": "IMG-20260503-WA0070.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outing Memory #27",
    "subcaption": "Trip & Outing Together \u2022 Snapshot 27",
    "rotation": 2.4,
    "tapeColor": "terracotta"
  },
  {
    "src": "/outings/IMG-20260627-WA0203.jpg",
    "filename": "IMG-20260627-WA0203.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outing Memory #28",
    "subcaption": "Trip & Outing Together \u2022 Snapshot 28",
    "rotation": 3.6,
    "tapeColor": "sage"
  },
  {
    "src": "/outings/IMG-20260712-WA0373.jpg",
    "filename": "IMG-20260712-WA0373.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outing Memory #29",
    "subcaption": "Trip & Outing Together \u2022 Snapshot 29",
    "rotation": -3.6,
    "tapeColor": "mustard"
  },
  {
    "src": "/outings/IMG-20260712-WA0702.jpg",
    "filename": "IMG-20260712-WA0702.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outing Memory #30",
    "subcaption": "Trip & Outing Together \u2022 Snapshot 30",
    "rotation": -2.4,
    "tapeColor": "dusty-blue"
  },
  {
    "src": "/outings/IMG-20260717-WA0032.jpg",
    "filename": "IMG-20260717-WA0032.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outing Memory #31",
    "subcaption": "Trip & Outing Together \u2022 Snapshot 31",
    "rotation": -1.2,
    "tapeColor": "terracotta"
  },
  {
    "src": "/outings/IMG-20260717-WA0046.jpg",
    "filename": "IMG-20260717-WA0046.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outing Memory #32",
    "subcaption": "Trip & Outing Together \u2022 Snapshot 32",
    "rotation": 0.0,
    "tapeColor": "sage"
  },
  {
    "src": "/outings/IMG-20260803-WA0096.jpg",
    "filename": "IMG-20260803-WA0096.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outing Memory #33",
    "subcaption": "Trip & Outing Together \u2022 Snapshot 33",
    "rotation": 1.2,
    "tapeColor": "mustard"
  },
  {
    "src": "/outings/IMG-20260915-WA1625.jpg",
    "filename": "IMG-20260915-WA1625.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outing Memory #34",
    "subcaption": "Trip & Outing Together \u2022 Snapshot 34",
    "rotation": 2.4,
    "tapeColor": "dusty-blue"
  },
  {
    "src": "/outings/IMG-20260915-WA1794.jpg",
    "filename": "IMG-20260915-WA1794.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outing Memory #35",
    "subcaption": "Trip & Outing Together \u2022 Snapshot 35",
    "rotation": 3.6,
    "tapeColor": "terracotta"
  },
  {
    "src": "/outings/IMG-20261002-WA0378.jpg",
    "filename": "IMG-20261002-WA0378.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outing Memory #36",
    "subcaption": "Trip & Outing Together \u2022 Snapshot 36",
    "rotation": -3.6,
    "tapeColor": "sage"
  },
  {
    "src": "/outings/IMG-20261002-WA0448.jpg",
    "filename": "IMG-20261002-WA0448.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outing Memory #37",
    "subcaption": "Trip & Outing Together \u2022 Snapshot 37",
    "rotation": -2.4,
    "tapeColor": "mustard"
  },
  {
    "src": "/outings/IMG-20261002-WA0600.jpg",
    "filename": "IMG-20261002-WA0600.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outing Memory #38",
    "subcaption": "Trip & Outing Together \u2022 Snapshot 38",
    "rotation": -1.2,
    "tapeColor": "dusty-blue"
  },
  {
    "src": "/outings/IMG-20261007-WA0062.jpg",
    "filename": "IMG-20261007-WA0062.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outing Memory #39",
    "subcaption": "Trip & Outing Together \u2022 Snapshot 39",
    "rotation": 0.0,
    "tapeColor": "terracotta"
  },
  {
    "src": "/outings/IMG-20261029-WA0054.jpg",
    "filename": "IMG-20261029-WA0054.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outing Memory #40",
    "subcaption": "Trip & Outing Together \u2022 Snapshot 40",
    "rotation": 1.2,
    "tapeColor": "sage"
  },
  {
    "src": "/outings/IMG-20261102-WA0018.jpg",
    "filename": "IMG-20261102-WA0018.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outing Memory #41",
    "subcaption": "Trip & Outing Together \u2022 Snapshot 41",
    "rotation": 2.4,
    "tapeColor": "mustard"
  },
  {
    "src": "/outings/IMG20260926141852.jpg",
    "filename": "IMG20260926141852.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outing Memory #42",
    "subcaption": "Trip & Outing Together \u2022 Snapshot 42",
    "rotation": 3.6,
    "tapeColor": "dusty-blue"
  },
  {
    "src": "/outings/IMG_20241101_173128.jpg",
    "filename": "IMG_20241101_173128.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outing Memory #43",
    "subcaption": "Trip & Outing Together \u2022 Snapshot 43",
    "rotation": -3.6,
    "tapeColor": "terracotta"
  },
  {
    "src": "/outings/IMG_20250111_165912299.jpg",
    "filename": "IMG_20250111_165912299.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outing Memory #44",
    "subcaption": "Trip & Outing Together \u2022 Snapshot 44",
    "rotation": -2.4,
    "tapeColor": "sage"
  },
  {
    "src": "/outings/IMG_20250111_172143.jpg",
    "filename": "IMG_20250111_172143.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outing Memory #45",
    "subcaption": "Trip & Outing Together \u2022 Snapshot 45",
    "rotation": -1.2,
    "tapeColor": "mustard"
  },
  {
    "src": "/outings/IMG_20250112_185850657.jpg",
    "filename": "IMG_20250112_185850657.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outing Memory #46",
    "subcaption": "Trip & Outing Together \u2022 Snapshot 46",
    "rotation": 0.0,
    "tapeColor": "dusty-blue"
  },
  {
    "src": "/outings/IMG_20250112_231121729.jpg",
    "filename": "IMG_20250112_231121729.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outing Memory #47",
    "subcaption": "Trip & Outing Together \u2022 Snapshot 47",
    "rotation": 1.2,
    "tapeColor": "terracotta"
  },
  {
    "src": "/outings/IMG_20250129_231905196.jpg",
    "filename": "IMG_20250129_231905196.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outing Memory #48",
    "subcaption": "Trip & Outing Together \u2022 Snapshot 48",
    "rotation": 2.4,
    "tapeColor": "sage"
  },
  {
    "src": "/outings/IMG_20250301_215808982.jpg",
    "filename": "IMG_20250301_215808982.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outing Memory #49",
    "subcaption": "Trip & Outing Together \u2022 Snapshot 49",
    "rotation": 3.6,
    "tapeColor": "mustard"
  },
  {
    "src": "/outings/IMG_20250322_214433.jpg",
    "filename": "IMG_20250322_214433.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outing Memory #50",
    "subcaption": "Trip & Outing Together \u2022 Snapshot 50",
    "rotation": -3.6,
    "tapeColor": "dusty-blue"
  },
  {
    "src": "/outings/IMG_20250613_192657998.jpg",
    "filename": "IMG_20250613_192657998.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outing Memory #51",
    "subcaption": "Trip & Outing Together \u2022 Snapshot 51",
    "rotation": -2.4,
    "tapeColor": "terracotta"
  },
  {
    "src": "/outings/IMG_20250613_202121876.jpg",
    "filename": "IMG_20250613_202121876.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outing Memory #52",
    "subcaption": "Trip & Outing Together \u2022 Snapshot 52",
    "rotation": -1.2,
    "tapeColor": "sage"
  },
  {
    "src": "/outings/IMG_20250613_202852082.jpg",
    "filename": "IMG_20250613_202852082.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outing Memory #53",
    "subcaption": "Trip & Outing Together \u2022 Snapshot 53",
    "rotation": 0.0,
    "tapeColor": "mustard"
  },
  {
    "src": "/outings/IMG_20260110_152308893.jpg",
    "filename": "IMG_20260110_152308893.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outing Memory #54",
    "subcaption": "Trip & Outing Together \u2022 Snapshot 54",
    "rotation": 1.2,
    "tapeColor": "dusty-blue"
  },
  {
    "src": "/outings/IMG_20260308_221348084.jpg",
    "filename": "IMG_20260308_221348084.jpg",
    "folder": "outings",
    "category": "outings",
    "caption": "Outing Memory #55",
    "subcaption": "Trip & Outing Together \u2022 Snapshot 55",
    "rotation": 2.4,
    "tapeColor": "terracotta"
  },
  {
    "src": "/bachelorette/IMG-20261115-WA0040.jpg",
    "filename": "IMG-20261115-WA0040.jpg",
    "folder": "bachelorette",
    "category": "bachelorette",
    "caption": "Arpita's Bachelorette #1",
    "subcaption": "5:00 PM Lunch & Farewell Milestone \u2022 Memory 1",
    "rotation": -3.6,
    "tapeColor": "mustard"
  },
  {
    "src": "/bachelorette/IMG-20261115-WA0131.jpg",
    "filename": "IMG-20261115-WA0131.jpg",
    "folder": "bachelorette",
    "category": "bachelorette",
    "caption": "Arpita's Bachelorette #2",
    "subcaption": "5:00 PM Lunch & Farewell Milestone \u2022 Memory 2",
    "rotation": -2.4,
    "tapeColor": "dusty-blue"
  },
  {
    "src": "/bachelorette/IMG-20261115-WA0172.jpg",
    "filename": "IMG-20261115-WA0172.jpg",
    "folder": "bachelorette",
    "category": "bachelorette",
    "caption": "Arpita's Bachelorette #3",
    "subcaption": "5:00 PM Lunch & Farewell Milestone \u2022 Memory 3",
    "rotation": -1.2,
    "tapeColor": "terracotta"
  },
  {
    "src": "/bachelorette/IMG-20261115-WA0455.jpg",
    "filename": "IMG-20261115-WA0455.jpg",
    "folder": "bachelorette",
    "category": "bachelorette",
    "caption": "Arpita's Bachelorette #4",
    "subcaption": "5:00 PM Lunch & Farewell Milestone \u2022 Memory 4",
    "rotation": 0.0,
    "tapeColor": "sage"
  },
  {
    "src": "/bachelorette/IMG-20261115-WA0498.jpg",
    "filename": "IMG-20261115-WA0498.jpg",
    "folder": "bachelorette",
    "category": "bachelorette",
    "caption": "Arpita's Bachelorette #5",
    "subcaption": "5:00 PM Lunch & Farewell Milestone \u2022 Memory 5",
    "rotation": 1.2,
    "tapeColor": "mustard"
  },
  {
    "src": "/bachelorette/IMG-20261115-WA0607.jpg",
    "filename": "IMG-20261115-WA0607.jpg",
    "folder": "bachelorette",
    "category": "bachelorette",
    "caption": "Arpita's Bachelorette #6",
    "subcaption": "5:00 PM Lunch & Farewell Milestone \u2022 Memory 6",
    "rotation": 2.4,
    "tapeColor": "dusty-blue"
  },
  {
    "src": "/bachelorette/IMG-20261115-WA0837.jpg",
    "filename": "IMG-20261115-WA0837.jpg",
    "folder": "bachelorette",
    "category": "bachelorette",
    "caption": "Arpita's Bachelorette #7",
    "subcaption": "5:00 PM Lunch & Farewell Milestone \u2022 Memory 7",
    "rotation": 3.6,
    "tapeColor": "terracotta"
  },
  {
    "src": "/bachelorette/IMG-20261115-WA0846.jpg",
    "filename": "IMG-20261115-WA0846.jpg",
    "folder": "bachelorette",
    "category": "bachelorette",
    "caption": "Arpita's Bachelorette #8",
    "subcaption": "5:00 PM Lunch & Farewell Milestone \u2022 Memory 8",
    "rotation": -3.6,
    "tapeColor": "sage"
  },
  {
    "src": "/bachelorette/IMG-20261115-WA1167.jpg",
    "filename": "IMG-20261115-WA1167.jpg",
    "folder": "bachelorette",
    "category": "bachelorette",
    "caption": "Arpita's Bachelorette #9",
    "subcaption": "5:00 PM Lunch & Farewell Milestone \u2022 Memory 9",
    "rotation": -2.4,
    "tapeColor": "mustard"
  },
  {
    "src": "/bachelorette/IMG-20261115-WA1321.jpg",
    "filename": "IMG-20261115-WA1321.jpg",
    "folder": "bachelorette",
    "category": "bachelorette",
    "caption": "Arpita's Bachelorette #10",
    "subcaption": "5:00 PM Lunch & Farewell Milestone \u2022 Memory 10",
    "rotation": -1.2,
    "tapeColor": "dusty-blue"
  },
  {
    "src": "/bachelorette/IMG-20261115-WA1512.jpg",
    "filename": "IMG-20261115-WA1512.jpg",
    "folder": "bachelorette",
    "category": "bachelorette",
    "caption": "Arpita's Bachelorette #11",
    "subcaption": "5:00 PM Lunch & Farewell Milestone \u2022 Memory 11",
    "rotation": 0.0,
    "tapeColor": "terracotta"
  },
  {
    "src": "/bachelorette/IMG-20261115-WA1594.jpg",
    "filename": "IMG-20261115-WA1594.jpg",
    "folder": "bachelorette",
    "category": "bachelorette",
    "caption": "Arpita's Bachelorette #12",
    "subcaption": "5:00 PM Lunch & Farewell Milestone \u2022 Memory 12",
    "rotation": 1.2,
    "tapeColor": "sage"
  },
  {
    "src": "/bachelorette/IMG-20261115-WA1667.jpg",
    "filename": "IMG-20261115-WA1667.jpg",
    "folder": "bachelorette",
    "category": "bachelorette",
    "caption": "Arpita's Bachelorette #13",
    "subcaption": "5:00 PM Lunch & Farewell Milestone \u2022 Memory 13",
    "rotation": 2.4,
    "tapeColor": "mustard"
  },
  {
    "src": "/bachelorette/IMG-20261115-WA1705.jpg",
    "filename": "IMG-20261115-WA1705.jpg",
    "folder": "bachelorette",
    "category": "bachelorette",
    "caption": "Arpita's Bachelorette #14",
    "subcaption": "5:00 PM Lunch & Farewell Milestone \u2022 Memory 14",
    "rotation": 3.6,
    "tapeColor": "dusty-blue"
  },
  {
    "src": "/bachelorette/IMG-20261115-WA1717.jpg",
    "filename": "IMG-20261115-WA1717.jpg",
    "folder": "bachelorette",
    "category": "bachelorette",
    "caption": "Arpita's Bachelorette #15",
    "subcaption": "5:00 PM Lunch & Farewell Milestone \u2022 Memory 15",
    "rotation": -3.6,
    "tapeColor": "terracotta"
  },
  {
    "src": "/bachelorette/IMG-20261115-WA1727.jpg",
    "filename": "IMG-20261115-WA1727.jpg",
    "folder": "bachelorette",
    "category": "bachelorette",
    "caption": "Arpita's Bachelorette #16",
    "subcaption": "5:00 PM Lunch & Farewell Milestone \u2022 Memory 16",
    "rotation": -2.4,
    "tapeColor": "sage"
  },
  {
    "src": "/bachelorette/IMG-20261116-WA0002.jpg",
    "filename": "IMG-20261116-WA0002.jpg",
    "folder": "bachelorette",
    "category": "bachelorette",
    "caption": "Arpita's Bachelorette #17",
    "subcaption": "5:00 PM Lunch & Farewell Milestone \u2022 Memory 17",
    "rotation": -1.2,
    "tapeColor": "mustard"
  },
  {
    "src": "/bachelorette/IMG_20261114_192152888.jpg",
    "filename": "IMG_20261114_192152888.jpg",
    "folder": "bachelorette",
    "category": "bachelorette",
    "caption": "Arpita's Bachelorette #18",
    "subcaption": "5:00 PM Lunch & Farewell Milestone \u2022 Memory 18",
    "rotation": 0.0,
    "tapeColor": "dusty-blue"
  },
  {
    "src": "/bachelorette/IMG_20261115_091828014.jpg",
    "filename": "IMG_20261115_091828014.jpg",
    "folder": "bachelorette",
    "category": "bachelorette",
    "caption": "Arpita's Bachelorette #19",
    "subcaption": "5:00 PM Lunch & Farewell Milestone \u2022 Memory 19",
    "rotation": 1.2,
    "tapeColor": "terracotta"
  }
];

export const ALBUMS_BY_FOLDER: Record<string, AlbumPhoto[]> = ALL_PHOTOS.reduce((acc, photo) => {
  if (!acc[photo.folder]) {
    acc[photo.folder] = [];
  }
  acc[photo.folder].push(photo);
  return acc;
}, {} as Record<string, AlbumPhoto[]>);
