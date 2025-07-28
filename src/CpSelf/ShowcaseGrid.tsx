import React from "react";
import ShowcaseCard from "./ShowcaseCard";

const projects = [
  {
    title: "Fintech Investment UI",
    industry: "Finance",
    image: "/images/fintech.png",
    liveUrl: "https://example.com/fintech-ui",
  },
  {
    title: "Medical Diagnostics Dashboard",
    industry: "Healthcare",
    image: "/images/healthcare.png",
    liveUrl: "https://example.com/med-ui",
  },
  // Add or remove entries easily
];

const ShowcaseGrid = () => (
  <section className="max-w-7xl mx-auto px-6 py-10 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
    {projects.map((item, i) => (
      <ShowcaseCard key={i} {...item} />
    ))}
  </section>
);

export default ShowcaseGrid;
