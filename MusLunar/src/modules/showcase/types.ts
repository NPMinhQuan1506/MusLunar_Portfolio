export type Project = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  role_focus: string;
  locale: string;
  tags?: string[];
  published_at?: string;
};
