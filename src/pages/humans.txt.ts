import type { APIRoute } from 'astro';
import { formattedAddress, site } from '../data/site';
import { textResponse } from '../utils/text';

export const GET: APIRoute = () =>
  textResponse(
    `
/* TEAM */
Studio: ${site.name}
Location: ${formattedAddress}
Contact: ${site.email}
Site: Nicodes — https://ni.codes

/* SITE */
Standards: HTML5, CSS, JSON-LD, llms.txt
Software: Astro
Booking: Momence
`,
    'text/plain',
  );
