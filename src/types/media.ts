export type MemoryCategory =
  | "gopalpur"
  | "lunch"
  | "tea breaks"
  | "elevator photos"
  | "bday celebrations"
  | "outings"
  | "bachelorette"
  | "room-feasts";

export type MemoryLayout = "polaroid" | "wide" | "portrait" | "film" | "contact";

export interface MemoryPhoto {
  id: string;
  src: string;
  filename: string;
  folder: string;
  category: MemoryCategory;
  chapter?: number;
  caption: string;
  subcaption?: string;
  date?: string;
  rotation?: number;
  tapeColor?: "mustard" | "dusty-blue" | "terracotta" | "sage";
  layout?: MemoryLayout;
  participants?: string[];
  insideJoke?: string;
}

export interface PhotoCollectionConfig {
  id: string;
  label: string;
  icon: string;
  count: number;
  description: string;
}

