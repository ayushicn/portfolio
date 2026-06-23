// Edit this file to update case study content. Save the file and the site will hot-reload.

export type CaseStudy = {
  id: string;
  title: string;
  year: string;
  description: string;
  tags: string[];
  coverImage: string;       // path under /public/
  pitchUrl: string;         // https://pitch.com/v/... — replace placeholders with real URLs
  featured: boolean;        // shown on home page if true
  comingSoon?: boolean;     // shows 'Coming Soon' badge; card is not clickable
  externalUrl?: string;     // override for non-Pitch external links (e.g. Behance)
  isBehance?: boolean;      // applies special Behance card style
  slug?: string;            // if present, card links to /work/[slug] instead of pitchUrl
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'ai-ux-foundation',
    title: "Establishing the AI UX Foundation: Discovery Research for Whatfix's AI-First Product Line",
    year: 'Ongoing',
    description:
      "Led co-creation and discovery to establish the core UX principles and vision that now govern Whatfix's AI-first product line.",
    tags: ['foundational research', 'AI', 'strategic visioning', 'B2B'],
    coverImage: '/case-studies/assistant-thumbnail.png',
    pitchUrl: 'https://pitch.com/v/establishing-the-ux-foundation-for-ai-assistant-923iqp',
    featured: true,
    slug: 'ai-ux-foundation',
  },
  {
    id: 'clm-dashboard',
    title: 'Reframing a 4-week usability test into a strategic concept study',
    year: '2024',
    description:
      'Identified critical research gaps and pivoted to a hybrid methodology that drove client adoption from 8 to 700+ accounts before GA launch.',
    tags: ['conceptual study', 'usability test', 'product launch'],
    coverImage: '/case-studies/clm-thumbnail.png',
    pitchUrl: 'https://pitch.com/v/a-4-week-strategic-ux-research-for-clm-dashboard-i5rvk4',
    featured: true,
    slug: 'clm-dashboard',
  },
  {
    id: 'whatfix-mirror',
    title: 'From Insights to Impact: Foundational Research behind a $1M ARR Product',
    year: 'Ongoing',
    description:
      'Owned and executed the discovery research validating the product opportunity, aligning cross-functional teams, and translating insights into a clear product direction for Whatfix Mirror.',
    tags: ['0→1 discovery', 'product strategy', 'B2B SaaS', 'foundational'],
    coverImage: '/case-studies/mirror-thumbnail.png',
    // TODO: pitch-url — replace with your Pitch.com deck URL for Whatfix Mirror
    pitchUrl: '#placeholder-pitch-link',
    featured: true,
    comingSoon: true,
  },
  {
    id: 'behance',
    title: 'Earlier Work',
    year: '2019–2023',
    description:
      'Professional and academic case studies from earlier in my career — user research, interaction design, and more.',
    tags: [],
    coverImage: '/case-studies/behance-thumbnail-gradient.png',
    pitchUrl: 'https://www.behance.net/135ayushichaudhary',
    externalUrl: 'https://www.behance.net/135ayushichaudhary',
    featured: true,
  },
];

export const getFeaturedStudies = (): CaseStudy[] =>
  CASE_STUDIES.filter((cs) => cs.featured);

export const getAllStudies = (): CaseStudy[] => CASE_STUDIES;
