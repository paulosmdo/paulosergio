import type { Metadata } from "next";

export const metadata: Metadata = { title: "Skills" };

const skills = [
  { nome: "Angular", area: "Front-end" },
  { nome: "Next.js", area: "Full-stack" },
  { nome: "C# .NET", area: "Back-end" },
  { nome: "Java", area: "Back-end" },
];

export default function Skills() {
  return (
    <>
      <h2>Skills</h2>
      <p>Tecnologias com que trabalho no dia a dia.</p>
      <ul className="list">
        {skills.map(({ nome, area }) => (
          <li key={nome}>
            <span>{nome}</span>
            <span className="muted">{area}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
