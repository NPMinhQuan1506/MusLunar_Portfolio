"use client";

import type React from "react";
import { FormEvent, useState } from "react";
import { ROLES } from "@/lib/constants";
import { ProjectCard } from "@/modules/showcase/components/ProjectCard";
import { useProjects } from "@/modules/showcase/hooks/use-projects";
import { useRoleStore, type Role } from "@/modules/core/roles/roles-store";
import { submitContact } from "@/modules/core/contact/contact-service";

export default function MarketingHome() {
  const role = useRoleStore((s) => s.role);
  const setRole = useRoleStore((s) => s.setRole);
  const { data: projects, loading, error } = useProjects(role, "en");
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
      setContactStatus(err instanceof Error ? err.message : "Failed");
    }
  };

  return (
    <main style={{ padding: "32px", maxWidth: 1200, margin: "0 auto", fontFamily: "Inter, sans-serif" }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <p style={{ color: "#7dd3fc", margin: 0 }}>MusLunar</p>
          <h1 style={{ margin: "4px 0 8px" }}>Role-personalized portfolio starter (Next.js + Go)</h1>
          <p style={{ maxWidth: 640 }}>
            Fast scaffold: Next.js frontend on Vercel + Go backend on VPS (per Architecture.md). Choose a role, see tailored
            projects, and send a contact message.
          </p>
        </div>
        <RoleSelector current={role} onSelect={setRole} />
      </header>

      <section style={{ marginTop: 32 }}>
        <h2>Projects for {role}</h2>
        {loading && <p>Loading projects...</p>}
        {error && <p style={{ color: "#f87171" }}>{error}</p>}
        {!loading && !error && projects.length === 0 && <p>No projects yet.</p>}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>

      <section style={{ marginTop: 32 }}>
        <h2>Contact</h2>
        <form onSubmit={handleSubmit} style={{ display: "grid", gap: 12, maxWidth: 480 }}>
          <input required name="name" placeholder="Your name" style={inputStyle} />
          <input required name="email" type="email" placeholder="Email" style={inputStyle} />
          <textarea required name="message" placeholder="How can we help?" rows={4} style={inputStyle} />
          <button type="submit" style={buttonStyle}>
            Send message
          </button>
          {contactStatus && <p>{contactStatus}</p>}
        </form>
      </section>
    </main>
  );
}

function RoleSelector({ current, onSelect }: { current: Role; onSelect: (role: Role) => void }) {
  return (
    <div style={{ display: "flex", gap: 8 }}>
      {ROLES.map((r) => (
        <button
          key={r}
          onClick={() => onSelect(r)}
          style={{
            ...buttonStyle,
            background: current === r ? "#22d3ee" : "#111827",
            color: current === r ? "#0b0f19" : "#e5e7eb",
            borderColor: "#22d3ee"
          }}
        >
          {r}
        </button>
      ))}
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  padding: "10px 12px",
  borderRadius: 6,
  border: "1px solid #1f2937",
  background: "#0b0f19",
  color: "#e5e7eb"
};

const buttonStyle: React.CSSProperties = {
  padding: "10px 14px",
  borderRadius: 6,
  border: "1px solid #22d3ee",
  background: "#0ea5e9",
  color: "#0b0f19",
  cursor: "pointer"
};
