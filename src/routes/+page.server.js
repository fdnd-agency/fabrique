import fetchJson from "../lib/fetch-json"

export async function load(){
    const url = 'https://fdnd-agency.directus.app/items/fabrique_art_objects'
    const response = await fetchJson(url)
    return {
        artObjects: response.data
    };
}

/** @type {import('@sveltejs/adapter-vercel').Config} */export const config = {	runtime: 'edge'}

