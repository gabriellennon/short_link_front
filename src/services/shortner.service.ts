import { api } from "./api"
import { TShortNewLink } from "./types";

export function getShortnerUrl(codeUrlId: string) {
    return api.get(`/shortner/${codeUrlId}`);
}

export function shortNewLink(shortObject: TShortNewLink) {
    return api.post("/shortner", shortObject);
}