import type { APIRoute } from 'astro';
import { formattedAddress, site } from '../data/site';
import { teachers } from '../data/teachers';
import { markdownResponse } from '../utils/text';

export const GET: APIRoute = () => {
  const pageLinks = site.pages
    .map((page) => `- [${page.title}](${site.url}${page.markdown}): ${page.summary}`)
    .join('\n');
  const teacherNames = teachers.map((teacher) => teacher.modalName ?? teacher.name).join(', ');
  const offers = site.offers.map((offer) => `- ${offer.name}: $${offer.price.replace('.00', '')}`).join('\n');

  return markdownResponse(`
# All Purpose Yoga

> Small, locally operated, female-owned yoga studio in Boulder, Colorado. Smaller studio, smaller classes — feel safe, feel seen. No added heat. All levels, all goals, all people.

All Purpose Yoga (APY) is a welcoming neighborhood studio at ${formattedAddress}. Email is the best way to reach the studio: ${site.email}. There is no public phone number. Classes are booked on Momence: ${site.bookingUrl}.

The name is a play on living and practicing with purpose. Membership is called Sangha, Sanskrit for community. The studio is purpose-driven (Seva: selfless service). Proprietor: ${site.founder}.

Practices: ${site.practices.join(', ')}.
Studio notes: ${site.amenities.join('; ')}.

## Pages

${pageLinks}

## Pricing

${offers}

Reduced-rate unlimited membership is for students, first responders, military, seniors, healthcare workers, and teachers. Class cards expire in 3, 6, and 12 months.

## Optional

- [Teacher bios](${site.url}/about.md): ${teacherNames}.
- [Instagram](${site.sameAs[0]})
- [Facebook](${site.sameAs[1]})
`);
};
