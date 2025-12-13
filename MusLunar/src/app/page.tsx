"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function IntroPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col gap-10 px-6 pb-16 pt-14">
      <section className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">Intro</p>
        <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          MusLunar Portfolio
        </h1>
        <p className="max-w-3xl text-lg text-muted-foreground">
          A dual-persona portfolio (Dev + Designer) blending storytelling, 3D, and commerce. Built with Next.js 15 on
          the front, Go + Echo on the back. Start with the curated home experience to pick your role.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <Link href="/home">Enter home</Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link href="/home#contact">Contact us</Link>
          </Button>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        <Card className="border-border/60 bg-card/80">
          <CardHeader className="pb-2">
            <CardTitle>Why two personas?</CardTitle>
            <CardDescription>
              Recruiters and clients see tailored journeys, so every interaction feels personal.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0 text-sm text-muted-foreground">
            Role selector drives copy, projects, and calls-to-action, all fueled by the same codebase.
          </CardContent>
        </Card>
        <Card className="border-border/60 bg-card/80">
          <CardHeader className="pb-2">
            <CardTitle>Stack snapshot</CardTitle>
            <CardDescription>Next.js App Router + shadcn/ui + Tailwind; Go + Echo API.</CardDescription>
          </CardHeader>
          <CardContent className="pt-0 text-sm text-muted-foreground">
            Supabase planned for persistence; CI/CD via Vercel (FE) and Docker on VPS (BE) per architecture plan.
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
