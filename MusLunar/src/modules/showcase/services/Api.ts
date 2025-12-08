import { apiClient } from "@/lib/axios";
import { DEFAULT_LOCALE } from "@/lib/constants";
import type { Project } from "../types";

export async function fetchProjects(params: { role?: string; locale?: string }): Promise<Project[]> {
  const resp = await apiClient.get("/api/v1/projects", {
    params: {
      role: params.role,
      locale: params.locale || DEFAULT_LOCALE
    }
  });
  return resp.data?.data ?? [];
}

export async function fetchProject(slug: string): Promise<Project> {
  const resp = await apiClient.get(`/api/v1/projects/${slug}`);
  return resp.data?.data;
}
