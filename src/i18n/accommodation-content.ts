import type { Locale } from "./config";

export type StaySpace = {
  title: string;
  body: string;
};

export type AccommodationPageContent = {
  hero: {
    title: string;
    intro: string;
    imageAlt: string;
  };
  theHouse: {
    title: string;
    paragraphs: [string, string];
    featuresLabel: string;
    features: string[];
    imageAlt: string;
  };
  spaces: {
    eyebrow: string;
    title: string;
    items: [StaySpace, StaySpace, StaySpace, StaySpace];
  };
  outdoors: {
    title: string;
    lead: string;
    body: string;
    featuresLabel: string;
    features: string[];
    imageAlt: string;
  };
  included: {
    eyebrow: string;
    title: string;
    items: string[];
  };
  houseRules: {
    eyebrow: string;
    title: string;
    items: string[];
  };
  closing: {
    eyebrow: string;
    title: string;
    body: string;
  };
  seoFaq: {
    title: string;
    items: { question: string; answer: string }[];
  };
  cta: {
    headline: string;
    intro: string;
    btnLabel: string;
  };
};

const en: AccommodationPageContent = {
  hero: {
    title: "Stars Peak mountain retreat",
    intro:
      "A private mountain retreat for up to four guests, designed for slow mornings, long evenings and life outdoors.",
    imageAlt: "Chalet and terrace with the Velebit ridge behind Stars Peak",
  },
  theHouse: {
    title: "",
    paragraphs: [
      "Built from local wood and surrounded by the landscapes of Velebit, Stars Peak is designed for a slower rhythm of life. Large windows frame the mountains, the fireplace becomes the heart of cooler evenings, and the outdoor kitchen invites you to spend most of the day outside.",
      "Rather than offering luxury through excess, the house focuses on comfort, simplicity and a close connection to nature.",
    ],
    featuresLabel: "In the house",
    features: [
      "Local wood throughout",
      "Large windows to the mountains",
      "Fireplace for cooler evenings",
      "Outdoor kitchen for long days outside",
      "Simple, uncluttered spaces",
      "Private retreat for up to four",
    ],
    imageAlt: "Living room with fireplace and wooden stairs at Stars Peak",
  },
  spaces: {
    eyebrow: "Spaces",
    title: "Room to move, rest and gather.",
    items: [
      {
        title: "Living Room",
        body: "A warm space centred around the fireplace, with comfortable seating and mountain views for quiet evenings indoors.",
      },
      {
        title: "Bedrooms",
        body: "One double bedroom and a loft with two single beds provide comfortable accommodation for up to four guests.",
      },
      {
        title: "Kitchen",
        body: "A fully equipped indoor kitchen for everyday cooking, complemented by an outdoor summer kitchen designed for long meals outside.",
      },
      {
        title: "Bathroom",
        body: "Private bathroom with shower, towels and complimentary essentials.",
      },
    ],
  },
  outdoors: {
    title: "Outdoors",
    lead: "",
    body: "Prepare breakfast on the terrace, light the barbecue in the evening, relax in a hammock beneath the trees or simply enjoy the silence between mountain walks.",
    featuresLabel: "Features include",
    features: [
      "Outdoor kitchen",
      "BBQ",
      "Dining terrace",
      "Hammocks",
      "Outdoor fireplace",
      "Garden",
    ],
    imageAlt: "Breakfast at the outdoor kitchen terrace at Stars Peak",
  },
  included: {
    eyebrow: "Part of every stay",
    title: "The quieter things",
    items: [
      "Mountain breeze",
      "Morning birdsong",
      "Soft first light",
      "Silence between the ridges",
      "Woodsmoke and fireplace glow",
      "Stars over Velebit",
      "Slow terrace mornings",
      "Trails from the doorstep",
      "Time to do nothing",
    ],
  },
  houseRules: {
    eyebrow: "House rules",
    title: "House Rules",
    items: [
      "Quiet hours from 22:00 to 07:00",
      "No smoking indoors — please use the outdoor area",
      "Pets welcome — bowls and basket available",
    ],
  },
  closing: {
    eyebrow: "A slower way to stay",
    title: "A slower way to stay",
    body: "There are no traffic here. No noise. Only changing light, mountain air and enough time to enjoy both the peaks of Velebit and the Adriatic coast in a single day.",
  },
  seoFaq: {
    title: "Frequently asked questions",
    items: [
      {
        question: "How far is Stars Peak from the sea?",
        answer:
          "About a 30-minute drive to the Adriatic coast near Karlobag — mountain mornings and sea afternoons in the same day.",
      },
      {
        question: "Can I hike directly from the cabin?",
        answer:
          "Yes. Several trails start nearby, including routes toward Bačić Kuk and forest paths around Bačić Duliba. GPX files and maps are available on the hiking pages.",
      },
      {
        question: "Is Stars Peak suitable for stargazing?",
        answer:
          "Yes. Low light pollution above Bačić Duliba makes Stars Peak a strong dark-sky base for naked-eye stars and Milky Way nights on clear evenings.",
      },
      {
        question: "Is Stars Peak an off-grid mountain cabin?",
        answer:
          "Yes. Solar power and rainwater systems support a comfortable off-grid stay, with modern essentials including reliable Wi‑Fi for remote work when needed.",
      },
    ],
  },
  cta: {
    headline: "Your stay begins here.",
    intro:
      "Choose your dates and experience life between the mountains and the Adriatic.",
    btnLabel: "Book your stay",
  },
};

export function getAccommodationPageContent(_locale: Locale): AccommodationPageContent {
  return en;
}
