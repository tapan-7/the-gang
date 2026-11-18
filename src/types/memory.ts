export interface MemoryImage {
  id: string;
  placeholderLabel: string;
  alt: string;
  realSrc?: string;
  caption?: string;
  rotationDeg: number;
  tapeColor?: "mustard" | "dusty-blue" | "terracotta" | "sage";
  tapePosition?: "top-left" | "top-right" | "top-center" | "both-corners";
}

export interface Memory {
  id: string;
  chapterId: string;
  title: string;
  narrative: string;
  location?: string;
  dateOrPhase?: string;
  participants: string[];
  images: MemoryImage[];
  insideJokeRef?: string;
}

