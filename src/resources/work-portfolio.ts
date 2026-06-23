import type { WorkCategory, WorkPortfolioItem } from "@/types";

const BASE = "/images/projects";

function galleryImages(folder: string, files: string[], altPrefix: string): WorkPortfolioItem["images"] {
  return files.map((file) => ({
    src: `${BASE}/${folder}/${file}`,
    alt: `${altPrefix} — ${file.replace(/\.[^.]+$/, "").replace(/[-_]/g, " ")}`,
  }));
}

function rootImages(files: string[], altPrefix: string): WorkPortfolioItem["images"] {
  return files.map((file) => ({
    src: `${BASE}/${file}`,
    alt: `${altPrefix} — ${file.replace(/\.[^.]+$/, "").replace(/[-_]/g, " ")}`,
  }));
}

/** Gallery-only portfolio entries (MDX case studies are merged in lib/work-portfolio.ts). */
export const workPortfolioGallery: WorkPortfolioItem[] = [
  {
    slug: "digital-arts",
    title: "Digital Arts & Illustrations",
    summary: "Character art, vector illustrations, and creative explorations across gaming and pop culture themes.",
    category: "illustration",
    type: "gallery",
    cover: `${BASE}/arts/illustration.jpg`,
    images: galleryImages(
      "arts",
      [
        "1.jpg",
        "2.jpg",
        "3.jpg",
        "4.jpg",
        "5.jpg",
        "6.jpg",
        "7.jpg",
        "8.jpg",
        "9.jpg",
        "car.jpg",
        "galaxy.jpg",
        "Ghost.jpg",
        "Insta-1.jpg",
        "illustration.jpg",
        "Pubg.jpg",
        "thunder.jpg",
        "thunder-1920.jpg",
        "vector-girl.jpg",
      ],
      "Digital art",
    ),
  },
  {
    slug: "g4s-security",
    title: "G4S Security Branding",
    summary: "Visual identity and marketing collateral for G4S security services.",
    category: "client",
    type: "gallery",
    cover: `${BASE}/G4s/1.jpg`,
    images: galleryImages("G4s", ["1.jpg", "2.jpg", "3.jpg", "4.jpg"], "G4S branding"),
  },
  {
    slug: "matra-oil",
    title: "Matra Oil",
    summary: "Brand and packaging design for Matra Oil products.",
    category: "client",
    type: "gallery",
    cover: `${BASE}/Matra/Oil.jpg`,
    images: galleryImages("Matra", ["Oil.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"], "Matra Oil"),
  },
  {
    slug: "nps-campaign",
    title: "NPS Campaign",
    summary: "National Pension System awareness and promotional design work.",
    category: "branding",
    type: "gallery",
    cover: `${BASE}/NPS/NPSArtboard-1.jpg`,
    images: galleryImages("NPS", ["NPSArtboard-1.jpg", "NPSArtboard-2.jpg", "NPSArtboard-3.jpg"], "NPS campaign"),
  },
  {
    slug: "apy-ad-campaign",
    title: "APY & AD Campaign",
    summary: "Atal Pension Yojana and related government scheme promotional creatives.",
    category: "branding",
    type: "gallery",
    cover: `${BASE}/APY-AD/APY-AD-1.jpg`,
    images: galleryImages("APY-AD", ["APY-AD-1.jpg", "APY-AD-2.jpg"], "APY campaign"),
  },
  {
    slug: "daduji",
    title: "Daduji Brand & Campaigns",
    summary: "Brand identity, advertising, and cricket campaign creatives for Daduji.",
    category: "client",
    type: "gallery",
    cover: `${BASE}/daduji/AD-DADuj-1.jpg`,
    images: galleryImages(
      "daduji",
      [
        "0.jpg",
        "AD-DADuj-1.jpg",
        "AD-DADuj-2.jpg",
        "AD-DADuj-3.jpg",
        "cricket-0.jpg",
        "cricket-1.jpg",
        "cricket-2.jpg",
        "cricket-3.jpg",
      ],
      "Daduji",
    ),
  },
  {
    slug: "brithmatics",
    title: "Brithmatics",
    summary: "Brand identity and visual design for Brithmatics.",
    category: "branding",
    type: "gallery",
    cover: `${BASE}/Brithmatics.jpg`,
    images: rootImages(["Brithmatics.jpg", "Brithmatics-thumb.jpg"], "Brithmatics"),
  },
  {
    slug: "design-studio",
    title: "Design Studio",
    summary: "Corporate identity and festive campaign designs for Design Studio.",
    category: "branding",
    type: "gallery",
    cover: `${BASE}/DS.jpg`,
    images: rootImages(["DS.jpg", "DS-group-holi.jpg"], "Design Studio"),
  },
  {
    slug: "great-lakes",
    title: "Great Lakes Institute",
    summary: "Marketing and institutional design for Great Lakes Institute of Management.",
    category: "client",
    type: "gallery",
    cover: `${BASE}/Greatlakes.jpg`,
    images: rootImages(["Greatlakes.jpg", "Greatlakes-newiimv5.jpg", "GreatlakesArtboard-1.jpg"], "Great Lakes"),
  },
  {
    slug: "logo-collection",
    title: "Logo Collection",
    summary: "A curated set of logo marks and brand symbols.",
    category: "branding",
    type: "gallery",
    cover: `${BASE}/LogosArtboard.jpg`,
    images: rootImages(["LogosArtboard.jpg", "LogosArtboard-1.jpg"], "Logo"),
  },
  {
    slug: "blender-3d",
    title: "Blender 3D Renders",
    summary: "3D visualization and render work created in Blender.",
    category: "illustration",
    type: "gallery",
    cover: `${BASE}/Blender.jpg`,
    images: rootImages(["Blender.jpg", "blender-1.jpg"], "Blender render"),
  },
  {
    slug: "print-social-designs",
    title: "Print & Social Designs",
    summary: "Miscellaneous print layouts and social media creatives.",
    category: "print",
    type: "gallery",
    cover: `${BASE}/1.jpg`,
    images: rootImages(["1.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg"], "Design"),
  },
];

export const WORK_CATEGORY_LABELS: Record<WorkCategory | "all", string> = {
  all: "All",
  "case-study": "Case studies",
  branding: "Branding",
  illustration: "Illustration",
  social: "Social",
  print: "Print",
  client: "Client work",
};

export const WORK_CATEGORY_ORDER: (WorkCategory | "all")[] = [
  "all",
  "case-study",
  "branding",
  "illustration",
  "client",
  "print",
  "social",
];
