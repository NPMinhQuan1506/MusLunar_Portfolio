import type { Project } from "../types";

type Props = {
  project: Project;
};

export function ProjectCard({ project }: Props) {
  return (
    <article style={{ border: "1px solid #1f2937", borderRadius: 8, padding: 16, background: "#111827" }}>
      <p style={{ color: "#9ca3af", margin: 0 }}>{project.role_focus}</p>
      <h3 style={{ margin: "4px 0" }}>{project.title}</h3>
      <p style={{ color: "#cbd5e1" }}>{project.summary}</p>
      <small style={{ color: "#7dd3fc" }}>{project.slug}</small>
    </article>
  );
}
