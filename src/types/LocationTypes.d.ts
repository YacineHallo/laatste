export interface ILocation {
  id: string;
  name: string;
  type: string;
  dimension: string;
  residents: [];
  url: string;
  created: string;
}

export interface ILocationResidents {
  id: number;
  name: string;
}
