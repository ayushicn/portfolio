// Resume content — pulled directly from Ayushi_Chaudhary_SeniorUXR.pdf

export type RoleGroup = {
  heading: string;
  bullets: string[];
};

export type ExperienceEntry = {
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  groups: RoleGroup[];
};

export type EducationEntry = {
  degree: string;
  institution: string;
  location: string;
  year: string;
};

export type ToolGroup = {
  category: string;
  items: string[];
};

export const RESUME = {
  name: 'Ayushi Chaudhary',
  title: 'Senior UX Researcher | Complex Systems',
  location: 'Bengaluru, India',
  email: '135ayushichaudhary@gmail.com',
  phone: '+91 86306 60969',
  linkedin: 'https://www.linkedin.com/in/ayushi-chaudhary-6a0b67118/',

  profile: `Senior UX Researcher experienced in leading strategic, ambiguity-driven research across complex, global SaaS products. I specialize in shaping product direction through foundational, generative, and evaluative research; translating nuanced user insights into clear, high-impact product and roadmap decisions.

I bring extensive experience working across Europe, the US, and APAC, partnering closely with Product, Design, Engineering, and Executive stakeholders to influence high-stakes decisions in regulated, enterprise, and multi-persona environments. At Whatfix, I've owned end-to-end research across 0-to-1 initiatives, platform expansion, and AI-driven innovation, while also scaling research maturity through mentorship, scalable frameworks, and cross-functional enablement.

My training in Design for Interaction at Delft University of Technology emphasized systems thinking, human-centered design, and rigorous research methodologies — an approach that continues to shape how I frame and solve complex product and business problems.`,

  experience: [
    {
      role: 'Senior User Researcher',
      company: 'Whatfix',
      location: 'Bangalore, India',
      startDate: 'May 2022',
      endDate: 'May 2025',
      groups: [
        {
          heading: 'Research ownership in complex, ambiguous problem spaces & driving product decisions',
          bullets: [
            'Owned end-to-end research for multiple 0-to-1 and expansion initiatives, partnering with Product and Design leadership to define problem spaces, prioritize opportunities, and influence roadmap decisions.',
            'Led foundational and generative research to establish Product-Market Fit for Whatfix Mirror (simulation software), directly contributing to a 500% revenue increase.',
            'Led concept validation and usability research for the Whatfix Dashboard, driving UX improvements that increased client adoption from 8 to 700 users, with the entire research-to-decision cycle completed within one month.',
            'Spearheaded exploratory research on AI integration and automation, defining clear user needs, MVP scope, and product vision; aligning stakeholders on execution priorities and enabling faster MVP development and onboarding of the first design partners.',
            'Delivered strategic data-backed research insights that influenced executive decision-making, including halting non-viable product initiatives, preventing long-term resource drain and helping leadership sharpen company-wide focus on higher-impact expansion initiatives.',
            'Owned the research for product expansion opportunities in the productivity domain, directly contributing to the winning idea at the Whatfix Global Hackathon \'23.',
          ],
        },
        {
          heading: 'Cross-functional collaboration & impact',
          bullets: [
            'Partnered deeply with PMs, Designers, Engineers, CSMs, and senior leadership to embed research across the full product lifecycle; reducing misalignment and rework, and enabling faster, research-led roadmap decisions.',
            'Translated complex research findings into clear, actionable narratives for cross-functional teams and executives, accelerating alignment and decision-making across multiple geographies.',
          ],
        },
        {
          heading: 'Scaling research practice & culture',
          bullets: [
            'Led parts of "Every Person is a Researcher" initiative, increasing research activity by 160% and driving a 55% rise in teams actively using research insights.',
            'Mentored and enabled 40+ colleagues through 1:1 coaching and workshops, improving research quality and increasing confident, independent research execution across teams.',
            'Designed, implemented and led Discovery Research framework and Quality Assurance program, improving research rigor across 60% of the design team.',
            'Established the UX Research foundation as the first researcher in Whatfix India, defining best practices and frameworks adopted company-wide; enabling the research function to scale, democratising research practices, and significantly improving the quality and impact of research-supported product initiatives.',
          ],
        },
      ],
    },
    {
      role: 'Design Research Graduate',
      company: 'The Art of Living Foundation',
      location: 'Delft, The Netherlands',
      startDate: 'Mar 2021',
      endDate: 'Nov 2021',
      groups: [
        {
          heading: '',
          bullets: [
            'Owned and executed end-to-end design research, applying qualitative and evaluative methods to understand user needs and inform solution development.',
            'Designed and implemented a user-centered tool to increase Art of Living SKY course enrolment among Dutch young adults.',
          ],
        },
      ],
    },
    {
      role: 'Service Research & Design Intern',
      company: 'KLM Royal Dutch Airlines',
      location: 'Amsterdam, The Netherlands',
      startDate: 'Sep 2019',
      endDate: 'Jan 2020',
      groups: [
        {
          heading: '',
          bullets: [
            'Designed a comprehensive \'board meeting process\' to support decision-making within a complex organizational environment especially involving various executives.',
            'Drove work across all project phases; from research and synthesis to concept development and validation; supporting strategic alignment in a highly regulated aviation context.',
          ],
        },
      ],
    },
  ] as ExperienceEntry[],

  education: [
    {
      degree: 'MSc., Design For Interaction (CGPA: 8.0)',
      institution: 'Delft University of Technology',
      location: 'Delft, The Netherlands',
      year: '09/2018 – 11/2021',
    },
    {
      degree: 'B.Tech., Civil Engineering (CGPA: 8.4)',
      institution: 'Harcourt Butler Technological University',
      location: 'Kanpur, India',
      year: '08/2012 – 06/2016',
    },
  ] as EducationEntry[],

  skills: [
    'Research Strategy & Roadmapping',
    'Mixed-Methods Research',
    'Recruitment & Participant Sampling',
    'Journey Maps',
    'Iterative Prototype Testing',
    'Usability & Concept Validation',
    'Insight Synthesis & Storytelling',
    'Workshop Facilitation',
    'Creative Facilitation',
    'Foundational, Generative & Evaluative Research',
    'Product Discovery',
    'Persona Creation',
    'Contextual Inquiry',
    'Stakeholder Management',
    'Multi-Persona & Buyer User Research',
    'Executive & Cross-Functional Communication',
    'Co-Creation & Enablement',
  ],

  tools: [
    {
      category: 'Research & Synthesis',
      items: ['Condens.io', 'Maze', 'Confluence', 'Userinterviews', 'SurveyMonkey', 'Zoom'],
    },
    {
      category: 'Collaboration & Facilitation',
      items: ['Mural / Miro', 'Figma', 'Canva'],
    },
    {
      category: 'AI-Assisted Research & Data Analysis',
      items: ['Userology', 'Gemini', 'ChatGPT', 'Google AI Studio'],
    },
  ] as ToolGroup[],
} as const;
