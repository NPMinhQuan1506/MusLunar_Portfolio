import { apiClient } from "@/lib/axios";
import { DEFAULT_LOCALE } from "@/lib/constants";

type ContactBody = {
  name: string;
  email: string;
  role: string;
  message: string;
  consent: boolean;
};

export async function submitContact(body: ContactBody) {
  const resp = await apiClient.post("/api/v1/contact-messages", {
    ...body,
    locale: DEFAULT_LOCALE
  });
  return resp.data;
}
