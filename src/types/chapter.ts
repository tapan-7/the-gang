export interface ChapterScene {
  id: string;
  title: string;
  description: string;
  timeOrPhase?: string;
  participants: string[];
  humorousDetail?: string;
  imageKeys?: string[];
}

export interface Chapter {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  timeframe?: string;
  location?: string;
  themeColor: string;
  accentColor: string;
  overview: string;
  scenes: ChapterScene[];
  closingNote?: string;
}

