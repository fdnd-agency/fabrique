// Ik heb eerst de fetchjson helper functie geimporteerd
// Deze gebruik ik om een functie te maken die de data van de api ophaalt
// De fetchJson functie wordt aangeroepen met de url van de api
// De data die terugkomt wordt in een object gestopt en gereturnd
// Dit object bevat de data van de api
import fetchJson from "../lib/fetch-json"

export async function load(){
    const url = 'https://fdnd-agency.directus.app/items/fabrique_art_objects'
    const response = await fetchJson(url)
    return {
        artObjects: response.data
    };
}

/** @type {import('@sveltejs/adapter-vercel').Config} */export const config = {	runtime: 'edge'}

