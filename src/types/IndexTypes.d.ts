export type { IInfo } from "./InfoTypes.d";

export type { ICharacter } from "./CharacterTypes";

export type { ILocation } from "./LocationTypes";

export { IEpisode } from "./EpisodeTypes";

export interface ICharactersResponse {
  info: IInfo;
  results: ICharacter[];
}
export interface ILocationsResponse {
  info: IInfo;
  results: ILocation[];
}

export interface IEpisodesResponse {
  info: IInfo;
  results: IEpisode[];
}

export interface ICharacterFullData extends ICharacter {
  origin: { name: string; url: string };
  location: { name: string; url: string };
  episode: { id: number; name: string };
  [];
}
