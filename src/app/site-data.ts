export const PHONE_DISPLAY: string = "+91 98911 37368";
export const PHONE_HREF: string = "tel:+919891137368";
export const EMAIL: string = "hudaconveyorsolution@gmail.com";
export const ADDRESS: string = "Anoopshahar, Bulandshahr, Uttar Pradesh 203390";

export type MenuLink = {
  readonly label: string;
  readonly href: string;
  readonly description: string;
  readonly icon: string;
};

export type SiteLink = {
  readonly label: string;
  readonly href: string;
};

export const PRODUCT_MENU: readonly MenuLink[] = [
  {
    label: "Overhead Conveyors",
    href: "/overhead-conveyors",
    description: "Enclosed, four-wheel and I-beam systems",
    icon: "fas fa-stream",
  },
  {
    label: "Belt Conveyors",
    href: "/belt-conveyor",
    description: "Flat, incline, telescopic and modular",
    icon: "fas fa-bars",
  },
  {
    label: "Roller Conveyors",
    href: "/roller-conveyors",
    description: "Gravity, powered and flexible lines",
    icon: "fas fa-circle-notch",
  },
  {
    label: "Chain Conveyors",
    href: "/chain-conveyors",
    description: "Apron, slat and drag chain systems",
    icon: "fas fa-link",
  },
  {
    label: "Other Conveyors",
    href: "/other-conveyors",
    description: "Screw, bucket, spiral and chip conveyors",
    icon: "fas fa-cubes",
  },
  {
    label: "Turnkey Solutions",
    href: "/turn-key-solutions",
    description: "Complete plants, paint shops and towlines",
    icon: "fas fa-industry",
  },
];

export const SOLUTION_MENU: readonly SiteLink[] = [
  { label: "Waste Management Plant", href: "/waste-management-plant" },
  { label: "Paint Shop Solutions", href: "/paint-shop" },
  { label: "Coal Handling Plant", href: "/coal-handling-plant" },
  { label: "Turnkey Conveyor Solutions", href: "/turn-key-solutions" },
  { label: "PET Bottle Recycling", href: "/pet-bottle-recycling" },
];

export const FOOTER_PRODUCTS: readonly SiteLink[] = [
  { label: "Overhead Conveyors", href: "/overhead-conveyors" },
  { label: "Belt Conveyors", href: "/belt-conveyor" },
  { label: "Roller Conveyors", href: "/roller-conveyors" },
  { label: "Chain Conveyors", href: "/chain-conveyors" },
  { label: "Other Conveyors", href: "/other-conveyors" },
  { label: "Turnkey Solutions", href: "/turn-key-solutions" },
];

export const FOOTER_COMPANY: readonly SiteLink[] = [
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/#products" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact" },
];
