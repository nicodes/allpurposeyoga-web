import type { APIRoute } from 'astro';
import { formattedAddress, site } from '../data/site';
import { markdownResponse } from '../utils/text';

export const GET: APIRoute = () =>
  markdownResponse(`
# Class schedule

The live weekly class calendar for All Purpose Yoga is hosted on Momence.

- Human calendar: ${site.url}/schedule/
- Book on Momence: ${site.bookingUrl}
- Studio: ${formattedAddress}
- Email: ${site.email}

Practices include ${site.practices.join(', ')}.

${site.amenities.map((name) => `- ${name}`).join('\n')}

Hours are not published as a static list because they follow the live calendar.

See also [events](${site.url}/events.md).
`);
