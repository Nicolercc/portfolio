import { Divider } from "./Divider";
import { ExperienceCard } from "./ExperienceCard";

const experience = [
  {
    startDate: 2018,
    endDate: "present",
    position: "Software Engineer",
    company: "Expedia",
    otherPositionsAtCompany: ["Engineering Intern"],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        efficitur iaculis enim, vel congue diam mattis in.`,
    technologies: [
      "React",
      "HTML",
      "CSS",
      "TailwindCSS",
      "JavaScript",
      "Jest",
      "Git",
      "Github",
    ],
  },
  {
    startDate: 2018,
    endDate: "present",
    position: "Software Engineer",
    company: "Expedia",
    otherPositionsAtCompany: ["Engineering Intern"],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        efficitur iaculis enim, vel congue diam mattis in.`,
    technologies: [
      "React",
      "HTML",
      "CSS",
      "TailwindCSS",
      "JavaScript",
      "Jest",
      "Git",
      "Github",
    ],
  },
  {
    startDate: 2018,
    endDate: "present",
    position: "Software Engineer",
    company: "Expedia",
    otherPositionsAtCompany: ["Engineering Intern"],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        efficitur iaculis enim, vel congue diam mattis in.`,
    technologies: [
      "React",
      "HTML",
      "CSS",
      "TailwindCSS",
      "JavaScript",
      "Jest",
      "Git",
      "Github",
    ],
  },
];

export function Main() {
  return (
    <div className="pt-24 h-full overflow-scroll">
      <section className="py-5">
        <p className="text-slate-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis
          leo sed ligula fermentum, vitae porttitor massa finibus. Nunc vel
          ipsum sit amet dolor rhoncus tempus. In at faucibus mauris. Donec
          laoreet massa eget dui commodo, sed efficitur urna consectetur. Duis
          quis ex lorem. Proin at nulla diam.
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          efficitur iaculis enim, vel congue diam mattis in. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos.
        </p>
      </section>

      <section className="flex flex-col gap-y-2">
        {experience.map((exp) => (
          <ExperienceCard {...exp} />
        ))}
      </section>
    </div>
  );
}
