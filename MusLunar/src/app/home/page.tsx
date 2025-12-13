"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { DEFAULT_LOCALE, ROLES } from "@/lib/constants";
import { useRoleStore, type Role } from "@/modules/core/roles/roles-store";
import { submitContact } from "@/modules/core/contact/contact-service";
import { ProjectCard } from "@/modules/showcase/components/ProjectCard";
import { useProjects } from "@/modules/showcase/hooks/use-projects";
import { FormEvent, useState } from "react";

export default function HomePage() {
  const role = useRoleStore((s) => s.role);
  const setRole = useRoleStore((s) => s.setRole);
  const { data: projects, loading, error } = useProjects(role, DEFAULT_LOCALE);
  const [contactStatus, setContactStatus] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    setContactStatus("Sending...");
    try {
      await submitContact({
        name: String(form.get("name") || ""),
        email: String(form.get("email") || ""),
        role,
        message: String(form.get("message") || ""),
        consent: true
      });
      setContactStatus("Sent!");
      e.currentTarget.reset();
    } catch (err) {
      setContactStatus(err instanceof Error ? err.message : "Failed to send");
    }
  };

  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-16 pt-12">
      <section className="relative overflow-hidden rounded-2xl border border-border/70 bg-gradient-to-br from-background via-background to-background/40 p-8 shadow-lg">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_hsla(222,92%,65%,0.15),transparent_50%)]" />
        <div className="relative flex flex-col gap-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">MusLunar</p>
              <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                Home base for a dual-persona portfolio
              </h1>
              <p className="max-w-3xl text-lg text-muted-foreground">
                Choose a role to see curated work, then connect. Built on Next.js 15 with a Go API so we can
                experiment fast and ship confidently.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <a href="#projects">See projects</a>
                </Button>
                <Button variant="secondary" asChild>
                  <a href="#contact">Book an intro</a>
                </Button>
              </div>
            </div>
            <RoleSelector current={role} onSelect={setRole} />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Card className="border-border/60 bg-card/80">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Frontend</CardTitle>
                <CardDescription>Next.js App Router, Tailwind, shadcn/ui-ready.</CardDescription>
              </CardHeader>
              <CardContent className="pt-0 text-sm text-muted-foreground">
                Edge-ready deploy via Vercel with role-driven UX and state managed by Zustand + React Query.
              </CardContent>
            </Card>
            <Card className="border-border/60 bg-card/80">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Backend</CardTitle>
                <CardDescription>Go + Echo API, clean architecture.</CardDescription>
              </CardHeader>
              <CardContent className="pt-0 text-sm text-muted-foreground">
                Simple adapters today; Postgres + sqlc planned. Deployed to VPS with Docker per architecture doc.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="projects" className="space-y-4">
        <div className="flex flex-col gap-1">
          <p className="text-sm uppercase tracking-wide text-muted-foreground">Showcase</p>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-2xl font-semibold">Projects for {role}</h2>
            <RoleSelector current={role} onSelect={setRole} compact />
          </div>
        </div>
        {loading && <p className="text-muted-foreground">Loading projects...</p>}
        {error && <p className="text-destructive">{error}</p>}
        {!loading && !error && projects.length === 0 && (
          <p className="text-muted-foreground">No projects yet. Content will land after data hookup.</p>
        )}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section id="contact">
        <Card className="border-border/70 bg-card/80">
          <CardHeader>
            <CardTitle>Contact</CardTitle>
            <CardDescription>
              Tell us what you need (role: {role}). We will respond from the Go API once hooked to Supabase.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="grid gap-4 sm:max-w-xl" onSubmit={handleSubmit}>
              <div className="grid gap-2">
                <label className="text-sm text-muted-foreground" htmlFor="name">
                  Name
                </label>
                <Input required name="name" id="name" placeholder="Your name" />
              </div>
              <div className="grid gap-2">
                <label className="text-sm text-muted-foreground" htmlFor="email">
                  Email
                </label>
                <Input required name="email" id="email" type="email" placeholder="you@example.com" />
              </div>
              <div className="grid gap-2">
                <label className="text-sm text-muted-foreground" htmlFor="message">
                  Message
                </label>
                <textarea
                  required
                  name="message"
                  id="message"
                  rows={4}
                  className="min-h-[120px] rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  placeholder="What can we build together?"
                />
              </div>
              <div className="flex items-center gap-3">
                <Button type="submit" className="w-fit">
                  Send message
                </Button>
                {contactStatus && (
                  <span className="text-sm text-muted-foreground" role="status">
                    {contactStatus}
                  </span>
                )}
              </div>
            </form>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}

function RoleSelector({ current, onSelect, compact = false }: { current: Role; onSelect: (role: Role) => void; compact?: boolean }) {
  return (
    <div className={`flex flex-wrap items-center gap-2 ${compact ? "" : "rounded-full border border-border/60 bg-secondary/30 px-2 py-2"}`}>
      {ROLES.map((r) => (
        <Button
          key={r}
          variant={current === r ? "default" : "ghost"}
          size={compact ? "sm" : "md"}
          className={compact ? "" : "capitalize"}
          onClick={() => onSelect(r)}
          type="button"
        >
          {r}
        </Button>
      ))}
    </div>
  );
}
