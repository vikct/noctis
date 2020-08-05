export interface Documentation {
  Name: string;
  Description: string;
  Path: string;
}

export interface Country {
  Country: string;
  Slug: string;
  ISO2: string;
}

export interface CountryStatus {
  Country: string,
  CountryCode: string,
  Province: string,
  City: string,
  CityCode: string,
  Lat: string,
  Lon: string,
  Confirmed: number,
  Deaths: number,
  Recovered: number,
  Active: number,
  Date: string
}
