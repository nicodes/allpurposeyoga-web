import type { APIRoute } from 'astro';
import { formattedAddress, site } from '../data/site';
import { markdownResponse } from '../utils/text';

export const GET: APIRoute = () =>
  markdownResponse(`
# All Purpose Yoga

Smaller studio, smaller classes. Feel safe, feel seen.

${site.description}

- Location: ${formattedAddress}
- Email: ${site.email}
- Book classes: ${site.bookingUrl}
- Human site: ${site.url}/

## Practices

${site.practices.map((name) => `- ${name}`).join('\n')}

## Studio notes

${site.amenities.map((name) => `- ${name}`).join('\n')}

## Memberships and class cards

${site.offers.map((offer) => `- ${offer.name}: $${offer.price.replace('.00', '')}`).join('\n')}

Reduced-rate unlimited is for students, first responders, military, seniors, healthcare workers, and teachers.

## More

- [Schedule](${site.url}/schedule.md)
- [Events](${site.url}/events.md)
- [About and teachers](${site.url}/about.md)
- [Connect](${site.url}/connect.md)
- [Agent overview](${site.url}/llms.txt)
`);
