import { useEffect, useState } from "react";
import { fetchProjects } from "../services/api";
import type { Project } from "../types";

export function useProjects(role: string, locale: string) {
  const [data, setData] = useState<Project[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError("");
    fetchProjects({ role, locale })
      .then((projects) => {
        if (!cancelled) setData(projects);
      })
      .catch((err) => {
        if (!cancelled) setError(err.message || "Failed to load");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
        cancelled = true;
    };
  }, [role, locale]);

  return { data, loading, error };
}
