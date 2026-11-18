export interface SignatureProp {
  name: string;
  icon: string; // Identifier for SVG doodle
  description: string;
}

export interface RelationshipLink {
  targetId: string;
  label: string; // e.g. "Proud Adopted Son", "Bitter Half", "The 2 Musketeers"
  context: string;
}

export interface CharacterQuote {
  quote: string;
  author?: string;
  context: string;
}

export interface Character {
  id: string; // e.g. 'dushmanta', 'paresh', 'tapan'
  name: string;
  nickname?: string;
  title: string;
  tagline: string;
  description: string;
  personality: string[];
  signatureProps: SignatureProp[];
  insideJokes: string[];
  relationships: RelationshipLink[];
  quotes?: CharacterQuote[];
  avatarColor: string;
  placeholderSvg: string; // Key or SVG identifier
  realPhotos?: string[]; // Phase 8 real assets
}

