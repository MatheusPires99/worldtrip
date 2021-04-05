export type City = {
  id: string;
  name: string;
  image: string;
  country: string;
  code: string;
};

export type Continent = {
  id: string;
  name: string;
  text: string;
  bannerImage: string;
  about: string;
  countries: number;
  languages: number;
  cities100: number;
  cities: City[];
};
