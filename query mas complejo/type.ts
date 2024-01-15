export type Characters={
  id: string;
  name: string;
  episode: Episode[];
};

export type Episode ={
  id: number;
  name: string;
  characters: Characters[];
};

export type CharacterAPIType={
  id: number;
  name: string;
  episode: string[];
}

export type EpisodeAPIType={
  id: number;
  name: string;
  characters: string[];
}