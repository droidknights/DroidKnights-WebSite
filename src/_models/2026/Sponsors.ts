export interface Sponsor {
  logo: string;
  link: string;
  /** shown as the image alt text and the card label */
  name: string;
}

export enum Level {
  PLATINUM = "PLATINUM",
  GOLD = "GOLD",
  SILVER = "SILVER",
  SPECIAL = "SPECIAL",
}

export const platinumSponsors: Sponsor[] = [
  {
    logo: "revenuecat.png",
    link: "https://www.revenuecat.com",
    name: "RevenueCat",
  },
];

export const goldSponsors: Sponsor[] = [];

export const silverSponsors: Sponsor[] = [];

export const specialSponsors: Sponsor[] = [
  {
    logo: "ticketaco.png",
    link: "https://ticketa.co",
    name: "Ticketaco",
  },
];

export const sponsorsByLevel: Record<Level, Sponsor[]> = {
  [Level.PLATINUM]: platinumSponsors,
  [Level.GOLD]: goldSponsors,
  [Level.SILVER]: silverSponsors,
  [Level.SPECIAL]: specialSponsors,
};

/** render order — tiers with no sponsors are skipped by the section */
export const levelOrder: Level[] = [Level.PLATINUM, Level.GOLD, Level.SILVER, Level.SPECIAL];
