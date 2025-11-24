import { Comic, Plan, Article } from './types';

export const COMICS: Comic[] = [
  {
    id: 1,
    title: "THE DARK KNIGHT RETURNS",
    price: 19.99,
    issue: "#1 REMASTERED",
    image: "https://picsum.photos/seed/batman/400/600",
    category: "DC COMICS"
  },
  {
    id: 2,
    title: "AMAZING SPIDER-MAN",
    price: 4.99,
    issue: "#300",
    image: "https://picsum.photos/seed/spidey/400/600",
    category: "MARVEL"
  },
  {
    id: 3,
    title: "WATCHMEN",
    price: 24.99,
    issue: "COMPLETE ED.",
    image: "https://picsum.photos/seed/watchmen/400/600",
    category: "DC COMICS"
  },
  {
    id: 4,
    title: "X-MEN: DARK PHOENIX",
    price: 14.50,
    issue: "SAGA VOL. 1",
    image: "https://picsum.photos/seed/xmen/400/600",
    category: "MARVEL"
  },
  {
    id: 5,
    title: "CHAINSAW MAN",
    price: 9.99,
    issue: "VOL. 1",
    image: "https://picsum.photos/seed/csm/400/600",
    category: "MANGA"
  },
  {
    id: 6,
    title: "SANDMAN",
    price: 18.99,
    issue: "PRELUDES",
    image: "https://picsum.photos/seed/sandman/400/600",
    category: "VERTIGO"
  },
  {
    id: 7,
    title: "SAGA",
    price: 9.99,
    issue: "VOL. 1",
    image: "https://picsum.photos/seed/saga/400/600",
    category: "IMAGE"
  },
  {
    id: 8,
    title: "INVINCIBLE",
    price: 29.99,
    issue: "COMPENDIUM 1",
    image: "https://picsum.photos/seed/invincible/400/600",
    category: "IMAGE"
  },
  {
    id: 9,
    title: "AKIRA",
    price: 24.99,
    issue: "VOL. 1",
    image: "https://picsum.photos/seed/akira/400/600",
    category: "MANGA"
  },
  {
    id: 10,
    title: "HELLBOY",
    price: 19.99,
    issue: "SEED OF DESTRUCTION",
    image: "https://picsum.photos/seed/hellboy/400/600",
    category: "DARK HORSE"
  }
];

export const PLANS: Plan[] = [
  {
    name: "BASIC",
    price: 4.99,
    features: ["Access to limited selection", "Read up to 10 titles/mo", "Basic bookmarking"],
    color: "bg-white",
    textColor: "text-black",
    image: "https://picsum.photos/seed/basic/300/400"
  },
  {
    name: "ULTIMATE",
    price: 14.99,
    features: ["Unlimited Access", "Personalized recommendations", "Early access to new releases", "Offline reading"],
    color: "bg-comicBlack",
    textColor: "text-white",
    image: "https://picsum.photos/seed/ultimate/300/400"
  },
  {
    name: "PREMIUM",
    price: 9.99,
    features: ["Access to entire library", "Ad-free reading", "Full-screen mode"],
    color: "bg-comicRed",
    textColor: "text-white",
    image: "https://picsum.photos/seed/premium/300/400"
  }
];

export const ARTICLES: Article[] = [
  {
    id: 1,
    title: "THE GOLDEN AGE OF INDIE COMICS",
    date: "OCT 12, 2023",
    category: "EDITORIAL",
    image: "https://picsum.photos/seed/indie/600/400",
    excerpt: "Why small publishers are taking over the shelves and winning hearts."
  },
  {
    id: 2,
    title: "TOP 10 VILLAINS WE LOVE TO HATE",
    date: "OCT 10, 2023",
    category: "LISTS",
    image: "https://picsum.photos/seed/villains/600/400",
    excerpt: "From Joker to Magneto, ranking the best bad guys in history."
  },
  {
    id: 3,
    title: "INTERVIEW: THE ART OF INKING",
    date: "SEP 28, 2023",
    category: "INTERVIEW",
    image: "https://picsum.photos/seed/inking/600/400",
    excerpt: "Legendary inker speaks about the evolution of the craft in the digital age."
  }
];