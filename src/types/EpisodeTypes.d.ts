import { ICharacter } from "./CharacterTypes";

export interface IEpisode {
  id: string;
  name: string;
  air_date: string;
  episode: string;
  characters: {
    [x: string]: any;
    id: number;
    name: string;
  };
  [];
  url: string;
  created: string;
}
