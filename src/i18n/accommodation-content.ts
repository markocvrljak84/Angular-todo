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
    imageAlt: "Living room with fireplace and wooden stairs at Stars Peak",
  },
  spaces: {
    eyebrow: "Spaces",
    title: "Room to move, rest and gather.",
    items: [
      {
        title: "Living Room",
        body: "A warm space centred around the fireplace, with comfortable seating, mountain views and access to streaming services for quiet evenings indoors.",
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
    lead: "Most days are spent outside.",
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
    eyebrow: "Included in every stay",
    title: "Included",
    items: [
      "Free parking",
      "Wi-Fi",
      "Fireplace",
      "Netflix & HBO Max",
      "PlayStation 5",
      "Hiking recommendations",
      "Local guidebook",
      "Pet friendly",
    ],
  },
  houseRules: {
    eyebrow: "House rules",
    title: "House Rules",
    items: [
      "Quiet hours from 22:00 to 07:00",
      "No smoking indoors — please use the outdoor area",
      "Pets welcome — bowls and basket available",
      "Please leave the house as you found it",
    ],
  },
  closing: {
    eyebrow: "A slower way to stay",
    title: "A slower way to stay",
    body: "There are no crowds here. No traffic. No noise. Only changing light, mountain air and enough time to enjoy both the peaks of Velebit and the Adriatic coast in a single day.",
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
