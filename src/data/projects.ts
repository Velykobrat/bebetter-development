export type Project = {
  number: string;
  title: string;
  description: string;
  type: "Work" | "Lab";
};

export const projects: Project[] = [
  {
    number: "01",
    title: "Photographer Portfolio",
    description:
      "A digital experience built around the work and identity of a professional photographer.",
    type: "Work",
  },
  {
    number: "02",
    title: "DocMind",
    description:
      "An experiment in making large document archives easier to search, understand and work with.",
    type: "Lab",
  },
];