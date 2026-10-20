import type {addfile, Classes, Announcements} from "./api-road";

const API_BASE = typeof window !== "undefined"
? window.location.origin
: (process.env.API_URL ?? "http://localhost:3000");

async function request<T>(path: string, options?: RequestInit): Promise<T> {
    const response = await fetch (`${API_BASE}/api${path}`,{
        headers: {"Content-Type": "application/json"},
        ...options,
    })
    if (!response.ok) throw new Response("API error", {status: response.status});
    return response.json();
}

export const api = {
    files: {
        getfiles: (id: string) => request<File>(`/Files/${id}`),

        addFiles: (data: addfile) => request<File>(`/Files`,{
            method: "POST", body: JSON.stringify(data),
        }),

        getClasses: (id: string) => request <Classes> (`/Classes/${id}`),

        getAnnouncements: (id: string) => request <Announcements> (`/Announcements/${id}`)
    }
}