import type { APIRoute } from 'astro';
import { formattedAddress, site } from '../data/site';
import { markdownResponse } from '../utils/text';

export const GET: APIRoute = () =>
  markdownResponse(`
# Connect with All Purpose Yoga

Email is the best way to reach the studio.

- Address: ${formattedAddress}
- Email: ${site.email}
- Book a class: ${site.bookingUrl}
- Instagram: ${site.sameAs[0]}
- Facebook: ${site.sameAs[1]}

## Work-trade

A limited number of work-trade opportunities are available in exchange for yoga. The work-trade team helps keep the studio clean and welcoming.

Email ${site.email} with subject "APY Work-Trade Interest".

## Teach at APY

The studio looks for heart-led teachers who want to create connection and make yoga welcoming. Teaching is treated as a way to contribute and serve, not only a job.

Email ${site.email} with subject "APY Teaching Application".
`);
