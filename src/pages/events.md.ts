import type { APIRoute } from 'astro';
import { formattedAddress, site } from '../data/site';
import { markdownResponse } from '../utils/text';

export const GET: APIRoute = () =>
  markdownResponse(`
# Events

Workshops, sound healing, and special offerings at All Purpose Yoga.

- Human events calendar: ${site.url}/events/
- Book on Momence: ${site.bookingUrl}
- Studio: ${formattedAddress}
- Email: ${site.email}

See also the [weekly class schedule](${site.url}/schedule.md).
`);
