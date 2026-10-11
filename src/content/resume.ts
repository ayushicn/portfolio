// Resume content — pulled directly from Ayushi_Chaudhary_FlowCV_Resume_2026-10-11.pdf

export type RoleGroup = {
  heading: string;
  intro?: string;
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
  title: 'Senior UX Researcher | Enterprise B2B | Mixed-Methods Strategic User Research',
  location: 'Bengaluru, India',
  email: '135ayushichaudhary@gmail.com',
  phone: '+91 86306 60969',
  linkedin: 'https://www.linkedin.com/in/ayushi-chaudhary-6a0b67118/',

  profile: `I run the full research arc in enterprise B2B SaaS; foundational work to decide if something's worth building, concept testing to validate direction, usability testing to validate execution. I've co-built insight repositories, research documentation standards, and reusable frameworks adopted company-wide, and I use AI tools across the research workflow, validating outputs against raw data. Trained in both design and research at TU Delft; I have worked with globally distributed teams across Europe, the US, and APAC, collaborating closely with designers, product managers, and engineers to ensure user insights are integrated into decision-making.`,

  experience: [
    {
      role: 'Senior UX Researcher',
      company: 'OneTrust',
      location: 'Bangalore, India',
      startDate: 'Aug 2026',
      endDate: 'Present',
      groups: [
        {
          heading: '',
          bullets: [
            'Dedicated researcher for OneTrust\u2019s flagship Consent, Privacy, and Risk products, partnering with globally distributed Product and Design teams.',
            'Within the first weeks, coordinated with global teams across Consent, Privacy, and Risk to deliver an end-to-end study for a major customer event; from study plan through prioritisation and final report; informing key strategic decisions in leadership meetings.',
          ],
        },
      ],
    },
    {
      role: 'Senior User Researcher',
      company: 'Whatfix',
      location: 'Bangalore, India',
      startDate: 'May 2022',
      endDate: 'May 2025',
      groups: [
        {
          heading: 'Owning research, validation & driving product decisions',
          bullets: [
            'Owned end-to-end research for Whatfix Mirror from a standing start with no market signal; defined the research process and translated findings into a strategic narrative that shaped roadmap and design decisions, presented directly to the VP of Product, Engineering, Design Manager, and PM; connecting research craft directly to business goals and success metrics & contributing to a 500% revenue increase.',
            'Delivered no-go recommendations, backed by decision frameworks, directly to the VP of Product and CTO on expansion initiatives; spanning regulated industries like BFSI; halting investments before resources were staffed on these initiatives which hadn\'t found product-market fit.',
            'Pushed back on a brief scoped to usability testing alone for the Whatfix Dashboard; partnered cross-functionally with Design and Engineering to expand research scope beyond usability into concept-level gaps, led a one-month sprint that helped drive adoption from 8 to 700 users.',
            'Spearheaded generative research on AI integration with no PM in place and no one asking me to; defined product use cases independently, built a decision framework that set MVP direction before the product existed, and shared it org-wide as a reusable narrative informing multiple AI initiatives.',
          ],
        },
        {
          heading: 'Building the research & ops function',
          intro: 'Co-built the research and operations function at Whatfix from the ground up; a combination of programs and frameworks (below) that together drove a 160% rise in research activity, a 55% increase in teams actively using research insights, and measured greater team confidence in running research, confirmed through internal surveys.',
          bullets: [
            'Established the UX Research foundation as the first researcher at Whatfix India, setting up research processes and best practices from the ground up, building re-usable templates and frameworks (especially around Discovery Research) adopted company-wide.',
            'Designed and ran the participant sourcing strategy for research studies; building multi-channel pipelines (LinkedIn Sales Navigator, UserInterviews, Customer Forums etc.) and cross-functional partnerships with CSMs and PMs to source qualified participants fast, with no dedicated ops function in place.',
            'Served as the primary researcher voice in vendor partnerships (Userology, Maze), shaping product improvements through structured feedback.',
            'Co-built and scaled; participant panels within UserInterviews\' User Hub, creating a reusable, pre-screened participant pool that cut sourcing time across studies, and Product Board\u2013based insight repository, translating research findings directly into product and business decisions company-wide.',
            'Co-led Every Person is a Researcher, a company-wide program to scale research literacy across Design, Product, and Engineering.',
            'Independently initiated, designed, and led a Quality Assurance program; without being asked to; defining research governance and rigour standards that improved research quality across 60% of the design team.',
            'Mentored 40+ colleagues and led hands-on workshops on research best practices, across Design, Product, and customer-facing teams, building shared research literacy and raising research maturity org-wide.',
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
            'Independently scoped and led design and research project end-to-end; from literature and field research through concept development to a validated prototype; with no existing playbook to follow.',
            'Identified, through early user interviews, that the original brief didn\'t match what the research was surfacing, and made the call to rescope the project direction.',
            'Designed and delivered a user-centered tool to increase Art of Living SKY course enrolment among Dutch young adults, owning the full arc from foundational research through validation.',
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
            'Co-led the research and redesign of a cross-departmental product portfolio prioritization service, working with VP-level sponsorship across all involved departments.',
            'Owned stakeholder research end-to-end; running conversations across departments to surface differing priorities and align a large, highly regulated organization around a shared process.',
            'Scoped and ran rapid research sprints calibrated to a short timeline and significant organizational scale, going deep enough to inform the redesign without over-researching.',
            'Delivered a final service redesign that exceeded stakeholder expectations for its functionality, given the speed at which the organization was understood.',
          ],
        },
      ],
    },
  ] as ExperienceEntry[],

  education: [
    {
      degree: 'MSc., Design For Interaction (HCI) (CGPA: 8.0)',
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
    'Research Strategy',
    'Research Operations (ResearchOps) & User Panel Management',
    'Foundational, Generative & Evaluative Research',
    'Research Roadmapping',
    'Executive Storytelling',
    'Strategic Product Discovery',
    'Decision Frameworks',
    'Qualitative & Quantitative Research',
    'Ethnographic Research',
    'Survey Design',
    'Behavioural Analytics',
    'Contextual Inquiry',
    'In-depth Interviews',
    'Diary Studies',
    'Journey Maps',
    'Remote Moderated & Unmoderated Testing',
    'Research Enablement & Training',
    'Prototype Validation',
    'Stakeholder Management',
    'Usability & Concept Validation',
    'Customer Feedback Loops',
    'Executive & Cross-Functional Collaboration',
    'Workshop Facilitation',
  ],

  tools: [
    {
      category: 'Research & Synthesis',
      items: ['SurveyMonkey', 'Productboard', 'LinkedIn Sales Navigator', 'Condens.io', 'Maze', 'UserInterviews', 'Zoom'],
    },
    {
      category: 'Collaboration & Facilitation',
      items: ['Figma', 'Mural / Miro', 'Atlassian Suite', 'Canva'],
    },
    {
      category: 'AI-Assisted Research & Data Analysis',
      items: ['Userology', 'Glean', 'Microsoft Copilot', 'Gemini', 'ChatGPT', 'Google AI Studio', 'Claude AI ecosystem'],
    },
  ] as ToolGroup[],
} as const;
