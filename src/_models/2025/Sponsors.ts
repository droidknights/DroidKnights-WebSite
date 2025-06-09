export interface Sponsor {
  logo: string;
  link: string;
}

export enum Level {
  PLATINUM = "PLATINUM",
  GOLD = "GOLD",
  SILVER = "SILVER",
}

export const platinumSponsors: Sponsor[] = [
  {
    logo: "revenuecat.png",
    link: "https://www.revenuecat.com",
  },
];

export const goldSponsors: Sponsor[] = [
  {
    logo: "jetbrains.png",
    link: "https://www.jetbrains.com",
  },
];

export const silverSponsors: Sponsor[] = [
  {
    logo: "koin.png",
    link: "https://insert-koin.io/",
  },
];
