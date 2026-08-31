export type Chapter = {
  id: string;
  n: string;
  title: string;
  emotion: string;
};

export const CHAPTERS = [
  {
    id: "opening",
    n: "01",
    title: "Opening",
    emotion: "Curiosity",
  },
  {
    id: "before",
    n: "02",
    title: "The World Before",
    emotion: "Context",
  },
  {
    id: "ecosystem",
    n: "03",
    title: "The Ecosystem",
    emotion: "Understanding",
  },
  {
    id: "turning-point",
    n: "04",
    title: "The Turning Point",
    emotion: "Discovery",
  },
  {
    id: "hypothesis",
    n: "05",
    title: "The Hypothesis",
    emotion: "Decision",
  },
  {
    id: "experience",
    n: "06",
    title: "The experience",
    emotion: "Transformation",
  },
  {
    id: "validation",
    n: "07",
    title: "The Validation",
    emotion: "System",
  },
  {
    id: "outcome",
    n: "08",
    title: "The outcome",
    emotion: "Validation",
  },
] satisfies Chapter[];
