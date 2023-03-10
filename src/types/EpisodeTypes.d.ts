export interface IEpisode {
  id: string;
  name: string;
  air_date: string;
  episode: string;
  characters: [];
  url: string;
  created: string;
}

export interface IEpsisodeCharacters {
  id: number;
  name: string;
}
