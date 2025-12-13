import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Project } from "../types";

type Props = {
  project: Project;
};

export function ProjectCard({ project }: Props) {
  return (
    <Card className="h-full border-border/70 bg-card/80 backdrop-blur">
      <CardHeader className="pb-3">
        <p className="text-xs uppercase tracking-wide text-muted-foreground">{project.role_focus}</p>
        <CardTitle className="text-xl">{project.title}</CardTitle>
        <CardDescription>{project.summary}</CardDescription>
      </CardHeader>
      <CardContent className="pt-0 text-xs text-muted-foreground flex items-center justify-between">
        <span className="font-mono text-muted-foreground/80">/{project.slug}</span>
        <span className="text-primary">View detail</span>
      </CardContent>
    </Card>
  );
}
