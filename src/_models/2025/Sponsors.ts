export interface Sponsor {
  logo: string;
  link: string;
}

export enum Level {
  PLATINUM = "PLATINUM",
  GOLD = "GOLD",
  SILVER = "SILVER",
}

export const goldSponsors: Sponsor[] = [
  {
    logo: "jetbrains.png",
    link: "https://www.jetbrains.com",
  },
];

export const platinumSponsors: Sponsor[] = [
  {
    logo: "revenuecat.png",
    link: "https://www.revenuecat.com",
  },
];
