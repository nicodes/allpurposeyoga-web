import type { APIRoute } from 'astro';
import { formattedAddress, site } from '../data/site';
import { teachers } from '../data/teachers';
import { markdownResponse } from '../utils/text';

export const GET: APIRoute = () => {
  const bios = teachers
    .map((teacher) => `### ${teacher.modalName ?? teacher.name}\n\n${teacher.bio}`)
    .join('\n\n');

  return markdownResponse(`
# About All Purpose Yoga

All Purpose Yoga is a small, locally operated, female-owned yoga studio in Boulder, Colorado.

The name is a play on living a purposeful life and practicing yoga with purpose. The studio materialized from versatility, inclusivity, and adaptability for all levels, goals, and people. Classes have no added heat.

Sangha is Sanskrit for community — the people we practice alongside. The membership is named Sangha because yoga is about belonging, not only what happens on the mat.

Seva Yoga is the yoga of selfless service, from Karma Yoga and Bhakti Yoga. All Purpose Yoga is a purpose-driven organization.

Proprietor: ${site.founder}.
Location: ${formattedAddress}.
Email: ${site.email}.

## Teachers

${bios}
`);
};
