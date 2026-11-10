import type { StaticImageData } from "next/image";

import vesselUmber from "@/assets/vessel-umber.jpg";
import vesselStudy from "@/assets/vessel-study.jpg";
import shoreline from "@/assets/shoreline.jpg";
import studioDoorway from "@/assets/studio-doorway.jpg";
import studioSeated from "@/assets/studio-seated.jpg";
import studioEasel from "@/assets/studio-easel.jpg";
import studioProgress from "@/assets/studio-progress.jpg";
import vesselUmberBoard from "@/assets/vessel-umber-board.jpg";
import vesselStudyBoard from "@/assets/vessel-study-board.jpg";

export const site = {
  name: "Shadraw",
  artist: "Hamdiya",
  tagline: "Portraiture & figurative art",
  location: "Verona, Italy",
  email: "shadraw.studio@gmail.com",
  instagram: "https://www.instagram.com/shadraw/",
  instagramHandle: "@shadraw",
  url: "https://shadraw.vercel.app",
};

export const nav = [
  { href: "#works", label: "Works" },
  { href: "#process", label: "Process" },
  { href: "#studio", label: "Studio" },
  { href: "#commissions", label: "Commissions" },
  { href: "#faq", label: "FAQ" },
];

export type Work = {
  slug: string;
  title: string;
  medium: string;
  year: string;
  status: "Original" | "In progress";
  image: StaticImageData;
  alt: string;
  className?: string;
};

// Titles, media and years are working placeholders — confirm with the artist.
export const works: Work[] = [
  {
    slug: "vessel-umber",
    title: "Vessel, in Umber",
    medium: "Oil on board",
    year: "2026",
    status: "Original",
    image: vesselUmber,
    alt: "Oil painting of a man in profile in a cream robe, balancing a clay pot on his head against a deep umber background.",
    className: "md:col-span-5",
  },
  {
    slug: "shoreline",
    title: "Where the Sea Waits",
    medium: "Oil on canvas",
    year: "2026",
    status: "Original",
    image: shoreline,
    alt: "Oil painting of a man in linen standing in a sunlit alcove while a woman in a flowing cream gown sits at a window overlooking the sea.",
    className: "md:col-span-6 md:col-start-7 md:mt-48",
  },
  {
    slug: "vessel-study",
    title: "Vessel, in Light",
    medium: "Oil on paper",
    year: "2026",
    status: "Original",
    image: vesselStudy,
    alt: "Oil study of a man in profile wearing a cream robe with a clay pot balanced on his head against a pale background.",
    className: "md:col-span-4 md:col-start-2",
  },
  {
    slug: "doorway",
    title: "The Doorway",
    medium: "Oil on board",
    year: "2026",
    status: "In progress",
    image: studioDoorway,
    alt: "Painting in progress on an easel: a man in a pale suit stands in a dark doorway while a woman in a red dress sits beside it.",
    className: "md:col-span-4 md:col-start-8 md:mt-40",
  },
];

export const process = [
  {
    n: "01",
    title: "Reference",
    body: "Every piece starts with a story. We gather photographs, gestures and mood, then compose the scene before a single mark is made.",
    image: studioEasel,
    alt: "The artist sketching on a large white canvas in her studio.",
  },
  {
    n: "02",
    title: "Drawing",
    body: "A careful graphite drawing maps proportion, posture and the fall of fabric — the quiet architecture underneath the paint.",
    image: vesselStudyBoard,
    alt: "Finished oil study taped to a drawing board.",
  },
  {
    n: "03",
    title: "Underpainting",
    body: "Warm umbers and siennas block in the darks and set the temperature of the light. This is where the mood is decided.",
    image: studioSeated,
    alt: "The artist working on an underpainting of a seated woman beside a clay pot.",
  },
  {
    n: "04",
    title: "Layers",
    body: "Thin layers of oil build skin, cloth and atmosphere slowly, letting each pass dry so the colour keeps its depth and glow.",
    image: studioProgress,
    alt: "A painting of a couple in a sunlit alcove on the easel, nearly complete.",
  },
  {
    n: "05",
    title: "Reveal",
    body: "Final glazes, a last look in different light, and the work is varnished, documented and prepared to travel to its new home.",
    image: vesselUmberBoard,
    alt: "Finished oil painting on board held up in the studio.",
  },
];

export const reels = [
  {
    src: "/media/love.mp4",
    poster: "/media/love-poster.jpg",
    quote: "Creating is its own kind of love.",
    label: "Underpainting",
  },
  {
    src: "/media/story.mp4",
    poster: "/media/story-poster.jpg",
    quote: "I wonder what story you see in them.",
    label: "Detail work",
  },
];

export const offers = [
  {
    n: "01",
    title: "Pencil Portrait",
    lead: "Intimate graphite portraits of one subject, built from your favourite photograph.",
    points: ["Single figure, head & shoulders", "Fine art paper", "Delivered ready to frame"],
    timeline: "Typically 2–3 weeks",
  },
  {
    n: "02",
    title: "Oil Portrait",
    lead: "A painted portrait in warm, layered oils — the signature Shadraw look.",
    points: ["One or two figures", "Board, paper or canvas", "Progress updates along the way"],
    timeline: "Typically 4–8 weeks",
    featured: true,
  },
  {
    n: "03",
    title: "Figurative Scene",
    lead: "A composed, story-led painting: figures, setting and light designed together.",
    points: ["Concept & composition sketch", "Larger formats available", "Collaborative reference session"],
    timeline: "Timeline agreed together",
  },
];

export const quotes = [
  "Creating is its own kind of love.",
  "What I do is what I love.",
  "I think I'll always be a dreamer.",
  "I wonder what story you see in them.",
];

export const faq = [
  {
    q: "How do I commission a portrait?",
    a: "Send an enquiry with a little about the person or story, the size you have in mind and any reference photos. I'll reply with availability, a quote and a suggested timeline.",
  },
  {
    q: "What kind of reference photos work best?",
    a: "Clear, well-lit photos with visible detail in the face and hands. Natural or directional light is ideal — it gives the painting its depth. Several angles are always welcome.",
  },
  {
    q: "How long does a commission take?",
    a: "Pencil pieces usually take a few weeks; oil paintings take longer because each layer needs to dry. You'll get a timeline with your quote and updates as the work progresses.",
  },
  {
    q: "Do you ship internationally?",
    a: "Yes. Works are packed carefully and shipped from Verona, Italy. Shipping and any customs costs are confirmed with your quote.",
  },
  {
    q: "Is a deposit required?",
    a: "A deposit secures your place in the schedule, with the balance due before the finished work ships. Exact terms are shared with your quote.",
  },
  {
    q: "Are original works available to buy?",
    a: "Some originals are available from time to time. Ask about a specific piece and I'll let you know whether it's still in the studio.",
  },
];
